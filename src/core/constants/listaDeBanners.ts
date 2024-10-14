import { adicionarElemento } from "@/utils/adicionarElemento";
import { Banner } from "../banner/banner";

export const listaDeBanners: Banner[] = []
adicionarElemento(
    listaDeBanners,
    {
        imagem:'/wireframe.png',
        texto:'Banner 1',
        link: '/'
    }
)
adicionarElemento(
    listaDeBanners,
    {
        imagem:'/wireframe.png',
        texto:'Banner 2',
        link: '/'
    }
)
adicionarElemento(
    listaDeBanners,
    {
        imagem:'/wireframe.png',
        texto:'Banner 3',
        link: '/'
    }
)