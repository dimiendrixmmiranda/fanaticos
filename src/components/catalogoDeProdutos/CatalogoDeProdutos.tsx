import ProdutosFiltrados from "../produtosFiltrados/ProdutosFiltrados";

export default function CatalogoDeProdutos() {
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
                            <input className="w-4 h-4" type="radio" name="marca" id="nike" value="nike" />
                            <label className="leading-4" htmlFor="nike">Nike</label>
                        </div>
                        <div className="flex items-center gap-1">
                            <input className="w-4 h-4" type="radio" name="marca" id="adidas" value="adidas" />
                            <label className="leading-4" htmlFor="adidas">Adidas</label>
                        </div>
                        <div className="flex items-center gap-1">
                            <input className="w-4 h-4" type="radio" name="marca" id="new-balance" value="new-balance" />
                            <label className="leading-4" htmlFor="new-balance">New Balance</label>
                        </div>
                        <div className="flex items-center gap-1">
                            <input className="w-4 h-4" type="radio" name="marca" id="puma" value="puma" />
                            <label className="leading-4" htmlFor="puma">Puma</label>
                        </div>
                        <div className="flex items-center gap-1">
                            <input className="w-4 h-4" type="radio" name="marca" id="umbro" value="umbro" />
                            <label className="leading-4" htmlFor="umbro">Umbro</label>
                        </div>
                        <div className="flex items-center gap-1">
                            <input className="w-4 h-4" type="radio" name="marca" id="under-armour" value="under-armour" />
                            <label className="leading-4" htmlFor="under-armour">Under Armour</label>
                        </div>
                        <div className="flex items-center gap-1">
                            <input className="w-4 h-4" type="radio" name="marca" id="todas-as-marcas" value="todas-as-marcas" />
                            <label className="leading-4" htmlFor="todas-as-marcas">Todas as Marcas</label>
                        </div>
                        <div className="flex items-center gap-1">
                            <input className="w-4 h-4" type="radio" name="marca" id="outros" value="outros" />
                            <label className="leading-4" htmlFor="outros" defaultChecked>Outros</label>
                        </div>

                    </fieldset>

                    <fieldset className="my-4 grid grid-cols-3 gap-2 md:grid-cols-5 lg:grid-cols-2">
                        <legend className="col-start-1 col-end-3 uppercase font-bold text-lg">Por Preço:</legend>

                        <div className="flex items-center gap-1">
                            <input className="w-4 h-4" type="radio" name="preco" id="maior" value="maior" />
                            <label className="leading-4" htmlFor="maior">Maior</label>
                        </div>
                        <div className="flex items-center gap-1">
                            <input className="w-4 h-4" type="radio" name="preco" id="menor" value="menor" />
                            <label className="leading-4" htmlFor="menor">Menor</label>
                        </div>
                        <div className="flex items-center gap-1">
                            <input className="w-4 h-4" type="radio" name="preco" id="relevancia" value="relevancia" />
                            <label className="leading-4" htmlFor="relevancia" defaultChecked>Relevância</label>
                        </div>

                    </fieldset>

                    <fieldset className="my-4 grid grid-cols-3 gap-2 md:grid-cols-5 lg:grid-cols-2">
                        <legend className="col-start-1 col-end-3 uppercase font-bold text-lg">Por Esporte:</legend>

                        <div className="flex items-center gap-1">
                            <input className="w-4 h-4" type="radio" name="esporte" id="futebol" value="futebol" />
                            <label className="leading-4" htmlFor="futebol">Futebol</label>
                        </div>
                        <div className="flex items-center gap-1">
                            <input className="w-4 h-4" type="radio" name="esporte" id="nba" value="nba" />
                            <label className="leading-4" htmlFor="nba">NBA</label>
                        </div>
                        <div className="flex items-center gap-1">
                            <input className="w-4 h-4" type="radio" name="esporte" id="nfl" value="nfl" />
                            <label className="leading-4" htmlFor="nfl">NFL</label>
                        </div>
                        <div className="flex items-center gap-1">
                            <input className="w-4 h-4" type="radio" name="esporte" id="e-sports" value="e-sports" />
                            <label className="leading-4" htmlFor="e-sports">E-Sports</label>
                        </div>
                        <div className="flex items-center gap-1">
                            <input className="w-4 h-4" type="radio" name="esporte" id="formula-1" value="formula-1" />
                            <label className="leading-4" htmlFor="formula-1">Formula 1</label>
                        </div>
                        <div className="flex items-center gap-1">
                            <input className="w-4 h-4" type="radio" name="esporte" id="todos-os-esportes" value="todos-os-esportes" />
                            <label className="leading-4" htmlFor="todos-os-esportes" defaultChecked>Todos os Esportes</label>
                        </div>

                    </fieldset>

                    <button className="bg-azul-escuro text-white w-full uppercase font-black text-xl py-1">Filtrar</button>
                </fieldset>
            </div>

            {/* Vai ser renderizado em outro componente, vai receber o array final de filtros como parametro */}
            <ProdutosFiltrados />
        </section>
    )
}