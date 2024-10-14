import Image from "next/image";
import Favorito from "../favorito/Favorito";
import Carrinho from "../carrinho/Carrinho";
import { Produto } from "@/core/produtos/produto";
import Link from "next/link";

interface CardProps {
    produto: Produto
    estilo: string
    estiloImg: string
}

export default function Card({ produto, estilo, estiloImg}: CardProps) {
    return (
        <li key={produto.id} className={`w-[150px] h-[300px] bg-[--secundaria] overflow-hidden rounded-md  p-1 flex flex-col gap-2 ${estilo}`}>
            <Link href={'/'} className="flex-1 h-full flex flex-col gap-1 xl:gap-2">
                <div className={`relative w-full h-[140px] overflow-hidden flex justify-center items-center rounded-md bg-orange-500 ${estiloImg}`} style={{boxShadow: '0 0 2px 0px black'}}>
                    <Image src={'/camisa.jpg'} alt={produto.nome} fill className="object-cover"></Image>
                </div>
                <div className="flex-1 flex flex-col gap-1">
                    <h1 className="font-bold leading-4 text-lg">{produto.nome}</h1>
                    <p className="text-[.6em] leading-3 flex-1">{produto.descricao}</p>
                    <div className="flex flex-col leading-4">
                        <p className="line-through text-[.7em]">de R$189,90</p>
                        <p className="font-bold text-lg leading-4">por R$149,90</p>
                    </div>
                </div>
            </Link>
            <div className="grid grid-cols-2 max-h-[40px] gap-2">
                <Favorito estilo="bg-red-500 rounded-md"></Favorito>
                <Carrinho estilo="bg-green-500 rounded-md"></Carrinho>
            </div>
        </li>
    )
}