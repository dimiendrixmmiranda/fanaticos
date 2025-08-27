import ResultadoDaBusca from "@/components/resultadoDaBusca/ResultadoDaBusca";
import Template from "@/components/template/Template";
import { getProductsFirebase } from "@/lib/getProductsFirebase";
import { getProducts } from "@/lib/stripe";
import ProductFirebase from "@/types/ProductFirebase";

type DynamicParams<T> = {
    params: Promise<T>;
}

export default async function Page({ params }: DynamicParams<{ slug: string }>) {
    const { slug } = await params; // 👈 await obrigatório no Next 15
    const termoPesquisado = slug.toLowerCase();

    const productsFirebase: ProductFirebase[] = await getProductsFirebase();
    const productsStripe = await getProducts()

    const produtosFirebaseFiltrados = productsFirebase.filter((produto) => {
        return (
            produto.category.toLowerCase().includes(termoPesquisado) ||
            produto.name.toLowerCase().includes(termoPesquisado) ||
            produto.description.toLowerCase().includes(termoPesquisado)
        )
    })

    const stripeIds = produtosFirebaseFiltrados.map((p) => p.stripeId);

    const produtosStripeFiltrados = productsStripe.filter((p) =>
        stripeIds.includes(p.id)
    )

    return (
        <Template>
            <h1 className="uppercase font-bold text-3xl leading-8 text-black">Resultados encontrados para: <b className="font-black text-red-600">{slug}</b></h1>
            <ResultadoDaBusca produtosFirebase={produtosFirebaseFiltrados} produtosStripe={produtosStripeFiltrados} />
        </Template>
    );
}
