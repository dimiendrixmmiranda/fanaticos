import Link from "next/link";
import { FaTshirt } from 'react-icons/fa';
import { IoFootball } from "react-icons/io5";
import { PiPersonArmsSpreadFill } from "react-icons/pi";
import { GiKeyring } from 'react-icons/gi';

export default function Navbar() {
    return (
        <nav className="hidden lg:flex items-center">
            <ul className="flex w-full">
                <li className="font-bold flex-1 bg-white text-[#2d37b6] border border-zinc-400">
                    <Link href={'/'} className="flex justify-center text-lg items-center px-2 py-1 rounded-md gap-1 w-full">
                        <IoFootball />
                        <span>Camisas</span>
                    </Link>
                </li>
                <li className="font-bold flex-1 bg-white text-[#2d37b6] border border-zinc-400">
                    <Link href={'/'} className="flex justify-center text-lg items-center px-2 py-1 rounded-md gap-1 w-full">
                        <FaTshirt />
                        <span>Agasalhos</span>
                    </Link>
                </li>
                <li className="font-bold flex-1 bg-white text-[#2d37b6] border border-zinc-400">
                    <Link href={'/'} className="flex justify-center text-lg items-center px-2 py-1 rounded-md gap-1 w-full">
                        <PiPersonArmsSpreadFill />
                        <span>Kit Crianças</span>
                    </Link>
                </li>
                <li className="font-bold flex-1 bg-white text-[#2d37b6] border border-zinc-400">
                    <Link href={'/'} className="flex justify-center text-lg items-center px-2 py-1 rounded-md gap-1 w-full">
                        <GiKeyring />
                        <span>Chaveiros</span>
                    </Link>
                </li>
            </ul>
        </nav>
    )
}