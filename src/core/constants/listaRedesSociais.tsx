import { RedeSocial } from "../social/social";
import { FaFacebookSquare } from "react-icons/fa";
import { AiFillInstagram, AiFillTikTok } from "react-icons/ai";
import { FaSquareWhatsapp } from "react-icons/fa6";

export const listaDeRedesSocias: RedeSocial[] = [
    {
        texto: 'Facebook',
        icone: <FaFacebookSquare />,
        link: '/'
    },
    {
        texto: 'Instagram',
        icone: <AiFillInstagram />,
        link: '/'
    },
    {
        texto: 'Tiktok',
        icone: <AiFillTikTok />,
        link: '/'
    },
    {
        texto: 'Whatsapp',
        icone: <FaSquareWhatsapp />,
        link: '/'
    },
]