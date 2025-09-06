import Image from "next/image";
import Link from "next/link";

export default function Rodape() {
    return (
        <footer className="bg-laranja p-4 flex flex-col gap-6 md:grid md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4">
            <div className="flex-1 my-auto md:col-start-1 md:col-end-4 lg:col-end-2">
                <Link href={'/'} className="flex items-center justify-center gap-2">
                    <div className="w-20 h-20 relative lg:w-40 lg:h-40 xl:w-20 xl:h-20">
                        <Image alt="Logo Fanáticos" src={'/logo/logo-fanaticos.png'} fill className="object-contain" />
                    </div>
                    <h2 className="font-terciaria text-6xl sm:block lg:hidden xl:block" style={{ textShadow: '1px 1px 3px black' }}>Fanáticos</h2>
                </Link>
                <p className="text-white font-cursiva font-bold text-xl text-center" style={{textShadow: '1px 1px 2px black'}}>A casa dos apaixonados por esporte!</p>
            </div>
            <div className="flex flex-col" style={{ textShadow: '1px 1px 2px black' }}>
                <h2 className="uppercase font-bold text-lg">Ajuda e Atendimento</h2>
                <ul>
                    <li>
                        <Link href={'/'}>Minha conta</Link>
                    </li>
                    <li>
                        <Link href={'/'}>Acompanhe seu pedido</Link>
                    </li>
                    <li>
                        <Link href={'/'}>Dúvidas Frequentes</Link>
                    </li>
                    <li>
                        <Link href={'/'}>Fale com a gente</Link>
                    </li>
                    <li>
                        <Link href={'/'}>Troca e arrependimento</Link>
                    </li>
                </ul>
            </div>
            <div className="flex flex-col" style={{ textShadow: '1px 1px 2px black' }}>
                <h2 className="uppercase font-bold text-lg">Políticas e Regulamento</h2>
                <ul>
                    <li>
                        <Link href={'/'}>Políticas de cookies</Link>
                    </li>
                    <li>
                        <Link href={'/'}>Políticas de privacidade</Link>
                    </li>
                    <li>
                        <Link href={'/'}>Política de troca e arrependimento</Link>
                    </li>
                    <li>
                        <Link href={'/'}>Regulamentos</Link>
                    </li>
                    <li>
                        <Link href={'/'}>Segurança</Link>
                    </li>
                    <li>
                        <Link href={'/'}>Termos e condições</Link>
                    </li>
                </ul>
            </div>
            <div className="flex flex-col" style={{ textShadow: '1px 1px 2px black' }}>
                <h2 className="uppercase font-bold text-lg">Institucional</h2>
                <ul>
                    <li>
                        <Link href={'/'}>Acessoria de Imprensa</Link>
                    </li>
                    <li>
                        <Link href={'/'}>Relação com Investidores</Link>
                    </li>
                    <li>
                        <Link href={'/'}>Sustentabilidade</Link>
                    </li>
                    <li>
                        <Link href={'/'}>Trabalhe Conosco</Link>
                    </li>
                    <li>
                        <Link href={'/'}>Central de Vendas</Link>
                    </li>
                    <li>
                        <Link href={'/'}>Tire suas Dúvidas</Link>
                    </li>
                </ul>
            </div>
        </footer>
    )
}