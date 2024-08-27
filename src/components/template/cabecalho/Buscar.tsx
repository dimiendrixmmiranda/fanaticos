export default function Buscar() {
    return (
        <div className="hidden md:flex flex-1 px-4 justify-center items-center lg:px-10">
            <input type="text" name="buscar" id="buscar" placeholder="Faça a sua busca..." className="w-full rounded-sm lg:h-[35px] p-2 text-black" />
        </div>
    )
}