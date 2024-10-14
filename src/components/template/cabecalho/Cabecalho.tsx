import MenuSidebar from "@/components/menuSidebar/MenuSidebar";
import { listaDeMenus } from "@/core/constants";
import Image from "next/image";
import Link from "next/link";
import { FaMagnifyingGlass, FaCartShopping } from "react-icons/fa6";
import { FaHeart } from "react-icons/fa";
import Cadastrar from "@/components/cadastrar/Cadastrar";
import RedesSocias from "@/components/sociais/Sociais";

export default function Cabecalho() {
    return (
        <header className="bg-[--primaria]">
            <div className="flex">
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
                    {
                        listaDeMenus.map((item, index) => {
                            return (
                                <li key={index} className="relative hover:bg-[--secundaria]">
                                    <Link href={item.menu.link} className="flex items-center gap-1 text-md font-sans font-bold p-2 lg:px-4 lg:text-lg xl:px-6 xl:text-xl">
                                        {item.menu.icone}
                                        <p>{item.menu.texto}</p>
                                        <ul className="absolute left-[0] top-[100%] w-[100%] bg-[--secundaria] hidden transition-all" ></ul>
                                    </Link>
                                </li>
                            )
                        })
                    }
                </ul>
                <Cadastrar estilo="hidden lg:block"></Cadastrar>
                <MenuSidebar></MenuSidebar>
            </div>
            <div className="hidden md:flex bg-[--secundaria] p-2 font-sans xl:pt-4">
                <div className="relative w-full flex-1 xl:max-w-[900px] xl:h-[50px] xl:mx-auto xl:flex">
                    <input type="text" name="buscar" id="buscar" className="h-full rounded-xl px-2 w-full" placeholder="O que está buscando??" />
                    <button className="absolute top-[50%] right-0 bg-[--primaria] h-full px-3" style={{ transform: 'translate(0,-50%)', borderRadius: '0 12px 12px 0' }}>
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
            <div className="absolute bottom-4 right-4 bg-red-600 p-3 rounded-full flex justify-center items-center md:hidden">
                <button className="text-4xl"><FaHeart /></button>
            </div>
            <div className="absolute bottom-20 right-4 bg-[--primaria] p-3 rounded-full flex justify-center items-center md:hidden">
                <button className="text-4xl"><FaCartShopping /></button>
            </div>
        </header>
    )
}