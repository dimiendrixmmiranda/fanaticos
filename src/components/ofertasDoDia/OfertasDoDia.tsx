import { getProducts } from "@/lib/stripe";
import CarrosselOfertasDoDia from "../carrossel/CarrosselOfertasDoDia";
import ProductFirebase from "@/types/ProductFirebase";
import { getProductsFirebase } from "@/lib/getProductsFirebase";

export default async function OfertasDoDia() {
    const productsStripe = await getProducts()
    const productsFirebase: ProductFirebase[] = await getProductsFirebase()
    console.log(productsFirebase)
    console.log(productsStripe)
    return (
        <section className="flex flex-col gap-4 mt-4">
            <h2 className="uppercase font-black text-3xl bg-azul-escuro flex justify-center w-full items-center py-2 text-laranja text-center md:text-4xl md:mx-auto">Ofertas do Dia!</h2>
            <CarrosselOfertasDoDia produtosFirebase={productsFirebase} produtosStripe={productsStripe} />
        </section>
    )
}