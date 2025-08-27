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
        <>
            <div
                className={`items-center justify-center justify-self-center relative cursor-pointer w-20 h-12 ${mobile ? 'flex bg-laranja justify-center p-2 rounded-lg' : 'hidden lg:flex'}`}
                onClick={() => useFavotites.toggleBtnFavorite()}
            >
                <FaHeart />
                <span className={`absolute text-[.5em] rounded-full w-[14px] h-[14px] bg-azul flex justify-center items-center ${mobile ? 'top-2 right-4': 'top-0 right-2 xl:right-4'}`}>{useFavotites.favorites.length || 0}</span>
            </div>
            {
                useFavotites.isOpen && (
                    <FavoriteDrawer mobile={mobile} />
                )
            }
        </>
    )
}