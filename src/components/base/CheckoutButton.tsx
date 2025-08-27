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
        <div>
            <p className="text-green-500 font-bold text-xl">
                Total: {formatarPreco(totalPrice)}
            </p>
            <button className="bg-teal-600 font-black text-xl p-2" onClick={handleCheckout}>
                Finalizar Compra
            </button>
        </div>
    );
}

