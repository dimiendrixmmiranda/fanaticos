export type ProductType = {
  id: string
  name: string
  price: number | null
  quantity?: number // padrão 1 no uso
  image: string
  description: string | null
  currency?: string
}
