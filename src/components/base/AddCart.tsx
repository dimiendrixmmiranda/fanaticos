'use client'

import { useCardStore } from "@/store"
import { ProductType } from "@/types/ProductType"


interface AddCartProps {
    produto: ProductType
}

export default function AddCart({ produto }: AddCartProps) {
    const useStore = useCardStore()
    return (
        <button
        onClick={() => useStore.addProduct(produto)}
            className="bg-blue-600"
        >
            Adicionar ao carrinho
        </button>
    )
}