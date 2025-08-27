// app/api/stripe/customer/route.ts
import { NextRequest, NextResponse } from "next/server";
import { stripe } from "@/lib/stripe";
import { initFirebaseAdmin } from "@/lib/firebaseAdmin";
const { adminAuth, db } = initFirebaseAdmin(); // <- chama a função

export async function POST(req: NextRequest) {
    try {
        const authHeader = req.headers.get("authorization") || "";
        const token = authHeader.startsWith("Bearer ") ? authHeader.slice(7) : null;
        if (!token) return NextResponse.json({ error: "missing token" }, { status: 401 });

        const decoded = await adminAuth.verifyIdToken(token);
        const uid = decoded.uid;
        const userRecord = await adminAuth.getUser(uid);

        const userRef = db.collection("users").doc(uid);
        const snap = await userRef.get();
        let stripeCustomerId = snap.exists ? snap.get("stripeCustomerId") : null;

        if (!stripeCustomerId) {
            const customer = await stripe.customers.create({
                email: userRecord.email ?? undefined,
                name: userRecord.displayName ?? undefined,
                metadata: { firebaseUID: uid },
            });
            stripeCustomerId = customer.id;
            await userRef.set(
                { stripeCustomerId, email: userRecord.email ?? null, name: userRecord.displayName ?? null },
                { merge: true }
            );
        }

        return NextResponse.json({ stripeCustomerId });
    } catch (err: unknown) {
        console.error("Erro no checkout:", err);

        return NextResponse.json(
            { error: "internal_error", message: err instanceof Error ? err.message : String(err) },
            { status: 500 }
        )
    }
}