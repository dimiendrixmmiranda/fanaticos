// api/stripe/webhook/route.ts
import { NextResponse } from "next/server";
import Stripe from "stripe";
import { getFirestore } from "firebase-admin/firestore";
import { initFirebaseAdmin } from "@/lib/firebaseAdmin";

initFirebaseAdmin();
const db = getFirestore();

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string, {
    apiVersion: "2025-07-30.basil",
});

export async function POST(req: Request) {
    const body = await req.text(); // importante: não usar req.json()
    const sig = req.headers.get("stripe-signature");
    if (!sig) {
        return new NextResponse("Missing stripe-signature header", { status: 400 });
    }

    let event: Stripe.Event;

    try {
        event = stripe.webhooks.constructEvent(
            body,
            sig,
            process.env.STRIPE_WEBHOOK_SECRET!
        );
    } catch (err: unknown) {
        if (err instanceof Error) {
            return new NextResponse(`Webhook Error: ${err.message}`, { status: 400 });
        }
        return new NextResponse("Webhook Error: Unknown error", { status: 400 });
    }

    if (event.type === "product.created" || event.type === "product.updated") {
        const product = event.data.object as Stripe.Product;
        const prices = await stripe.prices.list({ product: product.id });
        const price = prices.data[0];

        await db.collection("products").doc(product.id).set(
            {
                name: product.name,
                description: product.description,
                price: (price?.unit_amount ?? 0) / 100,
                currency: price?.currency ?? "brl",
                stripeId: product.id,
                updatedAt: new Date(),
            },
            { merge: true }
        );
    }

    return new NextResponse("success", { status: 200 });
}