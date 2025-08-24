'use client'

import { useFavoritesStore } from "@/storeFavorite"
import { ProductType } from "@/types/ProductType"
import { FaHeart, FaHeartBroken } from "react-icons/fa"


interface addFavoritosProps {
    produto: ProductType
}

export default function AddFavoritos({ produto }: addFavoritosProps) {
    const useFavotites = useFavoritesStore()
    const isFavorite = useFavotites.favorites.some((p) => p.id === produto.id)
    return (
        <button
            onClick={() => useFavotites.toggleFavorite(produto)}
            className="bg-red-600 text-white flex items-center justify-center gap-1 uppercase font-bold py-2"
        >
            {
                isFavorite ? (
                    <FaHeartBroken />
                ) : (
                    <FaHeart />
                )
            }
        </button>
    )
}