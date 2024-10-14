import { listaDeRedesSocias } from "@/core/constants/listaRedesSociais";
import Link from "next/link";

interface RedesSociasProps{
    estilo?: string
}
export default function RedesSocias({estilo}: RedesSociasProps) {
    return (
        <ul className={estilo}>
            {
                listaDeRedesSocias.map((item, index) => {
                    return (
                        <li key={index} className="flex-1 flex justify-center items-center text-3xl rede">
                            <Link href={item.link} data-rede={item.texto} className="relative">
                                {item.icone}
                            </Link>
                        </li>
                    )
                })
            }
        </ul>
    )
}