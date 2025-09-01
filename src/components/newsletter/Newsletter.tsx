export default function Newsletter() {
    return (
        <div className="p-4">
            <div className="p-4 text-white bg-azul-escuro flex flex-col gap-4 max-w-[1200px] mx-auto mt-6 md:grid md:grid-cols-2 lg:grid-cols-3">
                <div className="flex flex-col gap-1 justify-center md:col-start-1 md:col-end-3 lg:col-end-2">
                    <h3 style={{ textShadow: '1px 1px 2px black' }} className="uppercase font-black text-2xl leading-6 text-center">Receba Ofertas e Descontos Exclusivos!!!</h3>
                    <p style={{ textShadow: '1px 1px 2px black' }} className="text-center text-sm">Cadastre-se em nossa newsletter.</p>
                </div>

                <div className="flex flex-col gap-2">
                    <input className="p-2 h-[30px] rounded-md" type="text" name="nome" id="nome" placeholder="Informe seu nome...." />
                    <input className="p-2 h-[30px] rounded-md" type="email" name="email" id="email" placeholder="Informe seu email...." />
                    <fieldset className="flex gap-2">
                        <input type="checkbox" name="termos" id="termos" />
                        <label htmlFor="termos" className="text-xs leading-3" style={{ textShadow: '1px 1px 2px black' }}>
                            Ao se cadastrar você concorda em receber ofertas e novidades de nossa loja!
                        </label>
                    </fieldset>
                </div>

                <div className="flex flex-col justify-center gap-1">
                    <button className="uppercase font-bold text-xl bg-magenta p-2 text-white">Aceitar e Cadastrar</button>
                    <p className="text-xs leading-3 text-center" style={{ textShadow: '1px 1px 2px black' }}>Ao concluir, você aceitará nosso termos de uso e política de privacidade.</p>
                </div>
            </div>
        </div>
    )
}