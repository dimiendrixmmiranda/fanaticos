export type Usuario = {
    uid: string
    email: string
    nome: string
    token: string
    provedor: string
    imagemURL: string
    tipo?: string
    stripeCustomerId: string
}