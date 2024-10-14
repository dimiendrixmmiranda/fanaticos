export interface Filtro {
    id: string
    filtro: boolean
    onchange: (event: React.ChangeEvent<HTMLInputElement>) => void
}