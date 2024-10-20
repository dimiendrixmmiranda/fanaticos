import { TbTargetArrow } from "react-icons/tb";
import { FaEye } from "react-icons/fa";
import { MdOutlineStarBorderPurple500 } from "react-icons/md";

export default function Mvv() {
    return (
        <div className="mt-16 max-w-[95%] mx-auto p-2 flex flex-col items-start gap-y-12 gap-x-4 md:grid md:grid-cols-3 md:mt-20 xl:mt-24 xl:gap-x-8">
            <div className="flex flex-col justify-center items-center text-[--vermelho] relative px-2 h-[435px] mvv" style={{backgroundColor: 'var(--vermelho)'}}>
                <TbTargetArrow className="text-[9em] absolute -top-14 left-[50%]" style={{ transform: 'translate(-50%)' }} />
                <p className="text-center pt-[7.5em] pb-4 text-white sm:text-xl md:text-[1em] md:leading-5 lg:pt-[6.5em] lg:text-lg xl:px-6 xl:text-xl">
                    Oferecer aos fãs do esporte uma experiência de compra única, disponibilizando produtos autênticos e de qualidade que representem sua paixão por seus times favoritos. Buscamos excelência no atendimento ao cliente, garantindo que todos os detalhes, desde a escolha até a entrega, superem as expectativas.
                </p>
            </div>
            <div className="flex flex-col justify-center items-center text-[--azul-marinho] px-2 h-[435px] mvv" style={{backgroundColor: 'var(--azul-marinho)'}}>
                <FaEye className="text-[9em] absolute -top-14 left-[50%]" style={{ transform: 'translate(-50%)' }} />
                <p className="text-center pt-[7.5em] pb-4 text-white sm:text-xl md:text-[1em] md:leading-5 lg:pt-[6.5em] lg:text-lg xl:px-6 xl:text-xl">
                    Ser a loja de referência no Brasil para artigos esportivos e camisas de times, reconhecida pela variedade, exclusividade e confiança. Queremos fortalecer a conexão entre os torcedores e seus times, sendo parte essencial da jornada de cada fã.
                </p>
            </div>
            <div className="flex flex-col justify-center items-center text-[--laranja] px-2 h-[435px] mvv" style={{backgroundColor: 'var(--laranja)'}}>
                <MdOutlineStarBorderPurple500 className="text-[9em] absolute -top-14 left-[50%]" style={{ transform: 'translate(-50%)' }} />
                <ul className="list-disc pt-[7.5em] pb-4 pl-4 text-white md:text-[1em] md:leading-5 sm:text-xl lg:pt-[6.5em] lg:text-lg xl:px-6 xl:text-xl">
                    <li>
                        Compromisso com a qualidade: produtos duráveis e confortáveis.
                    </li>
                    <li>
                        Respeito ao cliente: atendimento amigável e atenção às necessidades.
                    </li>
                    <li>
                        Paixão pelo esporte: celebração da cultura esportiva e união entre torcedores.
                    </li>
                    <li>
                        Inovação: atenção às tendências e experiências de compra diferenciadas.
                    </li>
                </ul>
            </div>
        </div>
    )
}