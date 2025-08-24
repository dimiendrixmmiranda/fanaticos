import { collection, getDocs } from "firebase/firestore"
import { db } from "./firebase"
import ProductFirebase from "@/types/ProductFirebase"
import { Timestamp } from "firebase-admin/firestore"

export async function getProductsFirebase(): Promise<ProductFirebase[]> {
    const produtosCol = collection(db, "products")
    const produtosSnapshot = await getDocs(produtosCol)

    const produtos = produtosSnapshot.docs.map((doc) => {
        const data = doc.data() as Omit<ProductFirebase, "id" | "updatedAt"> & {
            updatedAt?: Timestamp | string | null;
        };

        let updatedAt: string | null = null;

        if (data.updatedAt instanceof Timestamp) {
            updatedAt = data.updatedAt.toDate().toISOString();
        } else if (typeof data.updatedAt === "string") {
            updatedAt = data.updatedAt;
        }

        return {
            id: doc.id,
            ...data,
            updatedAt,
        };
    });

    return produtos as ProductFirebase[]
}
