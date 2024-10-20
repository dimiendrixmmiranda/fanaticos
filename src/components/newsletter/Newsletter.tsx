export default function Newsletter() {
    return (
        <div className="flex flex-col bg-[--primaria] p-2 justify-center items-center gap-5 xl:flex-row xl:gap-4 xl:p-4">
            <div className="flex flex-col justify-center gap-2 xl:max-w-[350px] xl:border-r-2 xl:border-[--secundaria]">
                <h2 className="uppercase font-black text-xl text-center leading-5 md:self-center md:text-2xl xl:max-w-[85%] xl:mx-auto">Receba ofertas e descontos exclusivos se cadastrando na nossa Newsletter!</h2>
                <img src="/logo-fanaticos.png" alt="" className="w-[200px] mx-auto hidden xl:block"/>
            </div>
            <form action="" className="flex flex-col gap-3 w-full p-2 lg:w-full lg:max-w-[700px] xl:w-full self-center xl:gap-6">
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
                <button type="submit" className="uppercase font-bold text-xl bg-[--secundaria] py-2">Cadastrar</button>
            </form>
        </div>
    )
}