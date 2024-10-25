'use client'
import Card from "@/components/card/Card";
import Filtro from "@/components/filtro/Filtro";
import Pagina from "@/components/template/Pagina";
import { listaDeProdutos } from "@/core/constants";
import { listaDeFiltros } from "@/core/constants/listaDeFiltros";
import { useParams } from "next/navigation";
import { useState } from "react";

export default function Page() {
    const params = useParams()
    const slug = typeof params.slug === 'string' ? params.slug : params.slug?.[0]
    const [listaFiltros, setListaFiltros] = useState(listaDeFiltros)
    const produtosFiltrados = listaDeProdutos.filter(produto => produto.marca.toLowerCase() === slug.toLowerCase())

    return (
        <Pagina>
            <div className="max-w-[95%] mx-auto flex flex-col my-4 gap-5 md:flex-row justify-between">
                <div className="h-full w-full md:max-w-[35%] lg:max-w-[30%]">
                    <Filtro listaDeFiltros={listaFiltros} setListaFiltros={setListaFiltros} tituloPesquisa={slug} />
                </div>
                <div className="flex flex-col gap-3 flex-1">
                    {produtosFiltrados.length > 0 ? (
                        <div className="flex flex-col gap-4">
                            <h2 className="text-black uppercase font-black leading-5 text-xl ">Principais produtos da marca {slug.toUpperCase()}</h2>
                            <ul className="flex flex-wrap gap-2 mx-auto justify-center md:gap-4 md:justify-start">
                                {produtosFiltrados.map((produto) => {
                                    return (
                                        <Card estilo="max-w-[145px] p-2 overflow-hidden flex flex-col border border-[--secundaria] text-black md:max-w-[200px] md:mx-auto lg:max-w-[220px] lg:p-3" estiloImg="h-[140px] md:h-[180px] lg:h-[210px]" produto={produto} key={produto.id}></Card>
                                    )
                                })}
                            </ul>
                        </div>
                    ) : (
                        <p className="text-black uppercase text-2xl text-center font-bold leading-6">Nenhum produto encontrado para {slug}</p>
                    )}
                </div>
            </div>
        </Pagina>
    )
}