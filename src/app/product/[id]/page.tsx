import AddCart from "@/components/base/AddCart"
import AddFavoritos from "@/components/base/AddFavoritos"
import CarrosselProdutosSimilares from "@/components/carrossel/CarrosselProdutosSimilares"
import Galeria from "@/components/galeria/Galeria"
import Template from "@/components/template/Template"
import { getProductsFirebase } from "@/lib/getProductsFirebase"
import ProductFirebase from "@/types/ProductFirebase"
import { formatarPreco } from "@/utils/FormatarPreco"
import Link from "next/link"
import { Accordion, AccordionTab } from 'primereact/accordion';
import { FaMagnifyingGlass } from "react-icons/fa6"
import Stripe from "stripe"

type ProductPageProps = {
	params: Promise<{
		id: string
	}>
}


async function getProduct(id: string) {
	const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string, {
		apiVersion: "2025-07-30.basil",
	})
	const produto = await stripe.products.retrieve(id)
	const price = await stripe.prices.list({
		product: produto.id,
		limit: 1
	})
	return {
		id: produto.id,
		name: produto.name,
		price: (price.data[0].unit_amount ?? 0) / 100,
		stripePriceId: price.data[0]?.id ?? null,
		quantity: 1,
		image: produto.images[0] || "",
		description: produto.description || null,
		currency: price.data[0].currency,
	}

}


export default async function ProductPage({ params }: ProductPageProps) {
	const { id } = await params
	const productStripe = await getProduct(id)
	const productsFirebase: ProductFirebase[] = await getProductsFirebase()
	const productFirebase = productsFirebase.filter(p => p.stripeId === id)[0]

	return (
		<Template>
			<div className="p-4 flex flex-col gap-4 max-w-[1500px] mx-auto lg:grid lg:grid-cols-2 paginaProduto">
				<div className="uppercase font-black text-4xl text-azul-escuro lg:col-start-1 lg:col-end-3" style={{ textShadow: '1px 1px 2px black' }}>{productStripe.name}</div>
				<div className="flex flex-col gap-4 lg:col-start-1 lg:col-end-2">
					<Galeria produtoFirebase={productFirebase} />
					<div className="lg:hidden">
						<ul className="grid grid-cols-5 gap-2">
							<li className="bg-zinc-300 text-azul-escuro rounded-md border border-azul-escuro flex justify-center items-center text-center p-2">P</li>
							<li className="bg-zinc-300 text-azul-escuro rounded-md border border-azul-escuro flex justify-center items-center text-center p-2">M</li>
							<li className="bg-zinc-300 text-azul-escuro rounded-md border border-azul-escuro flex justify-center items-center text-center p-2">G</li>
							<li className="bg-zinc-300 text-azul-escuro rounded-md border border-azul-escuro flex justify-center items-center text-center p-2">GG</li>
							<li className="bg-zinc-300 text-azul-escuro rounded-md border border-azul-escuro flex justify-center items-center text-center p-2">EGG</li>
						</ul>
					</div>
				</div>
				<div className="lg:col-start-2 lg:col-end-3 flex flex-col gap-4">
					<div className="hidden lg:flex flex-col gap-2">
						<h4 className="text-azul-escuro uppercase font-bold text-xl">Selecione o Tamanho:</h4>
						<ul className="grid grid-cols-5 gap-2">
							<li className="bg-zinc-300 text-azul-escuro rounded-md border border-azul-escuro flex justify-center items-center text-center p-2">P</li>
							<li className="bg-zinc-300 text-azul-escuro rounded-md border border-azul-escuro flex justify-center items-center text-center p-2">M</li>
							<li className="bg-zinc-300 text-azul-escuro rounded-md border border-azul-escuro flex justify-center items-center text-center p-2">G</li>
							<li className="bg-zinc-300 text-azul-escuro rounded-md border border-azul-escuro flex justify-center items-center text-center p-2">GG</li>
							<li className="bg-zinc-300 text-azul-escuro rounded-md border border-azul-escuro flex justify-center items-center text-center p-2">EGG</li>
						</ul>
					</div>
					<div className="grid grid-cols-2 gap-4">
						<button className="bg-azul-escuro uppercase font-bold w-full p-2">Descubra seu Tamanho</button>
						<button className="bg-azul-escuro uppercase font-bold w-full p-2">Tabela de Medidas</button>
					</div>
					<div className="text-azul-escuro flex flex-col lg:items-end lg:justify-center lg:flex-1">
						<div className="uppercase font-bold text-3xl lg:text-5xl xl:text-7xl">{formatarPreco(productStripe.price)}</div>
						<div className="uppercase font-bold text-xl text-end lg:text-2xl xl:text-3xl">ou R$399,99 em 5x de R$ 80,00 sem juros</div>
						<div className="flex items-center gap-4 mt-2">
							<Link href={'/'}>Compartilhe</Link>
							<Link href={'/'}>Copiar Link</Link>
						</div>
					</div>
					<div className="mt-auto">
						<p className="text-azul-escuro uppercase font-bold text-2xl">Calcular Frete:</p>
						<div className="relative">
							<input className=" w-full h-[30px] rounded-lg p-2 text-black md:h-[40px]" type="text" name="calcularFrete" id="calcularFrete" placeholder="Digite seu CEP ..." />
							<button className="w-[30px] h-[30px] absolute top-0 right-0 bg-laranja flex justify-center items-center rounded-e-lg md:w-[140px] md:flex md:gap-2 md:h-[40px]">
								<p className="hidden uppercase font-bold md:block">Calcular</p>
								<FaMagnifyingGlass />
							</button>
						</div>
					</div>
					<div className="flex flex-col gap-2">
						<button className="bg-laranja text-white uppercase font-black text-lg py-1 rounded-lg" style={{ textShadow: '1px 1px 2px black' }}>Comprar</button>
						<AddCart produto={productStripe} textoBotao={true} />
						<AddFavoritos produto={productStripe} textoBotao={true} />
					</div>
				</div>
				<div className="card text-azul-escuro mt-6 lg:col-start-1 lg:col-end-3">
					<Accordion>
						<AccordionTab header="Descrição do Produto">
							<p className="m-0">
								Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
								Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
								commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
								Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
							</p>
						</AccordionTab>
						<AccordionTab header="Avaliação do Produto">
							<p className="m-0">
								Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
								quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas
								sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.
								Consectetur, adipisci velit, sed quia non numquam eius modi.
							</p>
						</AccordionTab>
					</Accordion>
				</div>
				<div className="flex flex-col gap-4 lg:col-start-1 lg:col-end-3">
					<h2 className="uppercase font-bold text-white text-2xl text-center bg-laranja py-1">Produtos Similares</h2>
					<CarrosselProdutosSimilares produtosFirebase={productsFirebase} />
				</div>
			</div>
		</Template>
	)
}





