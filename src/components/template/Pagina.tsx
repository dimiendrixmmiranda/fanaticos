import Newsletter from "../newsletter/Newsletter";
import CarrosselOfertas from "../ofertas/CarrosselOfertas";
import Slider from "../slider/Slider";
import Surpreendame from "../surpreendame/Surpreendame";
import Cabecalho from "./cabecalho/Cabecalho";
import Main from "./principal/Main";
import Navbar from "./principal/Navbar";
import Rodape from "./rodape/Rodape";

export default function Pagina(props: any){
    return (
        <div className="bg-zinc-100 min-h-screen">
            <Cabecalho/>
            <Main>
                <Navbar></Navbar>
                <Slider></Slider>
                <CarrosselOfertas></CarrosselOfertas>
                <Surpreendame></Surpreendame>
                <Newsletter></Newsletter>
            </Main>
            <Rodape></Rodape>
        </div>
    )
}