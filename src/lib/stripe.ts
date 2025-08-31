import Stripe from "stripe"
import { ProductType } from "@/types/ProductType"

export const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string, {
    apiVersion: "2025-07-30.basil",
})

export async function getProducts(): Promise<ProductType[]> {

    const products = await stripe.products.list({
        active: true, // só pega produtos ativos, ignora os arquivados
        expand: ["data.default_price"],
        limit: 100,
    })

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


// Função para buscar produto por ID
export async function getProductById(stripeId: string): Promise<ProductType | null> {
    try {
        const product = await stripe.products.retrieve(stripeId, {
            expand: ["default_price"]
        })
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
    } catch (error) {
        console.error("Erro ao buscar produto Stripe:", error)
        return null
    }
}