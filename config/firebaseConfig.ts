import { initializeApp, cert, ServiceAccount } from "firebase-admin/app";
import { getFirestore, Firestore } from "firebase-admin/firestore";
import { getAuth, Auth } from "firebase-admin/auth";

const serviceAccount = require("../firebase_key.json");

initializeApp({
    credential: cert(serviceAccount as ServiceAccount),
});

const auth: Auth = getAuth();
const db: Firestore = getFirestore();

export { auth, db };
