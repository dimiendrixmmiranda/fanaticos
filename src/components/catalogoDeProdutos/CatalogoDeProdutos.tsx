'use client'
import { useEffect, useState } from "react";
import ProdutosFiltrados from "../produtosFiltrados/ProdutosFiltrados";
import { Paginator, PaginatorPageChangeEvent } from 'primereact/paginator';
import Filtros from "@/types/Filtros";
import useWindowSize from "@/data/hooks/useWindowsSize";

export default function CatalogoDeProdutos() {
    const [termo,] = useState('')
    const [marca, setMarca] = useState('todas-as-marcas')
    const [preco, setPreco] = useState('relevancia')
    const [esporte, setEsporte] = useState('todos')
    const [categoria, setCategoria] = useState('todos')
    const [genero, setGenero] = useState('todos')
    const [faixaPreco, setFaixaPreco] = useState('todos')

    const [first, setFirst] = useState(0);
    const [rows, setRows] = useState(0);

    const { width } = useWindowSize({ debounce: 100, persistent: false })

    const [filtros, setFiltros] = useState<Filtros>({
        marca: "todas-as-marcas",
        preco: "relevancia",
        esporte: "todos",
        categoria: "todos",
        genero: "todos",
        faixaPreco: "todos",
        termo: ''
    })

    useEffect(() => {
        if (width < 424) {
            setRows(6)
        } else if (width > 424 && width < 767) {
            setRows(8)
        } else if (width > 767 && width < 1023) {
            setRows(6)
        } else if (width > 1439 && width < 1799) {
            setRows(9)
        } else if(width > 1799){
            setRows(8)
        }
    }, [width])

    function handleFiltros() {
        setFiltros({ marca, preco, esporte, categoria, genero, faixaPreco, termo })
        console.log(filtros)
    }

    const onPageChange = (event: PaginatorPageChangeEvent) => {
        setFirst(event.first);
        setRows(event.rows);
    }

    return (
        <section className="p-4 flex flex-col gap-4 max-w-[1700px] mx-auto lg:grid lg:grid-cols-3 lg:gap-y-5 3xl:grid-cols-4">
            <div className="bg-azul-escuro text-white p-2 lg:col-start-1 lg:col-end-4 3xl:col-end-5">
                <h2 className="uppercase font-black text-2xl text-center">Confira Todos os Nossos Produtos:</h2>
            </div>

            <div className="lg:col-start-1 lg:col-end-2 lg:w-fit lg:h-fit lg:pb-8 lg:pr-16 lg:border-r-2 lg:border-r-azul-escuro">
                <fieldset className="text-black">
                    <legend className="uppercase font-black text-3xl">Filtros</legend>

                    <fieldset className="my-4 grid grid-cols-3 gap-2 md:grid-cols-5 lg:grid-cols-2">
                        <legend className="col-start-1 col-end-3 uppercase font-bold text-lg">Por Marca:</legend>

                        <div className="flex items-center gap-1">
                            <input className="w-4 h-4" type="radio" name="marca" id="nike" value="nike" onChange={(e) => setMarca(e.target.value)} />
                            <label className="leading-4" htmlFor="nike">Nike</label>
                        </div>
                        <div className="flex items-center gap-1">
                            <input className="w-4 h-4" type="radio" name="marca" id="adidas" value="adidas" onChange={(e) => setMarca(e.target.value)} />
                            <label className="leading-4" htmlFor="adidas">Adidas</label>
                        </div>
                        <div className="flex items-center gap-1">
                            <input className="w-4 h-4" type="radio" name="marca" id="new-balance" value="new-balance" onChange={(e) => setMarca(e.target.value)} />
                            <label className="leading-4" htmlFor="new-balance">New Balance</label>
                        </div>
                        <div className="flex items-center gap-1">
                            <input className="w-4 h-4" type="radio" name="marca" id="puma" value="puma" onChange={(e) => setMarca(e.target.value)} />
                            <label className="leading-4" htmlFor="puma">Puma</label>
                        </div>
                        <div className="flex items-center gap-1">
                            <input className="w-4 h-4" type="radio" name="marca" id="umbro" value="umbro" onChange={(e) => setMarca(e.target.value)} />
                            <label className="leading-4" htmlFor="umbro">Umbro</label>
                        </div>
                        <div className="flex items-center gap-1">
                            <input className="w-4 h-4" type="radio" name="marca" id="under-armour" value="under-armour" onChange={(e) => setMarca(e.target.value)} />
                            <label className="leading-4" htmlFor="under-armour">Under Armour</label>
                        </div>
                        <div className="flex items-center gap-1">
                            <input className="w-4 h-4" type="radio" name="marca" id="outros" value="outros" onChange={(e) => setMarca(e.target.value)} />
                            <label className="leading-4" htmlFor="outros">Outros</label>
                        </div>
                        <div className="flex items-center gap-1">
                            <input className="w-4 h-4" type="radio" name="marca" id="todas-as-marcas" value="todas-as-marcas" defaultChecked onChange={(e) => setMarca(e.target.value)} />
                            <label className="leading-4" htmlFor="todas-as-marcas">Todas as Marcas</label>
                        </div>

                    </fieldset>

                    <fieldset className="my-4 grid grid-cols-3 gap-2 md:grid-cols-5 lg:grid-cols-2">
                        <legend className="col-start-1 col-end-3 uppercase font-bold text-lg">Por Preço:</legend>

                        <div className="flex items-center gap-1">
                            <input className="w-4 h-4" type="radio" name="preco" id="maior" value="maior" onChange={(e) => setPreco(e.target.value)} />
                            <label className="leading-4" htmlFor="maior">Maior</label>
                        </div>
                        <div className="flex items-center gap-1">
                            <input className="w-4 h-4" type="radio" name="preco" id="menor" value="menor" onChange={(e) => setPreco(e.target.value)} />
                            <label className="leading-4" htmlFor="menor">Menor</label>
                        </div>
                        <div className="flex items-center gap-1">
                            <input className="w-4 h-4" type="radio" name="preco" id="relevancia" value="relevancia" defaultChecked onChange={(e) => setPreco(e.target.value)} />
                            <label className="leading-4" htmlFor="relevancia">Relevância</label>
                        </div>

                    </fieldset>

                    <fieldset className="my-4 grid grid-cols-3 gap-2 md:grid-cols-5 lg:grid-cols-2">
                        <legend className="col-start-1 col-end-3 uppercase font-bold text-lg">Por Esporte:</legend>
                        <div className="flex items-center gap-1">
                            <input className="w-4 h-4" type="radio" name="esporte" id="futebol" value="futebol" onChange={(e) => setEsporte(e.target.value)} />
                            <label className="leading-4" htmlFor="futebol">Futebol</label>
                        </div>
                        <div className="flex items-center gap-1">
                            <input className="w-4 h-4" type="radio" name="esporte" id="nba" value="nba" onChange={(e) => setEsporte(e.target.value)} />
                            <label className="leading-4" htmlFor="nba">NBA</label>
                        </div>
                        <div className="flex items-center gap-1">
                            <input className="w-4 h-4" type="radio" name="esporte" id="nfl" value="nfl" onChange={(e) => setEsporte(e.target.value)} />
                            <label className="leading-4" htmlFor="nfl">NFL</label>
                        </div>
                        <div className="flex items-center gap-1">
                            <input className="w-4 h-4" type="radio" name="esporte" id="e-sports" value="e-sports" onChange={(e) => setEsporte(e.target.value)} />
                            <label className="leading-4" htmlFor="e-sports">E-Sports</label>
                        </div>
                        <div className="flex items-center gap-1">
                            <input className="w-4 h-4" type="radio" name="esporte" id="formula-1" value="formula-1" onChange={(e) => setEsporte(e.target.value)} />
                            <label className="leading-4" htmlFor="formula-1">Formula 1</label>
                        </div>
                        <div className="flex items-center gap-1">
                            <input className="w-4 h-4" type="radio" name="esporte" id="todos-os-esportes" value="todos-os-esportes" defaultChecked onChange={(e) => setEsporte(e.target.value)} />
                            <label className="leading-4" htmlFor="todos-os-esportes">Todos os Esportes</label>
                        </div>
                    </fieldset>

                    <fieldset className="my-4 grid grid-cols-3 gap-2 md:grid-cols-5 lg:grid-cols-2">
                        <legend className="col-start-1 col-end-3 uppercase font-bold text-lg">Categoria de produto:</legend>
                        <div className="flex items-center gap-1">
                            <input className="w-4 h-4" type="radio" name="categoria" id="camisas" value="camisas" onChange={(e) => setCategoria(e.target.value)} />
                            <label className="leading-4" htmlFor="camisas">Camisas</label>
                        </div>
                        <div className="flex items-center gap-1">
                            <input className="w-4 h-4" type="radio" name="categoria" id="moletons-jaquetas" value="moletons-jaquetas" onChange={(e) => setCategoria(e.target.value)} />
                            <label className="leading-4" htmlFor="moletons-jaquetas">Moletons / Jaquetas</label>
                        </div>
                        <div className="flex items-center gap-1">
                            <input className="w-4 h-4" type="radio" name="categoria" id="calcados" value="calcados" onChange={(e) => setCategoria(e.target.value)} />
                            <label className="leading-4" htmlFor="calcados">Calçados</label>
                        </div>
                        <div className="flex items-center gap-1">
                            <input className="w-4 h-4" type="radio" name="categoria" id="bones" value="bones" onChange={(e) => setCategoria(e.target.value)} />
                            <label className="leading-4" htmlFor="bones">Bonés</label>
                        </div>
                        <div className="flex items-center gap-1">
                            <input className="w-4 h-4" type="radio" name="categoria" id="acessorios" value="acessorios" onChange={(e) => setCategoria(e.target.value)} />
                            <label className="leading-4" htmlFor="acessorios">Acessórios</label>
                        </div>
                        <div className="flex items-center gap-1">
                            <input className="w-4 h-4" type="radio" name="categoria" id="todos" value="todos" defaultChecked onChange={(e) => setCategoria(e.target.value)} />
                            <label className="leading-4" htmlFor="todos">Todos</label>
                        </div>
                    </fieldset>

                    <fieldset className="my-4 grid grid-cols-3 gap-2 md:grid-cols-5 lg:grid-cols-2">
                        <legend className="col-start-1 col-end-3 uppercase font-bold text-lg">Por gênero:</legend>
                        <div className="flex items-center gap-1">
                            <input className="w-4 h-4" type="radio" name="genero" id="masculino" value="masculino" onChange={(e) => setGenero(e.target.value)} />
                            <label className="leading-4" htmlFor="masculino">Masculino</label>
                        </div>
                        <div className="flex items-center gap-1">
                            <input className="w-4 h-4" type="radio" name="genero" id="feminino" value="feminino" onChange={(e) => setGenero(e.target.value)} />
                            <label className="leading-4" htmlFor="feminino">Feminino</label>
                        </div>
                        <div className="flex items-center gap-1">
                            <input className="w-4 h-4" type="radio" name="genero" id="infantil" value="infantil" onChange={(e) => setGenero(e.target.value)} />
                            <label className="leading-4" htmlFor="infantil">Infantil</label>
                        </div>
                        <div className="flex items-center gap-1">
                            <input className="w-4 h-4" type="radio" name="genero" id="unissex" value="unissex" onChange={(e) => setGenero(e.target.value)} />
                            <label className="leading-4" htmlFor="unissex">Unissex</label>
                        </div>
                        <div className="flex items-center gap-1">
                            <input className="w-4 h-4" type="radio" name="genero" id="todos" value="todos" defaultChecked onChange={(e) => setGenero(e.target.value)} />
                            <label className="leading-4" htmlFor="todos">Todos</label>
                        </div>
                    </fieldset>

                    <fieldset className="my-4 grid grid-cols-3 gap-2 md:grid-cols-5 lg:grid-cols-2">
                        <legend className="col-start-1 col-end-3 uppercase font-bold text-lg">Por faixa de preço:</legend>
                        <div className="flex items-center gap-1">
                            <input className="w-4 h-4" type="radio" name="faixaPreco" id="ate-100" value="ate-100" onChange={(e) => setFaixaPreco(e.target.value)} />
                            <label className="leading-4" htmlFor="ate-100">Até R$100</label>
                        </div>
                        <div className="flex items-center gap-1">
                            <input className="w-4 h-4" type="radio" name="faixaPreco" id="de-100-ate-279" value="de-100-ate-279" onChange={(e) => setFaixaPreco(e.target.value)} />
                            <label className="leading-4" htmlFor="de-100-ate-279">De R$100 até R$279</label>
                        </div>
                        <div className="flex items-center gap-1">
                            <input className="w-4 h-4" type="radio" name="faixaPreco" id="de-279-ate-449" value="de-279-ate-449" onChange={(e) => setFaixaPreco(e.target.value)} />
                            <label className="leading-4" htmlFor="de-279-ate-449">De R$279 até R$479</label>
                        </div>
                        <div className="flex items-center gap-1">
                            <input className="w-4 h-4" type="radio" name="faixaPreco" id="acima-de-449" value="acima-de-449" onChange={(e) => setFaixaPreco(e.target.value)} />
                            <label className="leading-4" htmlFor="acima-de-449">Acima de R$479</label>
                        </div>
                        <div className="flex items-center gap-1">
                            <input className="w-4 h-4" type="radio" name="faixaPreco" id="todos" value="todos" defaultChecked onChange={(e) => setFaixaPreco(e.target.value)} />
                            <label className="leading-4" htmlFor="todos">Todos</label>
                        </div>
                    </fieldset>

                    <button className="bg-azul-escuro text-white w-full uppercase font-black text-xl py-1" onClick={() => handleFiltros()}>Filtrar</button>
                </fieldset>
            </div>

            {/* Vai ser renderizado em outro componente, vai receber o array final de filtros como parametro */}
            <ProdutosFiltrados
                filtros={filtros}
                first={first}
                rows={rows}
                termo={termo}
            />

            <div className="card lg:col-start-2 lg:col-end-4 3xl:col-end-5">
                <Paginator
                    first={first}
                    rows={rows}
                    totalRecords={120} // pode ser o length do array filtrado
                    rowsPerPageOptions={[10, 20, 30]}
                    onPageChange={onPageChange}
                    pageLinkSize={3}
                    template="PrevPageLink PageLinks NextPageLink"
                />
            </div>
        </section>
    )
}
