import Product from "@/components/product/Product"
import Template from "@/components/template/Template"
import { ProductType } from "@/types/ProductType"
import { getProducts } from "@/lib/stripe"
import { getProductsFirebase } from "@/lib/getProductsFirebase"
import CarrosselOfertas from "@/components/carrossel/CarrosselOfertas"
import ProductFirebase from "@/types/ProductFirebase"
// https://dashboard.stripe.com/test/workbench/overview
// comando para rodar o stripe: stripe listen --forward-to localhost:3000/api/stripe/webhook
// comando para limpar o storage: 
// Imagens dos produtos esta sendo armazenada em imgur.com

// melhorar organização e padronizar nomes, como cartDrawer e favoriteDrawer etc

export default async function Page() {
	const productsStripe = await getProducts()
	const productsFirebase: ProductFirebase[] = await getProductsFirebase()

	return (
		<Template>
			<CarrosselOfertas />
			<ul className="grid grid-cols-1 gap-4">
				{productsStripe.map((produtoStripe: ProductType) => {
					const produtoFirebase = productsFirebase.find(
						(p: ProductFirebase) => p.stripeId === produtoStripe.id
					)

					return (
						<Product
							key={produtoStripe.id}
							produtoStripe={produtoStripe}
							produtoFirebase={produtoFirebase}
						/>
					)
				})}
			</ul>
		</Template>
	)
}

