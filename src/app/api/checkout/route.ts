// app/api/checkout/route.ts
import { NextRequest, NextResponse } from "next/server";
import { stripe } from "@/lib/stripe";
import { initFirebaseAdmin } from "@/lib/firebaseAdmin";
const { adminAuth, db } = initFirebaseAdmin(); // <- chama a função

async function getOrCreateCustomer(uid: string, email?: string | null, name?: string | null) {
    const userRef = db.collection("users").doc(uid);
    const snap = await userRef.get();
    let stripeCustomerId = snap.exists ? snap.get("stripeCustomerId") : null;

    if (!stripeCustomerId) {
        const customer = await stripe.customers.create({
            email: email ?? undefined,
            name: name ?? undefined,
            metadata: { firebaseUID: uid },
        });
        stripeCustomerId = customer.id;
        await userRef.set({ stripeCustomerId, email: email ?? null, name: name ?? null }, { merge: true });
    }
    return stripeCustomerId as string;
}

export async function POST(req: NextRequest) {
    try {
        const authHeader = req.headers.get("authorization") || "";
        const token = authHeader.startsWith("Bearer ") ? authHeader.slice(7) : null;
        if (!token) return NextResponse.json({ error: "missing token" }, { status: 401 });

        const decoded = await adminAuth.verifyIdToken(token);
        const uid = decoded.uid;
        const userRecord = await adminAuth.getUser(uid);

        // client deve enviar SOMENTE priceId e quantity (ou você resolve produtos no servidor)
        const { items } = await req.json() as { items: { priceId: string; quantity: number }[] };

        const customerId = await getOrCreateCustomer(uid, userRecord.email, userRecord.displayName);

        const session = await stripe.checkout.sessions.create({
            mode: "payment",
            customer: customerId,
            line_items: items.map(i => ({ price: i.priceId, quantity: i.quantity })),
            success_url: `${process.env.NEXT_PUBLIC_URL}/sucesso`,
            cancel_url: `${process.env.NEXT_PUBLIC_URL}/cancelado`,
            metadata: { userId: uid },
        });

        return NextResponse.json({ url: session.url });
    } catch (err: unknown) {
        console.error("Erro no checkout:", err);

        return NextResponse.json(
            { error: "internal_error", message: err instanceof Error ? err.message : String(err) },
            { status: 500 }
        )
    }
}
