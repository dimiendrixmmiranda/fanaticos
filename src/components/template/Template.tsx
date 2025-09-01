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
            <main className="bg-zinc-300 min-h-screen pb-6">
                {
                    children
                }
            </main>
            <Rodape />
        </>
    )
}