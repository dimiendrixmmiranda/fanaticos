import Beneficios from "@/components/beneficios/Beneficios";
import MaisVendidos from "@/components/maisVendidos/MaisVendidos";
import Newsletter from "@/components/newsletter/Newsletter";
import Slider from "@/components/slider/Slider";
import Slider3d from "@/components/slider3d/Slider3d";
import Pagina from "@/components/template/Pagina";
import Vitrine from "@/components/vitrine/Vitrine";

export default function Home() {
	return (
		<Pagina>
			<Slider></Slider>
			<Slider3d></Slider3d>
			<MaisVendidos></MaisVendidos>
			<Vitrine></Vitrine>
			<Newsletter></Newsletter>
			<Beneficios></Beneficios>
		</Pagina>
	)
}
