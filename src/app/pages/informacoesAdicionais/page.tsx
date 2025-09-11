'use client'
import Template from "@/components/template/Template";
import useAuth from "@/data/hooks/useAuth";
import { db } from "@/lib/firebase";
import { doc, setDoc } from "firebase/firestore";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Page() {
    const [cpf, setCpf] = useState('')
    const [telefone1, setTelefone1] = useState('')
    const [telefone2, setTelefone2] = useState('')
    const [dataNascimento, setDataNascimento] = useState('')
    const router = useRouter()

    const { usuario } = useAuth()

    const handleSalvar = async (e: React.FormEvent) => {
        e.preventDefault()

        if (!usuario) {
            alert("Você precisa estar logado para salvar as informações.")
            return
        }

        try {
            const userRef = doc(db, "users", usuario.uid)

            await setDoc(userRef, {
                cpf,
                telefone1,
                telefone2,
                dataNascimento
            }, { merge: true })
            
            alert("Informações salvas com sucesso!")
            router.push('/pages/usuario')
        } catch (error) {
            console.error("Erro ao salvar informações:", error)
            alert("Erro ao salvar informações.")
        }
    }

    return (
        <Template>
            <div className="p-4 flex flex-col">
                <h2>Informações Adicionais</h2>
                <form className="text-azul-escuro flex flex-col gap-3">
                    <fieldset className="flex flex-col gap-1">
                        <label htmlFor="cpf">CPF</label>
                        <input className="h-[30px] rounded-lg p-2 text-black" type="text" id="cpf" value={cpf} onChange={e => setCpf(e.target.value)} />
                    </fieldset>
                    <fieldset className="flex flex-col gap-1">
                        <label htmlFor="telefone-1">Telefone pra Contato 1:</label>
                        <input className="h-[30px] rounded-lg p-2 text-black" type="text" id="telefone-1" value={telefone1} onChange={e => setTelefone1(e.target.value)} />
                    </fieldset>
                    <fieldset className="flex flex-col gap-1">
                        <label htmlFor="telefone-2">Telefone pra Contato 2:</label>
                        <input className="h-[30px] rounded-lg p-2 text-black" type="text" id="telefone-2" value={telefone2} onChange={e => setTelefone2(e.target.value)} />
                    </fieldset>
                    <fieldset className="flex flex-col gap-1">
                        <label htmlFor="dataNascimento">Data de Nascimento:</label>
                        <input className="h-[30px] rounded-lg p-2 text-black" type="date" id="dataNascimento" value={dataNascimento} onChange={e => setDataNascimento(e.target.value)} />
                    </fieldset>
                    <button className="bg-azul-escuro uppercase font-bold py-2 text-white w-full" onClick={(e) => handleSalvar(e)}>
                        Salvar Informações
                    </button>
                </form>
            </div>
        </Template>
    )
}