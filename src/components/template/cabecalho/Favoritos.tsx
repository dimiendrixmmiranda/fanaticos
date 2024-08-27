import Link from "next/link";
import { FaHeart } from "react-icons/fa";

export default function Favoritos() {
    return (
        <div className="hidden md:flex justify-center items-center text-2xl w-12">
            <Link href={'/'}>
                <FaHeart />
            </Link>
        </div>
    )
}