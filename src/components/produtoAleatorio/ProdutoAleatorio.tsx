'use client'
import { db } from "@/lib/firebase"
import ProductFirebase from "@/types/ProductFirebase"
import { collection, getDocs } from "firebase/firestore"
import Image from "next/image"
import Link from "next/link"
import { useEffect, useState } from "react"
import { FaRepeat } from "react-icons/fa6"
import Product from "../product/Product"

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
        <div className="p-4 lg:h-[700px]">
            <div
                className={`relative p-4 flex-col gap-2 ${visible ? 'hidden' : 'flex'} h-full`}
                style={{ backgroundImage: "url('/textura/azul.jpg')", backgroundSize: "cover", backgroundPosition: "center", textShadow: '1px 1px 2px black' }}
            >
                <h2 className="text-4xl font-terciaria text-center md:text-7xl">Surpreenda-me!</h2>
                <p className="font-secundaria text-xl leading-6 text-center">Está em dúvida de qual produto levar para casa?????</p>
                <span className="font-secundaria text-lg leading-6 text-center">Deixe que a sorte decida por voce!!! Clique no botão sortear e descubra seu próximo produto predileto!</span>
                <div className="relative w-[250px] h-[250px] mx-auto sm:w-[350px] sm:h-[350px] lg:h-[380px] lg:w-[380px]">
                    <Image src={'/default/camisa.png'} alt="Camisa" fill className="object-contain"></Image>
                </div>
                <button
                    className="bg-laranja uppercase font-bold text-2xl w-full p-1 mt-auto"
                    style={{ textShadow: '1px 1px 2px black' }}
                    onClick={() => handleProduto(true)}
                >
                    Sortear!
                </button>
                <div
                    className="absolute top-[210px] right-[40px] w-28 h-28 rotate-[25deg] hidden md:block lg:hidden xl:block"
                    style={{
                        backgroundImage: "url('/vetores/raios.png')",
                        backgroundSize: "cover",
                        backgroundPosition: "center"
                    }}
                />
                <div
                    className="absolute top-[240px] left-[10px] w-28 h-28 rotate-[25deg] hidden md:block lg:hidden xl:block"
                    style={{
                        backgroundImage: "url('/vetores/raios.png')",
                        backgroundSize: "cover",
                        backgroundPosition: "center"
                    }}
                />
                <div
                    className="absolute top-[370px] right-[30px] w-28 h-28 rotate-[25deg] hidden md:block lg:hidden xl:block"
                    style={{
                        backgroundImage: "url('/vetores/raios.png')",
                        backgroundSize: "cover",
                        backgroundPosition: "center"
                    }}
                />
                <div
                    className="absolute top-[390px] left-[40px] w-28 h-28 rotate-[25deg] hidden md:block lg:hidden xl:block"
                    style={{
                        backgroundImage: "url('/vetores/raios.png')",
                        backgroundSize: "cover",
                        backgroundPosition: "center"
                    }}
                />
            </div>
            <div
                className={`relative p-4 flex flex-col justify-between gap-4 ${visible ? 'flex' : 'hidden'} h-full`}
                style={{ backgroundImage: "url('/textura/azul.jpg')", backgroundSize: "cover", backgroundPosition: "center" }}
            >
                <div className="grid grid-cols-[1fr_30px]">
                    <h2 className="uppercase font-black text-2xl leading-6 text-center md:text-3xl 2xl:text-4xl">Olha o que a sorte trouxe pra você!!!</h2>
                    <button
                        className="absolute top-2 right-2 bg-laranja p-2 rounded-lg text-sm"
                        onClick={() => handleProduto()}
                    >
                        <FaRepeat />
                    </button>
                </div>
                {
                    produtoSorteado && <div className="w-[260px] mx-auto">
                        <Product produtoFirebase={produtoSorteado} />
                    </div>
                }
                {
                    produtoSorteado ? (
                        <Link href={`/product/${produtoSorteado?.stripeId}`} className="uppercase font-bold bg-laranja p-1 text-center text-lg sm:text-xl" style={{ textShadow: '1px 1px 2px black' }}>Me leve Até o produto!</Link>
                    ) : ('')
                }
                <div
                    className="absolute top-[210px] right-[40px] w-28 h-28 rotate-[25deg] hidden md:block lg:hidden xl:block"
                    style={{
                        backgroundImage: "url('/vetores/raios.png')",
                        backgroundSize: "cover",
                        backgroundPosition: "center"
                    }}
                />
                <div
                    className="absolute top-[240px] left-[10px] w-28 h-28 rotate-[25deg] hidden md:block lg:hidden xl:block"
                    style={{
                        backgroundImage: "url('/vetores/raios.png')",
                        backgroundSize: "cover",
                        backgroundPosition: "center"
                    }}
                />
                <div
                    className="absolute top-[370px] right-[30px] w-28 h-28 rotate-[25deg] hidden md:block lg:hidden xl:block"
                    style={{
                        backgroundImage: "url('/vetores/raios.png')",
                        backgroundSize: "cover",
                        backgroundPosition: "center"
                    }}
                />
                <div
                    className="absolute top-[390px] left-[40px] w-28 h-28 rotate-[25deg] hidden md:block lg:hidden xl:block"
                    style={{
                        backgroundImage: "url('/vetores/raios.png')",
                        backgroundSize: "cover",
                        backgroundPosition: "center"
                    }}
                />
            </div>
        </div>
    )
}