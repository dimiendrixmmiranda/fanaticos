"use client"
import { useState } from "react"

export default function AddProduct() {
    const [name, setName] = useState("")
    const [description, setDescription] = useState("")
    const [marca, setMarca] = useState("")
    const [idProduct, setIdProduct] = useState("")
    const [price, setPrice] = useState<string>("") // MUDANÇA: estado agora é string
    const [category, setCategory] = useState<string>('')
    const [images, setImages] = useState<string[]>([])
    const [genero, setGenero] = useState<string>('')
    const [categoriaProduto, setCategoriaProduto] = useState<string>('')

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        const parsedPrice = parseFloat(price.replace(",", "."))
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
                category: category,
                marca: marca,
                genero: genero,
                categoriaProduto: categoriaProduto,
                idProduct: idProduct
            }),
        })

        const data = await res.json()
        console.log("Produto criado:", data)
    }

    return (
        <form onSubmit={handleSubmit} className="flex flex-col text-black gap-4 bg-zinc-700">
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
                placeholder="idProduct (nome do produto para busca)"
                value={idProduct}
                onChange={(e) => setIdProduct(e.target.value)}
            />
            <select name="marca" id="marca" value={marca} onChange={(e) => setMarca(e.target.value)}>
                <option value="">Selecione</option>
                <option value="nike">Nike</option>
                <option value="adidas">Adidas</option>
                <option value="new-balance">New Balance</option>
                <option value="puma">Puma</option>
                <option value="umbro">Umbro</option>
                <option value="under-armour">Under Armour</option>
                <option value="kappa">Kappa</option>
                <option value="outros">outros</option>
            </select>
            <select name="genero" id="genero" value={genero} onChange={(e) => setGenero(e.target.value)}>
                <option value="">Selecione</option>
                <option value="masculino">Masculino</option>
                <option value="feminino">Feminino</option>
                <option value="infantil">Infantil</option>
                <option value="unissex">Unissex</option>
                <option value="todos">Todos</option>
            </select>
            <select name="categoriaProduto" id="categoriaProduto" value={categoriaProduto} onChange={(e) => setCategoriaProduto(e.target.value)}>
                <option value="">Selecione</option>
                <option value="camisas">Camisas</option>
                <option value="calçados">Calçados</option>
                <option value="moletons/jaquetas">Moletons/Jaquetas</option>
                <option value="bones">Bonés</option>
                <option value="acessorios">Acessórios</option>
                <option value="todos">Todos</option>
            </select>
            <input
                type="text"
                placeholder="Descrição"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
            />
            <select name="category" id="category" value={category} onChange={(e) => setCategory(e.target.value)}>
                <option value="">Selecione</option>
                <option value="futebol">Futebol</option>
                <option value="nba">NBA</option>
                <option value="nfl">NFL</option>
                <option value="e-sports">E-sports</option>
                <option value="f1">F1</option>
            </select>
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