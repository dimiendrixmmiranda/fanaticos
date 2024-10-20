'use client';
import Pagina from "@/components/template/Pagina";
import React, { useState, useEffect } from 'react';
import { Galleria } from 'primereact/galleria';
import { useParams } from "next/navigation";
import useObterProdutoSlug from "@/data/hooks/useObterProdutoSlug";

interface Imagem {
    itemImageSrc: string,
    alt: string
}

export default function Page() {
    const [images, setImages] = useState<Imagem[]>([]);
    const params = useParams();
    const slug = typeof params.slug === 'string' ? params.slug : params.slug?.[0];
    const { produto } = useObterProdutoSlug({ slug });

    const arrayImagens = [
        {
            itemImageSrc: '/camisa.jpg',
            alt: 'Alemanha'
        },
        {
            itemImageSrc: '/camisa.jpg',
            alt: 'Alemanha'
        },
        {
            itemImageSrc: '/camisa.jpg',
            alt: 'Alemanha'
        },
    ];

    useEffect(() => {
        setImages(arrayImagens);
    }, []);

    const itemTemplate = (item: Imagem) => {
        return <img src={item.itemImageSrc} alt={item.alt} style={{ width: '100%', display: 'block' }} />;
    };

    const indicatorTemplate = (index: number) => {
        const item = images[index]; // Busca o item de acordo com o índice
        return (
            <img
                src={item.itemImageSrc}
                alt={item.alt}
                className="miniatura"
            />
        );
    };

    return (
        <Pagina>
            <div className="produtos">
                <div className="card">
                    <Galleria
                        value={images} // Agora images é um array com as imagens de camisas
                        className="galleria"
                        showThumbnails={false} // Não exibe thumbnails, pois estamos usando indicadores customizados
                        showIndicators
                        changeItemOnIndicatorHover
                        showIndicatorsOnItem
                        indicatorsPosition="left"
                        item={itemTemplate} // Item principal que exibe a imagem em tamanho completo
                        indicator={indicatorTemplate} // Indicadores com miniaturas das imagens
                    />
                </div>
                <div className="text-[--secundaria] flex flex-col gap-2 pb-4 border-b-2 border-[--secundaria]">
                    <h2 className="uppercase font-black text-2xl leading-6">{produto?.nome}</h2>
                    <p className="text-lg leading-4 font-semibold">
                        {produto?.descricao}
                    </p>
                    <div className="flex flex-col sm:flex-row sm:gap-2">
                        <strong>Cores:</strong> <span>Preto/Branco</span>
                        <div className="grid grid-cols-2 gap-2">
                            <button className="bg-[--primaria] text-white text-sm py-1 sm:text-[.65em] sm:w-full sm:px-1">Veja seu tamanho ideal</button>
                            <button className="bg-[--primaria] text-white text-sm py-1 sm:text-[.65em] sm:w-full sm:px-1">Tabela de medidas</button>
                        </div>
                    </div>
                    <div>
                        <p>Escolha seu tamanho</p>
                        <div className="grid grid-cols-4 h-[40px] gap-2">
                            <button className="rounded-lg border border-[--secundaria]">P</button>
                            <button className="rounded-lg border border-[--secundaria]">M</button>
                            <button className="rounded-lg border border-[--secundaria]">G</button>
                            <button className="rounded-lg border border-[--secundaria]">GG</button>
                        </div>
                    </div>
                </div>
            </div>
        </Pagina>
    );
}
