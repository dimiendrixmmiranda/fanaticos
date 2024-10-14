'use client'
//  import Swiper core and required modules
import { Navigation, Pagination, Autoplay} from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import useTamanhoSlider from '@/data/hooks/useTamanhoSlider';
import { listaDeBanners } from '@/core/constants';
import Image from 'next/image';
import Link from 'next/link';

export default function Slider() {
    const { alturaSlider } = useTamanhoSlider()
    return (
        <div className=''>
            <Swiper
                slidesPerView={1}
                spaceBetween={30}
                loop={true}
                pagination={{
                    clickable: true,
                }}
                autoplay={{
                    delay: 6000,
                    disableOnInteraction: false
                }}
                navigation={true}
                modules={[Pagination, Navigation, Autoplay]}
                className="mySwiper"
                style={{ height: `${alturaSlider}px` }}
            >
                {
                    listaDeBanners.map((banner, index) => {
                        return (
                            <div key={index}>
                                <SwiperSlide className='h-full bg-orange-400 relative'>
                                    <Link href={banner.link}>
                                        <Image src={banner.imagem} alt={banner.texto} fill className='object-cover'></Image>
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