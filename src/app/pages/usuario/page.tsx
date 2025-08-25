'use client'
import useAuth from "@/data/hooks/useAuth"

export default function Page() {
    const { logout } = useAuth()
    return (
        <div>
            <h2>Aqui</h2>
            <button onClick={() => logout && logout('/')}>Logaut</button>
        </div>
    )
}