import { brasileiro, bundesliga, laLiga, ligue1, outros, premierLeague, serieA } from "@/constants/timesDeFutebol";
import Image from "next/image";
import Link from "next/link";

export const renderizarTimesFutebol = (idLiga: number) => {
    let times: typeof brasileiro = []

    switch (idLiga) {
        case 1000: times = brasileiro; break;
        case 1001: times = premierLeague; break;
        case 1002: times = laLiga; break;
        case 1003: times = bundesliga; break;
        case 1004: times = ligue1; break;
        case 1005: times = serieA; break;
        case 1006: times = outros; break;
    }

    return times.map((time, i) => (
        <li key={i} className="p-2 w-full h-full flex justify-center items-center hover:bg-azul">
            <Link href={`/buscar/${encodeURIComponent(time.nome)}`}>
                <div className="flex flex-col items-center justify-center gap-1">
                    <Image src={time.imagem || '/default.png'} alt={time.nome} width={40} height={40} className="object-contain" />
                    <p className="uppercase text-xs font-black">{time.abreviacao}</p>
                </div>
            </Link>
        </li>
    ))
}