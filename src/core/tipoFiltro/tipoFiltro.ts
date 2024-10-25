interface FiltroUnico {
    id: number
    filtro: boolean
    valor: string
}

export default interface TipoFiltro {
    titulo: string
    opcoes: FiltroUnico[]
}