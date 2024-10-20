'use client';
import { listaDeProdutos } from "@/core/constants";
import { Produto } from "@/core/produtos/produto";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Surpresa() {
    const listaDeCamisas = listaDeProdutos.filter(produto => produto.categoria.toLowerCase() == 'camisa')
    const [produtoSorteado, setProdutoSorteado] = useState<Produto | null>()


    function sortearCamisa() {
        const numeroSorteado: number = Math.floor(Math.random() * (listaDeCamisas.length - 1))
        const produtoSorteado = listaDeCamisas[numeroSorteado]
        setProdutoSorteado(produtoSorteado)
        console.log(produtoSorteado)
    }

    function gerarNovamente(){
        setProdutoSorteado(null)
    }

    return (
        <div className="bg-[--secundaria] w-full p-3 max-w-[400px]">
            <div className={`${produtoSorteado == null ? 'flex' : 'hidden'} flex-col h-full`}>
                <h2 className="text-2xl font-bold leading-6 text-center">Está indeciso? Nós resolvemos para você!</h2>
                <p className="text-lg font-medium  leading-6 my-3">
                    Clique em Me surpreenda! e deixe a sorte escolher a camisa perfeita para você. Descubra uma nova paixão ou encontre aquela peça que estava faltando no seu guarda-roupa de torcedor!
                </p>
                <div className="relative w-[170px] h-[190px] mx-auto sm:w-[185px] sm:h-[215px]">
                    <Image src={'/camisa.png'} fill alt="camisa" className="object-cover"></Image>
                </div>
                <div className="flex-1"></div>
                <button className="w-full flex justify-center items-center text-2xl font-bold bg-[--primaria] py-1 mt-2" onClick={() => sortearCamisa()}>Surpreenda-me</button>
            </div>
            <div className={`${produtoSorteado == null ? 'hidden' : 'flex'} flex-col h-full`}>
                <h1 className="text-center uppercase font-bold text-2xl leading-6 mb-3">{produtoSorteado?.nome}</h1>
                <div className="relative w-[170px] h-[190px] mx-auto">
                    <Image src={`/camisa.jpg`} alt={`${produtoSorteado?.nome}`} fill className="object-cover"></Image>
                </div>
                <p className="text-lg leading-5 my-3 max-w-[70%] mx-auto text-center">{produtoSorteado?.descricao}</p>
                <div className="flex flex-col items-start whitespace-nowrap my-auto">
                    <p className="line-through">de R$189,90</p>
                    <p className="text-3xl font-black">por R$149,90</p>
                </div>
                <div className="grid grid-cols-2 gap-3 mt-4">
                    <Link href={'/'} className="bg-green-700 text-xl leading-5 text-center py-2">Me leve até o produto</Link>
                    <button className="bg-red-500 text-xl leading-5 text-center py-2 px-1" onClick={() => gerarNovamente()}>Gerar Novamente</button>
                </div>
            </div>
        </div>
    )
}