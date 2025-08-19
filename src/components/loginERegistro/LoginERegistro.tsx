'use client'
import { Menu } from 'primereact/menu';
import { Button } from 'primereact/button';
import { useRef } from 'react';
import { HiUserCircle } from 'react-icons/hi';
import { PiSignIn } from 'react-icons/pi';
import { IoIosCreate } from 'react-icons/io';
import { useRouter } from 'next/navigation';

export default function LoginERegistro() {
    const menu = useRef<Menu>(null);
    const router = useRouter();

    const items = [
        {
            label: 'Entrar',
            icon: <PiSignIn />,
            command: () => router.push('/pages/login?type=login')
        },
        {
            label: 'Criar Conta',
            icon: <IoIosCreate />,
            command: () => router.push('/pages/login?type=create_account')
        }
    ];

    return (
        <div className='justify-center items-center w-10 hidden lg:flex'>
            <Menu model={items} popup ref={menu} />
            <Button onClick={(event) => menu.current?.toggle(event)}>
                <HiUserCircle size={24} />
            </Button>
        </div>
    );
}