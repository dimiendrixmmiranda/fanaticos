import Product from "@/components/product/Product"
import Template from "@/components/template/Template"
import { ProductType } from "@/types/ProductType"
import { getProducts } from "@/lib/stripe"
// import { getProductsFirebase } from "@/lib/getProductsFirebase"
// https://dashboard.stripe.com/test/workbench/overview
// comando para rodar o stripe: stripe listen --forward-to localhost:3000/api/stripe/webhook
// Imagens dos produtos esta sendo armazenada em imgur.com

// melhorar organização e padronizar nomes, como cartDrawer e favoriteDrawer etc

export default async function Page() {
	const products = await getProducts()
	// const produtos = await getProductsFirebase()

	return (
		<Template>
			<ul className="grid grid-cols-1 gap-4 p-4">
				{products.map((produto: ProductType) => (
					<Product key={produto.id} produto={produto} />
				))}
			</ul>
		</Template>
	)
}
