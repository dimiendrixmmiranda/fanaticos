'use client'
import { Navigation, Autoplay, EffectCoverflow } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { listaDeProdutos } from '@/core/constants';
import useCardSlide3d from '@/data/hooks/useCardSlide3d';
import Card from '../card/Card';

export default function Slider3d() {
    const { qtdeSlide } = useCardSlide3d()
    return (
        <div className='mt-5 max-w-[95%] mx-auto'>
            <h2 className='font-black text-2xl uppercase w-full flex justify-center items-center bg-[--secundaria] py-2 mb-4'>Ofertas Especiais!!!</h2>
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
                className="mySwiper"
            >
                {
                    listaDeProdutos.map((produto, index) => {
                        return (
                            <div key={index}>
                                <SwiperSlide className=''>
                                    <Card estilo='w-[190px] min-h-[300px] h-full mx-auto p-2 flex flex-col md:w-[175px] md:h-[315px] lg:min-h-[325px] border border-2 border-[--secundaria] text-black xl:h-[335px]' estiloImg='h-[145px]' produto={produto} key={produto.id}></Card>
                                </SwiperSlide>
                            </div>
                        )
                    })
                }
            </Swiper>
        </div>
    );
};