import AddCart from "@/components/base/AddCart"
import Galeria from "@/components/galeria/Galeria"
import Template from "@/components/template/Template"
import { getProductsFirebase } from "@/lib/getProductsFirebase"
// import { getProducts } from "@/lib/stripe"
import ProductFirebase from "@/types/ProductFirebase"
import { formatarPreco } from "@/utils/FormatarPreco"
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
		product: produto.id
	})
	return {
		id: produto.id,
		name: produto.name,
		price: (price.data[0].unit_amount ?? 0) / 100,
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
	// const productsStripe = await getProducts()

	const productFirebase = productsFirebase.filter(p => p.stripeId === id)[0]

	return (
		<Template>
			<div className="uppercase font-black text-4xl text-azul-escuro" style={{textShadow: '1px 1px 2px black'}}>{productStripe.name}</div>
			<div>
			<Galeria produtoFirebase={productFirebase} />
			<div>
				<ul className="grid grid-cols-5 gap-2">
					<li className="bg-zinc-300 text-azul-escuro rounded-md border border-azul-escuro flex justify-center items-center text-center p-2">P</li>
					<li className="bg-zinc-300 text-azul-escuro rounded-md border border-azul-escuro flex justify-center items-center text-center p-2">M</li>
					<li className="bg-zinc-300 text-azul-escuro rounded-md border border-azul-escuro flex justify-center items-center text-center p-2">G</li>
					<li className="bg-zinc-300 text-azul-escuro rounded-md border border-azul-escuro flex justify-center items-center text-center p-2">GG</li>
					<li className="bg-zinc-300 text-azul-escuro rounded-md border border-azul-escuro flex justify-center items-center text-center p-2">EGG</li>
				</ul>
			</div>
			</div>
			<div className="text-black uppercase font-bold text-3xl text-azul-escuro">{formatarPreco(productStripe.price)}</div>
			<div className="text-black uppercase font-bold text-xl text-azul-escuro">ou 3x de R$59,90</div>
			<div>{productStripe.description}</div>
			<AddCart produto={productStripe} />
		</Template>
	)
}	