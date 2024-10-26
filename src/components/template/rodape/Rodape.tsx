import RedesSocias from "@/components/sociais/Sociais";
import { FaBarcode } from "react-icons/fa";
import { FaCcVisa } from "react-icons/fa";
import { FaCcMastercard } from "react-icons/fa";
import { MdPix } from "react-icons/md";

export default function Rodape() {
    return (
        <div className="bg-[--primaria] flex flex-col">
            <div className="flex flex-col gap-4 p-2 md:p-3 md:grid md:grid-cols-3 lg:grid-cols-4 xl:p-4">
                <div>
                    <h2 className="text-2xl font-bold">Ajuda e atendimento</h2>
                    <ul>
                        <li>Acompanhe seu pedido</li>
                        <li>Dúvidas frequentes</li>
                        <li>Fale com a gente</li>
                        <li>Troca e devolução</li>
                    </ul>
                </div>
                <div>
                    <h2 className="text-2xl font-bold">Nossos produtos</h2>
                    <ul>
                        <li>Camisas de Futebol</li>
                        <li>Camisas de Futebol Americano</li>
                        <li>Camisas de Basquete</li>
                        <li>Agasalhos Esportivos</li>
                    </ul>
                </div>
                <div>
                    <h2 className="text-2xl font-bold">Institucional</h2>
                    <ul>
                        <li>Acessoria de imprensa</li>
                        <li>Sustentabilidade</li>
                        <li>Trabalhe com a gente</li>
                        <li>Encontre uma loja</li>
                    </ul>
                </div>
                <div>
                    <h2 className="text-2xl font-bold">Políticas e Regulamentos</h2>
                    <ul>
                        <li>Política de arrependimento</li>
                        <li>Política de privacidade</li>
                        <li>Regulamentos</li>
                        <li>Segurança</li>
                        <li>Termos e condições</li>
                    </ul>
                </div>
                <div className="col-start-1 col-end-3 md:col-start-2 md:col-end-3 md:justify-start lg:col-start-1 lg:col-end-3 xl:col-end-2">
                    <ul className="flex gap-2 text-3xl flex-wrap justify-around">
                        <li><FaBarcode /></li>
                        <li><FaCcVisa /></li>
                        <li><FaCcMastercard /></li>
                        <li><MdPix /></li>
                        <li><FaBarcode /></li>
                        <li><FaCcVisa /></li>
                        <li><FaCcMastercard /></li>
                        <li><MdPix /></li>
                    </ul>
                </div>
                <div className="flex flex-col gap-2 lg:col-start-3 lg:col-end-5 xl:flex-row">
                    <h2 className="text-2xl font-bold xl:whitespace-nowrap">Fique ligado nas nossas Redes Sociais!!!!!</h2>
                    <RedesSocias estilo='w-full flex'></RedesSocias>
                </div>
            </div>
            <div className="w-full col-start-1 col-end-4 text-center bg-[--secundaria] py-1 font-semibold">Desenvolvido e Idealizado por <strong className="font-black">Dimi Endrix Martins Miranda</strong></div>
        </div>
    )
}