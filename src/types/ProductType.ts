export type ProductType = {
  id: string
  name: string
  price: number | null
  stripePriceId: string
  quantity?: number
  image: string
  description: string | null
  currency?: string
}
