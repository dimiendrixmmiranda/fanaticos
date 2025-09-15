'use client'

import Template from "@/components/template/Template"
import useAuth from "@/data/hooks/useAuth"
import { limparVariosInputs } from "@/utils/LinparInput"
import Image from "next/image"
import { useSearchParams } from "next/navigation"
import { Suspense, useEffect, useState } from "react"

function LoginForm() {
    const [nome, setNome] = useState('')
    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')
    const [confirmacaoSenha, setConfirmacaoSenha] = useState('')
    const [modo, setModo] = useState<'create-account' | 'login'>('create-account')
    const [erro, setErro] = useState<string | null>(null)
    const [genero, setGenero] = useState('')
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
            await cadastrar(email, senha, nome, genero)
            limparVariosInputs([setNome, setEmail, setSenha, setConfirmacaoSenha])
        } catch (error) {
            console.error("Erro ao cadastrar:", error)
            exibirErro("Ocorreu um erro ao cadastrar. Verifique os dados.")
        }
    }

    async function submeterLogin(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault()
        if (!email || !senha || genero) {
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
            <div className="p-4 flex justify-center items-center min-h-[60vh] lg:min-h-[70vh] xl:min-h-[80vh]">
                <div className="flex flex-col justify-center items-center rounded-md overflow-hidden md:grid md:grid-cols-2">
                    <div className="bg-laranja justify-center items-center flex flex-col w-full h-full p-4">
                        <div className="relative w-[180px] h-[180px] lg:w-[250px] lg:h-[250px]">
                            <Image alt="Logo Fanáticos" src={'/logo/logo-fanaticos.png'} fill className="object-contain" />
                        </div>
                        <p className="font-bold font-cursiva text-lg lg:text-2xl" style={{ textShadow: '1px 1px 2px black' }}>A casa dos apaixonados por esporte!</p>
                    </div>
                    <div className="bg-azul-escuro flex justify-center items-center w-full h-full p-4 md:p-8 lg:p-10">
                        {erro && <p className="text-red-500 mb-2">{erro}</p>}

                        {modo === 'create-account' ? (
                            <form className="flex flex-col gap-2 w-full" onSubmit={submeterCadastro}>
                                <fieldset className="flex flex-col gap-1">
                                    <label htmlFor="nome">Nome Completo:</label>
                                    <input className="h-[30px] rounded-lg p-2 text-black" type="text" id="nome" value={nome} onChange={e => setNome(e.target.value)} />
                                </fieldset>
                                <fieldset className="flex flex-col gap-1">
                                    <label htmlFor="email">Email:</label>
                                    <input className="h-[30px] rounded-lg p-2 text-black" type="email" id="email" value={email} onChange={e => setEmail(e.target.value)} />
                                </fieldset>
                                <fieldset className="flex flex-col gap-1">
                                    <label htmlFor="genero">Gênero:</label>
                                    <fieldset className="grid grid-cols-2 gap-2">
                                        <div className="flex items-center gap-1">
                                            <input className="w-4 h-4" type="radio" name="genero" id="masculino" value="masculino" onChange={(e) => setGenero(e.target.value)} />
                                            <label className="leading-4" htmlFor="masculino">Masculino</label>
                                        </div>
                                        <div className="flex items-center gap-1">
                                            <input className="w-4 h-4" type="radio" name="genero" id="feminino" value="feminino" onChange={(e) => setGenero(e.target.value)} />
                                            <label className="leading-4" htmlFor="feminino">Feminino</label>
                                        </div>
                                        <div className="flex items-center gap-1">
                                            <input className="w-4 h-4" type="radio" name="genero" id="prefiro-nao-dizer" value="prefiro-nao-dizer" onChange={(e) => setGenero(e.target.value)} />
                                            <label className="leading-4" htmlFor="prefiro-nao-dizer">Prefiro nao Dizer</label>
                                        </div>
                                    </fieldset>
                                </fieldset>
                                <fieldset className="flex flex-col gap-1">
                                    <label htmlFor="senha">Senha:</label>
                                    <input className="h-[30px] rounded-lg p-2 text-black" type="password" id="senha" value={senha} onChange={e => setSenha(e.target.value)} />
                                </fieldset>
                                <fieldset className="flex flex-col gap-1">
                                    <label htmlFor="confirmacaoSenha">Confirme a Senha:</label>
                                    <input className="h-[30px] rounded-lg p-2 text-black" type="password" id="confirmacaoSenha" value={confirmacaoSenha} onChange={e => setConfirmacaoSenha(e.target.value)} />
                                </fieldset>
                                <button type="submit" className="bg-laranja uppercase font-bold text-xl text-white p-1 rounded">Criar Conta</button>
                                <button type="button" onClick={trocarModo} className="mt-2 text-whites">
                                    Já é inscrito? Faça login
                                </button>
                            </form>
                        ) : (
                            <form className="flex flex-col gap-2 w-full" onSubmit={submeterLogin}>
                                <fieldset className="flex flex-col gap-1">
                                    <label htmlFor="email">Email:</label>
                                    <input className="h-[30px] rounded-lg p-2 text-black" type="email" id="email" value={email} onChange={e => setEmail(e.target.value)} />
                                </fieldset>
                                <fieldset className="flex flex-col gap-1">
                                    <label htmlFor="senha">Senha:</label>
                                    <input className="h-[30px] rounded-lg p-2 text-black" type="password" id="senha" value={senha} onChange={e => setSenha(e.target.value)} />
                                </fieldset>
                                <button type="submit" className="bg-laranja uppercase font-bold text-xl text-white p-1 rounded">Iniciar Sessão</button>
                                <button type="button" onClick={trocarModo} className="text-sm mt-2">
                                    Ainda não é inscrito? Se inscreva já!
                                </button>
                            </form>
                        )}
                    </div>
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
