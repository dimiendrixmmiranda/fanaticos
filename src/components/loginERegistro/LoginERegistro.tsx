'use client'
import { Menu } from 'primereact/menu';
import { Button } from 'primereact/button';
import { useRef } from 'react';
import { HiUserCircle } from 'react-icons/hi';
import { PiSignIn } from 'react-icons/pi';
import { IoIosCreate } from 'react-icons/io';
import { useRouter } from 'next/navigation';
import useAuth from '@/data/hooks/useAuth';
import Image from 'next/image';
import { IoBagCheckSharp, IoLogOutSharp } from 'react-icons/io5';
import { FaUser } from 'react-icons/fa6';

interface LoginERegistroProps {
    mobile: boolean
}

export default function LoginERegistro({ mobile }: LoginERegistroProps) {
    const { usuario, logout } = useAuth()
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
        },
    ];
    const itemsUsuarioLogados = [
        {
            label: 'Meu Perfil',
            icon: <FaUser />,
            command: () => router.push('/pages/usuario')
        },
        {
            label: 'Minhas Compras',
            icon: <IoBagCheckSharp />,
            command: () => router.push('/pages/login?type=login')
        },
        {
            label: 'Sair',
            icon: <IoLogOutSharp />,
            command: () => logout && logout('/')
        },
    ];

    return (
        usuario ? (
            <div className={`${mobile ? 'flex justify-center items-center bg-azul-escuro rounded-lg w-20 h-12' : 'justify-center items-center w-20 hidden lg:flex'}`}>
                <Menu model={itemsUsuarioLogados} popup ref={menu} />
                <Button onClick={(event) => menu.current?.toggle(event)}>
                    <div className='relative w-9 h-9 rounded-full overflow-hidden'>
                        <Image
                            alt='Imagem do usuário'
                            src={usuario.imagemURL}
                            fill
                            className='object-cover'
                        />
                    </div>
                </Button>
            </div>
        ) : (
            <div className={`${mobile ? 'flex justify-center items-center bg-azul-escuro rounded-lg w-20 h-12' : 'justify-center items-center w-20 hidden lg:flex'}`}>
                <Menu model={items} popup ref={menu} />
                <Button onClick={(event) => menu.current?.toggle(event)}>
                    <HiUserCircle size={24} />
                </Button>
            </div>
        )
    );
} 