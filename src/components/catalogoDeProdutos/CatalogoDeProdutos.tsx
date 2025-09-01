'use client'
import { useState } from "react";
import ProdutosFiltrados from "../produtosFiltrados/ProdutosFiltrados";
import { Paginator } from 'primereact/paginator';

export default function CatalogoDeProdutos() {
    const [marca, setMarca] = useState('outros')
    const [preco, setPreco] = useState('relevancia')
    const [esporte, setEsporte] = useState('todos-os-esportes')
    const [first, setFirst] = useState(0);
    const [rows, setRows] = useState(8);

    const [filtros, setFiltros] = useState<{ marca: string; preco: string; esporte: string }>({
        marca: "outros",
        preco: "relevancia",
        esporte: "todos-os-esportes",
    })


    function handleFiltros() {
        setFiltros({ marca, preco, esporte })
        console.log(filtros)
    }

    const onPageChange = (event: any) => {
        setFirst(event.first);
        setRows(event.rows);
    };
    return (
        <section className="p-4 flex flex-col gap-4 max-w-[1800px] mx-auto lg:grid lg:grid-cols-3 lg:gap-y-5">
            <div className="bg-azul-escuro text-white p-2 lg:col-start-1 lg:col-end-4">
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

                    <button className="bg-azul-escuro text-white w-full uppercase font-black text-xl py-1" onClick={() => handleFiltros()}>Filtrar</button>
                </fieldset>
            </div>

            {/* Vai ser renderizado em outro componente, vai receber o array final de filtros como parametro */}
            <ProdutosFiltrados
                filtros={filtros}
                first={first}
                rows={rows}
            />

            <div className="card lg:col-start-2 lg:col-end-4">
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
