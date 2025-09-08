import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string, {
    apiVersion: "2025-07-30.basil",
})

export async function POST(req: NextRequest) {
    const body = await req.json();

    try {
        // Cria o produto
        const product = await stripe.products.create({
            name: body.name,
            description: body.description,
            images: body.images,
            metadata: {
                category: body.category || "camisa",
                priceDefault: body.price?.toString() || "0",
                idProduct: body.idProduct || "",
                marca: body.marca,
                genero: body.genero,
                categoriaProduto: body.categoriaProduto,
            },
        });

        const price = await stripe.prices.create({
            product: product.id,
            unit_amount: Math.round(parseFloat(body.price) * 100),
            currency: "brl",
        });

        // Atualiza o produto com o preço padrão
        await stripe.products.update(product.id, {
            default_price: price.id,
        });

        // Retorna já com os dados certinhos
        const responseData = {
            id: product.id,
            name: product.name,
            description: product.description,
            images: product.images,
            category: product.metadata.category,
            idProduct: product.metadata.idProduct,
            marca: product.metadata.marca,
            genero: product.metadata.genero,
            categoriaProduto: product.metadata.categoriaProduto,
            price: price.unit_amount ? price.unit_amount / 100 : 0,
            priceId: price.id,
            priceDefault: parseFloat(product.metadata.priceDefault),
        };

        return NextResponse.json(responseData);
    } catch (err: unknown) {
        if (err instanceof Error) {
            return NextResponse.json(
                { error: err.message },
                { status: 400 }
            );
        }
        return NextResponse.json(
            { error: "Unknown error" },
            { status: 400 }
        )
    }
}
