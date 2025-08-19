export const formatarPreco = (preco: number | null) => {
    if(!preco) return "RS 0,00"

    return new Intl.NumberFormat("pt-BR", {
        style: 'currency',
        currency: 'BRL'
    }).format(preco)
}