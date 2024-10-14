'use client'
import { Sidebar } from 'primereact/sidebar';
import { Button } from 'primereact/button';
import { useState } from 'react';
import { GiHamburgerMenu } from "react-icons/gi";
import { listaDeMenus } from '@/core/constants';
import AccordionMenu from '../accordionMenu/Accordion';
import RedesSocias from '../sociais/Sociais';

export default function MenuSidebar() {
    const [visibleRight, setVisibleRight] = useState(false);

    return (
        <div className="card flex justify-content-center relative md:hidden">
            <Sidebar visible={visibleRight} position="right" onHide={() => setVisibleRight(false)} className='bg-[--secundaria] text-white'>
                <div className='max-h-[90%] overflow-y-scroll'>
                    <h2 className='absolute top-2 left-[45%] font-bold text-4xl' style={{ transform: 'translate(-50%)' }}>Menu</h2>
                    <AccordionMenu arrayDeMenus={listaDeMenus}></AccordionMenu>
                </div>
                <div className='absolute bottom-2 left-0 w-full'>
                    <RedesSocias estilo={`flex w-full h-full justify-center itens-center`}></RedesSocias>
                </div>
            </Sidebar>
            <Button onClick={() => setVisibleRight(true)} className='p-3'>
                <GiHamburgerMenu className='text-4xl' />
            </Button>
        </div>
    )
}
