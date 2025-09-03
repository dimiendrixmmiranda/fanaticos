'use client'

import { useCardStore } from "@/store"
import { FaShoppingCart } from "react-icons/fa"
import CartDrawer from "../base/CartDrawer"

interface CartProps {
    mobile: boolean
}

export default function Cart({ mobile }: CartProps) {
    const useStore = useCardStore()
    return (
        <>
            <div
                className={`items-center justify-center justify-self-center relative cursor-pointer w-20 h-12 rounded-md ${mobile ? 'flex bg-azul-escuro justify-center rounded-lg' : 'hidden lg:flex'}`}
                onClick={() => useStore.toggleCart()}
            >
                <FaShoppingCart />
                <span className={`absolute text-[.5em] rounded-full w-[14px] h-[14px] bg-azul flex justify-center items-center ${mobile ? 'top-2 right-4': 'top-0 right-2 xl:right-4'}`}>{useStore.cart.length || 0}</span>
            </div>
            {
                useStore.isOpen && (
                    <CartDrawer mobile={mobile} />
                )
            }
        </>
    )
}