'use client'
import FormularioEndereco from "@/components/base/FormularioEndereco"
import Template from "@/components/template/Template"
import useAuth from "@/data/hooks/useAuth"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import { FaHome, FaUserCircle } from "react-icons/fa"
import { IoLogOutSharp } from "react-icons/io5"
import { TbTruckDelivery } from "react-icons/tb"

export default function Page() {
    const { logout, usuario } = useAuth()
    const [active, setActive] = useState<'dados' | 'pedidos' | 'enderecos' | 'logout'>('dados')
    const [visibleDialogoLogout, setVisibleDialogoLogout] = useState(false)
    const [visibleFormularioEndereco, setVisibleFormularioEndereco] = useState(false)

    function renderizarConteudo() {
        if (active === 'dados') {
            return (
                <>
                    <h3 className="uppercase font-bold text-xl text-black line-clamp-1">Dados Pessoais</h3>
                    <div>
                        <p>Nome Completo:</p>
                        <span>{usuario?.nome}</span>
                    </div>
                    <div>
                        <p>Data de Nascimento:</p>
                        <span>08/03/2001</span>
                    </div>
                    <div>
                        <p>CPF:</p>
                        <span>082.186.999-02</span>
                    </div>
                    <div>
                        <p>Gênero:</p>
                        <span>{usuario?.genero}</span>
                    </div>
                    <div>
                        <p>Telefone Principal:</p>
                        <span>(43) 9 88252886</span>
                        <button>Alterar</button>
                    </div>
                    <div>
                        <p>Telefone Secundário:</p>
                        <span>(43) 9 88252886</span>
                        <button>Alterar</button>
                    </div>
                </>
            )
        } else if (active === 'pedidos') {
            return (
                <div>
                    <h3 className="uppercase font-bold text-xl text-black line-clamp-1">Pedidos</h3>
                </div>
            )
        } else if (active === 'enderecos') {
            return (
                <div className="flex flex-col gap-2">
                    <h3 className="uppercase font-bold text-xl text-black line-clamp-1">Endereços</h3>
                    <button onClick={() => setVisibleFormularioEndereco(true)} className="uppercase font-bold text-lg text-center bg-azul-escuro p-2 text-white" style={{ textShadow: '1px 1px 2px black' }}>
                        Adicionar Novo Endereço
                    </button>
                    {
                        visibleFormularioEndereco ? (
                            <FormularioEndereco setVisibleFormularioEndereco={setVisibleFormularioEndereco} />
                        ) : ''
                    }
                </div>
            )
        } else if (active === 'logout') {
            return (
                <div className={`fixed top-[40%] left-[50%] w-[300px] bg-azul-escuro text-white rounded-lgs flex-col gap-6 p-4 ${visibleDialogoLogout ? 'flex' : 'hidden'}`} style={{ transform: 'translate(-50%,-50%)' }}>
                    <p className="text-2xl uppercase font-bold leading-7">Deseja Realmente sair?</p>
                    <div className="grid grid-cols-2 gap-4">
                        <button onClick={() => logout && logout('/')} className="bg-red-600 uppercase font-bold text-lg">Sim</button>
                        <button className="bg-red-600 uppercase font-bold text-lg" onClick={() => setVisibleDialogoLogout(false)}>Não</button>
                    </div>
                </div>
            )
        }
    }

    return (
        <Template>
            <div className="p-4 flex flex-col gap-5 text-azul-escuro max-w-[1600px] mx-auto grid-cols-3 md:min-h-[70vh] md:grid md:gap-x-10 2xl:gap-x-16 lg:p-8">
                {/* Menu Web */}
                <div className="hidden md:flex col-start-1 col-end-2 flex-col border border-zinc-400 h-fit text-white">
                    <button
                        className={`flex justify-start items-center p-2 gap-2 text-azul-escuro  ${active === 'dados' ? 'border-l-4 border-laranja' : 'border border-zinc-400 border-l-0 border-r-0'}`}
                        onClick={() => setActive('dados')}
                    >
                        <FaUserCircle className="text-2xl" />
                        <p className="uppercase font-bold text-xl">Seus Dados</p>
                    </button>
                    <button
                        className={`flex justify-start items-center p-2 gap-2 text-azul-escuro  ${active === 'pedidos' ? 'border-l-4 border-laranja' : 'border border-zinc-400 border-l-0'}`}
                        onClick={() => setActive('pedidos')}
                    >
                        <TbTruckDelivery className="text-2xl" />
                        <p className="uppercase font-bold text-xl">Pedidos</p>
                    </button>
                    <button
                        className={`flex justify-start items-center p-2 gap-2 text-azul-escuro  ${active === 'enderecos' ? 'border-l-4 border-laranja' : 'border border-zinc-400 border-l-0'}`}
                        onClick={() => setActive('enderecos')}
                    >
                        <FaHome className="text-2xl" />
                        <p className="uppercase font-bold text-xl">Endereços</p>
                    </button>
                    <button
                        className={`flex justify-start items-center p-2 gap-2 text-azul-escuro  ${active === 'logout' ? 'border-l-4 border-laranja' : 'border border-zinc-400 border-l-0'}`}
                        onClick={() => {
                            setActive('logout')
                            setVisibleDialogoLogout(true)
                        }}>
                        <IoLogOutSharp className="text-2xl" />
                        <p className="uppercase font-bold text-xl">Sair</p>
                    </button>
                </div>
                <div className="flex flex-col gap-4 md:col-start-2 md:col-end-4">
                    <h1 className="uppercase font-bold text-3xl text-center">Bem vindo {usuario?.nome.split(' ')[0]}</h1>
                    {
                        usuario && <div className="w-[180px] h-[180px] relative mx-auto -mt-2">
                            <Image alt="Imagem do Usuário" src={usuario?.imagemURL} fill className="object-contain" />
                        </div>
                    }
                </div>
                {/* Menu Mobile */}
                <div className="grid grid-cols-4 gap-2 text-white md:hidden">
                    <button
                        className={`flex justify-center items-center text-4xl bg-azul-escuro p-2 rounded-md ${active === 'dados' ? 'bg-laranja' : 'bg-azul-escuro'}`}
                        onClick={() => setActive('dados')}
                    >
                        <FaUserCircle />
                    </button>
                    <button
                        className={`flex justify-center items-center text-4xl bg-azul-escuro p-2 rounded-md ${active === 'pedidos' ? 'bg-laranja' : 'bg-azul-escuro'}`}
                        onClick={() => setActive('pedidos')}
                    >
                        <TbTruckDelivery />
                    </button>
                    <button
                        className={`flex justify-center items-center text-4xl bg-azul-escuro p-2 rounded-md ${active === 'enderecos' ? 'bg-laranja' : 'bg-azul-escuro'}`}
                        onClick={() => setActive('enderecos')}
                    >
                        <FaHome />
                    </button>
                    <button
                        className={`flex justify-center items-center text-4xl bg-azul-escuro p-2 rounded-md ${active === 'logout' ? 'bg-laranja' : 'bg-azul-escuro'}`}
                        onClick={() => {
                            setActive('logout')
                            setVisibleDialogoLogout(true)
                        }}>
                        <IoLogOutSharp />
                    </button>
                </div>
                <div className="col-start-2 col-end-4">
                    {
                        renderizarConteudo()
                    }
                </div>

                <Link href={'/'} className="bg-laranja text-white  uppercase font-bold text-xl py-2 rounded-lg flex justify-center items-center text-center h-fit  mt-auto max-w-[300px] mx-auto w-full md:col-start-3 md:col-end-4 md:text-base" style={{ textShadow: '1px 1px 2px black' }}>Voltar a página Inicial</Link>
            </div>
        </Template>
    )
}