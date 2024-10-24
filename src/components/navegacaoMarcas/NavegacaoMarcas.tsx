'use client'
import { Navigation, Autoplay, EffectCoverflow } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import Link from 'next/link';
import Image from 'next/image';
import { listaDeMarcas } from '@/core/constants/listaDeMarcas';
import { useEffect, useState } from 'react';
import { createSlugWithId } from '@/utils/createSlug';

export default function NavegacaoMarcas() {
    const [qtdeSlide, setQtdeSlide] = useState(2);

    useEffect(() => {
        function renderHeight() {
            if (window.innerWidth < 425) {
                setQtdeSlide(2);
            } else if (window.innerWidth < 768) {
                setQtdeSlide(2);
            } else if (window.innerWidth < 1024) {
                setQtdeSlide(4);
            } else if (window.innerWidth < 1440) {
                setQtdeSlide(5);
            } else {
                setQtdeSlide(6);
            }
        }

        renderHeight();

        window.addEventListener('resize', renderHeight);

        return () => {
            window.removeEventListener('resize', renderHeight);
        };
    }, []);
    return (
        <div className='my-7 max-w-[95%] mx-auto'>
            <h2 className='font-black text-xl uppercase w-full flex justify-center items-center bg-[--secundaria] py-2 mb-4'>Navegue por marcas</h2>
            <Swiper
                slidesPerView={qtdeSlide}
                spaceBetween={10}
                loop={true}
                pagination={{
                    clickable: true,
                }}
                autoplay={{
                    delay: 6000,
                    disableOnInteraction: false
                }}
                navigation={true}
                modules={[Navigation, Autoplay, EffectCoverflow]}
                className="marcas"
            >
                {
                    listaDeMarcas.map((marca, index) => {
                        return (
                            <div key={index} className='flex justify-center items-center'>
                                <SwiperSlide>
                                    <Link href={`/marca/${createSlugWithId(marca.nome)}`} className='flex justify-center items-center h-full'>
                                        <Image src={`${marca.imagem}`} alt='adidas' width={100} height={50}></Image>
                                    </Link>
                                </SwiperSlide>
                            </div>
                        )
                    })
                }
            </Swiper>
        </div>
    );
};