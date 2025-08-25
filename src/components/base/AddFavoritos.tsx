'use client'

import useAuth from "@/data/hooks/useAuth"
import { useFavoritesStore } from "@/storeFavorite"
import { ProductType } from "@/types/ProductType"
import { useState } from "react"
import { FaHeart, FaHeartBroken } from "react-icons/fa"
import { Dialog } from "primereact/dialog"
import { useRouter } from "next/navigation"

interface addFavoritosProps {
    produto: ProductType
}

export default function AddFavoritos({ produto }: addFavoritosProps) {
    const useFavorites = useFavoritesStore()
    const isFavorite = useFavorites.favorites.some((p) => p.id === produto.id)
    const { usuario } = useAuth()
    const [openDialog, setOpenDialog] = useState(false)
    const router = useRouter()
    
    const handleFavorite = () => {
        if (usuario) {
            useFavorites.toggleFavorite(produto)
            useFavorites.toggleBtnFavorite()
        } else {
            setOpenDialog(true) // abre o dialog
        }
    }

    return (
        <>
            <button
                onClick={handleFavorite}
                className="bg-red-600 text-white flex items-center justify-center gap-1 uppercase font-bold py-2"
            >
                {isFavorite ? <FaHeartBroken /> : <FaHeart />}
            </button>

            <Dialog
                header="Atenção"
                visible={openDialog}
                onHide={() => setOpenDialog(false)}
                className="w-[95%] md:max-w-[350px]"
            >
                <div className="flex flex-col gap-4">
                    <p>Você precisa criar uma conta ou estar logado para favoritar produtos.</p>
                    <div className="grid grid-cols-2 gap-2">
                        <button className="bg-azul-escuro text-white py-2" onClick={() => router.push('/pages/login?type=login')}>Faça o Login!</button>
                        <button className="bg-azul-escuro text-white py-2" onClick={() => router.push('/pages/login?type=create_account')}>Cadastre-se Já!</button>
                    </div>
                </div>
            </Dialog>
        </>
    )
}