
import React, { useState } from 'react';
import { Sidebar } from 'primereact/sidebar';
import { Button } from 'primereact/button';
import { GiHamburgerMenu, GiSoccerBall } from 'react-icons/gi';
import { Accordion, AccordionTab } from 'primereact/accordion';
import { FaBasketball } from 'react-icons/fa6';
import { FaFootballBall } from 'react-icons/fa';
import { IoGameController } from 'react-icons/io5';
import { SiF1 } from 'react-icons/si';
import Cart from '../cart/Cart';
import LoginERegistro from '../loginERegistro/LoginERegistro';
import Favoritos from '../favoritos/Favoritos';
import BarraDeBusca from '../barraDeBusca/BarraDeBusca';
import Image from 'next/image';
import Link from 'next/link';
import { renderizarTimesFutebol } from '@/utils/RenderizarTimesDeFutebol';
import { useTimesNba } from '@/data/hooks/useTimesNba';
import { useTimesNfl } from '@/data/hooks/useTimesNfl';
import { useTimesF1 } from '@/data/hooks/useTimesF1';
import styles from './styles.module.css'
import RedesSociais from '../redesSociais/RedesSociais';

export default function SidebarComponent() {
    const [visibleRight, setVisibleRight] = useState(false);
    const [openMenuFutebol, setOpenMenuFutebol] = useState<number | null>(null)

    const { teamsNba } = useTimesNba()
    const { teamsNfl } = useTimesNfl()
    const { teamsF1 } = useTimesF1()

    const toggleMenuFutebol = (idLiga: number) => {
        setOpenMenuFutebol(openMenuFutebol === idLiga ? null : idLiga)
    }

    return (
        <div className="card flex justify-center items-center lg:hidden">
            <div className="flex gap-2 justify-center">
                <Button onClick={() => setVisibleRight(true)} className='text-4xl'>
                    <GiHamburgerMenu />
                </Button>
            </div>
            <Sidebar visible={visibleRight} position="right" onHide={() => setVisibleRight(false)} header={<h2 className='uppercase font-bold text-3xl'>Menu</h2>}>
                <div className='flex flex-col gap-4 h-full'>
                    <div className='grid gap-4 grid-cols-3 h-[60px]'>
                        <Cart mobile={true} />
                        <Favoritos mobile={true} />
                        <LoginERegistro mobile={true} />
                    </div>
                    <div>
                        <BarraDeBusca mobile={true} />
                    </div>
                    <div className="card text-black">
                        <Accordion>
                            <AccordionTab header={
                                <div className='flex gap-1 items-center justify-start'>
                                    <GiSoccerBall className="text-xl" />
                                    <p className="uppercase font-bold text-lg whitespace-nowrap">Futebol</p>
                                </div>
                            }>
                                <div className='flex flex-col'>
                                    {/* botoes */}
                                    <div className='grid grid-cols-4 gap-2'>
                                        <button className='p-2 rounded-md flex justify-center items-center' onClick={() => toggleMenuFutebol(1000)}>
                                            <Image alt='Logo Brasileirão' src={'/competicoes/brasileiros.png'} width={30} height={30} />
                                        </button>
                                        <button className='p-2 rounded-md flex justify-center items-center' onClick={() => toggleMenuFutebol(1001)}>
                                            <Image alt='Logo Brasileirão' src={'/competicoes/premier-league.png'} width={30} height={30} />
                                        </button>
                                        <button className='p-2 rounded-md flex justify-center items-center' onClick={() => toggleMenuFutebol(1002)}>
                                            <Image alt='Logo Brasileirão' src={'/competicoes/la-liga.png'} width={30} height={30} />
                                        </button>
                                        <button className='p-2 rounded-md flex justify-center items-center' onClick={() => toggleMenuFutebol(1003)}>
                                            <Image alt='Logo Brasileirão' src={'/competicoes/bundesliga.png'} width={30} height={30} />
                                        </button>
                                        <button className='p-2 rounded-md flex justify-center items-center' onClick={() => toggleMenuFutebol(1004)}>
                                            <Image alt='Logo Brasileirão' src={'/competicoes/ligue-1.png'} width={30} height={30} />
                                        </button>
                                        <button className='p-2 rounded-md flex justify-center items-center' onClick={() => toggleMenuFutebol(1005)}>
                                            <Image alt='Logo Brasileirão' src={'/competicoes/serie-a.png'} width={30} height={30} />
                                        </button>
                                        <button className='p-2 rounded-md flex justify-center items-center' onClick={() => toggleMenuFutebol(1006)}>
                                            <Image alt='Logo Brasileirão' src={'/competicoes/outros.png'} width={30} height={30} />
                                        </button>
                                        <Link href={`/buscar/${encodeURIComponent('futebol')}`} className="col-start-1 col-end-5 text-white text-center uppercase mt-2 font-bold text-sm bg-azul py-1 cursor-pointer">
                                            Linha completa de acessórios para os fãs de Futebol!
                                        </Link>
                                    </div>

                                    <ul className="flex mt-4">
                                        {/* FUTEBOL */}
                                        <li className="flex w-full justify-center">
                                            {/* Times */}
                                            <ul className={`w-full ${openMenuFutebol ? ('grid grid-cols-4') : ('hidden')}`}>
                                                {renderizarTimesFutebol(openMenuFutebol ?? 1000)}
                                            </ul>
                                        </li>
                                    </ul>
                                </div>
                            </AccordionTab>
                            <AccordionTab header={
                                <div className='flex gap-1 items-center justify-start'>
                                    <FaBasketball className="text-xl" />
                                    <p className="uppercase font-bold text-lg whitespace-nowrap">NBA</p>
                                </div>
                            }>
                                {/* NBA */}
                                <div className={`relative`}>
                                    <ul
                                        className="grid grid-cols-4"
                                        onClick={(e) => e.stopPropagation()}
                                    >
                                        {teamsNba.map((time, i) => {
                                            const busca = time.strTeam.split(' ').map(p => p.toLowerCase()).join(' ')
                                            const ultimaPalavra = time.strTeam.split(' ').at(-1) || ''
                                            const tamanho = ultimaPalavra.length
                                            return (
                                                <li key={i}>
                                                    <Link href={`/buscar/${encodeURIComponent(busca)}`} className="flex flex-col justify-center items-center p-2 rounded-md hover:bg-azul">
                                                        <Image alt={time.strTeam} src={time.strBadge} width={40} height={40} />
                                                        <p className={`uppercase text-black font-black ${tamanho > 10 ? 'text-[.5em]' : 'text-[.6em]'}`}>{ultimaPalavra}</p>
                                                    </Link>
                                                </li>
                                            )
                                        })}
                                        <Link href={`/buscar/${encodeURIComponent('nba')}`} className="col-start-1 col-end-5 text-white text-center uppercase mt-4 font-bold text-sm bg-azul py-1 cursor-pointer">Linha completa de acessórios para os fãs da NBA!</Link>
                                    </ul>
                                </div>
                            </AccordionTab>
                            <AccordionTab header={
                                <div className='flex gap-1 items-center justify-start'>
                                    <FaFootballBall className="text-xl" />
                                    <p className="uppercase font-bold text-lg whitespace-nowrap">NFL</p>
                                </div>
                            }>
                                <div className={`relative`}>
                                    <ul
                                        className="grid grid-cols-4"
                                        onClick={(e) => e.stopPropagation()}
                                    >
                                        {teamsNfl.map((time, i) => {
                                            const busca = time.strTeam.split(' ').map(p => p.toLowerCase()).join(' ')
                                            const ultimaPalavra = time.strTeam.split(' ').at(-1) || ''
                                            return (
                                                <li key={i}>
                                                    <Link href={`/buscar/${encodeURIComponent(busca)}`} className="flex flex-col justify-center items-center p-2 rounded-md hover:bg-azul">
                                                        <Image alt={time.strTeam} src={time.strBadge} width={40} height={40} />
                                                        <p className="uppercase text-black font-black text-[.6em]">{ultimaPalavra}</p>
                                                    </Link>
                                                </li>
                                            )
                                        })}
                                        <Link href={`/buscar/${encodeURIComponent('nfl')}`} className="col-start-1 col-end-5 text-white text-center uppercase mt-4 font-bold text-sm bg-azul py-1 cursor-pointer">Linha completa de acessórios para os fãs da NFL!</Link>
                                    </ul>
                                </div>
                            </AccordionTab>
                            <AccordionTab header={
                                <div className='flex gap-1 items-center justify-start'>
                                    <IoGameController className="text-xl" />
                                    <p className="uppercase font-bold text-lg whitespace-nowrap">E-sports</p>
                                </div>
                            }>
                                <p className="m-0">
                                    At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti
                                    quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt
                                    mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio.
                                    Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus.
                                </p>
                            </AccordionTab>
                            <AccordionTab header={
                                <div className='flex gap-1 items-center justify-start'>
                                    <SiF1 className="text-xl" />
                                    <p className="uppercase font-bold text-lg whitespace-nowrap">Fórmula 1</p>
                                </div>
                            }>
                                <div className={`relative ${styles.f1}`}>
                                    <ul
                                        className="grid grid-cols-4"
                                        onClick={(e) => e.stopPropagation()}
                                    >
                                        {teamsF1.map((time, i) => {
                                            const busca = time.strTeam.split(' ').map(p => p.toLowerCase()).join(' ')
                                            return (
                                                <li key={i}>
                                                    <Link href={`/buscar/${encodeURIComponent(busca)}`} className="flex flex-col justify-center items-center p-2 rounded-md hover:bg-azul">
                                                        <Image alt={time.strTeam} src={time.strBadge} width={40} height={40} />
                                                        <p className="uppercase text-center text-black font-black text-[.6em]">{time.strTeamAlternate}</p>
                                                    </Link>
                                                </li>
                                            )
                                        })}
                                        <Link href={`/buscar/${encodeURIComponent('f1')}`} className="col-start-1 col-end-5 text-white text-center uppercase mt-4 font-bold text-sm bg-azul py-1 cursor-pointer">Linha completa de acessórios para os fãs da F1!</Link>
                                    </ul>
                                </div>
                            </AccordionTab>
                        </Accordion>
                    </div>
                    <RedesSociais mobile={true} />
                </div>
            </Sidebar >
        </div >
    )
}  