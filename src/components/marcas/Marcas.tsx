import CarrosselMarcas from "../carrossel/CarrosselMarcas";

export default function Marcas() {
    return (
        <div className="flex flex-col gap-2 max-w-[1200px] h-[220px] mx-auto p-4 overflow-hidden">
            <h2 className="uppercase font-secundaria text-black font-black text-2xl">Navegue por marcas</h2>
            <CarrosselMarcas />
        </div>
    )
}