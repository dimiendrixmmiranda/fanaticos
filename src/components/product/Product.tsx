'use client'

import { ProductType } from "@/types/ProductType"
import ProductImage from "../base/ProductImage"
import { formatarPreco } from "@/utils/FormatarPreco"
import AddCart from "../base/AddCart"
import Link from "next/link"
import AddFavoritos from "../base/AddFavoritos"

interface ProductProps {
    produto: ProductType
}

export default function Product({ produto }: ProductProps) {
    return (
        <li className="bg-red-400 overflow-hidden flex flex-col p-2 rounded-lg gap-2 max-w-[400px]">
            <Link href={`/product/${produto.id}`} className="flex flex-col">
                <ProductImage product={produto} />
                <div className="uppercase font-bold text-2xl">
                    {produto.name}
                </div>
                <div className="line-clamp-3">
                    {produto.description}
                </div>
                <p className="text-xl font-black">{formatarPreco(produto.price)}</p>
            </Link>
            <div className="grid grid-cols-2 gap-4">
                <AddCart produto={produto} />
                <AddFavoritos produto={produto} />
            </div>
        </li>
    )
}