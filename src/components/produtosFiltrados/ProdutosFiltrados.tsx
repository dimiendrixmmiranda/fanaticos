import ProductFirebase from "@/types/ProductFirebase"
import { useEffect, useState } from "react"
import { collection, getDocs } from "firebase/firestore"
import { db } from "@/lib/firebase"
import Product from "../product/Product"
import Filtros from "@/types/Filtros"

interface ProdutosFiltradosProps {
    filtros: Filtros
    first: number
    rows: number
    termo: string
}

export default function ProdutosFiltrados({ filtros, first, rows }: ProdutosFiltradosProps) {
    const [produtos, setProdutos] = useState<ProductFirebase[]>([])
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        async function fetchProdutos() {
            try {
                const snapshot = await getDocs(collection(db, "products"))
                const fetchedProducts = snapshot.docs.map(
                    doc => ({ id: doc.id, ...doc.data() } as ProductFirebase)
                )
                setProdutos(fetchedProducts)
                setIsLoading(false)
            } catch (error) {
                console.error("Erro ao buscar produtos: ", error)
                setIsLoading(false)
            }
        }
        fetchProdutos()
    }, [])

    if (isLoading) {
        return <p>Carregando produtos...</p>
    }

    let filtrados = [...produtos]

    if (filtros.marca == "todas-as-marcas") {
        filtrados = [...produtos]
    } else if (filtros.marca !== "todas-as-marcas") {
        filtrados = filtrados.filter((p) => p.marca === filtros.marca)
    }

    if (filtros.esporte !== "todos") {
        filtrados = filtrados.filter((p) => p.category === filtros.esporte)
    }

    if (filtros.preco === "maior") {
        filtrados.sort((a, b) => b.price - a.price)
    } else if (filtros.preco === "menor") {
        filtrados.sort((a, b) => a.price - b.price)
    }

    // Tem que ser o ultimo
    if (filtros.termo && filtros.termo.trim() !== "") {
        const termoLower = filtros.termo.toLowerCase()
        const marcasConhecidas = ["nike", "adidas", "puma", "umbro", "new-balance", "under-armour", "outros"]

        if (marcasConhecidas.includes(termoLower)) {
            // 👉 filtro apenas pela marca
            filtrados = filtrados.filter((p) => p.marca?.toLowerCase() === termoLower)
        } else {
            // 👉 pesquisa geral (nome, descrição, categoria)
            filtrados = filtrados.filter((p) => {
                const textoProduto = `${p.category} ${p.name} ${p.description}`.toLowerCase()
                return textoProduto.includes(termoLower)
            })
        }
    }

    const paginaFiltrados = filtrados.slice(first, first + rows)

    return (
        <ul className="grid grid-cols-1 col-start-2 col-end-4 gap-4 md:grid-cols-2 xl:grid-cols-3 3xl:grid-cols-4 3xl:col-end-5">
            {
                paginaFiltrados.map((produto) => {
                    return (
                        <Product key={produto.id} produtoFirebase={produto} />
                    )
                })
            }
        </ul>
    )
}
