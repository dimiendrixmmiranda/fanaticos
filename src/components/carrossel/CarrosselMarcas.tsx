'use client'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Autoplay, A11y } from 'swiper/modules'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/autoplay'
import Image from 'next/image'
import Link from 'next/link'

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
                <SwiperSlide>
                    <Link href={`/buscar/${encodeURIComponent('nike')}`}>
                        <div className='relative w-full h-32 bg-zinc-200 rounded-lg'>
                            <Image alt='imagem' src={'/marcas/nike.png'} fill className='object-contain p-4' />
                        </div>
                    </Link>
                </SwiperSlide>
                <SwiperSlide>
                    <Link href={`/buscar/${encodeURIComponent('adidas')}`}>
                        <div className='relative w-full h-32 bg-zinc-200 rounded-lg'>
                            <Image alt='imagem' src={'/marcas/adidas.png'} fill className='object-contain p-4' />
                        </div>
                    </Link>
                </SwiperSlide>
                <SwiperSlide>
                    <Link href={`/buscar/${encodeURIComponent('new-balance')}`}>
                        <div className='relative w-full h-32 bg-zinc-200 rounded-lg'>
                            <Image alt='imagem' src={'/marcas/new-balance.png'} fill className='object-contain p-4' />
                        </div>
                    </Link>
                </SwiperSlide>
                <SwiperSlide>
                    <Link href={`/buscar/${encodeURIComponent('puma')}`}>
                        <div className='relative w-full h-32 bg-zinc-200 rounded-lg'>
                            <Image alt='imagem' src={'/marcas/puma.png'} fill className='object-contain p-4' />
                        </div>
                    </Link>
                </SwiperSlide>
                <SwiperSlide>
                    <Link href={`/buscar/${encodeURIComponent('umbro')}`}>
                        <div className='relative w-full h-32 bg-zinc-200 rounded-lg'>
                            <Image alt='imagem' src={'/marcas/umbro.png'} fill className='object-contain p-4' />
                        </div>
                    </Link>
                </SwiperSlide>
                <SwiperSlide>
                    <Link href={`/buscar/${encodeURIComponent('under-armour')}`}>
                        <div className='relative w-full h-32 bg-zinc-200 rounded-lg'>
                            <Image alt='imagem' src={'/marcas/under-armour.png'} fill className='object-contain p-4' />
                        </div>
                    </Link>
                </SwiperSlide>
                <SwiperSlide>
                    <Link href={`/buscar/${encodeURIComponent('kappa')}`}>
                        <div className='relative w-full h-32 bg-zinc-200 rounded-lg'>
                            <Image alt='imagem' src={'/marcas/kappa.png'} fill className='object-contain p-4' />
                        </div>
                    </Link>
                </SwiperSlide>
                <SwiperSlide>
                    <Link href={`/buscar/${encodeURIComponent('outros')}`}>
                        <div className='relative w-full h-32 bg-zinc-200 rounded-lg'>
                            <div className='w-full h-full flex justify-center items-center'>
                                <h2 className='text-black uppercase font-black font-secundaria text-3xl 2xl:text-5xl'>Outros</h2>
                            </div>
                        </div>
                    </Link>
                </SwiperSlide>
            </Swiper>
        </div>
    )
}
