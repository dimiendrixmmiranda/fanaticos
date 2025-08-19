'use client'

import { useEffect, useState } from "react";

type Team = {
    idTeam: string
    strTeam: string
    strBadge: string
    strTeamAlternate?: string
};

export function useTimesF1() {
    const [teamsF1, setTeamsF1] = useState<Team[]>([])
    const [loading, setLoading] = useState<boolean>(true)
    const [error, setError] = useState<string | null>(null)

    useEffect(() => {
        fetch("https://www.thesportsdb.com/api/v1/json/3/search_all_teams.php?l=Formula 1")
            .then(res => res.json())
            .then(data => {
                setTeamsF1(data.teams || [])
                setLoading(false)
            })
            .catch(err => {
                console.error(err)
                setError("Erro ao buscar times")
                setLoading(false)
            });
    }, []);

    return { teamsF1, loading, error }
}
