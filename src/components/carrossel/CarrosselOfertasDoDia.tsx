'use client'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Autoplay, A11y } from 'swiper/modules'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/autoplay'
import { ProductType } from '@/types/ProductType'
import ProductFirebase from '@/types/ProductFirebase'
import Product from '../product/Product'

interface CarrosselOfertasDoDiaProps {
    produtosStripe: ProductType[]
    produtosFirebase: ProductFirebase[]
}

export default function CarrosselOfertasDoDia({ produtosStripe, produtosFirebase }: CarrosselOfertasDoDiaProps) {

    return (
        <div className="w-full mx-auto carrosselOfertasDoDia">
            <Swiper
                modules={[Navigation, Pagination, Autoplay, A11y]}
                spaceBetween={16}
                slidesPerView={1}
                breakpoints={{
                    425: { slidesPerView: 1 },
                    768: { slidesPerView: 2 },
                    1024: { slidesPerView: 3 },
                    1440: { slidesPerView: 4 },
                    1680: { slidesPerView: 5 },
                }}
                navigation
                pagination={{ clickable: true }}
                autoplay={{ delay: 10000, disableOnInteraction: false }}
                loop
                a11y={{ enabled: true }}
                className='max-w-[1700px]'
            >
                {produtosStripe.map((produtoStripe: ProductType) => {
                    const produtoFirebase = produtosFirebase.find(
                        (p: ProductFirebase) => p.stripeId === produtoStripe.id
                    )

                    return (
                        <SwiperSlide key={produtoStripe.id}>
                            <Product
                                key={produtoStripe.id}
                                produtoStripe={produtoStripe}
                                produtoFirebase={produtoFirebase}
                            />
                        </SwiperSlide>
                    )
                })}
            </Swiper>
        </div >
    )
}
