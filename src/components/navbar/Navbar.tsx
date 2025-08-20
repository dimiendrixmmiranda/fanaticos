import { useState } from "react";
import { GiSoccerBall } from "react-icons/gi";
import { FaBasketball } from "react-icons/fa6";
import { FaFootballBall } from "react-icons/fa";
import { IoGameController } from "react-icons/io5";
import { SiF1 } from "react-icons/si";
import { useTimesNba } from "@/data/hooks/useTimesNba";
import Link from "next/link";
import Image from "next/image";
import { useTimesNfl } from "@/data/hooks/useTimesNfl";
import { useTimesF1 } from "@/data/hooks/useTimesF1";
import styles from './style.module.css'
import { brasileiro, bundesliga, laLiga, ligue1, outros, premierLeague, serieA } from "@/constants/timesDeFutebol";

export default function Navbar() {
    const [openMenu, setOpenMenu] = useState<string | null>(null)
    const [openMenuFutebol, setOpenMenuFutebol] = useState<number | null>(1000)

    const { teamsNba } = useTimesNba()
    const { teamsNfl } = useTimesNfl()
    const { teamsF1 } = useTimesF1()

    const renderizarTimesFutebol = (idLiga: number) => {
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
            <li key={i} className="p-2 hover:bg-azul">
                <Link href={'/'}>
                    <div className="flex flex-col items-center gap-1">
                        <Image src={time.imagem || '/default.png'} alt={time.nome} width={40} height={40} className="object-contain" />
                        <p className="uppercase text-xs font-black">{time.abreviacao}</p>
                    </div>
                </Link>
            </li>
        ))
    }

    const toggleMenu = (menu: string | null) => {
        setOpenMenu(openMenu === menu ? null : menu)
    }

    const toggleMenuFutebol = (idLiga: number) => {
        setOpenMenuFutebol(openMenuFutebol === idLiga ? null : idLiga)
    }

    return (
        <nav className="hidden md:flex md:flex-1 relative xl:flex-none">
            {/* Overlay global */}
            {openMenu && (
                <div
                    className="fixed inset-0 bg-black/45 z-10"
                    onClick={() => setOpenMenu(null)}
                />
            )}

            <ul className="flex gap-4 w-full h-fit relative z-20">
                {/* FUTEBOL */}
                <li className={`relative h-fit ${styles.futebol}`}>
                    <div className="flex flex-col relative">
                        <button
                            onClick={() => toggleMenu("futebol")}
                            className={`flex items-center gap-1 p-2 rounded-md hover:bg-magenta ${openMenu === "futebol" ? "bg-magenta" : ""}`}
                        >
                            <GiSoccerBall className="text-xl" style={{ filter: "drop-shadow(0px 0px 1px black)" }} />
                            <p className="uppercase font-bold text-lg whitespace-nowrap" style={{ textShadow: "1px 1px 2px black" }}>Futebol</p>
                        </button>

                        {openMenu === "futebol" && (
                            <div
                                className="absolute p-2 top-[105%] -left-10 mt-2 bg-magenta shadow-lg rounded z-20 md:w-[550px] md:grid md:grid-cols-[190px_1fr] md:gap-x-4 lg:w-[610px] lg:-left-36"
                                onClick={(e) => e.stopPropagation()}
                            >
                                {/* Ligas */}
                                <ul className="bg-azul p-2">
                                    <li>
                                        <button className="p-2 hover:bg-magenta flex items-center gap-2" onClick={() => toggleMenuFutebol(1000)}>
                                            <div className="relative w-6 h-6">
                                                <Image alt="Brasileiros" src={'/competicoes/brasileiros.png'} fill className="object-contain" />
                                            </div>
                                            <p className="uppercase font-bold text-sm">Brasileiros</p>
                                        </button>
                                    </li>
                                    <li>
                                        <button className="p-2 hover:bg-magenta flex items-center gap-2" onClick={() => toggleMenuFutebol(1001)}>
                                            <div className="relative w-6 h-6">
                                                <Image alt="Premier League" src={'/competicoes/premier-league.png'} fill className="object-contain" />
                                            </div>
                                            <p className="uppercase font-bold text-sm" style={{ textShadow: '1px 1px 2px black' }}>
                                                Premier League
                                            </p>
                                        </button>
                                    </li>
                                    <li>
                                        <button className="p-2 hover:bg-magenta flex items-center gap-2" onClick={() => toggleMenuFutebol(1002)}>
                                            <div className="relative w-6 h-6">
                                                <Image alt="La Liga" src={'/competicoes/la-liga.png'} fill className="object-contain" />
                                            </div>
                                            <p className="uppercase font-bold text-sm" style={{ textShadow: '1px 1px 2px black' }}>
                                                La Liga
                                            </p>
                                        </button>
                                    </li>
                                    <li>
                                        <button className="p-2 hover:bg-magenta flex items-center gap-2" onClick={() => toggleMenuFutebol(1003)}>
                                            <div className="relative w-6 h-6">
                                                <Image alt="bundesliga" src={'/competicoes/bundesliga.png'} fill className="object-contain" />
                                            </div>
                                            <p className="uppercase font-bold text-sm" style={{ textShadow: '1px 1px 2px black' }}>
                                                Bundesliga
                                            </p>
                                        </button>
                                    </li>
                                    <li>
                                        <button className="p-2 hover:bg-magenta flex items-center gap-2" onClick={() => toggleMenuFutebol(1004)}>
                                            <div className="relative w-6 h-6">
                                                <Image alt="Ligue 1" src={'/competicoes/ligue-1.png'} fill className="object-contain" />
                                            </div>
                                            <p className="uppercase font-bold text-sm" style={{ textShadow: '1px 1px 2px black' }}>
                                                Ligue 1
                                            </p>
                                        </button>
                                    </li>
                                    <li>
                                        <button className="p-2 hover:bg-magenta flex items-center gap-2" onClick={() => toggleMenuFutebol(1005)}>
                                            <div className="relative w-6 h-6">
                                                <Image alt="Serie A" src={'/competicoes/serie-a.png'} fill className="object-contain" />
                                            </div>
                                            <p className="uppercase font-bold text-sm" style={{ textShadow: '1px 1px 2px black' }}>
                                                Serie A
                                            </p>
                                        </button>
                                    </li>
                                    <li>
                                        <button className="p-2 hover:bg-magenta flex items-center gap-2" onClick={() => toggleMenuFutebol(1006)}>
                                            <div className="relative w-6 h-6">
                                                <Image alt="Serie A" src={'/competicoes/outros.png'} fill className="object-contain" />
                                            </div>
                                            <p className="uppercase font-bold text-sm" style={{ textShadow: '1px 1px 2px black' }}>
                                                Outros
                                            </p>
                                        </button>
                                    </li>
                                </ul>

                                {/* Times */}
                                <ul className="grid grid-cols-4">
                                    {renderizarTimesFutebol(openMenuFutebol ?? 1000)}
                                </ul>

                                <Link href={'/'} className="col-start-1 col-end-3 text-center uppercase mt-2 font-bold text-sm bg-azul py-1 cursor-pointer">
                                    Linha completa de acessórios para os fãs de Futebol!
                                </Link>
                            </div>
                        )}
                    </div>
                </li>

                {/* NBA */}
                <li className={`relative ${styles.nba}`}>
                    <div className="flex flex-col relative">
                        <button
                            onClick={() => toggleMenu("nba")}
                            className={`flex items-center gap-1 p-2 rounded-md hover:bg-magenta ${openMenu === "nba" ? 'bg-magenta' : ''}`}
                        >
                            <FaBasketball className="text-xl" style={{ filter: "drop-shadow(0px 0px 1px black)" }} />
                            <p className="uppercase font-bold text-lg whitespace-nowrap" style={{ textShadow: "1px 1px 2px black" }}>NBA</p>
                        </button>
                    </div>

                    {openMenu === "nba" && (
                        <ul
                            className="absolute p-2 top-[105%] left-0 mt-2 bg-magenta shadow-lg rounded z-20 md:w-[520px] md:grid md:grid-cols-6 lg:w-[600px] lg:-left-60"
                            onClick={(e) => e.stopPropagation()}
                        >
                            {teamsNba.map((time, i) => {
                                const ultimaPalavra = time.strTeam.split(' ').at(-1) || ''
                                const tamanho = ultimaPalavra.length
                                return (
                                    <li key={i}>
                                        <Link href={'/'} className="flex flex-col justify-center items-center p-2 rounded-md hover:bg-azul">
                                            <Image alt={time.strTeam} src={time.strBadge} width={40} height={40} />
                                            <p className={`uppercase text-white font-black ${tamanho > 10 ? 'text-[.5em]' : 'text-[.6em]'}`}>{ultimaPalavra}</p>
                                        </Link>
                                    </li>
                                )
                            })}
                            <Link href={'/'} className="col-start-1 col-end-7 text-center uppercase mt-4 font-bold text-sm bg-azul py-1 cursor-pointer">Linha completa de acessórios para os fãs da NBA!</Link>
                        </ul>
                    )}
                </li>

                {/* NFL */}
                <li className={`relative ${styles.nfl}`}>
                    <div className="flex flex-col relative">
                        <button
                            onClick={() => toggleMenu("nfl")}
                            className={`flex items-center gap-1 p-2 rounded-md hover:bg-magenta ${openMenu === "nfl" ? 'bg-magenta' : ''}`}
                        >
                            <FaFootballBall className="text-xl" style={{ filter: "drop-shadow(0px 0px 1px black)" }} />
                            <p className="uppercase font-bold text-lg whitespace-nowrap" style={{ textShadow: "1px 1px 2px black" }}>NFL</p>
                        </button>
                    </div>

                    {openMenu === "nfl" && (
                        <ul
                            className="absolute p-2 top-[105%] -left-24 mt-2 bg-magenta shadow-lg rounded z-20 md:w-[520px] md:grid md:grid-cols-6 lg:w-[600px]"
                            onClick={(e) => e.stopPropagation()}
                        >
                            {teamsNfl.map((time, i) => {
                                const ultimaPalavra = time.strTeam.split(' ').at(-1) || ''
                                return (
                                    <li key={i}>
                                        <Link href={'/'} className="flex flex-col justify-center items-center p-2 rounded-md hover:bg-azul">
                                            <Image alt={time.strTeam} src={time.strBadge} width={40} height={40} />
                                            <p className="uppercase text-white font-black text-[.6em]">{ultimaPalavra}</p>
                                        </Link>
                                    </li>
                                )
                            })}
                            <Link href={'/'} className="col-start-1 col-end-7 text-center uppercase mt-4 font-bold text-sm bg-azul py-1 cursor-pointer">Linha completa de acessórios para os fãs da NFL!</Link>
                        </ul>
                    )}
                </li>

                {/* E-SPORTS */}
                <li className={`relative ${styles.esports}`}>
                    <button
                        onClick={() => toggleMenu("esports")}
                        className={`flex items-center gap-1 p-2 rounded-md hover:bg-magenta ${openMenu === "esports" ? 'bg-magenta' : ''}`}
                    >
                        <IoGameController className="text-xl" style={{ filter: "drop-shadow(0px 0px 1px black)" }} />
                        <p className="uppercase font-bold text-lg whitespace-nowrap" style={{ textShadow: "1px 1px 2px black" }}>E-sports</p>
                    </button>
                    {openMenu === "esports" && (
                        <ul
                            className="absolute top-[105%] w-full left-0 mt-2 bg-white shadow-lg rounded z-20"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <li className="px-4 py-2 hover:bg-gray-100">CS:GO</li>
                            <li className="px-4 py-2 hover:bg-gray-100">LoL</li>
                        </ul>
                    )}
                </li>

                {/* FÓRMULA 1 */}
                <li className={`relative ${styles.f1}`}>
                    <div className="flex flex-col relative">
                        <button
                            onClick={() => toggleMenu("f1")}
                            className={`flex items-center gap-1 p-2 rounded-md hover:bg-magenta ${openMenu === "f1" ? 'bg-magenta' : ''}`}
                        >
                            <SiF1 className="text-xl" style={{ filter: "drop-shadow(0px 0px 1px black)" }} />
                            <p className="uppercase font-bold text-lg whitespace-nowrap" style={{ textShadow: "1px 1px 2px black" }}>Fórmula 1</p>
                        </button>
                    </div>

                    {openMenu === "f1" && (
                        <ul
                            className="absolute p-2 top-[105%] -left-40 mt-2 bg-magenta shadow-lg rounded z-20 md:w-[350px] md:grid md:grid-cols-4 lg:w-[410px] lg:-left-32"
                            onClick={(e) => e.stopPropagation()}
                        >
                            {teamsF1.map((time, i) => (
                                <li key={i}>
                                    <Link href={'/'} className="flex flex-col justify-center items-center p-2 rounded-md hover:bg-azul">
                                        <Image alt={time.strTeam} src={time.strBadge} width={40} height={40} />
                                        <p className="uppercase text-center text-white font-black text-[.6em]">{time.strTeamAlternate}</p>
                                    </Link>
                                </li>
                            ))}
                            <Link href={'/'} className="col-start-1 col-end-5 text-center uppercase mt-4 font-bold text-sm bg-azul py-1 cursor-pointer">Linha completa de acessórios para os fãs da F1!</Link>
                        </ul>
                    )}
                </li>
            </ul>
        </nav>
    )
}
