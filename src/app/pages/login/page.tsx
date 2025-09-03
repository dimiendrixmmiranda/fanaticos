'use client'

import Template from "@/components/template/Template"
import useAuth from "@/data/hooks/useAuth"
import { limparVariosInputs } from "@/utils/LinparInput"
import { useSearchParams } from "next/navigation"
import { Suspense, useEffect, useState } from "react"

function LoginForm() {
    const [nome, setNome] = useState('')
    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')
    const [confirmacaoSenha, setConfirmacaoSenha] = useState('')
    const [modo, setModo] = useState<'create-account' | 'login'>('create-account')
    const [erro, setErro] = useState<string | null>(null)

    const { login, cadastrar } = useAuth()
    const searchParams = useSearchParams()
    const tipo = searchParams.get('type')

    useEffect(() => {
        if (tipo === 'login') setModo('login')
        if (tipo === 'create_account') setModo('create-account')
    }, [tipo])

    function exibirErro(msg: string, tempoEmSegundos: number = 5) {
        setErro(msg)
        setTimeout(() => setErro(null), tempoEmSegundos * 1000)
    }

    const trocarModo = () => {
        setModo(modo === 'create-account' ? 'login' : 'create-account')
    }

    async function submeterCadastro(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault()
        if (!nome || !email || !senha || !confirmacaoSenha) {
            exibirErro("Preencha todos os campos!")
            return
        }
        if (senha !== confirmacaoSenha) {
            exibirErro("As senhas não coincidem!")
            return
        }
        if (!cadastrar) {
            exibirErro("Cadastro não disponível")
            return
        }
        try {
            await cadastrar(email, senha, nome)
            limparVariosInputs([setNome, setEmail, setSenha, setConfirmacaoSenha])
        } catch (error) {
            console.error("Erro ao cadastrar:", error)
            exibirErro("Ocorreu um erro ao cadastrar. Verifique os dados.")
        }
    }

    async function submeterLogin(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault()
        if (!email || !senha) {
            exibirErro("Preencha todos os campos!")
            return
        }
        if (!login) {
            exibirErro("Login não disponível")
            return
        }
        try {
            await login(email, senha)
            limparVariosInputs([setEmail, setSenha])
        } catch (error) {
            console.error("Erro no login:", error)
            exibirErro("Falha no login. Verifique as credenciais.")
        }
    }

    return (
        <Template>
            <div className="p-4 flex justify-center items-center">
                <div className="p-4 bg-azul-escuro max-w-[450px] w-full">
                    {erro && <p className="text-red-500 mb-2">{erro}</p>}

                    {modo === 'create-account' ? (
                        <form className="flex flex-col gap-2" onSubmit={submeterCadastro}>
                            <fieldset className="flex flex-col gap-1">
                                <label htmlFor="nome">Nome Completo:</label>
                                <input className="h-[30px] rounded-lg" type="text" id="nome" value={nome} onChange={e => setNome(e.target.value)} />
                            </fieldset>
                            <fieldset className="flex flex-col gap-1">
                                <label htmlFor="email">Email:</label>
                                <input className="h-[30px] rounded-lg" type="email" id="email" value={email} onChange={e => setEmail(e.target.value)} />
                            </fieldset>
                            <fieldset className="flex flex-col gap-1">
                                <label htmlFor="senha">Senha:</label>
                                <input className="h-[30px] rounded-lg" type="password" id="senha" value={senha} onChange={e => setSenha(e.target.value)} />
                            </fieldset>
                            <fieldset className="flex flex-col gap-1">
                                <label htmlFor="confirmacaoSenha">Confirme a Senha:</label>
                                <input className="h-[30px] rounded-lg" type="password" id="confirmacaoSenha" value={confirmacaoSenha} onChange={e => setConfirmacaoSenha(e.target.value)} />
                            </fieldset>
                            <button type="submit" className="bg-laranja uppercase font-bold text-xl text-white p-1 rounded">Criar Conta</button>
                            <button type="button" onClick={trocarModo} className="mt-2 text-whites">
                                Já é inscrito? Faça login
                            </button>
                        </form>
                    ) : (
                        <form className="flex flex-col gap-2" onSubmit={submeterLogin}>
                            <fieldset className="flex flex-col gap-1">
                                <label htmlFor="email">Email:</label>
                                <input className="h-[30px] rounded-lg" type="email" id="email" value={email} onChange={e => setEmail(e.target.value)} />
                            </fieldset>
                            <fieldset className="flex flex-col gap-1">
                                <label htmlFor="senha">Senha:</label>
                                <input className="h-[30px] rounded-lg" type="password" id="senha" value={senha} onChange={e => setSenha(e.target.value)} />
                            </fieldset>
                            <button type="submit" className="bg-laranja uppercase font-bold text-xl text-white p-1 rounded">Iniciar Sessão</button>
                            <button type="button" onClick={trocarModo} className="text-sm mt-2">
                                Ainda não é inscrito? Se inscreva já!
                            </button>
                        </form>
                    )}
                </div>
            </div>
        </Template>
    )
}

export default function Login() {
    return (
        <Suspense fallback={<div>Carregando...</div>}>
            <LoginForm />
        </Suspense>
    )
}
