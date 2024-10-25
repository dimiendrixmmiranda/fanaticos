import TipoFiltro from "../tipoFiltro/tipoFiltro";

export const listaDeFiltros: TipoFiltro[] = [
    {
        titulo: 'tipo',
        opcoes: [
            {
                valor: 'camisa',
                filtro: false,
                id: 1,
            },
            {
                valor: 'agasalho',
                filtro: false,
                id: 2,
            },
            {
                valor: 'chaveiro',
                filtro: false,
                id: 3,
            },
            {
                valor: 'box',
                filtro: false,
                id: 4,
            },
        ]
    },
    {
        titulo: 'marca',
        opcoes: [
            {
                valor: 'Adidas',
                filtro: false,
                id: 1,
            },
            {
                valor: 'Nike',
                filtro: false,
                id: 2,
            },
            {
                valor: 'Puma',
                filtro: false,
                id: 3,
            },
        ]
    },

]