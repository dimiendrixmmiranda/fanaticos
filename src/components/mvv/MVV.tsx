import Image from "next/image";

// Missão Visão e Valores
export default function MVV() {
    return (
        <div className="max-w-[1200px] mx-auto flex flex-col gap-14 mt-12 p-4 md:grid md:gap-x-6 md:grid-cols-2 lg:grid-cols-3">
            <div className="h-[380px] flex flex-col justify-between relative">
                <div className="absolute -top-14 left-0 w-full h-fit">
                    <div className="relative w-44 h-44 z-10 mx-auto">
                        <Image alt="missão" src={'/default/missao.png'} fill className="object-contain" />
                    </div>
                </div>
                <div className="absolute bottom-0 left-0 w-full h-fit">
                    <div className="w-full h-[320px] bg-magenta relative">
                        <div className="bg-zinc-300 w-[200px] h-[80px] absolute top-0 left-[50%] clip-path-triangle" style={{ transform: 'translate(-50%)' }}></div>
                        <p
                            style={{
                                display: '-webkit-box',
                                WebkitLineClamp: 9,
                                WebkitBoxOrient: 'vertical',
                                overflow: 'hidden',
                                textOverflow: 'ellipsis',
                            }}
                            className="absolute top-[85px] left-1/2 -translate-x-1/2 w-[90%] text-center text-xl leading-[22px] font-bold sm:text-2xl sm:leading-6 sm:top-[95px]"
                        >
                            Oferecer artigos esportivos de qualidade, acessíveis e inspiradores, que aproximem torcedores e amantes do esporte de suas paixões, proporcionando praticidade e confiança em cada compra online.
                        </p>
                    </div>
                </div>
            </div>
            <div className="h-[380px] flex flex-col justify-between relative">
                <div className="absolute -top-14 left-0 w-full h-fit">
                    <div className="relative w-44 h-44 z-10 mx-auto">
                        <Image alt="missão" src={'/default/missao.png'} fill className="object-contain" />
                    </div>
                </div>
                <div className="absolute bottom-0 left-0 w-full h-fit">
                    <div className="w-full h-[320px] bg-laranja relative">
                        <div className="bg-zinc-300 w-[200px] h-[80px] absolute top-0 left-[50%] clip-path-triangle" style={{ transform: 'translate(-50%)' }}></div>
                        <p
                            style={{
                                display: '-webkit-box',
                                WebkitLineClamp: 8,
                                WebkitBoxOrient: 'vertical',
                                overflow: 'hidden',
                                textOverflow: 'ellipsis',
                            }}
                            className="absolute top-[85px] left-1/2 -translate-x-1/2 w-[90%] text-center text-xl leading-[22px] font-bold sm:text-2xl sm:leading-6 sm:top-[95px]"
                        >
                            Valorizamos a paixão pelo esporte como força de união entre pessoas, oferecendo produtos de qualidade com transparência e confiança. Buscamos sempre a acessibilidade com preços justos, incentivando que todos possam viver essa paixão. Mantemos a inovação como princípio para melhorar constantemente a experiência de compra online e colocamos o cliente no centro de nossas decisões, guiados pelo respeito e dedicação em cada detalhe.
                        </p>
                    </div>
                </div>
            </div>
            <div className="h-[380px] flex flex-col justify-between relative">
                <div className="absolute -top-14 left-0 w-full h-fit">
                    <div className="relative w-44 h-44 z-10 mx-auto">
                        <Image alt="missão" src={'/default/missao.png'} fill className="object-contain" />
                    </div>
                </div>
                <div className="absolute bottom-0 left-0 w-full h-fit">
                    <div className="w-full h-[320px] bg-magenta relative">
                        <div className="bg-zinc-300 w-[200px] h-[80px] absolute top-0 left-[50%] clip-path-triangle" style={{ transform: 'translate(-50%)' }}></div>
                        <p
                            style={{
                                display: '-webkit-box',
                                WebkitLineClamp: 9,
                                WebkitBoxOrient: 'vertical',
                                overflow: 'hidden',
                                textOverflow: 'ellipsis',
                            }}
                            className="absolute top-[85px] left-1/2 -translate-x-1/2 w-[90%] text-center text-xl leading-[22px] font-bold sm:text-2xl sm:leading-6 sm:top-[95px]"
                        >
                            Ser referência nacional em e-commerce de artigos esportivos, reconhecida pela diversidade de produtos, excelência no atendimento e pela conexão autêntica com a cultura esportiva.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}