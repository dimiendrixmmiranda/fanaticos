'use client'
import { useCardStore } from "@/store"
import { ProductType } from "@/types/ProductType"
import { FaShoppingCart } from "react-icons/fa"


interface AddCartProps {
    produto: ProductType
}

export default function AddCart({ produto }: AddCartProps) {
    const useStore = useCardStore()

    return (
        <button
            onClick={() => {
                useStore.addProduct(produto)
                useStore.toggleCart()
            }}
            className="bg-green-600 text-white flex items-center justify-center gap-1 uppercase font-bold py-2"
        >
            <FaShoppingCart />
        </button>
    )
}