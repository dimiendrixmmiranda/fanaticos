'use client'

import { useFavoritesStore } from "@/storeFavorite"
import { ProductType } from "@/types/ProductType"
import { FaShoppingCart } from "react-icons/fa"


interface addFavoritosProps {
    produto: ProductType
}

export default function AddFavoritos({ produto }: addFavoritosProps) {
    const useFavotites = useFavoritesStore()
    return (
        <button
            onClick={() => useFavotites.toggleFavorite(produto)}
            className="bg-blue-600 flex items-center justify-center gap-1 uppercase font-bold py-2"
        >
            <FaShoppingCart />
            <p className="hidden md:flex">Favoritos</p>
        </button>
    )
}