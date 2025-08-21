import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string, {
    apiVersion: "2025-07-30.basil",
});

export async function POST(req: NextRequest) {
    const body = await req.json();

    try {
        const product = await stripe.products.create({
            name: body.name,
            description: body.description,
            images: body.images,
            metadata: { category: body.category || "camisa" },
        });

        const price = await stripe.prices.create({
            product: product.id,
            unit_amount: Math.round(body.price * 100),
            currency: "brl",
        });

        // Cria um objeto "limpo" para enviar pro frontend
        const responseData = {
            id: product.id,
            name: product.name,
            description: product.description,
            images: product.images,
            category: product.metadata.category,
            price: price.unit_amount ? price.unit_amount / 100 : 0,
            priceId: price.id,
        };

        return NextResponse.json(responseData);
    } catch (err: unknown) {
        if (err instanceof Error) {
            return new NextResponse(`Webhook Error: ${err.message}`, { status: 400 });
        }
        return new NextResponse("Webhook Error: Unknown error", { status: 400 });
    }
}