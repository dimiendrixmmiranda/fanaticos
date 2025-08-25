'use client'

import { useEffect, useState } from "react";

type Team = {
    idTeam: string
    strTeam: string
    strBadge: string
};

export function useTimesNfl() {
    const [teamsNfl, setTeamsNfl] = useState<Team[]>([])
    const [loading, setLoading] = useState<boolean>(true)
    const [error, setError] = useState<string | null>(null)

    useEffect(() => {
        fetch("/api/times-nfl")
            .then(res => {
                if (!res.ok) throw new Error("Erro na resposta da API");
                return res.json();
            })
            .then(data => {
                setTeamsNfl(data.teams || [])
                setLoading(false)
            })
            .catch(err => {
                console.error(err)
                setError("Erro ao buscar times")
                setLoading(false)
            });
    }, [])

    return { teamsNfl, loading, error }
}
