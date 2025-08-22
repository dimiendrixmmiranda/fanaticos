'use client'

import { useFavoritesStore } from "@/storeFavorite"
import { FaHeart } from "react-icons/fa"
import FavoriteDrawer from "../base/FavoriteDrawer"

interface CartProps {
    mobile: boolean
}

export default function Favoritos({ mobile }: CartProps) {
    const useFavotites = useFavoritesStore()
    return (
        <div className={mobile ? 'flex bg-laranja justify-center p-2 rounded-lg' : 'hidden lg:flex'}>
            <div
                className="flex items-center justify-center relative cursor-pointer w-10"
                onClick={() => useFavotites.toggleBtnFavorite()}
            >
                <FaHeart />
                <span className="absolute top-0 right-0 text-[.5em] rounded-full w-[14px] h-[14px] bg-azul flex justify-center items-center">{useFavotites.favorites.length || 0}</span>
            </div>
            {
                useFavotites.isOpen && (
                    <FavoriteDrawer mobile={mobile} />
                )
            }
        </div>
    )
}