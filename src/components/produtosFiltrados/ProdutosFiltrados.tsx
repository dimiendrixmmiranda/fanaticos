import ProductFirebase from "@/types/ProductFirebase"
import { useEffect, useState } from "react"
import { collection, getDocs } from "firebase/firestore"
import { db } from "@/lib/firebase"
import Product from "../product/Product"

interface ProdutosFiltradosProps {
    filtros: { marca: string, preco: string, esporte: string }
}

export default function ProdutosFiltrados({ filtros }: ProdutosFiltradosProps) {
    const [produtos, setProdutos] = useState<ProductFirebase[]>([])
    const [isLoading, setIsLoading] = useState(true) // Novo estado para controle de carregamento

    // useEffect(() => {
    //     async function fetchProdutos() {
    //         const snapshot = await getDocs(collection(db, "products"))
    //         setProdutos(
    //             snapshot.docs.map(
    //                 doc => ({ id: doc.id, ...doc.data() } as ProductFirebase)
    //             )
    //         )
    //     }
    //     fetchProdutos()
    // }, [])


    useEffect(() => {
        async function fetchProdutos() {
            try {
                const snapshot = await getDocs(collection(db, "products"))
                const fetchedProducts = snapshot.docs.map(
                    doc => ({ id: doc.id, ...doc.data() } as ProductFirebase)
                )
                setProdutos(fetchedProducts)
                setIsLoading(false) // Define o estado como falso quando o carregamento terminar
            } catch (error) {
                console.error("Erro ao buscar produtos: ", error)
                setIsLoading(false) // Também define como falso em caso de erro
            }
        }
        fetchProdutos()
    }, [])

    if (isLoading) {
        return <p>Carregando produtos...</p>
    }

    // Aplica os filtros e a ordenação
    let filtrados = [...produtos]
    console.log(filtrados) //aqui tem os produtos 

    if (filtros.marca !== "todas-as-marcas") {
        filtrados = filtrados.filter((p) => p.marca === filtros.marca)
    }

    if (filtros.esporte !== "todos-os-esportes") {
        filtrados = filtrados.filter((p) => p.category === filtros.esporte)
    }

    if (filtros.preco === "maior") {
        filtrados.sort((a, b) => b.price - a.price)
    } else if (filtros.preco === "menor") {
        filtrados.sort((a, b) => a.price - b.price)
    }

    console.log(filtrados) // aqui esta vazio

    return (
        <ul className="grid grid-cols-1 col-start-2 col-end-4 gap-4 md:grid-cols-2 xl:grid-cols-3 3xl:grid-cols-4">
            {/* Gambiarra */}
            {
                filtrados.length <= 0 ? (
                    produtos.map((produto) => {
                        return (
                            <Product key={produto.id} produtoFirebase={produto} />
                        )
                    })) : (
                    filtrados.map((produto) => {
                        return (
                            <Product key={produto.id} produtoFirebase={produto} />
                        )
                    })
                )
            }
        </ul>
    )
}
