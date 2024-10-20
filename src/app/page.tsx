import Beneficios from "@/components/beneficios/Beneficios";
import EsporteFavorito from "@/components/esporteFavorito/EsporteFavorito";
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
			<EsporteFavorito></EsporteFavorito>
			<div className="max-w-[95%] mx-auto gap-y-4 grid grid-cols-1 md:gap-4 container-personalizado">
				<Surpresa></Surpresa>
				<Newsletter></Newsletter>
			</div>
			<Mvv></Mvv>
			<Beneficios></Beneficios>
		</Pagina>
	)
}
