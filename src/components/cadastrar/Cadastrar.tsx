import Link from "next/link";
import { IoPersonSharp } from "react-icons/io5";

interface CadastrarProps{
    estilo: string
}

export default function Cadastrar({estilo}: CadastrarProps) {
    return (
        <div className={`h-full self-center font-sans font-semibold px-2 ${estilo}`}>
            <Link href={'/'} className="flex items-center h-full gap-1">
                <IoPersonSharp className="text-3xl" />
                <p className="max-w-[100px] leading-4">Entre ou Cadastre-se</p>
            </Link>
        </div>
    )
}