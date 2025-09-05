import { FaRegCreditCard, FaTruckFast } from "react-icons/fa6";
import { MdOutlineTimer } from "react-icons/md";

export default function Servicos() {
    return (
        <ul className="flex flex-col gap-4 text-black p-4 max-w-[1200px] mx-auto md:grid md:grid-cols-3">
            <li className="grid grid-cols-2 max-w-[360px] mx-auto">
                <div className="flex justify-center items-center text-6xl">
                    <FaTruckFast />
                </div>
                <div className="font-primaria self-center flex flex-col lg:gap-1">
                    <h2 className="uppercase font-black text-lg leading-5">Frete Gratis</h2>
                    <p className="leading-5">Para compras acima de R$259,90</p>
                </div>
            </li>
            <li className="grid grid-cols-2 max-w-[360px] mx-auto">
                <div className="flex justify-center items-center text-6xl">
                    <MdOutlineTimer />
                </div>
                <div className="font-primaria self-center flex flex-col lg:gap-1">
                    <h2 className="uppercase font-black text-lg leading-5">Entrega Rápida</h2>
                    <p className="leading-5">Em até 5 dias dependendo de sua região</p>
                </div>
            </li>
            <li className="grid grid-cols-2 max-w-[360px] mx-auto">
                <div className="flex justify-center items-center text-6xl">
                    <FaRegCreditCard />
                </div>
                <div className="font-primaria self-center flex flex-col lg:gap-1">
                    <h2 className="uppercase font-black text-lg leading-5">Em até 7x sem juros</h2>
                    <p className="leading-5">No cartão de crédito</p>
                </div>
            </li>
        </ul>
    )
}