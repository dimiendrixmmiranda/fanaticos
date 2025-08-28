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
    const desconto = 0

    function definirCorDeFundo(desconto?: number) {
        if (!desconto) return "bg-zinc-100"
        if (desconto >= 70) return "bg-red-700"
        if (desconto >= 40) return "bg-yellow-400"
        if (desconto >= 10) return "bg-green-700"
        return "bg-zinc-100"
    }

    return (
        <li className={`${definirCorDeFundo(desconto)} overflow-hidden flex flex-col p-2 rounded-lg gap-2 max-w-[280px] h-full text-black border-2 border-black justify-self-center sm:p-3 sm:max-w-[320px] lg:max-w-[350px]`}>
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