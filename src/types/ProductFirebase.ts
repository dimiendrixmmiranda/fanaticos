export default interface ProductFirebase {
    id: string
    stripeId: string
    name: string
    description: string
    images: string | string[]
    price: number
    currency: string
    category: string
    updatedAt: {
        seconds: number
        nanoseconds: number
    }
}