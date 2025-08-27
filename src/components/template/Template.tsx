import { ReactNode } from "react";
import Rodape from "./footer/Rodape";
import Cabecalho from "./header/Cabecalho";

interface TemplateProps {
    children: ReactNode
}

export default function Template({ children }: TemplateProps) {
    return (
        <>
            <Cabecalho />
            <main className="bg-zinc-300 p-4 min-h-screen">
                {
                    children
                }
            </main>
            <Rodape />
        </>
    )
}