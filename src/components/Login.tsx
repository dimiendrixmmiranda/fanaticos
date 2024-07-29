import Link from "next/link";
import { IoIosArrowDown } from "react-icons/io";
import { IoPerson } from "react-icons/io5";


export default function Login() {
    return (
        <Link href={'#'} className="flex justify-center items-center gap-1 text-white">
            <div className="rounded-full h-16 w-16 flex justify-center items-center">
                <IoPerson className="text-4xl"/>
            </div>
            <div className="flex flex-col">
                <span>Entre</span>
                <span>Meus pedidos</span>
            </div>
            <div className="flex justify-center items-center">
                <IoIosArrowDown className="text-4xl"/>
            </div>
        </Link>
    )
}