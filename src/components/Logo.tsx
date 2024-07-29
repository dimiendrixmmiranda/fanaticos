import Link from "next/link";

export default function Logo() {
    return (
        <Link href={'/'} className="flex h-full gap-2 w-fit">
            <div>
                <img src="../imgs/logo-fanaticos.png" alt="" className="h-full"/>
            </div>
            <div className="relative w-60">
                <h1 className="text-3xl text-white" style={{fontFamily: 'var(--fonte-titulo)', position: "absolute", top: "50%", transform: "translate(0, -80%)"}}>Fanáticos</h1>
                <p className="text-white text-sm" style={{position: 'absolute', top: '50%', left: '0px', whiteSpace: 'nowrap', letterSpacing: '2.5px'}}>Sua Paixão, Nosso Jogo!</p>
            </div>
        </Link>
    )
}