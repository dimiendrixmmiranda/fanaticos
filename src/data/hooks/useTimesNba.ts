'use client'

import { useEffect, useState } from "react";

type Team = {
    idTeam: string
    strTeam: string
    strBadge: string
};

export function useTimesNba() {
    const [teamsNba, setTeamsNba] = useState<Team[]>([])
    const [loading, setLoading] = useState<boolean>(true)
    const [error, setError] = useState<string | null>(null)

    useEffect(() => {
        fetch("/api/times-nba")
            .then(res => {
                if (!res.ok) throw new Error("Erro na resposta da API");
                return res.json();
            })
            .then(data => {
                setTeamsNba(data.teams || [])
                setLoading(false)
            })
            .catch(err => {
                console.error(err)
                setError("Erro ao buscar times")
                setLoading(false)
            });
    }, [])

    return { teamsNba, loading, error }
}
