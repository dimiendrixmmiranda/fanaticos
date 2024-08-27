'use client';
import { register } from 'swiper/element/bundle';
register();

// Import Swiper core and required modules
import { Swiper, SwiperSlide } from 'swiper/react';
// import required modules
import { Pagination, Navigation, Autoplay } from 'swiper/modules';
import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Slider() {
    const imgs: string[] = [
        'https://static.vecteezy.com/ti/vetor-gratis/t2/9287681-vector-black-tecido-textura-fundo-vetor.jpg',
        'https://imagens.usp.br/wp-content/uploads/Campus-15-Foto-Marcos-Santos20101220_066.jpg',
        'https://static-cse.canva.com/blob/612127/bancodeimagensgratis1.png'
    ];

    const [alturaSlider, setAlturaSlider] = useState(280);

    useEffect(() => {
        function renderHeight() {
            if (window.innerWidth < 425) {
                setAlturaSlider(270);
            } else if (window.innerWidth < 768) {
                setAlturaSlider(350);
            } else if (window.innerWidth < 1024) {
                setAlturaSlider(400);
            } else {
                setAlturaSlider(550);
            }
        }

        renderHeight();

        window.addEventListener('resize', renderHeight);

        return () => {
            window.removeEventListener('resize', renderHeight);
        };
    }, []);

    return (
        <div className={`bg-gray-900`}>
            <Swiper
                slidesPerView={1}
                spaceBetween={30}
                loop={true}
                pagination={{
                    clickable: true,
                }}
                autoplay={{ // Configurando o autoplay
                    delay: 4000,
                    disableOnInteraction: false,
                }}
                navigation={true}
                modules={[Pagination, Navigation]}
                className="mySwiper"
            >
                {imgs.map((img: string, index: number) => (
                    <SwiperSlide key={index}>
                        <Link href={'#'}>
                            <img
                                src={img}
                                alt={`Imagem ${index}`}
                                className='w-full'
                                style={{ height: `${alturaSlider}px`, objectFit: 'cover' }}
                            />
                        </Link>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}
