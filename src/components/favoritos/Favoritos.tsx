'use client'

import { FaHeart } from "react-icons/fa"

interface CartProps {
    mobile: boolean
}

export default function Favoritos({ mobile }: CartProps) {
    return (
        <div className={mobile ? 'flex bg-laranja justify-center p-2 rounded-lg' : 'hidden lg:flex'}>
            <div
                className="flex items-center justify-center relative cursor-pointer w-10"
            >
                <FaHeart />
                <span className="absolute top-0 right-0 text-[.5em] rounded-full w-[14px] h-[14px] bg-azul flex justify-center items-center">{0}</span>
            </div>
        </div>
    )
}