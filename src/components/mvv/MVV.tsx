'use client'
import Image from "next/image";
import { IoIosInformationCircle } from "react-icons/io";
import React, { useState } from "react";
import { Dialog } from 'primereact/dialog';

// Missão Visão e Valores
export default function MVV() {
    const [visible, setVisible] = useState(false);
    const [dialogContent, setDialogContent] = useState<string>("");

    // Função que abre o dialog com o texto específico
    const openDialog = (message: string) => {
        setDialogContent(message);
        setVisible(true);
    };

    return (
        <div className="max-w-[1200px] mx-auto flex flex-col gap-[85px] mt-20 p-4 md:grid md:gap-x-6 md:grid-cols-2 lg:grid-cols-3">
            <div className="h-[380px] flex flex-col justify-between relative">
                <div className="absolute -top-[74px] left-0 w-full h-fit">
                    <div className="relative w-44 h-44 z-10 mx-auto">
                        <Image alt="missão" src={'/default/trofeu.png'} fill className="object-contain" />
                    </div>
                </div>
                <div className="absolute bottom-0 left-0 w-full h-fit">
                    <div className="w-full h-[320px] relative" style={{ backgroundImage: "url('/textura/magenta.jpg')", backgroundSize: "cover", backgroundPosition: "center", textShadow: '1px 1px 2px black' }}>
                        <button
                            className="absolute top-2 right-2 text-2xl"
                            onClick={() => openDialog("Oferecer artigos esportivos de qualidade, acessíveis e inspiradores, que aproximem torcedores e amantes do esporte de suas paixões, proporcionando praticidade e confiança em cada compra online.")}
                        >
                            <IoIosInformationCircle />
                        </button>
                        <div className="bg-zinc-300 w-[200px] h-[80px] absolute top-0 left-[50%] clip-path-triangle" style={{ transform: 'translate(-50%)' }}></div>
                        <div className="absolute top-[85px] left-1/2 -translate-x-1/2 w-[90%]">
                            <h3 className="text-center uppercase font-black text-2xl">Missão</h3>
                            <p
                                // style={{
                                //     display: '-webkit-box',
                                //     WebkitLineClamp: 9,
                                //     WebkitBoxOrient: 'vertical',
                                //     overflow: 'hidden',
                                //     textOverflow: 'ellipsis',
                                // }}
                                className="text-center text-xl leading-[22px] font-semibold sm:leading-6"
                            >
                                Oferecer artigos esportivos de qualidade, acessíveis e inspiradores, que aproximem torcedores e amantes do esporte de suas paixões, proporcionando praticidade e confiança em cada compra online.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="h-[380px] flex flex-col justify-between relative">
                <div className="absolute -top-[74px] left-0 w-full h-fit">
                    <div className="relative w-44 h-44 z-10 mx-auto">
                        <Image alt="visão" src={'/default/apito.png'} fill className="object-contain" />
                    </div>
                </div>
                <div className="absolute bottom-0 left-0 w-full h-fit">
                    <div className="w-full h-[320px] relative" style={{ backgroundImage: "url('/textura/laranja.png')", backgroundSize: "cover", backgroundPosition: "center", textShadow: '1px 1px 2px black' }}>
                        <button
                            className="absolute top-2 right-2 text-2xl"
                            onClick={() => openDialog("Valorizamos a paixão pelo esporte como força de união entre pessoas, oferecendo produtos de qualidade com transparência e confiança. Buscamos sempre a acessibilidade com preços justos, incentivando que todos possam viver essa paixão. Mantemos a inovação como princípio para melhorar constantemente a experiência de compra online e colocamos o cliente no centro de nossas decisões, guiados pelo respeito e dedicação em cada detalhe.")}
                        >
                            <IoIosInformationCircle />
                        </button>
                        <div className="bg-zinc-300 w-[200px] h-[80px] absolute top-0 left-[50%] clip-path-triangle" style={{ transform: 'translate(-50%)' }}></div>
                        <div className="absolute top-[85px] left-1/2 -translate-x-1/2 w-[90%]">
                            <h3 className="text-center uppercase font-black text-2xl">Visão</h3>
                            <p
                                // style={{
                                //     display: '-webkit-box',
                                //     WebkitLineClamp: 8,
                                //     WebkitBoxOrient: 'vertical',
                                //     overflow: 'hidden',
                                //     textOverflow: 'ellipsis',
                                // }}
                                className="text-center text-xl leading-[22px] line-clamp-[8] font-semibold sm:leading-6 lg:line-clamp-[7]"
                            >
                                Valorizamos a paixão pelo esporte como força de união entre pessoas, oferecendo produtos de qualidade com transparência e confiança. Buscamos sempre a acessibilidade com preços justos, incentivando que todos possam viver essa paixão. Mantemos a inovação como princípio para melhorar constantemente a experiência de compra online e colocamos o cliente no centro de nossas decisões, guiados pelo respeito e dedicação em cada detalhe.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="h-[380px] flex flex-col justify-between relative">
                <div className="absolute -top-[74px] left-0 w-full h-fit">
                    <div className="relative w-44 h-44 z-10 mx-auto">
                        <Image alt="valores" src={'/default/maos.png'} fill className="object-contain" />
                    </div>
                </div>
                <div className="absolute bottom-0 left-0 w-full h-fit">
                    <div className="w-full h-[320px] relative" style={{ backgroundImage: "url('/textura/magenta.jpg')", backgroundSize: "cover", backgroundPosition: "center", textShadow: '1px 1px 2px black' }}>
                        <button
                            className="absolute top-2 right-2 text-2xl"
                            onClick={() => openDialog("Ser referência nacional em e-commerce de artigos esportivos, reconhecida pela diversidade de produtos, excelência no atendimento e pela conexão autêntica com a cultura esportiva.")}
                        >
                            <IoIosInformationCircle />
                        </button>
                        <div className="bg-zinc-300 w-[200px] h-[80px] absolute top-0 left-[50%] clip-path-triangle" style={{ transform: 'translate(-50%)' }}></div>
                        <div className="absolute top-[85px] left-1/2 -translate-x-1/2 w-[90%]">
                            <h3 className="text-center uppercase font-black text-2xl">Valores</h3>
                            <p
                                className="text-center text-xl leading-[22px] line-clamp-[8] font-semibold sm:leading-6 lg:line-clamp-[7]"
                            >
                                Ser referência nacional em e-commerce de artigos esportivos, reconhecida pela diversidade de produtos, excelência no atendimento e pela conexão autêntica com a cultura esportiva.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Dialog */}
            <Dialog
                header="Detalhes"
                visible={visible}
                style={{ width: '50vw' }}
                onHide={() => setVisible(false)}
            >
                <p className="line-clamp-none">{dialogContent}</p>
            </Dialog>
        </div>
    )
}
