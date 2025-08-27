import ProductFirebase from "@/types/ProductFirebase"
import Product from "../product/Product"
import { ProductType } from "@/types/ProductType"

interface ResultadoDaBuscaProps {
    produtosFirebase: ProductFirebase[]
    produtosStripe: ProductType[]
}

export default function ResultadoDaBusca({ produtosFirebase, produtosStripe }: ResultadoDaBuscaProps) {

    return (
        <div className="mt-6">
            <ul className="grid grid-cols-1 gap-4">
                {produtosStripe.map((produtoStripe: ProductType) => {
                    const produtoFirebase = produtosFirebase.find(
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
        </div>
    )
}