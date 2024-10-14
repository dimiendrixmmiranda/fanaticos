import Cabecalho from "./cabecalho/Cabecalho";
import Principal from "./principal/Principal";
import Rodape from "./rodape/Rodape";

interface PaginaProps{
    children: React.ReactNode
}

export default function Pagina({children}: PaginaProps){
    return (
        <div className="flex flex-col">
            <Cabecalho></Cabecalho>
            <Principal>
                {children}
            </Principal>
            <Rodape></Rodape>
        </div>
    )
}