import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  databaseURL: process.env.NEXT_PUBLIC_FIREBASE_DATABASE_URL,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID
};

const shopFirebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_SHOP_FIREBASE_API_KEY,
  projectId: process.env.NEXT_PUBLIC_SHOP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_SHOP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_SHOP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_SHOP_FIREBASE_APP_ID,
  measurementId: process.env.NEXT_PUBLIC_SHOP_FIREBASE_MEASUREMENT_ID
};

// Initialize Primary Firebase (guard against missing config during build)
const app = getApps().length ? getApp() : 
  (process.env.NEXT_PUBLIC_FIREBASE_API_KEY ? initializeApp(firebaseConfig) : null as any);

export const db = app ? getFirestore(app) : null as any;
export const storage = app ? getStorage(app) : null as any;

// Initialize Secondary Firebase (Shop App) (guard against missing config during build)
const allApps = getApps();
export const shopApp = allApps.find((a) => a.name === "shopApp") || 
  (process.env.NEXT_PUBLIC_SHOP_FIREBASE_API_KEY ? initializeApp(shopFirebaseConfig, "shopApp") : null as any);

export const shopDb = shopApp ? getFirestore(shopApp) : null as any;
