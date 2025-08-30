import CarrosselMarcas from "../carrossel/CarrosselMarcas";

export default function Marcas() {
    return (
        <div className="flex flex-col gap-2 max-w-[1800px] mx-auto h-[220px] p-4 overflow-hidden 2xl:px-8">
            <h2 className="uppercase font-secundaria text-black font-black text-2xl">Navegue por marcas</h2>
            <CarrosselMarcas />
        </div>
    )
}