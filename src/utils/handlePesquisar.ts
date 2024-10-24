import { FormEvent, useState } from "react";
import { createSlugWithId } from "./createSlug";
import { useRouter } from "next/navigation";


export default function useHandlePesquisar() {
    const [searchQuery, setSearchQuery] = useState('');
    const router = useRouter();

    const handlePesquisar = (e: FormEvent) => {
        e.preventDefault()
        if (searchQuery.trim()) {
            const slug = createSlugWithId(searchQuery);
            router.push(`/busca/${slug}`);
        }
    }

    return {
        searchQuery,
        setSearchQuery,
        handlePesquisar 
    }
}