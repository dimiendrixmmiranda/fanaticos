'use client';
import { useState, useEffect } from "react";
import MenuSidebar from "@/components/menuSidebar/MenuSidebar";
import { listaDeMenus } from "@/core/constants";
import Image from "next/image";
import Link from "next/link";
import Cadastrar from "@/components/cadastrar/Cadastrar";
import { Submenu } from "@/core/menu/submenu";
import { FaCartShopping, FaMagnifyingGlass } from "react-icons/fa6";
import { FaHeart } from "react-icons/fa";
import RedesSocias from "@/components/sociais/Sociais";

export default function Cabecalho() {
    const [isClient, setIsClient] = useState(false);

    // Ativando o client-side apenas quando montado
    useEffect(() => {
        setIsClient(true);
    }, []);

    // Função para renderizar os submenus
    function renderizarSubmenu(submenu: Submenu[]) {
        return submenu?.map((submenuItem, i) => (
            <li key={i} className="p-1 lg:px-2">
                <Link href={'/'} className="gap-2 items-center py-1" style={{ display: 'grid', gridTemplateColumns: '20px 1fr' }}>
                    <div className="relative h-3">
                        {submenuItem.icone != '' ? <Image alt={submenuItem.texto} src={`${submenuItem.icone}`} fill className="object-cover"></Image> : ''}
                    </div>
                    <p className="text-[.7em] leading-4 lg:text-[.9em] lg:leading-6">{submenuItem.texto}</p>
                </Link>
            </li>
        ));
    }

    if (!isClient) {
        return null;
    }

    return (
        <header className="bg-[--primaria]">
            <div className="flex py-2 px-1">
                <Link href={'/'} className="flex flex-1">
                    <div className="p-2">
                        <Image src={'/logo-fanaticos.png'} alt="Logo da Loja Fanáticos" width={50} height={50}></Image>
                    </div>
                    <div className="flex flex-col justify-center">
                        <h1 className="text-2xl">Fanáticos</h1>
                        <h3 className="text-[.4em] -mt-1">Vista sua paixão, jogue com o coração.</h3>
                    </div>
                </Link>
                <ul className="hidden items-center gap-3 md:flex md:mr-5">
                    {listaDeMenus.map((item, index) => (
                        <li key={index} className="relative hover:bg-[--secundaria]">
                            <Link href={item.menu.link} className="flex items-center gap-1 text-md font-sans font-bold p-2 lg:px-4 lg:text-lg xl:px-6 xl:text-xl">
                                {item.menu.icone}
                                <p>{item.menu.texto}</p>
                                <ul className="absolute left-[0] top-[100%] w-[100%] bg-[--secundaria] hidden transition-all">
                                    {renderizarSubmenu(item?.submenu)}
                                </ul>
                            </Link>
                        </li>
                    ))}
                </ul>
                <Cadastrar estilo="hidden lg:block"></Cadastrar>
                <MenuSidebar></MenuSidebar>
            </div>
            <div className="hidden md:flex bg-[--secundaria] p-2 font-sans xl:pt-4">
                <div className="relative w-full flex-1 xl:max-w-[900px] xl:h-[50px] xl:mx-auto xl:flex">
                    <input type="text" name="buscar" id="buscar" className="h-full rounded-xl px-2 w-full lg:px-4 lg:text-xl" placeholder="O que está buscando??" />
                    <button className="absolute top-[50%] right-0 bg-[--primaria] h-full px-3 lg:text-2xl" style={{ transform: 'translate(0,-50%)', borderRadius: '0 12px 12px 0' }}>
                        <FaMagnifyingGlass />
                    </button>
                </div>
                <div className="w-full h-full max-w-[70px] text-3xl xl:text-4xl flex justify-center items-center xl:py-1">
                    <Link href={'/'} className="w-full h-full flex justify-center items-center py-1 rounded-md">
                        <FaHeart />
                    </Link>
                </div>
                <div className="w-full h-full max-w-[70px] text-3xl xl:text-4xl flex justify-center items-center xl:py-1">
                    <Link href={'/'} className="w-full h-full flex justify-center items-center py-1 rounded-md">
                        <FaCartShopping />
                    </Link>
                </div>
                <Cadastrar estilo="block lg:hidden"></Cadastrar>
                <RedesSocias estilo="flex gap-2 mr-4 ml-6"></RedesSocias>
            </div>
        </header>
    );
}
