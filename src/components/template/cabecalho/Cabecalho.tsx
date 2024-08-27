'use client';
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import Offcanvas from "./Offcanvas";
import Carrinho from "./Carrinho";
import Favoritos from "./Favoritos";
import Login from "./Login";
import Buscar from "./Buscar";

export default function Cabecalho(){
    const [menuVisible, setMenuVisible] = useState(false);
    
    return (
        <header className="px-2 py-3 flex justify-between md:justify-normal lg:pb-4 corCabecalho">
            <Link href={'/'} className="flex items-center gap-1">
                <Image src={'/logo-fanaticos.png'} alt="Logo Da Loja Fanáticos" width={45} height={45}></Image>
                <h1 className="fonteTitulo">Fanáticos</h1>
            </Link>
            <Buscar />
            <Carrinho/>
            <Favoritos/>
            <Login />
            <Offcanvas />
        </header>
    )
}