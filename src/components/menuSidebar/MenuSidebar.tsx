'use client'
import { Sidebar } from 'primereact/sidebar';
import { Button } from 'primereact/button';
import { useState } from 'react';
import { GiHamburgerMenu } from "react-icons/gi";
import { listaDeMenus } from '@/core/constants';
import AccordionMenu from '../accordionMenu/Accordion';
import RedesSocias from '../sociais/Sociais';
import useHandlePesquisar from '@/utils/handlePesquisar';
import { FaMagnifyingGlass } from 'react-icons/fa6';

export default function MenuSidebar() {
    const [visibleRight, setVisibleRight] = useState(false);
    const { searchQuery, setSearchQuery, handlePesquisar } = useHandlePesquisar(); // Adicione handlePesquisar aqui

    return (
        <div className={`flex justify-content-center relative md:hidden`}>
            <Sidebar visible={visibleRight} position="right" onHide={() => setVisibleRight(false)} className='bg-[--secundaria] text-white'>
                <div className='h-full flex flex-col gap-2'>
                    <form className="relative w-full text-black" onSubmit={(e) => handlePesquisar(e)}>
                        <input
                            type="text"
                            name="buscar"
                            id="buscar"
                            className="h-[30px] w-full px-2"
                            style={{ borderRadius: '0 12px 12px 0' }}
                            placeholder="O que está buscando??"
                            value={searchQuery} // Valor controlado pelo estado
                            onChange={(e) => setSearchQuery(e.target.value)} // Atualiza o estado ao digitar
                        />
                        <button
                            className="absolute top-[50%] right-0 bg-[--primaria] h-full px-3  text-black lg:text-2xl"
                            style={{ transform: 'translate(0,-50%)', borderRadius: '0 12px 12px 0' }}
                            type="submit"
                        >
                            <FaMagnifyingGlass />
                        </button>
                    </form>
                    <div className='max-h-[90%] overflow-y-scroll flex-1'>
                        <h2 className='absolute top-2 left-[45%] font-bold text-4xl' style={{ transform: 'translate(-50%)' }}>Menu</h2>
                        <AccordionMenu arrayDeMenus={listaDeMenus}></AccordionMenu>
                    </div>
                    <div className='w-full'>
                        <RedesSocias estilo={`flex w-full h-full justify-center itens-center`}></RedesSocias>
                    </div>
                </div>
            </Sidebar>
            <Button onClick={() => setVisibleRight(true)} className='p-3'>
                <GiHamburgerMenu className='text-4xl' />
            </Button>
        </div>
    )
}
