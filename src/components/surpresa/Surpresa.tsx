'use client';

import Image from "next/image";
import { useState } from "react";
import Card from "../card/Card";
import { listaDeProdutos } from "@/core/constants";
import { TbRefresh } from "react-icons/tb";
import { Produto } from "@/core/produtos/produto";
import Link from "next/link";
import { createSlugWithId } from "@/utils/createSlug";

export default function Surpresa() {
    const [camisaSorteada, setCamisaSorteada] = useState(false)
    const [camisa, setCamisa] = useState<Produto | null>(null)

    function sortearProduto() {
        const listaDeCamisas = listaDeProdutos.filter(produto => produto.categoria === 'camisa')
        const numeroSorteado = Math.round((listaDeCamisas.length - 1) * Math.random())
        setCamisa(listaDeCamisas[numeroSorteado])
        setCamisaSorteada(true)
    }

    function resetSurpresa() {
        setCamisaSorteada(false)
    }

    return (
        <div className="bg-[--secundaria] ">
            <div className={`${camisaSorteada ? 'hidden' : 'flex'} w-full p-2 flex-col gap-3 md:p-4`}>
                <h2 className="text-3xl leading-8 font-bold text-center">Em dúvida sobre qual manto escolher? Deixe que a gente ajuda!</h2>
                <div className="relative w-[190px] h-[220px] self-center">
                    <Image src={'/camisa.png'} alt="Camisa" fill className="object-cover"></Image>
                </div>
                <p className="text-xl leading-6">Clique no botão <strong className="uppercase">{`${'"Sortear!"'}`}</strong> e deixe a sorte decidir seu novo manto.</p>
                <div className="flex-1"></div>
                <button className="uppercase font-black text-2xl bg-[--primaria] py-1" onClick={sortearProduto}>Sortear!</button>
            </div>
            <div className={`${camisaSorteada ? 'flex' : 'hidden'} w-full p-2 flex-col gap-3 md:p-4`}>
                {
                    camisa != null ?
                        <div className="flex flex-col gap-2">
                            <h2 className="text-2xl leading-6 text-center">Seu manto sorteado foi <strong>Camisa Bayer Leverkusen 2023</strong>!</h2>
                            <div className="mx-auto">

                                <Card estilo="max-w-[240px] flex flex-col border border-white p-2" estiloImg="h-[210px]" produto={camisa}></Card>
                            </div>
                            <div className="flex gap-2">
                                <Link className="uppercase font-bold text-[1.05rem] bg-[--primaria] py-1 px-2 flex-1 text-center sm:text-lg" href={`/produtos/${createSlugWithId(camisa?.nome, camisa?.id)}`}>
                                    Me leve Ate o produto!
                                </Link>
                                <button className="uppercase font-bold text-2xl bg-[--primaria] py-1 px-2" onClick={resetSurpresa}><TbRefresh /></button>
                            </div>
                        </div>
                        : null
                }
            </div>
        </div>
    )
}