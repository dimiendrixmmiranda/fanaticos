import Beneficios from "@/components/beneficios/Beneficios";
import Esporte from "@/components/esporteFavorito/Esporte";
import Mvv from "@/components/mvv/Mvv";
import NavegacaoMarcas from "@/components/navegacaoMarcas/NavegacaoMarcas";
import Newsletter from "@/components/newsletter/Newsletter";
import Slider from "@/components/slider/Slider";
import Slider3d from "@/components/slider3d/Slider3d";
import Surpresa from "@/components/surpresa/Surpresa";
import Pagina from "@/components/template/Pagina";
import Vitrine from "@/components/vitrine/Vitrine";

export default function Home() {
	return (
		<Pagina>
			<Slider></Slider>
			<Slider3d></Slider3d>
			<Vitrine></Vitrine>
			<NavegacaoMarcas></NavegacaoMarcas>
			<Esporte></Esporte>
			<div className="container-personalizado">
				<Surpresa></Surpresa>
				<Newsletter></Newsletter>
			</div>
			<Mvv></Mvv>
			<Beneficios></Beneficios>
		</Pagina>
	)
}
