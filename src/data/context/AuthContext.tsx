'use client'

import { createContext, useEffect, useState } from "react";
import { useRouter } from 'next/navigation'; // Usando o useRouter corretamente
import { User, createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth"; // Importando funções de autenticação
import Cookies from 'js-cookie';
import { doc, getDoc, setDoc } from "firebase/firestore";
import { auth, db } from "@/lib/firebase";
import { Usuario } from "@/types/Usuario";

interface AuthContextProps {
    usuario?: Usuario | null;
    children?: React.ReactNode;
    carregando?: boolean
    login?: (email: string, senha: string) => Promise<void>;
    logout?: (encaminhamento: string) => Promise<void>;
    cadastrar?: (email: string, senha: string, nome: string) => Promise<void>;
}

const AuthContext = createContext<AuthContextProps>({});

async function usuarioNormalizado(usuarioFirebase: User): Promise<Usuario> {
    const token = await usuarioFirebase.getIdToken();
    const userDoc = await getDoc(doc(db, "users", usuarioFirebase.uid));

    const data = userDoc.exists() ? userDoc.data() : {};

    return {
        uid: usuarioFirebase.uid,
        nome: data.nome || usuarioFirebase.displayName || "",
        email: data.email || usuarioFirebase.email || "",
        token,
        provedor: usuarioFirebase.providerData[0]?.providerId || "",
        imagemURL: data.imagemURL || usuarioFirebase.photoURL || "",
        tipo: data.tipo || "usuario", // default se não tiver
        stripeCustomerId: data.stripeCustomerId || null,
    }
}

export function AuthProvider({ children }: AuthContextProps) {
    const [carregando, setCarregando] = useState(true)
    const [usuario, setUsuario] = useState<Usuario | null>(null)
    const router = useRouter()

    async function configurarSessao(usuarioFirebase: User | null) {
        if (usuarioFirebase && usuarioFirebase.email) {
            const usuario = await usuarioNormalizado(usuarioFirebase)
            setUsuario(usuario)
            gerenciarCookie(true)
            setCarregando(false)
            return usuario.email
        } else {
            gerenciarCookie(false)
            setUsuario(null)
            setCarregando(false)
            return false
        }
    }

    async function logout(encaminhamento: string) {
        try {
            setCarregando(true)
            await auth.signOut()
            await configurarSessao(null)
            router.push(`${encaminhamento}`)
        } finally {
            setCarregando(false)
        }
    }

    async function login(email: string, senha: string) {
        try {
            setCarregando(true);
            const result = await signInWithEmailAndPassword(auth, email, senha);
            const user = result.user;

            await configurarSessao(user); // atualiza estado
            router.push('/pages/usuario');       // redireciona
        } catch (error) {
            console.error("Erro ao autenticar:", error);
            throw error;
        } finally {
            setCarregando(false);
        }
    }

    function gerenciarCookie(logado: boolean) {
        if (logado) {
            Cookies.set('admin-auth', JSON.stringify(logado), {
                expires: 7
            })
        } else {
            Cookies.remove('admin-auth')
        }
    }


    async function cadastrar(email: string, senha: string, nome: string) {
        try {
            setCarregando(true)
            const result = await createUserWithEmailAndPassword(auth, email, senha)
            const user = result.user

            await updateProfile(user, { displayName: nome })

            // grava em "users" em vez de "usuarios"
            await setDoc(doc(db, "users", user.uid), {
                nome,
                email,
                imagemURL: "/default/usuario-padrao.png",
                tipo: "usuario",
                stripeCustomerId: null,
            })

            await configurarSessao(user)
            router.push('/pages/usuario')
        } catch (error) {
            console.error("Erro ao cadastrar:", error)
            throw error
        } finally {
            setCarregando(false)
        }
    }


    // Recuperando o usuário do cookie ou localStorage na inicialização
    useEffect(() => {
        // Verificando se o cookie contém informações de autenticação
        const usuarioAuth = Cookies.get('admin-auth');
        if (usuarioAuth) {
            // Aqui você poderia adicionar a lógica para recuperar o token do Firebase
            auth.onIdTokenChanged((user) => {
                if (user) {
                    configurarSessao(user);
                } else {
                    setCarregando(false);
                }
            });
        } else {
            setCarregando(false); // Se não houver usuário no cookie, termina o carregamento
        }
    }, []);

    return (
        <AuthContext.Provider value={{
            usuario, carregando, logout, login, cadastrar
        }}>
            {children}
        </AuthContext.Provider>
    );
}

export default AuthContext;
