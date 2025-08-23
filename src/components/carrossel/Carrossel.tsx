// 'use client'

// import { useMemo } from 'react'
// import { Swiper, SwiperSlide } from 'swiper/react'
// import { Navigation, Pagination, Autoplay, A11y } from 'swiper/modules'

// import 'swiper/css'
// import 'swiper/css/navigation'
// import 'swiper/css/pagination'
// import 'swiper/css/autoplay'

// export default function Carrossel() {
//     // Lista de itens de exemplo (pode trocar por dados reais)
//     const itens = useMemo(
//         () => [
//             {
//                 id: '1',
//                 titulo: 'Camisa Barcelona',
//                 img: 'https://picsum.photos/seed/barca/800/600',
//                 preco: 'R$ 199,90',
//             },
//             {
//                 id: '2',
//                 titulo: 'Camisa Lakers',
//                 img: 'https://picsum.photos/seed/lakers/800/600',
//                 preco: 'R$ 179,90',
//             },
//             {
//                 id: '3',
//                 titulo: 'Camisa 49ers',
//                 img: 'https://picsum.photos/seed/49ers/800/600',
//                 preco: 'R$ 189,90',
//             },
//             {
//                 id: '4',
//                 titulo: 'Camisa F1 Team',
//                 img: 'https://picsum.photos/seed/f1/800/600',
//                 preco: 'R$ 209,90',
//             },
//             {
//                 id: '5',
//                 titulo: 'Camisa E-sports',
//                 img: 'https://picsum.photos/seed/esports/800/600',
//                 preco: 'R$ 159,90',
//             },
//         ],
//         []
//     )

//     return (
//         <div className="w-full max-w-6xl mx-auto p-4">
//             <div className="flex items-center justify-between mb-4">
//                 <h2 className="text-2xl font-bold">Ofertas em destaque</h2>
//                 <div className="text-sm opacity-70">Swipe / clique nas setas</div>
//             </div>

//             <Swiper
//                 modules={[Navigation, Pagination, Autoplay, A11y]}
//                 spaceBetween={16}
//                 slidesPerView={1}
//                 // Responsividade: 1 slide até 765px, 3 slides acima disso
//                 breakpoints={{
//                     766: { slidesPerView: 3 },
//                 }}
//                 navigation
//                 pagination={{ clickable: true }}
//                 autoplay={{ delay: 3000, disableOnInteraction: false }}
//                 loop
//                 a11y={{ enabled: true }}
//                 className="!pb-10"
//             >
//                 {itens.map((item) => (
//                     <SwiperSlide key={item.id}>
//                         <article className="relative group overflow-hidden rounded-2xl shadow-md bg-white">
//                             <img
//                                 src={item.img}
//                                 alt={item.titulo}
//                                 className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
//                                 loading="lazy"
//                             />
//                             <div className="p-4">
//                                 <h3 className="font-semibold text-lg line-clamp-1">{item.titulo}</h3>
//                                 <p className="mt-1 text-sm opacity-80">{item.preco}</p>
//                                 <button className="mt-3 px-4 py-2 rounded-2xl bg-black text-white font-medium hover:opacity-90">
//                                     Comprar
//                                 </button>
//                             </div>
//                         </article>
//                     </SwiperSlide>
//                 ))}
//             </Swiper>
//         </div>
//     )
// }
