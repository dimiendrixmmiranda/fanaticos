'use client'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Autoplay, A11y } from 'swiper/modules'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/autoplay'
import Image from 'next/image'
import ProductFirebase from '@/types/ProductFirebase'

interface CarrosselCardProduct {
    produtoFirebase: ProductFirebase // vai ter que ser o productFirebase
}

export default function CarrosselCardProduct({ produtoFirebase }: CarrosselCardProduct) {
    return (
        <div className="w-full max-w-6xl mx-auto p-2 carrosselCardProduct">
            <Swiper
                modules={[Navigation, Pagination, Autoplay, A11y]}
                spaceBetween={16}
                slidesPerView={1}
                navigation
                pagination={{ clickable: true }}
                autoplay={{ delay: 3000, disableOnInteraction: false }}
                loop
                a11y={{ enabled: true }}
                className='w-full h-[260px] bg-zinc-400 lg:h-[300px]'
            >
                {
                    Array.isArray(produtoFirebase.images) && produtoFirebase.images.length > 0 &&
                    produtoFirebase.images.map((img, i) => (
                        <SwiperSlide key={i}>
                            <Image alt="image" src={img} fill className="object-cover" />
                        </SwiperSlide>
                    ))
                }

            </Swiper>
        </div>
    )
}
