import Image from "next/image";

export default function Newsletter() {
    return (
        <div className="max-w-[95%] mx-auto my-4 p-2 bg-[--secundaria] flex flex-col gap-4 md:grid md:grid-cols-2 md:p-4 lg:max-w-[90%]">
            <div className="flex flex-col justify-center">
                <h2 className="uppercase font-black text-xl text-center leading-5 md:self-center md:text-2xl xl:max-w-[85%] xl:mx-auto">Receba ofertas e descontos exclusivos se cadastrando na nossa Newsletter!</h2>
                <div className="relative w-[170px] h-[170px] mx-auto xl:w-[200px] xl:h-[200px]">
                    <Image src={'/envelope.png'} alt="Icone de envelope" fill className="object-cover"></Image>
                </div>
            </div>
            <form action="" className="flex flex-col gap-3">
                <fieldset className="flex flex-col gap-1">
                    <label htmlFor="nome" className="font-semibold text-lg leading-5">Nome</label>
                    <input type="text" id="nome" className="h-[30px] rounded-md px-2" placeholder="Digite seu nome:" />
                </fieldset>
                <fieldset className="flex flex-col gap-1">
                    <label htmlFor="email" className="font-semibold text-lg leading-5">Email</label>
                    <input type="text" id="email" className="h-[30px] rounded-md px-2" placeholder="Digite seu email:" />
                </fieldset>
                <fieldset className="flex flex-col gap-1">
                    <label htmlFor="telefone" className="font-semibold text-lg leading-5">Telefone</label>
                    <input type="text" id="telefone" className="h-[30px] rounded-md px-2" placeholder="Digite seu telefone:" />
                </fieldset>
                <fieldset className="flex flex-col gap-1">
                    <label htmlFor="preferencia" className="font-semibold text-lg leading-5">Prefere receber ofertas de produtos:</label>
                    <div className="flex">
                        <div className="flex-1 flex justify-center gap-1">
                            <input type="checkbox" name="preferencia" id="masculino" />
                            <label htmlFor="masculino" className="font-semibold text-lg leading-5">Masculino</label>
                        </div>
                        <div className="flex-1 flex justify-center gap-1">
                            <input type="checkbox" name="preferencia" id="feminino" />
                            <label htmlFor="feminino" className="font-semibold text-lg leading-5">Feminino</label>
                        </div>
                        <div className="flex-1 flex justify-center gap-1">
                            <input type="checkbox" name="preferencia" id="infantil" />
                            <label htmlFor="infantil" className="font-semibold text-lg leading-5">Infantil</label>
                        </div>
                    </div>
                </fieldset>
                <button type="submit" className="uppercase font-bold text-xl bg-[--primaria] py-2">Cadastrar</button>
            </form>
        </div>
    )
}