import Template from "@/components/template/Template"
import CarrosselOfertas from "@/components/carrossel/CarrosselOfertas"
import OfertasDoDia from "@/components/ofertasDoDia/OfertasDoDia"
import MVV from "@/components/mvv/MVV"
import Newsletter from "@/components/newsletter/Newsletter"
import Marcas from "@/components/marcas/Marcas"
import Lancamentos from "@/components/lancamentos/Lancamentos"
import CatalogoDeProdutos from "@/components/catalogoDeProdutos/CatalogoDeProdutos"
import ProdutoAleatorio from "@/components/produtoAleatorio/ProdutoAleatorio"
import Banners from "@/components/banners/Banners"
import Servicos from "@/components/servicos/Servicos"
// https://dashboard.stripe.com/test/workbench/overview
// comando para rodar o stripe: stripe listen --forward-to localhost:3000/api/stripe/webhook
// Imagens dos produtos esta sendo armazenada em imgur.com
// melhorar organização e padronizar nomes, como cartDrawer e favoriteDrawer etc

export default async function Page() {
	return (
		<Template>
			<CarrosselOfertas />
			<OfertasDoDia />
			<Lancamentos />
			<CatalogoDeProdutos />
			<Marcas />
			<div className="flex flex-col lg:grid lg:grid-cols-2 overflow-hidden max-w-[1800px] mx-auto">
				<ProdutoAleatorio />
				<Banners />
			</div>
			<MVV />
			<Newsletter />
			<Servicos />
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
			{/* Melhorias: ter um icone de default na imagem */}
		</Template>
	)
}

// não sabe o que decidir? 