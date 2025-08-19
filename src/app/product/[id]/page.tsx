import AddCart from "@/components/base/AddCart"
import Template from "@/components/template/Template"
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
	const product = await getProduct(id)
	console.log(product)

	return (
		<Template>
			<div>{product.name}</div>
			<div>{formatarPreco(product.price)}</div>
			<div>{product.description}</div>
			<AddCart produto={product} />
		</Template>
	)
}
