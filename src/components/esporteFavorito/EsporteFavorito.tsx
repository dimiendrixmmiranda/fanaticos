import Image from "next/image";

export default function EsporteFavorito() {
    return (
        <div className="max-w-[95%] mx-auto flex flex-col gap-4 md:grid md:grid-cols-3 my-10">
            <div className="relative bg-orange-400 h-[300px] flex flex-col overflow-hidden w-[80%] mx-auto sm:w-full sm:mx-auto sm:h-[500px] md:h-[290px] lg:h-[330px] xl:h-[460px] rounded-xl" style={{boxShadow: '0 0 2px 2px black'}}>
                <Image src={'/esportes/futebol.jpeg'} fill alt="Futebol" className="object-cover"></Image>
                <h1 className="absolute text-[--secundaria] top-[20%] left-4 text-4xl font-black max-w-[50%] md:text-xl xl:text-4xl" style={{textShadow: '1px 1px 2px white'}}>Especial Futebol</h1>
                <button className="absolute bottom-4 py-1 left-[50%] bg-[--primaria] w-[80%] uppercase text-lg xl:text-2xl font-black rounded-md" style={{transform: 'translate(-50%)'}}>Ver Produtos</button>
            </div>
            <div className="relative bg-green-400 h-[300px] flex flex-col overflow-hidden w-[80%] mx-auto sm:w-full sm:mx-auto sm:h-[500px] md:h-[290px] lg:h-[330px] xl:h-[460px] rounded-xl" style={{boxShadow: '0 0 2px 2px black'}}>
                <Image src={'/esportes/basquete.jpeg'} fill alt="Basquete" className="object-cover"></Image>
                <h1 className="absolute text-[--secundaria] top-[40%] right-3 text-4xl font-black max-w-[50%] md:text-xl xl:text-4xl" style={{textShadow: '1px 1px 2px white'}}>Especial Basquete</h1>
                <button className="absolute bottom-4 py-1 left-[50%] bg-[--primaria] w-[80%] uppercase text-lg xl:text-2xl font-black rounded-md" style={{transform: 'translate(-50%)'}}>Ver Produtos</button>
            </div>
            <div className="relative bg-blue-400 h-[300px] flex flex-col overflow-hidden w-[80%] mx-auto sm:w-full sm:mx-auto sm:h-[500px] md:h-[290px] lg:h-[330px] xl:h-[460px] rounded-xl" style={{boxShadow: '0 0 2px 2px black'}}>
                <Image src={'/esportes/futebol-americano.jpeg'} fill alt="Futebol Americano" className="object-cover"></Image>
                <h1 className="absolute text-[--secundaria] top-[25%] right-4 text-4xl font-black max-w-[50%] md:text-xl xl:text-4xl" style={{textShadow: '1px 1px 2px white'}}>Especial Futebol Americano</h1>
                <button className="absolute bottom-4 py-1 left-[50%] bg-[--primaria] w-[80%] uppercase text-lg xl:text-2xl font-black rounded-md" style={{transform: 'translate(-50%)'}}>Ver Produtos</button>
            </div>
        </div>
    )
}