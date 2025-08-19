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

export default function Navbar() {
    const [openMenu, setOpenMenu] = useState<string | null>(null)
    const { teamsNba } = useTimesNba()
    const { teamsNfl } = useTimesNfl()
    const { teamsF1 } = useTimesF1()

    const toggleMenu = (menu: string) => {
        setOpenMenu(openMenu === menu ? null : menu)
    }
    return (
        <nav className="hidden md:flex md:flex-1">
            <ul className="flex gap-4 w-full h-fit">
                {/* FUTEBOL */}
                <li className={`relative h-fit ${styles.futebol}`}>
                    <div className="flex flex-col relative">
                        <button
                            onClick={() => toggleMenu("futebol")}
                            className={`flex items-center gap-1 p-2 rounded-md ${openMenu != null && openMenu === "futebol" ? 'bg-magenta' : ''}`}
                        >
                            <GiSoccerBall className="text-xl" style={{ filter: "drop-shadow(0px 0px 1px black)" }} />
                            <p className="uppercase font-bold text-lg whitespace-nowrap" style={{ textShadow: "1px 1px 2px black" }}>Futebol</p>
                        </button>
                        {
                            openMenu != null && openMenu === "futebol" ? (
                                <div className={`${styles.triangulo} absolute left-[50%] top-[100%] z-20`} style={{ transform: 'translate(-50%)' }}></div>
                            ) : ''
                        }
                    </div>
                    {openMenu === "futebol" && (
                        <div className="absolute p-2 top-[105%] -left-10 mt-2 bg-magenta shadow-lg rounded z-10 md:w-[620px] md:grid md:gap-x-4 md:grid-cols-[190px_1fr] lg:w-[700px] lg:-left-36">
                            <ul className="bg-azul p-2">
                                <li className="p-2 hover:bg-magenta flex items-center gap-2">
                                    <div className="relative w-6 h-6">
                                        <Image alt="Brasileiros" src={'/competicoes/brasileiros.png'} fill className="object-contain" />
                                    </div>
                                    <p className="uppercase font-bold text-sm" style={{ textShadow: '1px 1px 2px black' }}>
                                        Brasileiros
                                    </p>
                                </li>
                                <li className="p-2 hover:bg-magenta flex items-center gap-2">
                                    <div className="relative w-6 h-6">
                                        <Image alt="Premier League" src={'/competicoes/premier-league.png'} fill className="object-contain" />
                                    </div>
                                    <p className="uppercase font-bold text-sm" style={{ textShadow: '1px 1px 2px black' }}>
                                        Premier League
                                    </p>
                                </li>
                                <li className="p-2 hover:bg-magenta flex items-center gap-2">
                                    <div className="relative w-6 h-6">
                                        <Image alt="La Liga" src={'/competicoes/la-liga.png'} fill className="object-contain" />
                                    </div>
                                    <p className="uppercase font-bold text-sm" style={{ textShadow: '1px 1px 2px black' }}>
                                        La Liga
                                    </p>
                                </li>
                                <li className="p-2 hover:bg-magenta flex items-center gap-2">
                                    <div className="relative w-6 h-6">
                                        <Image alt="bundesliga" src={'/competicoes/bundesliga.png'} fill className="object-contain" />
                                    </div>
                                    <p className="uppercase font-bold text-sm" style={{ textShadow: '1px 1px 2px black' }}>
                                        Bundesliga
                                    </p>
                                </li>
                                <li className="p-2 hover:bg-magenta flex items-center gap-2">
                                    <div className="relative w-6 h-6">
                                        <Image alt="Ligue 1" src={'/competicoes/ligue-1.png'} fill className="object-contain" />
                                    </div>
                                    <p className="uppercase font-bold text-sm" style={{ textShadow: '1px 1px 2px black' }}>
                                        Ligue 1
                                    </p>
                                </li>
                                <li className="p-2 hover:bg-magenta flex items-center gap-2">
                                    <div className="relative w-6 h-6">
                                        <Image alt="Serie A" src={'/competicoes/serie-a.png'} fill className="object-contain" />
                                    </div>
                                    <p className="uppercase font-bold text-sm" style={{ textShadow: '1px 1px 2px black' }}>
                                        Serie A
                                    </p>
                                </li>
                                <li className="p-2 hover:bg-magenta flex items-center gap-2">
                                    <div className="relative w-6 h-6">
                                        <Image alt="Serie A" src={'/competicoes/outros.png'} fill className="object-contain" />
                                    </div>
                                    <p className="uppercase font-bold text-sm" style={{ textShadow: '1px 1px 2px black' }}>
                                        Outros
                                    </p>
                                </li>
                            </ul>
                            <ul>
                                <li>Clube 1</li>
                                <li>Clube 2</li>
                                <li>Clube 3</li>
                            </ul>
                            <Link href={'/'} className="col-start-1 col-end-3 text-center uppercase mt-2 font-bold text-sm bg-azul py-1 cursor-pointer">Linha completa de acessórios para os fãs de Futebol!</Link>
                        </div>
                    )}
                </li>

                {/* NBA */}
                <li className={`relative ${styles.nba}`}>
                    <div className="flex flex-col relative">
                        <button
                            onClick={() => toggleMenu("nba")}
                            className={`flex items-center gap-1 p-2 rounded-md ${openMenu != null && openMenu === "nba" ? 'bg-magenta' : ''}`}
                        >
                            <FaBasketball className="text-xl" style={{ filter: "drop-shadow(0px 0px 1px black)" }} />
                            <p className="uppercase font-bold text-lg whitespace-nowrap" style={{ textShadow: "1px 1px 2px black" }}>NBA</p>
                        </button>
                        {
                            openMenu != null && openMenu === "nba" ? (
                                <div className={`${styles.triangulo} absolute left-[50%] top-[100%] z-20`} style={{ transform: 'translate(-50%)' }}></div>
                            ) : ''
                        }
                    </div>
                    {openMenu === "nba" && (
                        <ul className="absolute p-2 top-[105%] left-0 mt-2 bg-magenta shadow-lg rounded z-10 md:w-[520px] md:grid md:grid-cols-6 lg:w-[600px] lg:-left-60">
                            {
                                teamsNba.map((time, i) => {
                                    const ultimaPalavra = time.strTeam.split(' ').at(-1) || ''
                                    const tamanho = ultimaPalavra.length
                                    return (
                                        <li key={i}>
                                            <Link href={'/'} className="flex flex-col justify-center items-center p-2 rounded-md hover:bg-azul">
                                                <Image alt={time.strTeam} src={time.strBadge} width={40} height={40} />
                                                <p className={`uppercase text-white font-black ${tamanho > 10 ? 'text-[.5em] mt-[1px]' : 'text-[.6em]'} text-[.6em]`}>
                                                    {ultimaPalavra}
                                                </p>
                                            </Link>
                                        </li>
                                    )
                                })
                            }
                            <Link href={'/'} className="col-start-1 col-end-7 text-center uppercase mt-4 font-bold text-sm bg-azul py-1 cursor-pointer">Linha completa de acessórios para os fãs da NBA!</Link>
                        </ul>
                    )}
                </li>

                {/* NFL */}
                <li className={`relative ${styles.nfl}`}>
                    <div className="flex flex-col relative">
                        <button
                            onClick={() => toggleMenu("nfl")}
                            className={`flex items-center gap-1 p-2 rounded-md ${openMenu != null && openMenu === "nfl" ? 'bg-magenta' : ''}`}
                        >
                            <FaFootballBall className="text-xl" style={{ filter: "drop-shadow(0px 0px 1px black)" }} />
                            <p className="uppercase font-bold text-lg whitespace-nowrap" style={{ textShadow: "1px 1px 2px black" }}>NFL</p>
                        </button>
                        {
                            openMenu != null && openMenu === "nfl" ? (
                                <div className={`${styles.triangulo} absolute left-[50%] top-[100%] z-20`} style={{ transform: 'translate(-50%)' }}></div>
                            ) : ''
                        }
                    </div>
                    {openMenu === "nfl" && (
                        <ul className="absolute p-2 top-[105%] -left-24 mt-2 bg-magenta shadow-lg rounded z-10 md:w-[520px] md:grid md:grid-cols-6 lg:w-[600px]">
                            {
                                teamsNfl.map((time, i) => {
                                    const ultimaPalavra = time.strTeam.split(' ').at(-1) || ''
                                    const tamanho = ultimaPalavra.length
                                    return (
                                        <li key={i}>
                                            <Link href={'/'} className="flex flex-col justify-center items-center p-2 rounded-md hover:bg-azul">
                                                <Image alt={time.strTeam} src={time.strBadge} width={40} height={40} />
                                                <p className={`uppercase text-white font-black ${tamanho > 10 ? 'text-[.5em] mt-[1px]' : 'text-[.6em]'} text-[.6em]`}>
                                                    {ultimaPalavra}
                                                </p>
                                            </Link>
                                        </li>
                                    )
                                })
                            }
                            <Link href={'/'} className="col-start-1 col-end-7 text-center uppercase mt-4 font-bold text-sm bg-azul py-1 cursor-pointer">Linha completa de acessórios para os fãs da NFL!</Link>
                        </ul>
                    )}
                </li>

                {/* E-SPORTS */}
                <li className={`relative ${styles.esports}`}>
                    <button
                        onClick={() => toggleMenu("esports")}
                        className="flex items-center gap-1 p-2"
                    >
                        <IoGameController className="text-xl" style={{ filter: "drop-shadow(0px 0px 1px black)" }} />
                        <p className="uppercase font-bold text-lg whitespace-nowrap" style={{ textShadow: "1px 1px 2px black" }}>E-sports</p>
                    </button>
                    {openMenu === "esports" && (
                        <ul className="absolute top-[105%] w-full left-0 mt-2 bg-white shadow-lg rounded z-10">
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
                            className={`flex items-center gap-1 p-2 rounded-md ${openMenu != null && openMenu === "f1" ? 'bg-magenta' : ''}`}
                        >
                            <SiF1 className="text-xl" style={{ filter: "drop-shadow(0px 0px 1px black)" }} />
                            <p className="uppercase font-bold text-lg whitespace-nowrap" style={{ textShadow: "1px 1px 2px black" }}>Fórmula 1</p>
                        </button>
                        {
                            openMenu != null && openMenu === "f1" ? (
                                <div className={`${styles.triangulo} absolute left-[50%] top-[100%] z-20`} style={{ transform: 'translate(-50%)' }}></div>
                            ) : ''
                        }
                    </div>
                    {openMenu === "f1" && (
                        <ul className="absolute p-2 top-[105%] -left-40 mt-2 bg-magenta shadow-lg rounded z-10 md:w-[350px] md:grid md:grid-cols-4 lg:w-[410px] lg:-left-32">
                            {
                                teamsF1.map((time, i) => {
                                    const ultimaPalavra = time.strTeam.split(' ').at(-1) || ''
                                    const tamanho = ultimaPalavra.length
                                    return (
                                        <li key={i}>
                                            <Link href={'/'} className="flex flex-col justify-center items-center p-2 rounded-md hover:bg-azul">
                                                <Image alt={time.strTeam} src={time.strBadge} width={40} height={40} />
                                                <p className={`uppercase text-center text-white font-black ${tamanho > 10 ? 'text-[.5em] mt-[1px]' : 'text-[.6em]'} text-[.6em]`}>
                                                    {time.strTeamAlternate}
                                                </p>
                                            </Link>
                                        </li>

                                    )
                                })
                            }
                            <Link href={'/'} className="col-start-1 col-end-5 text-center uppercase mt-4 font-bold text-sm bg-azul py-1 cursor-pointer">Linha completa de acessórios para os fãs da F1!</Link>
                        </ul>
                    )}
                </li>
            </ul>
        </nav>
    );
}
