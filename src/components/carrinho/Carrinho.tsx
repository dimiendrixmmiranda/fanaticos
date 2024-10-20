import Link from "next/link";
import { FaCartShopping } from "react-icons/fa6";

interface CarrinhoProps {
    estilo: string
}

export default function Carrinho({ estilo }: CarrinhoProps) {
    return (
        <div className={estilo} style={{boxShadow: '0 0 1px 1px black'}}>
            <Link href={'/'} className="w-full h-full flex justify-center items-center py-1 rounded-md">
                <FaCartShopping />
            </Link>
        </div>
    )
}