import Link from "next/link";
import { FaHeart } from "react-icons/fa";

interface FavoritoProps {
    estilo: string
}

export default function Favorito({ estilo }: FavoritoProps) {
    return (
        <div className={estilo} style={{boxShadow: '0 0 1px 1px black'}}>
            <Link href={'/'} className="w-full h-full flex justify-center items-center py-1 rounded-md">
                <FaHeart />
            </Link>
        </div>
    )
}