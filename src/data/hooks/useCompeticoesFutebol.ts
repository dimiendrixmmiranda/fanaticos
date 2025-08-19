'use client'

import { useEffect, useState } from "react";

type League = {
    idLeague: string
    strLeague: string
    strSport: string
    strLeagueAlternate?: string
};

export function useCompeticoesDeFutebol() {
    const [ligas, setLigas] = useState<League[]>([])
    const [loading, setLoading] = useState<boolean>(true)
    const [error, setError] = useState<string | null>(null)

    useEffect(() => {
        fetch("https://www.thesportsdb.com/api/v1/json/3/all_leagues.php")
            .then(res => res.json())
            .then(data => {
                // filtra apenas futebol
                const futebol = (data.leagues || []).filter(
                    (l: League) => l.strSport === "Soccer"
                )
                setLigas(futebol)
                setLoading(false)
            })
            .catch(err => {
                console.error(err)
                setError("Erro ao buscar ligas de futebol")
                setLoading(false)
            })
    }, [])

    return { ligas, loading, error }
}