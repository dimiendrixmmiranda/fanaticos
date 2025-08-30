import { getProductsFirebase } from "@/lib/getProductsFirebase"
import { getProducts } from "@/lib/stripe"
import ProductFirebase from "@/types/ProductFirebase"
import { ProductType } from "@/types/ProductType"
import Product from "../product/Product"

export default async function ProdutosFiltrados() {
    const productsStripe = await getProducts()
    const productsFirebase: ProductFirebase[] = await getProductsFirebase()
    return (
        <ul className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:col-span-2 xl:grid-cols-3 3xl:grid-cols-4">
            {productsStripe.map((produtoStripe: ProductType) => {
                const produtoFirebase = productsFirebase.find(
                    (p: ProductFirebase) => p.stripeId === produtoStripe.id
                )

                return (
                    <Product
                        key={produtoStripe.id}
                        produtoStripe={produtoStripe}
                        produtoFirebase={produtoFirebase}
                    />
                )
            })}
        </ul>
    )
}