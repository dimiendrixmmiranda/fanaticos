'use client'
import Template from "@/components/template/Template"
import useAuth from "@/data/hooks/useAuth"
import Image from "next/image"
import Link from "next/link"
import { FaHome, FaUserCircle } from "react-icons/fa"
import { IoLogOutSharp } from "react-icons/io5"
import { TbTruckDelivery } from "react-icons/tb"

export default function Page() {
    const { logout, usuario } = useAuth()
    return (
        <Template>
            <div className="p-4 flex flex-col gap-5 text-azul-escuro">
                <h1 className="uppercase font-bold text-3xl text-center">Bem vindo {usuario?.nome.split(' ')[0]}</h1>
                {
                    usuario && <div className="w-[180px] h-[180px] relative mx-auto -mt-2">
                        <Image alt="Imagem do Usuário" src={usuario?.imagemURL} fill className="object-contain" />
                    </div>
                }
                <div className="grid grid-cols-4 gap-2 text-white">
                    <button className="flex justify-center items-center text-4xl bg-azul-escuro p-2 rounded-md"><FaUserCircle /></button>
                    <button className="flex justify-center items-center text-4xl bg-azul-escuro p-2 rounded-md"><TbTruckDelivery /></button>
                    <button className="flex justify-center items-center text-4xl bg-azul-escuro p-2 rounded-md"><FaHome /></button>
                    <button className="flex justify-center items-center text-4xl bg-azul-escuro p-2 rounded-md" onClick={() => logout && logout('/')}><IoLogOutSharp /></button>
                </div>
                <div>
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
                </div>
                <Link href={'/'} className="bg-laranja text-white  uppercase font-bold text-xl py-2 rounded-lg flex justify-center items-center text-center" style={{ textShadow: '1px 1px 2px black' }}>Voltar a página Inicial</Link>
            </div>
        </Template>
    )
}