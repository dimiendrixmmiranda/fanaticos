import Link from "next/link"
import { useState } from "react"
import { TiDelete } from "react-icons/ti"

interface FormularioEnderecoProps {
    setVisibleFormularioEndereco: (visibleFormularioEndereco: boolean) => void
}

export default function FormularioEndereco({ setVisibleFormularioEndereco }: FormularioEnderecoProps) {
    const [nomeEndereco, setNomeEndereco] = useState('')
    const [cep, setCep] = useState('')
    const [nome, setNome] = useState('')
    const [rua, setRua] = useState('')
    const [numero, setNumero] = useState('')
    const [bairro, setBairro] = useState('')
    const [complemento, setComplemento] = useState('')
    const [pontoDeReferencia, setPontoDeReferencia] = useState('')
    const [estado, setEstado] = useState('')
    const [cidade, setCidade] = useState('')

    return (
        <form className="flex flex-col gap-3 bg-azul-escuro text-white p-4 fixed top-[50%] left-[50%] w-[95%] z-20 max-w-[450px]" style={{ transform: 'translate(-50%, -50%)' }}>
            <div className="flex">
                <h2 className="flex-1 uppercase font-bold">Adicionar Novo Endereço:</h2>
                <button className="text-2xl" onClick={() => setVisibleFormularioEndereco(false)}><TiDelete /></button>
            </div>
            <fieldset className="flex flex-col">
                <label htmlFor="nomeEndereco">Nome do Endereço:</label>
                <input
                    className="h-[30px] p-2 text-black rounded-md"
                    type="text"
                    name="nomeEndereco"
                    id="nomeEndereco"
                    placeholder="Exemplo: Minha Casa, Trabalho..."
                    value={nomeEndereco}
                    onChange={(e) => setNomeEndereco(e.target.value)}
                />
            </fieldset>
            <fieldset className="flex flex-col">
                <label htmlFor="cep">CEP:</label>
                <input
                    className="h-[30px] p-2 text-black rounded-md"
                    type="text"
                    name="cep"
                    id="cep"
                    value={cep}
                    onChange={(e) => setCep(e.target.value)}
                />
                <Link href={'/'} className="text-xs underline mt-1 w-fit">Não sei meu cep</Link>
            </fieldset>
            <fieldset className="flex flex-col">
                <label htmlFor="nome">Nome Completo do Destinatário:</label>
                <input
                    className="h-[30px] p-2 text-black rounded-md"
                    type="text"
                    name="nome"
                    id="nome"
                    value={nome}
                    onChange={(e) => setNome(e.target.value)}
                />
            </fieldset>
            <fieldset className="flex flex-col">
                <label htmlFor="rua">Nome da Rua:</label>
                <input
                    className="h-[30px] p-2 text-black rounded-md"
                    type="text"
                    name="rua"
                    id="rua"
                    value={rua}
                    onChange={(e) => setRua(e.target.value)}
                />
            </fieldset>
            <fieldset className="flex flex-col">
                <label htmlFor="numero">Numero Da Casa:</label>
                <input
                    className="h-[30px] p-2 text-black rounded-md"
                    type="text"
                    name="numero"
                    id="numero"
                    value={numero}
                    onChange={(e) => setNumero(e.target.value)}
                />
            </fieldset>
            <fieldset className="flex flex-col">
                <label htmlFor="bairro">Bairro</label>
                <input
                    className="h-[30px] p-2 text-black rounded-md"
                    type="text"
                    name="bairro"
                    id="bairro"
                    value={bairro}
                    onChange={(e) => setBairro(e.target.value)}
                />
            </fieldset>
            <fieldset className="flex flex-col">
                <label htmlFor="complemento">Complemento do Endereço (Opcional):</label>
                <input
                    className="h-[30px] p-2 text-black rounded-md"
                    type="text"
                    name="complemento"
                    id="complemento"
                    value={complemento}
                    onChange={(e) => setComplemento(e.target.value)}
                />
            </fieldset>
            <fieldset className="flex flex-col">
                <label htmlFor="pontoDeReferencia">Ponto de Referencia (Opcional):</label>
                <input
                    className="h-[30px] p-2 text-black rounded-md"
                    type="text"
                    name="pontoDeReferencia"
                    id="pontoDeReferencia"
                    value={pontoDeReferencia}
                    onChange={(e) => setPontoDeReferencia(e.target.value)}
                />
            </fieldset>
            <fieldset className="flex flex-col">
                <label htmlFor="estado">Estado:</label>
                <input
                    className="h-[30px] p-2 text-black rounded-md"
                    type="text"
                    name="estado"
                    id="estado"
                    value={estado}
                    onChange={(e) => setEstado(e.target.value)}
                />
            </fieldset>
            <fieldset className="flex flex-col">
                <label htmlFor="cidade">Cidade:</label>
                <input
                    className="h-[30px] p-2 text-black rounded-md"
                    type="text"
                    name="cidade"
                    id="cidade"
                    value={cidade}
                    onChange={(e) => setCidade(e.target.value)}
                />
            </fieldset>
            <div className="flex flex-col gap-2 md:grid md:grid-cols-2">
                <button className="bg-green-600 uppercase font-bold py-1" style={{ textShadow: '1px 1px 2px black' }}>Salvar Informações</button>
                <button
                    className="bg-red-600 uppercase font-bold py-1"
                    style={{ textShadow: '1px 1px 2px black' }}
                    onClick={() => setVisibleFormularioEndereco(false)}
                >
                    Cancelar
                </button>
            </div>
        </form>
    )
}