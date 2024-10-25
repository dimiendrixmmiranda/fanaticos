import ContainerFiltro from "./ContainerFiltro";
import TipoFiltro from "@/core/tipoFiltro/tipoFiltro";

interface FiltroProps {
    listaDeFiltros: TipoFiltro[]
    tituloPesquisa: string
    setListaFiltros: (lista: TipoFiltro[]) => void
}

export default function Filtro({ listaDeFiltros, setListaFiltros, tituloPesquisa }: FiltroProps) {

    const handleFilterChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const categoria = e.target.dataset.categoria;
        const valor = e.target.name;

        const novaListaFiltro = listaDeFiltros.map(filtro => {
            if (filtro.titulo === categoria) {
                return {
                    ...filtro,
                    opcoes: filtro.opcoes.map((opcao) =>
                        opcao.valor === valor
                            ? { ...opcao, filtro: e.target.checked }
                            : opcao
                    ),
                };
            }
            return filtro;
        });
        setListaFiltros(novaListaFiltro);
    };

    return (
        <div className="text-black">
            <h2 className="text-center font-black uppercase text-xl mb-3 text-white bg-[--secundaria] py-1">Opções de Filtro de acordo com {`"${tituloPesquisa}"`}:</h2>
            <form className="flex flex-col gap-4">
                {listaDeFiltros.map((filtro) => ( // Use 'filtros' aqui
                    <div key={filtro.titulo} className="flex flex-col">
                        <h2 className="uppercase font-bold text-lg">{filtro.titulo}</h2>
                        <ul className="grid grid-cols-3">
                            {filtro.opcoes.map((opcao) => (
                                <ContainerFiltro
                                    key={opcao.valor}
                                    valor={opcao.valor}
                                    categoria={filtro.titulo}
                                    onchange={handleFilterChange}
                                    filtro={opcao.filtro}
                                />
                            ))}
                        </ul>
                    </div>
                ))}
                <button type="button" className="w-full bg-[--primaria] font-black text-xl text-white py-1">Filtrar</button>
            </form>
        </div>
    );
}
