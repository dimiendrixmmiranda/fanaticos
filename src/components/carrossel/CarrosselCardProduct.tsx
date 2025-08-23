'use client'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Autoplay, A11y } from 'swiper/modules'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/autoplay'
import { ProductType } from '@/types/ProductType'
import Image from 'next/image'

interface CarrosselCardProduct {
    productStripe: ProductType // vai ter que ser o productFirebase
}

export default function CarrosselCardProduct({ productStripe }: CarrosselCardProduct) {
    // Lista de itens de exemplo (pode trocar por dados reais)

    return (
        <div className="w-full max-w-6xl mx-auto p-4">
            <Swiper
                modules={[Navigation, Pagination, Autoplay, A11y]}
                spaceBetween={16}
                slidesPerView={1}
                navigation
                pagination={{ clickable: true }}
                autoplay={{ delay: 3000, disableOnInteraction: false }}
                loop
                a11y={{ enabled: true }}
                className='w-full h-[240px] bg-zinc-400'
            >
                {/* Vai iterar em cima do array de imagens */}
                <SwiperSlide>
                    <Image alt='image' src={productStripe.image} fill className='object-cover'></Image>
                </SwiperSlide>
                <SwiperSlide>
                    <Image alt='image' src={productStripe.image} fill className='object-cover'></Image>
                </SwiperSlide>
                <SwiperSlide>
                    <Image alt='image' src={productStripe.image} fill className='object-cover'></Image>
                </SwiperSlide>
            </Swiper>
        </div>
    )
}
