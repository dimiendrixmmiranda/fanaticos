'use client'
import { useCardStore } from "@/store"
import { ProductType } from "@/types/ProductType"
import { FaShoppingCart } from "react-icons/fa"


interface AddCartProps {
    produto: ProductType
    textoBotao: boolean
}

export default function AddCart({ produto, textoBotao }: AddCartProps) {
    const useStore = useCardStore()

    return (
        <button
            onClick={() => {
                useStore.addProduct(produto)
                useStore.toggleCart()
            }}
            className="bg-azul-escuro uppercase font-black py-2 flex items-center gap-1 justify-center rounded-lg"
        >
            {
                textoBotao ? (
                    <p className="flex items-center gap-1">Adicionar ao Carrinho  <FaShoppingCart /></p>
                ) : (
                    <FaShoppingCart />
                )
            }
        </button>
    )
}