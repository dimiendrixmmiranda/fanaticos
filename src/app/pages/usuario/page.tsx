'use client'
import CaixaDeDialogo from "@/components/base/CaixaDeDialogo"
import FormularioEndereco from "@/components/base/FormularioEndereco"
import Template from "@/components/template/Template"
import useAuth from "@/data/hooks/useAuth"
import { db } from "@/lib/firebase"
import Endereco from "@/types/Enderecos"
import { atualizarCampo } from "@/utils/atualizarCampoFirebase"
import handleImagemChange from "@/utils/handleImageChange"
import { collection, deleteDoc, doc, onSnapshot, updateDoc } from "firebase/firestore"
import Image from "next/image"
import Link from "next/link"
import { useEffect, useState } from "react"
import { FaEdit, FaHome, FaTrashAlt, FaUserCircle } from "react-icons/fa"
import { FiPlus } from "react-icons/fi"
import { IoLogOutSharp } from "react-icons/io5"
import { TbTruckDelivery } from "react-icons/tb"

export default function Page() {
    const { logout, usuario } = useAuth()
    const [enderecos, setEnderecos] = useState<Endereco[] | null>(null)
    const [active, setActive] = useState<'dados' | 'pedidos' | 'enderecos' | 'logout'>('dados')
    const [visibleDialogoLogout, setVisibleDialogoLogout] = useState(false)

    const [visibleFormularioEndereco, setVisibleFormularioEndereco] = useState(false)

    const [visibleDialogoExcluir, setVisibleDialogoExcluir] = useState(false)
    const [enderecoSelecionado, setEnderecoSelecionado] = useState<Endereco | null>(null)

    const [nome, setNome] = useState(usuario?.nome)
    const [dataNascimento, setDataNascimento] = useState(usuario?.dataNascimento)
    const [cpf, setCpf] = useState(usuario?.cpf)
    const [, setGenero] = useState(usuario?.genero)
    const [telefone1, setTelefone1] = useState(usuario?.telefone1)
    const [telefone2, setTelefone2] = useState(usuario?.telefone2)

    const [, setErroImagemTamanho] = useState<string | null>()
    const [, setImagemBase64] = useState<string | null>()
    const [imagemPreview, setImagemPreview] = useState<string | null>()


    console.log(usuario)

    useEffect(() => {
        if (usuario) {
            setNome(usuario.nome)
            setDataNascimento(usuario.dataNascimento)
            setCpf(usuario.cpf)
            setGenero(usuario.genero)
            setTelefone1(usuario.telefone1)
            setTelefone2(usuario.telefone2)
        }
    }, [usuario])

    useEffect(() => {
        if (!usuario) return

        const unsubscribe = onSnapshot(
            collection(db, "users", usuario.uid, "enderecos"),
            (snapshot) => {
                const lista = snapshot.docs.map(doc => ({
                    id: doc.id,
                    ...doc.data()
                })) as Endereco[]
                setEnderecos(lista)
            }
        )

        return () => unsubscribe()
    }, [usuario])

    const excluirEndereco = async (userId: string, enderecoId: string) => {
        try {
            await deleteDoc(doc(db, "users", userId, "enderecos", enderecoId))
            console.log("Endereço excluído com sucesso!")
        } catch (error) {
            console.error("Erro ao excluir endereço:", error)
        }
    }

    const handleExcluir = async (endereco: Endereco) => {
        const id = endereco.id
        if (!usuario) return
        await excluirEndereco(usuario.uid, id)
        // Atualiza a lista local removendo o item
        setEnderecos(prev => prev && prev.filter(endereco => endereco.id !== id))
    }

    console.log(usuario?.dataNascimento)
    function renderizarConteudo() {
        if (active === 'dados') {
            return (
                <>
                    <h3 className="uppercase font-bold text-xl text-black line-clamp-1">Dados Pessoais</h3>
                    <div className="flex flex-col my-3">
                        <p>Nome Completo:</p>
                        <input type="text" name="nome" id="nome" value={nome} onChange={(e) => setNome(e.target.value)} className="h-[30px] p-2 rounded-lg opacity-60" disabled />
                    </div>
                    <div className="flex flex-col my-3">
                        <p>Data de Nascimento:</p>
                        <input
                            type="date"
                            name="data"
                            id="data"
                            value={
                                dataNascimento
                                    ? (typeof dataNascimento === "string"
                                        ? dataNascimento.split("T")[0] // caso já seja string ISO
                                        : dataNascimento.toDate().toISOString().split("T")[0]) // caso seja Timestamp
                                    : ""
                            }
                            onChange={(e) => setDataNascimento(e.target.value)} className="h-[30px] p-2 rounded-lg opacity-60"
                            disabled
                        />
                    </div>
                    <div className="flex flex-col my-3">
                        <p>CPF:</p>
                        <input type="text" name="cpf" id="cpf" value={cpf} onChange={(e) => setCpf(e.target.value)} className="h-[30px] p-2 rounded-lg opacity-60" disabled />
                    </div>
                    <div>
                        <p>Gênero:</p>
                        {
                            usuario?.genero === 'masculino' ? (
                                <div className="grid grid-cols-2 gap-4">
                                    <div className="flex items-center gap-1">
                                        <input className="w-4 h-4" type="radio" name="genero" id="masculino" value="masculino" checked />
                                        <label className="leading-4" htmlFor="masculino">Masculino</label>
                                    </div>
                                    <div className="flex items-center gap-1">
                                        <input className="w-4 h-4" type="radio" name="genero" id="feminino" value="feminino" />
                                        <label className="leading-4" htmlFor="feminino">Feminino</label>
                                    </div>
                                </div>
                            ) : (
                                <div className="grid grid-cols-2 gap-4">
                                    <div className="flex items-center gap-1">
                                        <input className="w-4 h-4" type="radio" name="genero" id="masculino" value="masculino" />
                                        <label className="leading-4" htmlFor="masculino">Masculino</label>
                                    </div>
                                    <div className="flex items-center gap-1">
                                        <input className="w-4 h-4" type="radio" name="genero" id="feminino" value="feminino" checked />
                                        <label className="leading-4" htmlFor="feminino">Feminino</label>
                                    </div>
                                </div>
                            )
                        }
                    </div>
                    <div className="flex flex-col my-3">
                        <p>Telefone Principal:</p>
                        <div className="flex w-full">
                            <input type="text" name="telefone-1" id="telefone-1" value={telefone1} onChange={(e) => setTelefone1(e.target.value)} className="h-[30px] p-2 rounded-s-lg opacity-6 w-full" />
                            <button
                                className="bg-laranja px-2 uppercase font-bold text-white rounded-r-lg"
                                onClick={() => usuario && atualizarCampo(usuario.uid, "telefone1", telefone1 || "")}
                            >
                                Alterar
                            </button>
                        </div>
                    </div>
                    <div className="flex flex-col my-3">
                        <p>Telefone Secundário:</p>
                        <div className="flex w-full">
                            <input type="text" name="telefone-2" id="telefone-2" value={telefone2} onChange={(e) => setTelefone2(e.target.value)} className="h-[30px] p-2 rounded-s-lg opacity-6 w-full" />
                            <button
                                className="bg-laranja px-2 uppercase font-bold text-white rounded-r-lg"
                                onClick={() => usuario && atualizarCampo(usuario.uid, "telefone2", telefone2 || "")}
                            >
                                Alterar
                            </button>
                        </div>
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
                    <div>
                        <ul className="flex flex-col gap-4 md:grid md:grid-cols-2">
                            {
                                enderecos && enderecos.length > 0 ? (
                                    enderecos.map((endereco, i) => {
                                        return (
                                            <li className="bg-white p-4 rounded-lg h-[170px] flex flex-col" key={i}>
                                                <h2 className="font-bold text-xl leading-5">{endereco.rua}, {endereco.numero}</h2>
                                                <span className="flex leading-5">{endereco.bairro} - {endereco.cep} - {endereco.cidade}</span>
                                                <p className="flex leading-5">{endereco.nomeEndereco} - {endereco.nome}</p>
                                                <div className="grid grid-cols-2 gap-2 mt-auto">
                                                    <button
                                                        className="bg-laranja text-white text-sm py-1 flex items-center justify-center gap-2"
                                                        style={{ textShadow: '1px 1px 2px black' }}
                                                        onClick={() => {
                                                            setEnderecoSelecionado(endereco)
                                                            setVisibleFormularioEndereco(true)
                                                        }}
                                                    >
                                                        <p className="hidden sm:block md:hidden lg:block">Editar Endereço</p>
                                                        <FaEdit />
                                                    </button>
                                                    <button
                                                        className="bg-red-600 text-white text-sm py-1 flex items-center justify-center gap-2"
                                                        style={{ textShadow: '1px 1px 2px black' }}
                                                        onClick={() => {
                                                            setEnderecoSelecionado(endereco)
                                                            setVisibleDialogoExcluir(true)
                                                        }}
                                                    >
                                                        <p className="hidden sm:block md:hidden lg:block">Excluir Endereço</p>
                                                        <FaTrashAlt />
                                                    </button>
                                                </div>
                                                {visibleFormularioEndereco && (
                                                    <FormularioEndereco
                                                        visibleFormularioEndereco={visibleFormularioEndereco}
                                                        setVisibleFormularioEndereco={setVisibleFormularioEndereco}
                                                        endereco={enderecoSelecionado || undefined}
                                                    />
                                                )}
                                                {visibleDialogoExcluir && enderecoSelecionado && (
                                                    <CaixaDeDialogo
                                                        frase="Deseja realmente excluir este endereço?"
                                                        funcaoSim={() => {
                                                            handleExcluir(enderecoSelecionado)
                                                            setVisibleDialogoExcluir(false)
                                                            setEnderecoSelecionado(null)
                                                        }}
                                                        funcaoNao={() => {
                                                            setVisibleDialogoExcluir(false)
                                                            setEnderecoSelecionado(null)
                                                        }}
                                                        visibleDialogo
                                                    />
                                                )}
                                            </li>
                                        )
                                    })
                                ) : (
                                    <h2 className="uppercase font-bold text-lg text-center leading-5 md:col-start-1 md:col-end-3">Nenhum Endereço Cadastrado</h2>
                                )
                            }
                        </ul>
                    </div>
                    <button
                        onClick={() => {
                            setEnderecoSelecionado(null)
                            setVisibleFormularioEndereco(true)
                        }}
                        className="uppercase font-bold text-lg text-center bg-azul-escuro p-2 text-white mt-2"
                        style={{ textShadow: '1px 1px 2px black' }}
                    >
                        Adicionar Novo Endereço
                    </button>
                    <FormularioEndereco
                        visibleFormularioEndereco={visibleFormularioEndereco}
                        setVisibleFormularioEndereco={setVisibleFormularioEndereco}
                        endereco={enderecoSelecionado || undefined}
                        onSalvar={(enderecoAtualizado) => {
                            setEnderecos(prev => prev?.map(e => e.id === enderecoAtualizado.id ? enderecoAtualizado : e) || []);
                            setVisibleFormularioEndereco(false);
                            setEnderecoSelecionado(null);
                        }}
                    />
                </div>
            )
        } else if (active === 'logout') {
            return (
                <CaixaDeDialogo
                    frase="Deseja Realmente Sair?"
                    funcaoSim={() => logout && logout('/')}
                    funcaoNao={() => setVisibleDialogoLogout(false)}
                    visibleDialogo={visibleDialogoLogout}
                />
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
                        }}
                    >
                        <IoLogOutSharp className="text-2xl" />
                        <p className="uppercase font-bold text-xl">Sair</p>
                    </button>
                </div>

                <div className="flex flex-col gap-4 md:col-start-2 md:col-end-4">
                    <h1 className="uppercase font-bold text-3xl text-center">Bem vindo {usuario?.nome.split(' ')[0]}</h1>

                    <div className="relative w-fit mx-auto">
                        {usuario && (
                            <div className="w-[180px] h-[180px] rounded-full overflow-hidden relative mx-auto -mt-2">
                                <Image
                                    alt="Imagem do Usuário"
                                    src={imagemPreview || usuario?.imagemURL}
                                    fill
                                    className="object-cover"
                                />
                            </div>
                        )}

                        {/* Botão customizado */}
                        <button
                            type="button"
                            className="bg-laranja text-white p-2 rounded-full absolute bottom-0 -right-4 flex items-center gap-1"
                            onClick={() => document.getElementById("imagens")?.click()}
                        >
                            <FiPlus />
                        </button>
                    </div>

                    <fieldset>
                        {/* Input escondido */}
                        <input
                            className="hidden"
                            type="file"
                            id="imagens"
                            accept="image/*"
                            onChange={async (e) => {
                                // processa a imagem e pega o Base64
                                const base64 = await handleImagemChange(e, setErroImagemTamanho, setImagemBase64, setImagemPreview);
                                console.log(base64)
                                // só atualiza no Firebase se base64 existir
                                if (base64 && usuario?.uid) {
                                    await updateDoc(doc(db, "users", usuario.uid), {
                                        imagemURL: base64
                                    });
                                }
                            }}
                        />
                    </fieldset>

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

                <Link href={'/'} className="bg-laranja text-white  uppercase font-bold text-xl py-2 rounded-lg flex justify-center items-center text-center h-fit  mt-auto max-w-[300px] mx-auto w-full md:col-start-3 md:col-end-4 md:text-base xl:mx-0 xl:justify-self-end" style={{ textShadow: '1px 1px 2px black' }}>Voltar a página Inicial</Link>
            </div>
        </Template>
    )
}