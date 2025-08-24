'use client'
import React, { useState } from 'react';
import ProductFirebase from '@/types/ProductFirebase';
import Image from 'next/image';

interface GaleriaProps {
    produtoFirebase?: ProductFirebase
}

export default function Galeria({ produtoFirebase }: GaleriaProps) {
    const [imagemPrincipal, setImagemPrincipal] = useState<string | undefined>(
        produtoFirebase?.images && produtoFirebase.images.length > 0
            ? produtoFirebase.images[0]
            : undefined
    );

    const selecionarImagem = (img: string) => {
        setImagemPrincipal(img);
    }

    return (
        <div className='flex'>
            <div className='flex flex-col-reverse h-[380px] w-full gap-2 bg-zinc-800 md:flex-row'>
                {/* Miniaturas */}
                <ul className='flex h-[80px] w-full p-2 gap-2 md:w-[80px] md:flex-col md:h-full '>
                    {produtoFirebase?.images && Array.isArray(produtoFirebase.images) && produtoFirebase.images.map((img, i) => (
                        <li
                            key={i}
                            className={`relative cursor-pointer w-[60px] h-[60px] border-2 ${img === imagemPrincipal ? 'border-blue-500' : 'border-transparent'}`}
                            onClick={() => selecionarImagem(img)}
                        >
                            <Image
                                alt='thumbnail'
                                src={img}
                                fill
                                className={`object-contain ${img == imagemPrincipal ? 'opacity-40' : ''}`}
                            />
                        </li>
                    ))}
                </ul>

                {/* Imagem principal */}
                {imagemPrincipal && (
                    <div className='w-full h-full relative'>
                        <Image
                            alt='principal'
                            src={imagemPrincipal}
                            fill
                            className='object-cover'
                        />
                    </div>
                )}
            </div>
        </div>
    )
}
