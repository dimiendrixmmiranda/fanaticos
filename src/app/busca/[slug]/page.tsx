'use client';

import { useState, useEffect } from "react";
import Pagina from "@/components/template/Pagina";
import { useParams } from "next/navigation";
import { listaDeProdutos } from "@/core/constants";
import { Produto } from "@/core/produtos/produto";
import Card from "@/components/card/Card";

export default function Page() {
    const params = useParams();
    const slug = typeof params.slug === 'string' ? params.slug : params.slug?.[0];
    
    const [produtosFiltrados, setProdutosFiltrados] = useState<Produto[] | []>([]);

    useEffect(() => {
        if (slug) {
            // Transformar o slug de volta em uma palavra para comparar com nome ou descrição
            const termoDeBusca = slug.toLowerCase().replace(/-/g, ' ');

            // Filtrar os produtos que contenham o termo de busca no nome ou na descrição
            const produtosCorrespondentes: Produto[] = listaDeProdutos.filter(produto =>
                produto.nome.toLowerCase().includes(termoDeBusca) ||
                produto.descricao.toLowerCase().includes(termoDeBusca) ||
                produto.marca.toLowerCase().includes(termoDeBusca)
            );

            setProdutosFiltrados(produtosCorrespondentes);
        }
    }, [slug]);

    console.log(produtosFiltrados)
    console.log(slug)

    return (
        <Pagina>
            <div className="max-w-[95%] mx-auto flex flex-col my-4 gap-3 xl:max-w-[70%] xl:my-6">
                <h2 className="text-black text-xl leading-5 xl:text-2xl">Resultados encontrados para <strong className="font-black">{slug}</strong></h2>
                {produtosFiltrados.length > 0 ? (
                    <ul className="flex flex-wrap gap-2 mx-auto justify-center md:gap-4 md:justify-start">
                        {produtosFiltrados.map((produto) => {
                            return (
                                <Card estilo="max-w-[145px] p-2 overflow-hidden flex flex-col border border-[--secundaria] text-black md:max-w-[200px] md:mx-auto lg:max-w-[220px] lg:p-3" estiloImg="h-[140px] md:h-[180px] lg:h-[210px]" produto={produto} key={produto.id}></Card>
                            )
                        })}
                    </ul>
                ) : (
                    <p className="text-black uppercase text-2xl text-center font-bold leading-6">Nenhum produto encontrado para "{slug}"</p>
                )}
            </div>
        </Pagina>
    );
}
