'use client'
import useAuth from "@/data/hooks/useAuth"
import { useCardStore } from "@/store"
import { formatarPreco } from "@/utils/FormatarPreco"
import { useRouter } from "next/navigation"

interface CheckoutButtonProps {
    totalPrice: number
}

export default function CheckoutButton({ totalPrice }: CheckoutButtonProps) {
    const usuario = useAuth()
    const useStore = useCardStore()
    const router = useRouter()

    const handleCheckout = async () => {
        if (!usuario.usuario) return router.push("/pages/login?type=login")

        const token = usuario.usuario.token

        // Garante cliente no Stripe vinculado ao UID
        await fetch("/api/stripe/customer", {
            method: "POST",
            headers: { Authorization: `Bearer ${token}` }
        })

        // Envie apenas priceId e quantity
        const res = await fetch("/api/checkout", {
            method: "POST",
            headers: { "Content-Type": "application/json", Authorization: `Bearer ${token}` },
            body: JSON.stringify({ items: useStore.cart.map(i => ({ priceId: i.stripePriceId, quantity: i.quantity })) }),
        })

        const { url } = await res.json()
        window.location.href = url
    };


    return (
        <div className="mt-4 flex flex-col gap-2" style={{textShadow: '1px 1px 2px black'}}>
            <div className="font-bold text-xl flex gap-2 p-2">
                <p>Total:</p>
                <span className="bg-laranja px-2">{formatarPreco(totalPrice)}</span>
            </div>
            <button className="bg-green-600 font-black text-xl p-2 w-full" onClick={handleCheckout} style={{textShadow: '1px 1px 2px black'}}>
                Finalizar Compra
            </button>
        </div>
    );
}

