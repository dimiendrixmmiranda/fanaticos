'use client'

import { useCardStore } from "@/store"
import { formatarPreco } from "@/utils/FormatarPreco"
import Image from "next/image"
import { TiDelete } from "react-icons/ti"
import CheckoutButton from "./CheckoutButton"


interface CartDrawerProps {
    mobile: boolean
}

export default function CartDrawer({ mobile }: CartDrawerProps) {
    const useStore = useCardStore()
    const totalPrice = useStore.cart.reduce((acc, item) => {
        return acc + item.price! * item.quantity!
    }, 0)
    return (
        <div
            className="fixed z-20 w-full h-screen bg-black/45 left-0 top-0"
            onClick={() => useStore.toggleCart()}
        >
            <div
                onClick={(e) => e.stopPropagation()}
                className={`absolute bg-slate-600 top-0 w-[90%] h-screen p-6 overflow-y-scroll md:w-2/3 lg:w-1/3 xl:w-1/4 ${mobile ? 'left-0' : 'right-0'}`}
            >
                <div className="flex justify-between">
                    <button className="font-bold text-sm" onClick={() => useStore.toggleCart()}>Voltar para loja</button>
                    <button className="font-bold text-xl" onClick={() => useStore.toggleCart()}>
                        <TiDelete />
                    </button>
                </div>
                <div className="border-t border-gray-400 mt-2 mb-4"></div>

                {
                    useStore.cart.length <= 0 ? (
                        <h2 className="uppercase font-bold text-2xl text-center leading-7">Nenhum produto Adicionado ao Carrinho</h2>
                    ) : (
                        <ul className="flex flex-col gap-2">
                            {
                                useStore.cart.map(item => {
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
                                                        onClick={() => useStore.addProduct(item)}
                                                    >
                                                        Adicionar
                                                    </button>
                                                    <button
                                                        className="p-1 border rounded-md text-sm"
                                                        onClick={() => useStore.removeProduct(item)}
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

                {
                    useStore.cart.length > 0 && (
                        <CheckoutButton totalPrice={totalPrice} />
                    )
                }
            </div>
        </div>
    )
}