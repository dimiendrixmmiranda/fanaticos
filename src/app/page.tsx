import Template from "@/components/template/Template"
import CarrosselOfertas from "@/components/carrossel/CarrosselOfertas"
import OfertasDoDia from "@/components/ofertasDoDia/OfertasDoDia"
// https://dashboard.stripe.com/test/workbench/overview
// comando para rodar o stripe: stripe listen --forward-to localhost:3000/api/stripe/webhook
// Imagens dos produtos esta sendo armazenada em imgur.com
// melhorar organização e padronizar nomes, como cartDrawer e favoriteDrawer etc

export default async function Page() {
	return (
		<Template>
			<CarrosselOfertas />
			<OfertasDoDia />
			{/* <ul className="grid grid-cols-1 gap-4">
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
			</ul> */}
		</Template>
	)
}

