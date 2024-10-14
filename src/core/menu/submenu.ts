import { StaticImport } from "next/dist/shared/lib/get-img-props"

export interface Submenu {
    texto: string
    link: string
    icone: string | StaticImport
}