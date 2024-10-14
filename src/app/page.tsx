import Beneficios from "@/components/beneficios/Beneficios";
import Destaque from "@/components/destaque/Destaque";
import MaisVendidos from "@/components/maisVendidos/MaisVendidos";
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
			<MaisVendidos></MaisVendidos>
			<Vitrine></Vitrine>
			<Newsletter></Newsletter>
			<Beneficios></Beneficios>
			<div className="flex flex-col gap-10 max-w-[95%] mx-auto mt-6 mb-8 lg:grid lg:grid-cols-2">
				<Surpresa></Surpresa>
				<Destaque></Destaque>
			</div>
		</Pagina>
	)
}
