import { listaDeProdutos } from "@/core/constants"
import Card from "../card/Card"

export default function MaisVendidos() {
    // provisorio
    const listaMaisVendidos = listaDeProdutos.slice(0, 8)
    return (
        <div className="flex flex-col gap-4 my-4 xl:w-[95%] xl:mx-auto">
            <h2 className="bg-[--primaria] text-2xl font-bold text-center leading-5 py-2 xl:py-3">Os Mais Vendidos da Semana!</h2>
            <ul className="flex flex-wrap gap-2 justify-center">
                {
                    listaMaisVendidos.map((produto) => {
                        return (
                            <Card produto={produto} estilo="md:w-[170px] md:h-[310px] xl:w-[160px]" estiloImg="h-[150px]" key={produto.id}></Card>
                        )
                    })
                }
            </ul>
        </div>
    )
}