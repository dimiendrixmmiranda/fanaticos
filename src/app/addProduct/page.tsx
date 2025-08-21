"use client"
import { useState } from "react"

export default function AddProduct() {
    const [name, setName] = useState("")
    const [description, setDescription] = useState("")
    const [price, setPrice] = useState<string>("") // MUDANÇA: estado agora é string
    const [images, setImages] = useState<string[]>([])

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        const parsedPrice = parseFloat(price) // Converte a string para número
        if (isNaN(parsedPrice)) {
            alert("Por favor, insira um preço válido.")
            return
        }

        const res = await fetch("/api/products", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                name,
                description,
                price: parsedPrice,
                images,
                category: "futebol"
            }),
        })

        const data = await res.json()
        console.log("Produto criado:", data)
    }

    return (
        <form onSubmit={handleSubmit} className="flex flex-col text-black gap-4">
            <input
                type="text"
                placeholder="Nome"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
            <input
                type="text" // MUDANÇA: tipo agora é text para aceitar vírgula/ponto
                placeholder="Preço"
                value={price}
                onChange={(e) => setPrice(e.target.value)} // MUDANÇA: atualiza como string
            />
            <input
                type="text"
                placeholder="Descrição"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
            />
            <input
                type="text"
                placeholder="URL da imagem"
                onKeyDown={(e) => {
                    if (e.key === "Enter") {
                        e.preventDefault()
                        setImages([...images, (e.target as HTMLInputElement).value])
                            ; (e.target as HTMLInputElement).value = ""
                    }
                }}
            />
            <ul>
                {images.map((img, i) => (
                    <li key={i}>{img}</li>
                ))}
            </ul>
            <button type="submit" className="bg-red-500">Criar produto</button>
        </form>
    )
}