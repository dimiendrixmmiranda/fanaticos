'use client'

import { useCardStore } from "@/store"
import { FaShoppingCart } from "react-icons/fa"
import CartDrawer from "../base/CartDrawer"

export default function Cart() {
    const useStore = useCardStore()
    console.log(useStore)

    return (
        <div className="hidden lg:flex">
            <div
                className="flex items-center justify-center relative cursor-pointer w-10"
                onClick={() => useStore.toggleCart()}
            >
                <FaShoppingCart />
                <span className="absolute top-0 right-0 text-[.5em] rounded-full w-[14px] h-[14px] bg-azul flex justify-center items-center">{useStore.cart.length || 0}</span>
            </div>
            {
                useStore.isOpen && (
                    <CartDrawer />
                )
            }
        </div>
    )
}