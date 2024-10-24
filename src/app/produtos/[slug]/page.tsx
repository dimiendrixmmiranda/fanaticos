'use client';
import Pagina from "@/components/template/Pagina";
import React, { useState, useEffect } from 'react';
import { Galleria } from 'primereact/galleria';
import { useParams } from "next/navigation";
import useObterProdutoSlug from "@/data/hooks/useObterProdutoSlug";
import { FaCartShopping } from "react-icons/fa6";
import { FaTrophy } from "react-icons/fa";
import Favorito from "@/components/favorito/Favorito";
import Link from "next/link";

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
            itemImageSrc: '/camisaPadrao/imagem-1.jpg',
            alt: 'img-1'
        },
        {
            itemImageSrc: '/camisaPadrao/imagem-2.jpg',
            alt: 'img-2'
        },
        {
            itemImageSrc: '/camisaPadrao/imagem-3.jpg',
            alt: 'img-3'
        },
        {
            itemImageSrc: '/camisaPadrao/imagem-4.jpg',
            alt: 'img-4'
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
                <div className="flex flex-col lg:py-4">
                    <div className="text-[--secundaria] flex flex-col gap-1 border-b-2 border-[--secundaria]">
                        <h2 className="uppercase font-black text-2xl leading-6 xl:text-3xl">{produto?.nome}</h2>
                        <p className="text-lg leading-4 font-semibold xl:text-xl">
                            {produto?.descricao}
                        </p>
                        <div className="flex items-center gap-2 sm:flex-row sm:gap-2">
                            <div className="flex">
                                <span className="font-bold">Cores:</span>
                                <span>Preto/Branco</span>
                            </div>
                            <div className="grid grid-cols-2 gap-2">
                                <button className="bg-[--primaria] text-white text-[.6em] px-[2px] py-1 sm:w-full sm:px-1 sm:text-[.8em] md:text-[1em] md:px-3 lg:text-[.8em] xl:text-[1.1em]">Tamanho ideal</button>
                                <button className="bg-[--primaria] text-white text-[.6em] px-[2px] py-1 sm:w-full sm:px-1 sm:text-[.8em] md:text-[1em] md:px-3 lg:text-[.8em] xl:text-[1.1em]">Medidas</button>
                            </div>
                        </div>
                        <div className="flex flex-col gap-2">
                            <p className="xl:text-lg">Escolha seu tamanho</p>
                            <div className="grid grid-cols-4 h-[40px] gap-2">
                                <button className="rounded-lg border border-[--secundaria] font-bold xl:text-xl xl:py-2">P</button>
                                <button className="rounded-lg border border-[--secundaria] font-bold xl:text-xl xl:py-2">M</button>
                                <button className="rounded-lg border border-[--secundaria] font-bold xl:text-xl xl:py-2">G</button>
                                <button className="rounded-lg border border-[--secundaria] font-bold xl:text-xl xl:py-2">GG</button>
                            </div>
                            <div className="flex flex-col mt-1">
                                <h3 className="text-center text-sm font-bold leading-4">Modelo veste:</h3>
                                <p className="text-[.7em] text-center leading-4">Tamanho M | Altura:1,81m | Peso:87Kg | Tórax:108cm | Cintura:85cm | Quadril:104cm</p>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col gap-3 text-[--secundaria] my-3 justify-between md:grid md:grid-cols-2 xl:my-6">
                        <div className="flex flex-col w-full mx-auto md:mx-0">
                            <h2>Personalizar item?</h2>
                            <div className="flex gap-2">
                                <div>
                                    <input type="text" name="nome" id="nome" placeholder="Nome..." className="border border-[--secundaria] w-full rounded-md px-2" />
                                    <p className="text-center text-[.7em]">+R$10,00</p>
                                </div>
                                <div>
                                    <input type="number" name="numero" id="numero" placeholder="Número..." className="border border-[--secundaria] rounded-md w-full px-2" />
                                    <p className="text-center text-[.7em]">+R$10,00</p>
                                </div>
                            </div>
                            <button className="text-white bg-[--secundaria] py-1 mt-1 w-full lg:text-[.8em]">Adicionar Personalização</button>
                        </div>
                        <div className="text-[--secundaria] flex flex-col gap-1 justify-center">
                            <p className="font-semibold text-md leading-4 line-through xl:text-xl">de R$189,90</p>
                            <p className="font-black text-2xl leading-4 md:text-3xl md:leading-6 lg:text-2xl xl:text-4xl">Por R$144,90</p>
                            <p className="font-semibold leading-4 text-sm">Ou R$149,90 em até 3x sem juros</p>
                        </div>
                    </div>
                    <div className="text-white flex gap-3 mb-5">
                        <button className="flex justify-center items-center gap-1 font-black bg-[--secundaria] w-[70%] py-2 text-2xl">Comprar <FaCartShopping /></button>
                        <Favorito estilo="text-black flex-1 rounded-md bg-[--primaria] text-white"></Favorito>
                    </div>
                    {/* TEM QUE SER UM COMPONENTE */}
                    <div className="text-black flex flex-col gap-4 lg:hidden xl:flex xl:flex-row">
                        <form action="" className="flex flex-col">
                            <label htmlFor="cep" className="leading-4">Consulte o prazo de entrega:</label>
                            <input type="text" name="cep" id="cep" className="border border-[--secundaria] rounded-md h-[30px] p-2 mt-1" />
                            <button type="submit" className="bg-[--secundaria] text-white rounded-md font-bold py-1 mt-2">Consultar</button>
                        </form>
                        <div className="w-full flex justify-center items-center gap-3">
                            <h4 className="text-6xl">4.74</h4>
                            <div className="flex flex-col">
                                <div className="flex text-2xl gap-1">
                                    <FaTrophy />
                                    <FaTrophy />
                                    <FaTrophy />
                                    <FaTrophy />
                                    <FaTrophy />
                                </div>
                                <Link href={'/'} className="font-semibold text-center">Ver Avaliações</Link>
                            </div>
                        </div>
                    </div>
                </div>
                {/* TEM QUE SER UM COMPONENTE */}
                <div className="text-black grid grid-cols-2 col-start-1 col-end-3 pb-4 xl:hidden">
                    <div className="w-full flex justify-center items-center gap-3">
                        <h4 className="text-6xl">4.74</h4>
                        <div className="flex flex-col">
                            <div className="flex text-2xl gap-1">
                                <FaTrophy />
                                <FaTrophy />
                                <FaTrophy />
                                <FaTrophy />
                                <FaTrophy />
                            </div>
                            <Link href={'/'} className="font-semibold text-center">Ver Avaliações</Link>
                        </div>
                    </div>
                    <form action="" className="flex flex-col">
                        <label htmlFor="cep" className="leading-4">Consulte o prazo de entrega:</label>
                        <input type="text" name="cep" id="cep" className="border border-[--secundaria] rounded-md h-[30px] p-2 mt-1" />
                        <button type="submit" className="bg-[--secundaria] text-white rounded-md font-bold py-1 mt-2">Consultar</button>
                    </form>
                </div>
                <div className="text-[--secundaria] border-t-2 border-[--secundaria] pt-4 flex flex-col gap-4 mb-4 lg:col-start-1 lg:col-end-3">
                    <h2 className="text-3xl font-black">Descrição</h2>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce faucibus sodales metus sit amet feugiat. Fusce porttitor elit non leo dignissim vestibulum eget ut quam. Vestibulum at turpis pulvinar, interdum sem in, dapibus arcu. Vivamus vitae tempor lectus. Phasellus condimentum faucibus nulla ac luctus. Aliquam augue dolor, dapibus non nisl ornare, consectetur aliquet urna. Donec in aliquam quam. Sed eu lectus sed lectus porttitor tincidunt. Integer convallis pulvinar vestibulum. Integer sapien neque, sodales eget consequat sit amet, aliquet et est. Nunc quis tempus neque, ac lacinia quam. Praesent sollicitudin, augue et tristique gravida, mauris mi volutpat enim, in commodo orci arcu sit amet dui. Maecenas et odio sapien. Curabitur eu vehicula arcu. Ut euismod varius tortor et facilisis. Quisque molestie volutpat nibh sed hendrerit.
                    </p>
                </div>
            </div>
        </Pagina>
    );
}
