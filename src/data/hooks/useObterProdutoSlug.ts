'use client'
import { listaDeProdutos } from "@/core/constants";
import { Produto } from "@/core/produtos/produto";
import { useEffect, useState } from "react";
interface UseObterProdutoSlug{
    slug: string
}

export default function useObterProdutoSlug({slug}: UseObterProdutoSlug) {
    const [produto, setProduto] = useState<Produto | null>(null)

    useEffect(() => {
        if (slug) {
            const noticiaId = slug?.split('-')[0];
            const noticiaEncontrada = listaDeProdutos.find(n => n.id === Number(noticiaId));
            if(noticiaEncontrada) setProduto(noticiaEncontrada)
        }
    }, [slug]);

    return {
        produto, setProduto
    }
}