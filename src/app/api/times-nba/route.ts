import { NextResponse } from "next/server"

export async function GET() {
    try {
        const res = await fetch("https://www.thesportsdb.com/api/v1/json/3/search_all_teams.php?l=NBA")
        const data = await res.json()
        return NextResponse.json(data)
    } catch {
        return NextResponse.json({ error: "Erro ao buscar times" }, { status: 500 })
    }
}
