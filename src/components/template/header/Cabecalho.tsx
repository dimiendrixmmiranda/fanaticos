'use client'
import Cart from "@/components/cart/Cart";
import LoginERegistro from "@/components/loginERegistro/LoginERegistro";
import Navbar from "@/components/navbar/Navbar";
import SidebarComponent from "@/components/sidebarComponent/SidebarComponent";
import Image from "next/image";
import Link from "next/link";

export default function Cabecalho() {

    return (
        <header className="flex bg-laranja p-2 gap-4">
            <Link href={'/'} className="flex items-center gap-2 flex-1 md:flex-none">
                <div className="w-12 h-12 relative">
                    <Image alt="Logo Fanáticos" src={'/logo/logo-fanaticos.png'} fill className="object-contain" />
                </div>
                <h2 className="font-terciaria text-4xl hidden sm:block md:hidden lg:block" style={{ textShadow: '1px 1px 3px black' }}>Fanáticos</h2>
            </Link>

            <Navbar />

            <SidebarComponent />

            {/* Carrinho de compras */}
            <Cart />

            <LoginERegistro />
        </header>
    )
}