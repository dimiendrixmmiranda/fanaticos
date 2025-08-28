import Image from "next/image";

// Missão Visão e Valores
export default function MVV() {
    return (
        <div className="max-w-[1200px] mx-auto flex flex-col gap-4 mt-6 p-4 md:grid md:grid-cols-2 lg:grid-cols-3">
            <div className="bg-laranja p-4 flex flex-col justify-center items-center h-fit">
                <div className="relative w-32 h-32">
                    <Image alt="missão" src={'/default/missao.png'} fill className="object-contain" />
                </div>
                <h2 style={{ textShadow: '1px 1px 2px black' }} className="uppercase font-bold font-terciaria tracking-[.2em] text-4xl">Missão</h2>
                <p style={{ textShadow: '1px 1px 2px black' }} className="text-lg leading-6 text-center mt-3">
                    Oferecer artigos esportivos de qualidade, acessíveis e inspiradores, que aproximem torcedores e amantes do esporte de suas paixões, proporcionando praticidade e confiança em cada compra online.
                </p>
            </div>
            <div className="bg-laranja p-4 flex flex-col justify-center items-center h-fit">
                <div className="relative w-32 h-32">
                    <Image alt="valores" src={'/default/valores.png'} fill className="object-contain" />
                </div>
                <h2 style={{ textShadow: '1px 1px 2px black' }} className="uppercase font-bold font-terciaria tracking-[.2em] text-4xl">Valores</h2>
                <p style={{ textShadow: '1px 1px 2px black' }} className="text-lg leading-6 text-center mt-3">
                    Valorizamos a paixão pelo esporte como força de união entre pessoas, oferecendo produtos de qualidade com transparência e confiança. Buscamos sempre a acessibilidade com preços justos, incentivando que todos possam viver essa paixão. Mantemos a inovação como princípio para melhorar constantemente a experiência de compra online e colocamos o cliente no centro de nossas decisões, guiados pelo respeito e dedicação em cada detalhe.
                </p>
            </div>
            <div className="bg-laranja p-4 flex flex-col justify-center items-center h-fit md:col-start-1 md:col-end-3 lg:col-start-3 lg:col-end-4">
                <div className="relative w-32 h-32">
                    <Image alt="visão" src={'/default/visao.png'} fill className="object-contain" />
                </div>
                <h2 style={{ textShadow: '1px 1px 2px black' }} className="uppercase font-bold font-terciaria tracking-[.2em] text-4xl">Visão</h2>
                <p style={{ textShadow: '1px 1px 2px black' }} className="text-lg leading-6 text-center mt-3">
                    Ser referência nacional em e-commerce de artigos esportivos, reconhecida pela diversidade de produtos, excelência no atendimento e pela conexão autêntica com a cultura esportiva.
                </p>
            </div>
        </div>
    )
}