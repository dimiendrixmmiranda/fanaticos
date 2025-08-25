'use client'
import useAuth from "@/data/hooks/useAuth"
// import { useCardStore } from "@/store"
import { formatarPreco } from "@/utils/FormatarPreco"
import { useRouter } from "next/navigation"

interface CheckoutButtonProps {
    totalPrice: number
}

export default function CheckoutButton({ totalPrice }: CheckoutButtonProps) {
    // const useStore = useCardStore()
    const usuario = useAuth()
    const router = useRouter()
    
    console.log(usuario)

    const handleCheckout = () => {
        if (usuario.usuario) {
            console.log("Usuário Logado")
            console.log("Página de Checkout")
            console.log(usuario.usuario)
        } else {
            console.log("Indo para login")
            router.push("/pages/login?type=login")
        }
    }

    return (
        <div>
            <p className="text-green-500 font-bold text-xl">
                Total: {formatarPreco(totalPrice)}
            </p>
            <button
                className="bg-teal-600 font-black text-xl p-2"
                onClick={handleCheckout}
            >
                Finalizar Compra
            </button>
        </div>
    )
}
