import { useRouter } from "next/navigation";
import { useState } from "react";
import { FaMagnifyingGlass } from "react-icons/fa6";

interface BarraDeBuscaProps {
    mobile: boolean
}

export default function BarraDeBusca({ mobile }: BarraDeBuscaProps) {
    const router = useRouter()
    const [busca, setBusca] = useState('')

    const handleBuscar = () => {
        if (busca.trim() !== '') {
            router.push(`/buscar/${encodeURIComponent(busca)}`);
        }
    }

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') handleBuscar()
    }
    return (
        <div className={mobile ? 'flex flex-col gap-1 w-full' : 'hidden xl:flex flex-col justify-center xl:flex-1'}>
            <label htmlFor="busca" className={`uppercase text-sm font-black ${mobile ? 'block' : 'hidden'}`}>Busque um produto:</label>
            <div className="relative">
                <input
                    type="text"
                    id="busca"
                    value={busca}
                    onChange={(e) => setBusca(e.target.value)}
                    onKeyDown={handleKeyDown}
                    placeholder="O que você está procurando? ..."
                    className="flex w-full p-2 rounded-lg text-sm text-black"
                />
                <button className="absolute bg-azul-escuro top-0 right-0 w-9 h-full flex justify-center items-center rounded-e-lg" onClick={() => handleBuscar()}>
                    <FaMagnifyingGlass />
                </button>
            </div>
        </div>
    )
}