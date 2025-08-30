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
    const termoPesquisado = decodeURIComponent(slug).toLowerCase();

    const productsFirebase: ProductFirebase[] = await getProductsFirebase();
    const productsStripe = await getProducts()

    const palavrasPesquisadas = termoPesquisado.split(" ").filter(Boolean);

    const produtosFirebaseFiltrados = productsFirebase.filter((produto) => {
        const textoProduto = `${produto.category} ${produto.name} ${produto.description} ${produto.marca}`.toLowerCase();

        // retorna true se pelo menos UMA palavra bater
        return palavrasPesquisadas.some((palavra) => textoProduto.includes(palavra));
    });

    const stripeIds = produtosFirebaseFiltrados.map((p) => p.stripeId);

    const produtosStripeFiltrados = productsStripe.filter((p) =>
        stripeIds.includes(p.id)
    )

    return (
        <Template>
            <h1 className="uppercase font-bold text-3xl leading-8 text-black">Resultados encontrados para: <b className="font-black text-red-600">{termoPesquisado}</b></h1>
            <ResultadoDaBusca produtosFirebase={produtosFirebaseFiltrados} produtosStripe={produtosStripeFiltrados} />
        </Template>
    );
}
