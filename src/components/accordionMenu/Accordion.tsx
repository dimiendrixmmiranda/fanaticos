import React from 'react';
import { Accordion, AccordionTab } from 'primereact/accordion';
import { Menu } from '@/core/menu/menu';
import Image from 'next/image';
import Link from 'next/link';

interface AccordionMenuProps {
    arrayDeMenus: Menu[]
}

export default function AccordionMenu({ arrayDeMenus }: AccordionMenuProps) {
    return (
        <div className="card">
            <Accordion>
                {
                    arrayDeMenus.map((item, index) => {
                        return (
                            <AccordionTab
                                header={
                                    <div style={{ display: 'flex', alignItems: 'center'}}>
                                        {item.menu.icone && <span style={{ marginRight: '8px' }}>{item.menu.icone}</span>}
                                        <span>{item.menu.texto}</span>
                                    </div>
                                } key={index} className='text-xl'
                            >
                                <ul className=''>
                                    {
                                        item.submenu?.map((item, index) => {
                                            return (
                                                <li key={index}>
                                                    <Link href={item.link} className='flex items-center gap-2 p-2 text-lg font-bold text-[--primaria]'>
                                                        {
                                                            item.icone != '' ?
                                                                <div>
                                                                    <Image src={item.icone} alt={item.texto} width={20} height={20}></Image>
                                                                </div> : ''

                                                        }
                                                        <p>{item.texto}</p>
                                                    </Link>
                                                </li>
                                            )
                                        })
                                    }
                                </ul>
                            </AccordionTab>
                        )
                    })
                }

            </Accordion>
        </div>
    )
}
