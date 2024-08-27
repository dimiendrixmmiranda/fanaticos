import Link from "next/link";
import { IoIosCart } from "react-icons/io";

export default function Carrinho() {
    return (
        <div className="hidden md:flex justify-center items-center text-2xl w-12">
            <Link href={'/'}>
                <IoIosCart />
            </Link>
        </div>
    )
}