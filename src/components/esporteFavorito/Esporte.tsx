'use client'
import Image from "next/image";
import styles from './esporte.module.css'
import Link from "next/link";

export default function Esporte() {

    return (
        <div className={`flex flex-wrap justify-center gap-4 max-w-[95%] mx-auto my-6 md:grid md:grid-cols-3 ${styles.esporte}`}>
            <Link href={`/esportes/basquete`} className="w-full relative h-[300px] bg-red-400 max-w-[290px] rounded-xl overflow-hidden sm:max-w-[340px] sm:h-[320px] md:h-[260px] lg:max-w-[310px] lg:h-[340px] xl:max-w-[440px] xl:h-[430px]" style={{ boxShadow: '0px 0px 2px 2px black' }}>
                <Image src={'/esportes/basquete.jpeg'} alt="Produtos relacionados a Basquete" fill className="object-cover"></Image>
                <h2 className="bg-[--primaria] absolute bottom-2 left-[50%] uppercase text-xl font-black w-[95%] text-center md:text-[1.1em] lg:text-xl lg:py-2" style={{ transform: 'translate(-50%)' }}>Especial Basquete</h2>
            </Link>
            <Link href={`/esportes/futebol`} className="w-full relative h-[300px] bg-red-400 max-w-[290px] rounded-xl overflow-hidden sm:max-w-[340px] sm:h-[320px] md:h-[260px] lg:max-w-[310px] lg:h-[340px] xl:max-w-[440px] xl:h-[430px]" style={{ boxShadow: '0px 0px 2px 2px black' }}>
                <Image src={'/esportes/futebol.jpeg'} alt="Produtos relacionados a Basquete" fill className="object-cover"></Image>
                <h2 className="bg-[--primaria] absolute bottom-2 left-[50%] uppercase text-xl font-black w-[95%] text-center md:text-[1.1em] lg:text-xl lg:py-2" style={{ transform: 'translate(-50%)' }}>Especial Futebol</h2>
            </Link>
            <Link href={`/esportes/americano`} className="w-full relative h-[300px] bg-red-400 max-w-[290px] rounded-xl overflow-hidden sm:max-w-[340px] sm:h-[320px] md:h-[260px] lg:max-w-[310px] lg:h-[340px] xl:max-w-[440px] xl:h-[430px]" style={{ boxShadow: '0px 0px 2px 2px black' }}>
                <Image src={'/esportes/futebol-americano.jpeg'} alt="Produtos relacionados a Basquete" fill className="object-cover"></Image>
                <h2 className="bg-[--primaria] absolute bottom-2 left-[50%] uppercase text-xl font-black w-[95%] text-center md:text-[1.1em] lg:text-xl lg:py-2" style={{ transform: 'translate(-50%)' }}>Especial Futebol Americano</h2>
            </Link>
        </div>
    )
}