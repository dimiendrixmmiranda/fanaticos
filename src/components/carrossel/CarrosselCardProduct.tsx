'use client'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, A11y } from 'swiper/modules'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/autoplay'
import ProductFirebase from '@/types/ProductFirebase'

interface CarrosselCardProduct {
    produtoFirebase: ProductFirebase // vai ter que ser o productFirebase
}

export default function CarrosselCardProduct({ produtoFirebase }: CarrosselCardProduct) {
    return (
        <div className="w-full max-w-6xl mx-auto p-2 carrosselCardProduct">
            <Swiper
                modules={[Navigation, Pagination, A11y]}
                spaceBetween={16}
                slidesPerView={1}
                navigation
                pagination={{ clickable: true }}
                a11y={{ enabled: true }}
                className='w-full h-[230px] bg-zinc-400'
            >
                {
                    Array.isArray(produtoFirebase.images) && produtoFirebase.images.length > 0 &&
                    produtoFirebase.images.map((img, i) => (
                        <SwiperSlide key={i}>
                            <div className="relative">
                                <img
                                    src={img}
                                    alt="imagem"
                                    className="w-full h-full object-cover object-center"
                                />
                            </div>
                        </SwiperSlide>
                    ))
                }
            </Swiper>
        </div>
    )
}
