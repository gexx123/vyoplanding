import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.NEXT_PUBLIC_FIREBASE_DATABASE_URL,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID
};

const shopFirebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_SHOP_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_SHOP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_SHOP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_SHOP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_SHOP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_SHOP_FIREBASE_APP_ID,
  measurementId: process.env.NEXT_PUBLIC_SHOP_FIREBASE_MEASUREMENT_ID
};

// Initialize Primary Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();

export const db = getFirestore(app);
export const storage = getStorage(app);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();

// Initialize Secondary Firebase (Shop App)
const allApps = getApps();
export const shopApp = allApps.find((a) => a.name === "shopApp") || initializeApp(shopFirebaseConfig, "shopApp");
export const shopDb = getFirestore(shopApp);
export const shopAuth = getAuth(shopApp);
