'use client'

import { useFavoritesStore } from "@/storeFavorite"
import { formatarPreco } from "@/utils/FormatarPreco"
import Image from "next/image"
import { TiDelete } from "react-icons/ti"


interface FavoriteDrawerProps {
    mobile: boolean
}

export default function FavoriteDrawer({ mobile }: FavoriteDrawerProps) {
    const useFavoritos = useFavoritesStore()

    return (
        <div
            className="fixed z-20 w-full h-screen bg-black/45 left-0 top-0"
            onClick={() => useFavoritos.toggleBtnFavorite()}
        >
            <div
                onClick={(e) => e.stopPropagation()}
                className={`absolute bg-magenta top-0 w-[90%] h-screen p-6 overflow-y-scroll md:w-2/3 lg:w-1/3 xl:w-1/4 ${mobile ? 'left-0' : 'right-0'}`}
            >
                <div className="flex justify-between">
                    <button className="font-bold text-sm" onClick={() => useFavoritos.toggleBtnFavorite()}>Voltar para loja</button>
                    <button className="font-bold text-xl" onClick={() => useFavoritos.toggleBtnFavorite()}>
                        <TiDelete />
                    </button>
                </div>
                <div className="border-t border-gray-400 mt-2 mb-4"></div>

                {
                    useFavoritos.favorites.length <= 0 && useFavoritos != null ? (
                        <h2 className="uppercase font-bold text-2xl text-center leading-7">Nenhum produto Adicionado ao Carrinho</h2>
                    ) : (
                        <ul className="flex flex-col gap-2">
                            {
                                useFavoritos.favorites.map(item => {
                                    console.log(item)
                                    return (
                                        <li key={item.id} className="flex gap-2 border-b border-slate-400 p-2">
                                            <Image alt={item.name} src={item.image} width={100} height={100} className="rounded-md object-cover w-24" />
                                            <div>
                                                <h2 className="w-42 truncate">{item.name}</h2>
                                                <h2 className="w-42 truncate">Quantidade: {item.quantity}</h2>
                                                <p className="uppercase font-black">{formatarPreco(item.price)}</p>
                                                <div className="flex items-center gap-2">
                                                    <button
                                                        className="p-1 border rounded-md text-sm"
                                                        onClick={() => useFavoritos.removeFavorite(item)}
                                                    >
                                                        Remover
                                                    </button>
                                                </div>
                                            </div>
                                        </li>
                                    )
                                })
                            }
                        </ul>
                    )
                }
            </div>
        </div>
    )
}