"use client";
import Card from "@/components/card/Card";
import Filtro from "@/components/filtro/Filtro";
import Pagina from "@/components/template/Pagina";
import { listaDeProdutos } from "@/core/constants";
import { listaDeFiltros } from "@/core/constants/listaDeFiltros";
import { Produto } from "@/core/produtos/produto";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function Page() {
    const params = useParams();
    const slug = typeof params.slug === "string" ? params.slug : params.slug?.[0];
    const [produtos, setProdutos] = useState<Produto[]>([]);
    const [listaFiltros, setListaFiltros] = useState(listaDeFiltros);

    // Filtrando os produtos apenas quando o componente é montado ou o slug muda
    useEffect(() => {
        const lista = listaDeProdutos.filter((produto) => produto.esporte === slug);
        setProdutos(lista);
    }, [slug]);

    return (
        <Pagina>
            <div className="max-w-[95%] mx-auto flex flex-col my-4 gap-5 md:flex-row justify-between">
                <div className="h-full w-full md:max-w-[35%] lg:max-w-[30%]">
                    <Filtro listaDeFiltros={listaFiltros} setListaFiltros={setListaFiltros} tituloPesquisa={slug} />
                </div>
                <div className="flex flex-col gap-3 flex-1">
                    <h2 className="text-black text-xl leading-5 xl:text-2xl">
                        Resultados encontrados para <strong className="font-black">{`"${slug}"`}</strong>
                    </h2>
                    {produtos.length > 0 ? (
                        <ul className="flex flex-wrap gap-2">
                            {produtos.map((produto) => (
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
                            Nenhum produto encontrado para {slug}
                        </p>
                    )}
                </div>
            </div>
        </Pagina>
    );
}
