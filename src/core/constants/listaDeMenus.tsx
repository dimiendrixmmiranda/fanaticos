import { Menu } from "../menu/menu";
import { FaTshirt } from "react-icons/fa";

export const listaDeMenus: Menu[] = [
    {
        menu: {
            texto: 'Camisas',
            icone: <FaTshirt />,
            link: "/"
        },
        submenu: [
            {
                link: '/',
                texto: 'Brasileirão',
                icone: '/bandeiras/brasil.png'
            },
            {
                link: '/',
                texto: 'Premier League',
                icone: '/bandeiras/inglaterra.png'
            },
            {
                link: '/',
                texto: 'Serie A',
                icone: '/bandeiras/italia.png'
            },
            {
                link: '/',
                texto: 'Ligue 1',
                icone: '/bandeiras/franca.png'
            },
            {
                link: '/',
                texto: 'La Liga',
                icone: '/bandeiras/espanha.png'
            },
            {
                link: '/',
                texto: 'Bundesliga',
                icone: '/bandeiras/alemanha.png'
            },
        ]
    },
    {
        menu: {
            texto: 'Chaveiros',
            icone: <FaTshirt />,
            link: "/"
        },
        submenu: [
            {
                link: '/',
                texto: 'Chaveiros',
                icone: ''
            },
        ]
    },
    {
        menu: {
            texto: 'Infantil',
            icone: <FaTshirt />,
            link: "/"
        },
        submenu: [
            {
                link: '/',
                texto: 'Infantil',
                icone: ''
            },
        ]
    },
    {
        menu: {
            texto: 'Agasalhos',
            icone: <FaTshirt />,
            link: "/"
        },
        submenu: [
            {
                link: '/',
                texto: 'Agasalho Oficial',
                icone: ''
            },
            {
                link: '/',
                texto: 'Moletom',
                icone: ''
            },
            {
                link: '/',
                texto: 'Corta Vento',
                icone: ''
            },
        ]
    },
]