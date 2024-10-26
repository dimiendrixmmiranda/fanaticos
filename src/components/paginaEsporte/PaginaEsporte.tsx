'use client'
import { useState } from "react";
import Filtro from "../filtro/Filtro"
import Pagina from "../template/Pagina"
import { listaDeFiltros } from "@/core/constants/listaDeFiltros";
import { listaDeProdutos } from "@/core/constants";
import Card from "../card/Card";

interface PaginaEsporte{
    esporte: string
}

export default function PaginaEsporte({esporte}: PaginaEsporte){
    const [listaFiltros, setListaFiltros] = useState(listaDeFiltros);

    const lista = listaDeProdutos.filter(produto => produto.esporte === esporte)

    return(
        <Pagina>
            <div className="max-w-[95%] mx-auto flex flex-col my-4 gap-5 md:flex-row justify-between">
                <div className="h-full w-full md:max-w-[35%] lg:max-w-[30%]">
                    <Filtro listaDeFiltros={listaFiltros} setListaFiltros={setListaFiltros} tituloPesquisa={esporte} />
                </div>
                <div className="flex flex-col gap-3 flex-1">
                    <h2 className="text-black text-xl leading-5 xl:text-2xl">
                        Resultados encontrados para <strong className="font-black">{`"${esporte}"`}</strong>
                    </h2>
                    {lista.length > 0 ? (
                        <ul className="flex flex-wrap gap-2">
                            {lista.map((produto) => (
                                <Card
                                    estilo="max-w-[145px] p-2 overflow-hidden flex flex-col border border-[--secundaria] text-black md:max-w-[200px] md:mx-auto lg:p-3 xl:max-w-[215px]"
                                    estiloImg="h-[140px] md:h-[180px] lg:h-[210px]"
                                    produto={produto}
                                    key={produto.id}
                                />
                            ))}
                        </ul>
                    ) : (
                        <p className="text-black uppercase text-2xl text-center font-bold leading-6">
                            Nenhum produto encontrado para {esporte}
                        </p>
                    )}
                </div>
            </div>
        </Pagina>
    )
}