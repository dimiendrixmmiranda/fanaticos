import Product from "@/components/product/Product"
import Template from "@/components/template/Template"
import { ProductType } from "@/types/ProductType"
import { getProducts } from "@/lib/stripe"
// https://dashboard.stripe.com/test/workbench/overview
export default async function Page() {
	const products = await getProducts()

	return (
		<Template>
			<h2>Lista de produtos</h2>
			<ul className="grid grid-cols-4 gap-4">
				{products.map((produto: ProductType) => (
					<Product key={produto.id} produto={produto} />
				))}
			</ul>
		</Template>
	)
}

// comando para rodar o stripe: stripe listen --forward-to localhost:3000/api/stripe/webhook