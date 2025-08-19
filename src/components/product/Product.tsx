import { ProductType } from "@/types/ProductType"
import ProductImage from "../base/ProductImage"
import { formatarPreco } from "@/utils/FormatarPreco"
import AddCart from "../base/AddCart"
import Link from "next/link"

interface ProductProps {
    produto: ProductType
}

export default function Product({ produto }: ProductProps) {
    return (
        <Link href={`/product/${produto.id}`}>
            <li className="bg-red-400 overflow-hidden flex flex-col">
                <div>
                    {produto.name}
                </div>
                <ProductImage product={produto} />
                <div className="line-clamp-3">
                    {produto.description}
                </div>
                <p>{formatarPreco(produto.price)}</p>
            </li>
            <AddCart produto={produto} />
        </Link>
    )
}