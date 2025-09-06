import ResultadoDaBusca from "@/components/resultadoDaBusca/ResultadoDaBusca";
import Template from "@/components/template/Template";
import { marcas } from "@/constants/marcas";
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
    const listaDeMarcas = marcas.map((marca) => marca.id.toLowerCase());
    const pesquisouPorMarca = listaDeMarcas.includes(termoPesquisado);

    const produtosFirebaseFiltrados = productsFirebase.filter((produto) => {
        if (pesquisouPorMarca) {
            // 👉 filtra só pela marca
            return produto.marca?.toLowerCase() === termoPesquisado;
        } else {
            // 👉 continua filtro por categoria/nome/descrição
            const textoProduto = `${produto.category} ${produto.name} ${produto.description}`.toLowerCase();
            return palavrasPesquisadas.some((palavra) => textoProduto.includes(palavra));
        }
    });

    const stripeIds = produtosFirebaseFiltrados.map((p) => p.stripeId);

    const produtosStripeFiltrados = productsStripe.filter((p) =>
        stripeIds.includes(p.id)
    )

    return (
        <Template>
            <div className="p-4 max-w-[1700px] mx-auto">
                <h1 className="uppercase font-bold text-3xl leading-8 text-black">Resultados encontrados para: <b className="font-black text-red-600">{termoPesquisado}</b></h1>
                <div className="flex flex-col lg:grid lg:grid-cols-3 3xl:grid-cols-4">
                    <div>
                        filtros
                    </div>
                    <div className="lg:col-start-2 lg:col-end-4 3xl:col-end-5">
                        <ResultadoDaBusca produtosFirebase={produtosFirebaseFiltrados} produtosStripe={produtosStripeFiltrados} />
                    </div>
                </div>
            </div>
        </Template>
    );
}
