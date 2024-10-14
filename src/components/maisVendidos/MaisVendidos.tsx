import { listaDeProdutos } from "@/core/constants"
import Card from "../card/Card"

export default function MaisVendidos() {
    // provisorio
    const listaMaisVendidos = listaDeProdutos.slice(0, 6)
    
    return (
        <div className="flex flex-col gap-4 my-4 xl:w-[95%] xl:mx-auto">
            <h2 className="bg-[--primaria] text-2xl font-bold text-center leading-5 py-2 xl:py-3">Os Mais Vendidos da Semana!</h2>
            <ul className="flex flex-wrap gap-2 justify-center">
                {
                    listaMaisVendidos.map((produto) => {
                        return (
                            <Card produto={produto} estilo="bg-[--secundaria] flex flex-col p-2 w-[210px] h-[340px]" estiloImg="h-[180px]" key={produto.id}></Card>
                        )
                    })
                }
            </ul>
        </div>
    )
}