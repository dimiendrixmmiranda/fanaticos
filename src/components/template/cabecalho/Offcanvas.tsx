'use client';

import React, { useState } from 'react';
import { Sidebar } from 'primereact/sidebar';
import { Button } from 'primereact/button';
import { FaBars } from "react-icons/fa";
import { FaTshirt } from 'react-icons/fa';
import { IoFootball } from "react-icons/io5";
import { PiPersonArmsSpreadFill } from "react-icons/pi";
import { GiKeyring } from 'react-icons/gi';
import { FaFacebook } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { IoLogoWhatsapp } from "react-icons/io";
import { IoChatboxEllipsesSharp } from "react-icons/io5";

import Link from 'next/link';

export default function Offcanvas() {
    const [visible, setVisible] = useState(false);

    return (
        <div className="card w-12 lg:hidden">
            <Sidebar className='relative flex flex-col text-black h-full' visible={visible} onHide={() => setVisible(false)}>
                <h1 className='absolute text-3xl font-black' style={{ top: '1.5%', left: '45%', transform: 'translate(-50%)' }}>Menu</h1>
                <nav className="items-center flex-1">
                    <ul className="flex flex-col w-full">
                        <li className="font-bold flex-1 bg-white text-black">
                            <Link href={'/'} className="flex text-xl items-center px-2 py-1 gap-1 w-full">
                                <IoFootball />
                                <span>Camisas</span>
                            </Link>
                        </li>
                        <li className="font-bold flex-1 bg-white text-black">
                            <Link href={'/'} className="flex text-xl items-center px-2 py-1 gap-1 w-full">
                                <FaTshirt />
                                <span>Agasalhos</span>
                            </Link>
                        </li>
                        <li className="font-bold flex-1 bg-white text-black">
                            <Link href={'/'} className="flex text-xl items-center px-2 py-1 gap-1 w-full">
                                <PiPersonArmsSpreadFill />
                                <span>Kit Crianças</span>
                            </Link>
                        </li>
                        <li className="font-bold flex-1 bg-white text-black">
                            <Link href={'/'} className="flex text-xl items-center px-2 py-1 gap-1 w-full">
                                <GiKeyring />
                                <span>Chaveiros</span>
                            </Link>
                        </li>
                    </ul>
                </nav>
                <ul className='flex absolute bottom-2 left-0 w-full'>
                    <li className='flex-1'>
                        <Link href={"/"} className='flex justify-center items-center text-3xl'>
                            <FaFacebook />
                        </Link>
                    </li>
                    <li className='flex-1'>
                        <Link href={"/"} className='flex justify-center items-center text-3xl'>
                            <AiFillInstagram />
                        </Link>
                    </li>
                    <li className='flex-1'>
                        <Link href={"/"} className='flex justify-center items-center text-3xl'>
                            <IoLogoWhatsapp />
                        </Link>
                    </li>
                    <li className='flex-1'>
                        <Link href={"/"} className='flex justify-center items-center text-3xl'>
                            <IoChatboxEllipsesSharp />
                        </Link>
                    </li>
                </ul>
            </Sidebar>
            <Button className='w-full h-full flex justify-center items-center text-3xl' onClick={() => setVisible(true)} >
                <FaBars />
            </Button>
        </div>
    )
}