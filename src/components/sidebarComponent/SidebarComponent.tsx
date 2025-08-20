
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

export default function SidebarComponent() {
    const [visibleRight, setVisibleRight] = useState(false);

    return (
        <div className="card flex justify-center items-center lg:hidden">
            <div className="flex gap-2 justify-center">
                <Button onClick={() => setVisibleRight(true)} className='text-4xl'>
                    <GiHamburgerMenu />
                </Button>
            </div>
            <Sidebar visible={visibleRight} position="right" onHide={() => setVisibleRight(false)} header={<h2 className='uppercase font-bold text-3xl'>Menu</h2>}>
                <div className='flex flex-col gap-4'>
                    <div className='grid gap-4 grid-cols-3 h-[60px]'>
                        <Cart mobile={true} />
                        <Favoritos mobile={true} />
                        <LoginERegistro mobile={true} />
                    </div>
                    <div>
                        <BarraDeBusca mobile={true}/>
                    </div>
                    <div className="card text-black">
                        <Accordion>
                            <AccordionTab header={
                                <div className='flex gap-1 items-center justify-start'>
                                    <GiSoccerBall className="text-xl" />
                                    <p className="uppercase font-bold text-lg whitespace-nowrap">Futebol</p>
                                </div>
                            }>
                                <p className="m-0">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                                    commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                                    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                                </p>
                            </AccordionTab>
                            <AccordionTab header={
                                <div className='flex gap-1 items-center justify-start'>
                                    <FaBasketball className="text-xl" />
                                    <p className="uppercase font-bold text-lg whitespace-nowrap">NBA</p>
                                </div>
                            }>
                                <p className="m-0">
                                    Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                                    quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas
                                    sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.
                                    Consectetur, adipisci velit, sed quia non numquam eius modi.
                                </p>
                            </AccordionTab>
                            <AccordionTab header={
                                <div className='flex gap-1 items-center justify-start'>
                                    <FaFootballBall className="text-xl" />
                                    <p className="uppercase font-bold text-lg whitespace-nowrap">NFL</p>
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
                                <p className="m-0">
                                    At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti
                                    quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt
                                    mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio.
                                    Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus.
                                </p>
                            </AccordionTab>
                        </Accordion>
                    </div>
                </div>
            </Sidebar>
        </div>
    )
}  