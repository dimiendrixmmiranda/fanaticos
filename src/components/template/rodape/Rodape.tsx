import { FaTruckFast } from "react-icons/fa6";
import { FaStopwatch } from "react-icons/fa6";
import { FaRegCreditCard } from "react-icons/fa";

export default function Rodape() {
    return (
        <footer className="bg-[--cor-azul] mt-8">
            <ul className="flex flex-col gap-4 md:flex-row p-4 xl:p-6 xl:gap-6 bg-zinc-300 text-black">
                <li className="flex flex-col py-4 w-full gap-2 items-center md:flex-1">
                    <FaTruckFast className="text-[3em]"/>
                    <h2 className="text-2xl leading-6 text-center fonte-bold uppercase">Frete gratis</h2>
                    <p className="leading-4 text-center fonte-regular">Em compras a partir de R$299,90</p>
                </li>
                <li className="flex flex-col py-4 w-full gap-2 items-center md:flex-1">
                    <FaStopwatch className="text-[3em]"/>
                    <h2 className="text-2xl leading-6 text-center fonte-bold uppercase">Entrega Rápida</h2>
                    <p className="leading-4 text-center fonte-regular">Entrega em até 10 dias úteis em produtos em estoque</p>
                </li>
                <li className="flex flex-col py-4 w-full gap-2 items-center md:flex-1">
                    <FaRegCreditCard className="text-[3em]"/>
                    <h2 className="text-2xl leading-6 text-center fonte-bold uppercase">Em até 10 vezes sem juros</h2>
                    <p className="leading-4 text-center fonte-regular">No cartão de crédito</p>
                </li>
            </ul>
        </footer>
    )
}