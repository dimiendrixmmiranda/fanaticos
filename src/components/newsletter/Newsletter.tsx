'use client';
import React, { useState } from "react";
import { InputMask } from "primereact/inputmask";

export default function Newsletter() {
    const [value, setValue] = useState("");
    return (
        <div className="w-[95%] max-w-[900px] xl:max-w-[95%] mx-auto bg-[--cor-azul] p-3 newsletter my-4">
            <h2 className="font-bold text-xl leading-5 uppercase text-center mb-4 mt-2">Receba ofertas e descontos exclusivos se cadastrando na nossa Newsletter!</h2>
            <form>
                <div className="flex flex-col">
                    <fieldset className="flex flex-col">
                        <label htmlFor="nome">Nome</label>
                        <input className="h-[32px] p-2 text-black font-medium mb-1" type="text" name="nome" id="nome" placeholder="Digite seu nome..." />
                    </fieldset>
                    <fieldset className="flex flex-col">
                        <label htmlFor="email">Email</label>
                        <input className="h-[32px] p-2 text-black font-medium mb-1" type="text" name="email" id="email" placeholder="Digite seu email..." />
                    </fieldset>
                    <fieldset className="flex flex-col">
                        <label htmlFor="telefone">Telefone</label>
                        <InputMask value={value} onChange={(e: any) => setValue(e.target.value)} mask="(99) 9 9999-9999" placeholder="(99) 9 9999-9999" className="h-[32px] p-2 text-black font-medium mb-1"/>
                    </fieldset>
                    <fieldset className="flex flex-col mt-3 preferencias">
                        <label className="text-lg font-semibold">Prefere receber ofertas de produtos:</label>
                        <div className="flex justify-between">
                            <div className="flex gap-1">
                                <input type="checkbox" name="masculino" id="masculino" />
                                <p>Masculino</p>
                            </div>
                            <div className="flex gap-1">
                                <input type="checkbox" name="feminino" id="feminino" />
                                <p>Feminino</p>
                            </div>
                            <div className="flex gap-1">
                                <input type="checkbox" name="infantil" id="infantil" />
                                <p>Infantil</p>
                            </div>
                        </div>
                    </fieldset>
                </div>
                <div className="flex flex-col">
                    <button type="submit" className="bg-[--cor-vermelho] w-full uppercase font-bold py-2 text-xl mt-4">Aceitar e Cadastrar</button>
                    <span className="w-full text-sm flex justify-center items-center mt-2 text-center leading-4">Ao concluir, você aceitará nosso termos de uso e política de privacidade.</span>
                </div>
            </form>
        </div>
    )
}