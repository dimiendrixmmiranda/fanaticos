import { initializeApp, cert, getApps } from "firebase-admin/app";

export function initFirebaseAdmin() {
    if (!getApps().length) {
        initializeApp({
            credential: cert({
                projectId: process.env.FIREBASE_PROJECT_ID,
                clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
                // Transforma os "\n" da env em quebras de linha reais
                privateKey: process.env.FIREBASE_PRIVATE_KEY?.replace(/\\n/g, "\n"),
            }),
        });
    }
}
