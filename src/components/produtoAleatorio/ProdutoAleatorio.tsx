'use client'
import { db } from "@/lib/firebase"
import ProductFirebase from "@/types/ProductFirebase"
import { collection, getDocs } from "firebase/firestore"
import Link from "next/link"
import { useEffect, useState } from "react"
import { FaRepeat } from "react-icons/fa6"

export default function ProdutoAleatorio() {
    const [visible, setVisible] = useState(false)
    const [produtoSorteado, setProdutoSorteado] = useState<ProductFirebase | null>(null)
    function handleProduto(visualizarProdutoEscolhido: boolean = false) {
        if (visualizarProdutoEscolhido) {
            setVisible(true)
            const produto = sortearProduto()
            setProdutoSorteado(produto)
            console.log(produtoSorteado)
        } else {
            setVisible(false)
        }
    }

    const [produtos, setProdutos] = useState<ProductFirebase[]>([])
    useEffect(() => {
        async function fetchProdutos() {
            try {
                const snapshot = await getDocs(collection(db, "products"))
                const fetchedProducts = snapshot.docs.map(
                    doc => ({ id: doc.id, ...doc.data() } as ProductFirebase)
                )
                setProdutos(fetchedProducts)
            } catch (error) {
                console.error("Erro ao buscar produtos: ", error)
            }
        }
        fetchProdutos()
    }, [])

    function sortearProduto() {
        if (produtos.length === 0) return null
        const indiceSorteado = Math.floor(Math.random() * produtos.length)
        return produtos[indiceSorteado]
    }

    useEffect(() => {
        if (produtoSorteado) {
            console.log("Novo produto sorteado:", produtoSorteado)
        }
    }, [produtoSorteado])

    return (
        <div className="p-4 lg:h-[525px]">
            <div className={`p-2 bg-azul-escuro flex-col gap-2 ${visible ? 'hidden' : 'flex'} h-full`}>
                <h2>Surpreenda-me!</h2>
                <p>Está em dúvida de qual produto levar para casa?????</p>
                <span>Deixe que a sorte decida por voce!!!</span>
                <span>Clique no botão sortear e descubra seu próximo produto predileto!</span>
                <div className="w-48 h-72 bg-zinc-400 mx-auto"></div>
                <button
                    className="bg-laranja uppercase font-bold text-2xl w-full p-1"
                    style={{ textShadow: '1px 1px 2px black' }}
                    onClick={() => handleProduto(true)}
                >
                    Sortear!
                </button>
            </div>
            <div className={`relative p-2 bg-azul-escuro flex flex-col gap-2 ${visible ? 'flex' : 'hidden'} h-full`}>
                <div className="grid grid-cols-[1fr_30px]">
                    <h2 className="uppercase font-black text-2xl leading-6 text-center">Olha o que a sorte trouxe pra você!!!</h2>
                    <button
                        className="absolute top-2 right-2 bg-laranja p-2 rounded-lg text-sm"
                        onClick={() => handleProduto()}
                    >
                        <FaRepeat />
                    </button>
                </div>
                <div className="w-48 h-72 bg-zinc-400 mx-auto">
                    <h2>{produtoSorteado?.name}</h2>
                </div>
                {
                    produtoSorteado ? (
                        <Link href={`/product/${produtoSorteado?.stripeId}`} className="uppercase font-bold bg-laranja p-1">Me leve Até o produto!</Link>
                    ): ('') 
                }
            </div>
        </div>
    )
}