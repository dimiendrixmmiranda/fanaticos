'use client'

import { ProductType } from "@/types/ProductType"
import { formatarPreco } from "@/utils/FormatarPreco"
import AddCart from "../base/AddCart"
import Link from "next/link"
import AddFavoritos from "../base/AddFavoritos"
import CarrosselCardProduct from "../carrossel/CarrosselCardProduct"
import ProductFirebase from "@/types/ProductFirebase"

interface ProductProps {
    produtoStripe: ProductType
    produtoFirebase?: ProductFirebase
}

export default function Product({ produtoStripe, produtoFirebase }: ProductProps) {
    return (
        <li className="bg-zinc-100 overflow-hidden flex flex-col p-2 rounded-lg gap-2 max-w-[320px] h-full text-black sm:p-3 lg:max-w-[350px]">
            <Link href={`/product/${produtoStripe.id}`} className="flex flex-col gap-3">
                {
                    produtoFirebase && (
                        <CarrosselCardProduct produtoFirebase={produtoFirebase} />
                    )
                }
                <div>
                    <div className="uppercase font-bold text-2xl line-clamp-2">
                        {produtoStripe.name}
                    </div>
                    <div className="line-clamp-3 leading-5">
                        {produtoStripe.description}
                    </div>
                    <p className="text-xl font-black">{formatarPreco(produtoStripe.price)}</p>
                    <span className="text-sm italic">Ou 4x de R$71,50</span>
                </div>
            </Link>
            <div className="grid grid-cols-2 gap-4 mt-auto">
                <AddCart produto={produtoStripe} />
                <AddFavoritos produto={produtoStripe} />
            </div>
        </li>
    )
}