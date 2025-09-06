'use client'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Autoplay, A11y } from 'swiper/modules'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/autoplay'
import Image from 'next/image'
import Link from 'next/link'
import { marcas } from '@/constants/marcas'

export default function CarrosselMarcas() {
    return (
        <div className="w-full mx-auto marcas">
            <Swiper
                modules={[Navigation, Pagination, Autoplay, A11y]}
                spaceBetween={16}
                slidesPerView={1}
                // Responsividade: 1 slide até 765px, 3 slides acima disso
                breakpoints={{
                    425: { slidesPerView: 2 },
                    768: { slidesPerView: 3 },
                    1024: { slidesPerView: 4 },
                }}
                navigation
                pagination={{ clickable: true }}
                autoplay={{ delay: 3000000, disableOnInteraction: false }}
                loop
                a11y={{ enabled: true }}
            >
                {
                    marcas.map(( marca, i) => {
                        return (
                            marca.id === 'outros' ? (
                                <SwiperSlide key={i}>
                                    <Link href={`/buscar/${encodeURIComponent(marca.id)}`}>
                                        <div className='relative w-full h-32 bg-zinc-200 rounded-lg'>
                                            <div className='w-full h-full flex justify-center items-center'>
                                                <h2 className='text-black uppercase font-black font-secundaria text-3xl 2xl:text-5xl'>Outros</h2>
                                            </div>
                                        </div>
                                    </Link>
                                </SwiperSlide>
                            ) : (
                                <SwiperSlide key={i}>
                                    <Link href={`/buscar/${encodeURIComponent(marca.id)}`}>
                                        <div className='relative w-full h-32 bg-zinc-200 rounded-lg'>
                                            <Image alt='imagem' src={marca.imagem} fill className='object-contain p-4' />
                                        </div>
                                    </Link>
                                </SwiperSlide>
                            )
                        )
                    })
                }
            </Swiper>
        </div>
    )
}