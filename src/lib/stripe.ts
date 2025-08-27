import Stripe from "stripe"
import { ProductType } from "@/types/ProductType"

export const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string, {
    apiVersion: "2025-07-30.basil",
})

export async function getProducts(): Promise<ProductType[]> {
    const products = await stripe.products.list({ expand: ["data.default_price"] })

    return products.data.map((product) => {
        const priceObj = product.default_price as Stripe.Price | null

        return {
            id: product.id,
            name: product.name,
            price: priceObj?.unit_amount ? priceObj.unit_amount / 100 : null,
            quantity: 1,
            image: product.images[0] || "",
            description: product.description || null,
            currency: priceObj?.currency,
            stripePriceId: priceObj?.id || "",
        }
    })
}
