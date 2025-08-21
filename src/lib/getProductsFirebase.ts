import { collection, getDocs } from "firebase/firestore";
import { db } from "./firebase";

export async function getProductsFirebase() {
    const produtosCol = collection(db, "products"); // nome da sua coleção
    const produtosSnapshot = await getDocs(produtosCol);

    const produtos = produtosSnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
    }));

    return produtos;
}
