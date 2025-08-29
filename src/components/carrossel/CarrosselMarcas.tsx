'use client'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Autoplay, A11y } from 'swiper/modules'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/autoplay'
import Image from 'next/image'

export default function CarrosselMarcas() {
    return (
        <div className="w-full max-w-6xl mx-auto marcas">
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
                    <div className='relative w-full h-32 bg-zinc-200 rounded-lg'>
                        <Image alt='imagem' src={'/marcas/nike.png'} fill className='object-contain p-4' />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='relative w-full h-32 bg-zinc-200 rounded-lg'>
                        <Image alt='imagem' src={'/marcas/adidas.png'} fill className='object-contain p-4' />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='relative w-full h-32 bg-zinc-200 rounded-lg'>
                        <Image alt='imagem' src={'/marcas/new-balance.png'} fill className='object-contain p-4' />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='relative w-full h-32 bg-zinc-200 rounded-lg'>
                        <Image alt='imagem' src={'/marcas/puma.png'} fill className='object-contain p-4' />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='relative w-full h-32 bg-zinc-200 rounded-lg'>
                        <Image alt='imagem' src={'/marcas/umbro.png'} fill className='object-contain p-4' />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='relative w-full h-32 bg-zinc-200 rounded-lg'>
                        <Image alt='imagem' src={'/marcas/under-armour.png'} fill className='object-contain p-4' />
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    )
}
