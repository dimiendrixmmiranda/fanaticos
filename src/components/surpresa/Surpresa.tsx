'use client';
import { listaDeProdutos } from "@/core/constants";
import { Produto } from "@/core/produtos/produto";
import Image from "next/image";
import { useState } from "react";

export default function Surpresa() {
    const [camisaSorteada, setCamisaSorteada] = useState('/camisa.png')
    const [produtoSorteado, setProdutoSorteado] = useState<Produto | null>(null)

    const listaDeCamisas = listaDeProdutos.filter(produto => produto.categoria.toLowerCase() == 'camisa')
    const numeroSorteado: number = parseInt((Math.random() * listaDeCamisas.length - 1).toFixed(0))
    
    function sortearCamisa() {
        const produtoSorteado = listaDeCamisas[numeroSorteado]
        setCamisaSorteada(produtoSorteado.imagem)
        setProdutoSorteado(produtoSorteado)
    }

    return (
        <div className="bg-[--secundaria] w-full p-2 lg:flex">
            <div className="flex flex-col justify-center items-center md:flex-1 gap-4">
                <h2 className="text-2xl font-black leading-6 text-center">Está indeciso? Nós resolvemos para você!</h2>
                <div className="relative w-[170px] h-[200px] lg:h-[160px] lg:w-[135px]">
                    <Image src={camisaSorteada} alt="camisa" fill className="object-cover"></Image>
                </div>
                {
                    produtoSorteado != null ? (
                        <h2 className="font-black text-xl text-center">{produtoSorteado.nome}</h2>
                    ) : ('')
                }
            </div>
            <div className="flex flex-col gap-3 self-center justify-self-center md:flex-1">
                <h3 className="text-center font-bold text-xl leading-5 md:text-3xl lg:text-xl xl:text-2xl">
                    Confie na sorte! Clique em Surpreenda-me e encontre a camisa que estava faltando!
                </h3>
                <button className="font-black uppercase text-2xl text-center bg-[--primaria] w-full justify-center items-center py-2" onClick={() => sortearCamisa()}>Surpreenda-me!</button>
            </div>
        </div>
    )
}