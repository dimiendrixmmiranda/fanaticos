import Link from "next/link";
import { IoPerson } from "react-icons/io5";

export default function Login() {
    return (
        <div className="hidden md:flex justify-center items-center w-24 mx-2 lg:mr-3">
            <Link href={'/'} className="flex items-center gap-1">
                <IoPerson className="text-4xl"/>
                <span className="leading-3 font-bold lg:text-md text-xs">Entre ou Casdastre-se</span>
            </Link>
        </div>
    )
}