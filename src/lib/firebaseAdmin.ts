// import { initializeApp, cert, getApps } from "firebase-admin/app";
import { getApps, initializeApp, applicationDefault, cert } from "firebase-admin/app";
import { getAuth } from "firebase-admin/auth";
import { getFirestore } from "firebase-admin/firestore";

export function initFirebaseAdmin() {
    if (!getApps().length) {
        initializeApp({
            credential: cert({
                projectId: process.env.FIREBASE_PROJECT_ID,
                clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
                privateKey: process.env.FIREBASE_PRIVATE_KEY?.replace(/\\n/g, "\n"),
            }),
        });
    }
}

if (!getApps().length) {
    // Use um dos dois: applicationDefault() (GCP) ou cert(JSON do service account)
    initializeApp({
        credential: process.env.FIREBASE_SERVICE_ACCOUNT_KEY
            ? cert(JSON.parse(process.env.FIREBASE_SERVICE_ACCOUNT_KEY))
            : applicationDefault(),
    });
}

export const adminAuth = getAuth();
export const db = getFirestore();
