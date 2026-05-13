"use client";

import React, { createContext, useContext, useEffect, useState } from "react";
import type { User } from "firebase/auth";

interface AuthContextType {
  user: User | null;
  userData: any | null;
  loading: boolean;
  signInWithGoogle: () => Promise<void>;
  logout: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [userData, setUserData] = useState<any | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const initAuth = async () => {
      try {
        const { onAuthStateChanged } = await import("firebase/auth");
        const { doc, getDoc, setDoc } = await import("firebase/firestore");
        const { shopAuth, shopDb } = await import("@/lib/firebase");

        if (!shopAuth || !shopDb) {
          setLoading(false);
          return;
        }

        const unsubscribe = onAuthStateChanged(shopAuth, async (user) => {
          setUser(user);
          if (user) {
            const userDoc = await getDoc(doc(shopDb, "users", user.uid));
            if (userDoc.exists()) {
              setUserData(userDoc.data());
            } else {
              const newData = {
                email: user.email,
                displayName: user.displayName,
                role: "shopkeeper",
                subscription: "free",
                createdAt: new Date().toISOString(),
              };
              await setDoc(doc(shopDb, "users", user.uid), newData);
              setUserData(newData);
            }
          } else {
            setUserData(null);
          }
          setLoading(false);
        });

        return unsubscribe;
      } catch (error) {
        console.error("Auth init error:", error);
        setLoading(false);
      }
    };

    const unsubscribePromise = initAuth();
    return () => {
      unsubscribePromise.then(unsubscribe => unsubscribe && unsubscribe());
    };
  }, []);

  const signInWithGoogle = async () => {
    try {
      const { signInWithPopup, GoogleAuthProvider } = await import("firebase/auth");
      const { shopAuth } = await import("@/lib/firebase");
      if (!shopAuth) return;
      await signInWithPopup(shopAuth, new GoogleAuthProvider());
    } catch (error) {
      console.error("Error signing in with Google", error);
    }
  };

  const logout = async () => {
    try {
      const { signOut } = await import("firebase/auth");
      const { shopAuth } = await import("@/lib/firebase");
      if (!shopAuth) return;
      await signOut(shopAuth);
    } catch (error) {
      console.error("Error signing out", error);
    }
  };

  return (
    <AuthContext.Provider value={{ user, userData, loading, signInWithGoogle, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}
