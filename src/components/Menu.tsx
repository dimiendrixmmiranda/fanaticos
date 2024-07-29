import Link from "next/link";
import { IoIosShirt } from "react-icons/io";
import { PiBootFill } from "react-icons/pi";
import { GiMonclerJacket } from "react-icons/gi";
import { IoFootballSharp } from "react-icons/io5";
import { IoLogoGameControllerB } from "react-icons/io";
import { MdArrowDropDown } from "react-icons/md";


export default function Menu() {
    return (
        <div className="flex w-full" style={{ backgroundColor: 'var(--azul-1)' }}>
            {/* Informe o cep */}
            <Link href="#" className="grow flex justify-center items-center gap-2 text-center text-xl font-bold p-2 text-white hover:bg-blue-800 hover:transition-all">
                <IoIosShirt />
                Camisas
                <MdArrowDropDown className="text-3xl" />
            </Link>
            <Link href="#" className="grow flex justify-center items-center gap-2 text-center text-xl font-bold p-2 text-white hover:bg-blue-800 hover:transition-all">
                <PiBootFill />
                Tenis
                <MdArrowDropDown className="text-3xl" />
            </Link>
            <Link href="#" className="grow flex justify-center items-center gap-2 text-center text-xl font-bold p-2 text-white hover:bg-blue-800 hover:transition-all">
                <GiMonclerJacket />
                Agasalhos
                <MdArrowDropDown className="text-3xl" />
            </Link>
            <Link href="#" className="grow flex justify-center items-center gap-2 text-center text-xl font-bold p-2 text-white hover:bg-blue-800 hover:transition-all">
                <IoFootballSharp />
                Chaveiros
                <MdArrowDropDown className="text-3xl" />
            </Link>
            <Link href="#" className="grow flex justify-center items-center gap-2 text-center text-xl font-bold p-2 text-white hover:bg-blue-800 hover:transition-all">
                <IoLogoGameControllerB />
                E-Sports
                <MdArrowDropDown className="text-3xl" />
            </Link>

        </div>
    )
}