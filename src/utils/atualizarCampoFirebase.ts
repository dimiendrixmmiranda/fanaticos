import { doc, updateDoc } from "firebase/firestore"
import { db } from "@/lib/firebase"

export async function atualizarCampo(uid: string, campo: string, valor: string) {
    try {
        const userRef = doc(db, "users", uid)
        await updateDoc(userRef, {
            [campo]: valor
        })
        alert(`${campo} atualizado com sucesso!`)
    } catch (error) {
        console.error("Erro ao atualizar campo:", error)
        alert("Erro ao salvar alteração.")
    }
}
