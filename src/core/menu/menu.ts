import React from "react"
import { Submenu } from "./submenu"

export interface Menu {
    menu: {
        texto: string,
        link: string
        icone: React.ReactElement
    }
    submenu: Submenu[]
}