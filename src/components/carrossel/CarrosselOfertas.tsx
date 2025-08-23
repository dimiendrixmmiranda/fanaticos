'use client'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Autoplay, A11y } from 'swiper/modules'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/autoplay'
import Image from 'next/image'

export default function CarrosselOfertas() {
    return (
        <div className="w-full">
            <Swiper
                modules={[Navigation, Pagination, Autoplay, A11y]}
                spaceBetween={16}
                slidesPerView={1}
                navigation
                pagination={{ clickable: true }}
                autoplay={{ delay: 3000, disableOnInteraction: false }}
                loop
                a11y={{ enabled: true }}
                className='w-full h-[260px] bg-zinc-400 sm:h-[300px] md:h-[450px] lg:h-[550px]'
            >
                <SwiperSlide>
                    <Image alt='image' src={'/default/wireframe.png'} fill className='object-cover'/>
                </SwiperSlide>
                <SwiperSlide>
                    <Image alt='image' src={'/default/wireframe.png'} fill className='object-cover'/>
                </SwiperSlide>
                <SwiperSlide>
                    <Image alt='image' src={'/default/wireframe.png'} fill className='object-cover'/>
                </SwiperSlide>
            </Swiper>
        </div>
    )
}
