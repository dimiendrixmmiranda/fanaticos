import { getProducts } from "@/lib/stripe";
import CarrosselOfertasDoDia from "../carrossel/CarrosselOfertasDoDia";
import ProductFirebase from "@/types/ProductFirebase";
import { getProductsFirebase } from "@/lib/getProductsFirebase";

export default async function Lancamentos() {
    const productsStripe = await getProducts()
    const productsFirebase: ProductFirebase[] = await getProductsFirebase()
    // console.log(productsStripe)
    // console.log(productsFirebase)
    return (
        <section className="flex flex-col gap-4 mt-4">
            <h2 className="uppercase font-black text-3xl bg-laranja flex justify-center w-full items-center py-2 text-azul-escuro text-center md:text-4xl md:mx-auto">Lançamentos!</h2>
            <CarrosselOfertasDoDia produtosFirebase={productsFirebase} produtosStripe={productsStripe} />
        </section>
    )
}