import { FaMagnifyingGlass } from "react-icons/fa6";

interface BarraDeBuscaProps {
    mobile: boolean
}

export default function BarraDeBusca({ mobile }: BarraDeBuscaProps) {
    return (
        <div className={mobile ? 'flex flex-col gap-1 w-full': 'hidden xl:flex flex-col justify-center xl:flex-1'}>
            <label htmlFor="busca" className={`uppercase text-sm font-black ${mobile ? 'block' : 'hidden'}`}>Busque um produto:</label>
            <div className="relative">
                <input type="text" id="busca" placeholder="O que você está procurando? ..." className="flex w-full p-2 rounded-lg text-sm text-black" />
                <button className="absolute bg-azul-escuro top-0 right-0 w-9 h-full flex justify-center items-center rounded-e-lg">
                    <FaMagnifyingGlass />
                </button>
            </div>
        </div>
    )
}