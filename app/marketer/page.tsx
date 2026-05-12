"use client";

import { useAuth } from "@/lib/AuthContext";
import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";
import { useState } from "react";
import { db } from "@/lib/firebase";
import { collection, query, where, getDocs, doc, writeBatch, Timestamp } from "firebase/firestore";
import { motion } from "framer-motion";
import { Search, UserPlus, CheckCircle, AlertCircle, Loader2 } from "lucide-react";

export default function MarketerPanel() {
  const { userData, loading: authLoading } = useAuth();
  const [searchEmail, setSearchEmail] = useState("");
  const [foundUser, setFoundUser] = useState<any>(null);
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const [receiptNumber, setReceiptNumber] = useState("");

  const isMarketer = userData?.role === "marketer" || userData?.role === "admin";

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!searchEmail) return;

    setLoading(true);
    setStatus("idle");
    setFoundUser(null);
    setErrorMessage("");
    setReceiptNumber(""); // Reset receipt number on new search

    try {
      const q = query(collection(db, "users"), where("email", "==", searchEmail.toLowerCase()));
      const querySnapshot = await getDocs(q);

      if (querySnapshot.empty) {
        setErrorMessage("No user found with this email.");
        setStatus("error");
      } else {
        const userDoc = querySnapshot.docs[0];
        setFoundUser({ id: userDoc.id, ...userDoc.data() });
      }
    } catch (error) {
      console.error(error);
      setErrorMessage("Search failed. Please try again.");
      setStatus("error");
    } finally {
      setLoading(false);
    }
  };

  const handleActivate = async () => {
    if (!foundUser || !receiptNumber) {
      setErrorMessage("Please enter a receipt number.");
      setStatus("error");
      return;
    }

    setLoading(true);
    try {
      const startDate = new Date();
      const endDate = new Date();
      endDate.setFullYear(startDate.getFullYear() + 1);

      const batch = writeBatch(db);

      const userRef = doc(db, "users", foundUser.id);
      batch.update(userRef, {
        subscription: "premium",
        subscriptionStartDate: Timestamp.fromDate(startDate),
        subscriptionEndDate: Timestamp.fromDate(endDate),
        activatedBy: userData.email,
        activatedByUid: user?.uid, // Using user from useAuth
        receiptNumber: receiptNumber,
        activatedAt: Timestamp.now(),
      });

      const txRef = doc(collection(db, "transactions"));
      batch.set(txRef, {
        userId: foundUser.id,
        userEmail: foundUser.email,
        amount: 499,
        method: "cash_marketer",
        receiptNumber: receiptNumber,
        marketerEmail: userData.email,
        marketerUid: user?.uid,
        timestamp: Timestamp.now(),
        subscriptionEndDate: Timestamp.fromDate(endDate),
      });

      await batch.commit();

      setFoundUser({ ...foundUser, subscription: "premium", subscriptionEndDate: Timestamp.fromDate(endDate) });
      setStatus("success");
    } catch (error) {
      console.error(error);
      setErrorMessage("Activation failed.");
      setStatus("error");
    } finally {
      setLoading(false);
    }
  };

  if (authLoading) return <div className="min-h-screen bg-[var(--bg-hero)]" />;
  const { user } = useAuth();

  if (!isMarketer) {
    return (
      <main className="min-h-screen bg-[var(--bg-hero)]">
        <Navbar />
        <div className="pt-40 text-center">
          <AlertCircle className="w-16 h-16 text-red-500 mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-[var(--text-primary)]">Access Denied</h2>
          <p className="text-[var(--text-secondary)] mt-2">Only authorized marketers can access this panel.</p>
          <Link href="/" className="inline-block mt-8 text-[var(--brand-primary)] font-bold hover:underline">
            Go Back Home
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[var(--bg-hero)]">
      <Navbar />

      <section className="pt-40 pb-20 px-6 max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-extrabold mb-4" style={{ fontFamily: "var(--font-display)" }}>
            Marketer <span className="gradient-text">Activation Panel</span>
          </h1>
          <p className="text-[var(--text-secondary)]">Search and activate Vyop Premium for cash-paying customers.</p>
        </div>

        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-[var(--shadow-md)] border border-[var(--border-subtle)]">
          <form onSubmit={handleSearch} className="flex gap-4 mb-10">
            <div className="relative flex-grow">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="email"
                placeholder="Enter customer email (e.g. user@gmail.com)"
                className="w-full pl-12 pr-4 py-4 rounded-2xl bg-gray-50 border-none focus:ring-2 focus:ring-[var(--brand-primary)] transition-all"
                value={searchEmail}
                onChange={(e) => setSearchEmail(e.target.value)}
              />
            </div>
            <button
              type="submit"
              disabled={loading}
              className="px-8 py-4 bg-[var(--brand-secondary)] text-white font-bold rounded-2xl hover:scale-[1.02] transition-all disabled:opacity-50 flex items-center gap-2"
            >
              {loading ? <Loader2 className="w-5 h-5 animate-spin" /> : "Search"}
            </button>
          </form>

          {status === "error" && (
            <div className="p-4 rounded-xl bg-red-50 text-red-600 flex items-center gap-3 mb-8">
              <AlertCircle className="w-5 h-5" />
              <span className="text-sm font-bold">{errorMessage}</span>
            </div>
          )}

          {foundUser && (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="p-8 rounded-3xl border-2 border-[var(--brand-glow)] bg-[var(--bg-hero)]"
            >
              <div className="flex justify-between items-start mb-8">
                <div>
                  <h3 className="text-xl font-bold text-[var(--text-primary)]">{foundUser.displayName || "Customer"}</h3>
                  <p className="text-gray-500">{foundUser.email}</p>
                </div>
                <div className={`px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest ${
                  foundUser.subscription === "premium" ? "bg-green-100 text-green-700" : "bg-gray-200 text-gray-600"
                }`}>
                  {foundUser.subscription === "premium" ? "Premium Active" : "Free User"}
                </div>
              </div>

              {foundUser.subscription !== "premium" ? (
                <div className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div className="p-4 rounded-2xl bg-white border border-gray-100">
                      <p className="text-xs text-gray-400 font-bold mb-2 uppercase">Collect Payment</p>
                      <p className="text-2xl font-bold text-[var(--text-primary)]">₹499.00 <span className="text-sm font-normal text-gray-500">Cash</span></p>
                    </div>
                    <div className="p-4 rounded-2xl bg-white border border-gray-100">
                      <p className="text-xs text-gray-400 font-bold mb-2 uppercase">Receipt Number</p>
                      <input 
                        type="text"
                        placeholder="REC-12345"
                        required
                        className="w-full bg-transparent border-none p-0 focus:ring-0 font-bold text-lg text-[var(--brand-primary)] placeholder:text-gray-300"
                        value={receiptNumber}
                        onChange={(e) => setReceiptNumber(e.target.value)}
                      />
                    </div>
                  </div>
                  
                  <button
                    onClick={handleActivate}
                    disabled={loading || !receiptNumber}
                    className="w-full py-4 bg-[var(--brand-primary)] text-white font-bold rounded-2xl shadow-[var(--shadow-gold)] hover:scale-[1.02] transition-all flex items-center justify-center gap-2"
                  >
                    {loading ? <Loader2 className="w-5 h-5 animate-spin" /> : <><UserPlus className="w-5 h-5" /> Activate Premium Now</>}
                  </button>
                </div>
              ) : (
                <div className="text-center py-6">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="w-8 h-8 text-green-600" />
                  </div>
                  <h4 className="text-lg font-bold text-green-700">Already Premium</h4>
                  <p className="text-sm text-gray-500">Subscription is active until {new Date(new Date().setFullYear(new Date().getFullYear() + 1)).toLocaleDateString()}.</p>
                </div>
              )}
            </motion.div>
          )}

          {status === "success" && !foundUser && (
            <div className="text-center py-12">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="w-10 h-10 text-green-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Activation Successful!</h3>
              <p className="text-gray-600 mb-8">The customer now has full access to Vyop Premium Features.</p>
              <button 
                onClick={() => { setStatus("idle"); setSearchEmail(""); }}
                className="text-[var(--brand-primary)] font-bold hover:underline"
              >
                Activate another user
              </button>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </main>
  );
}

import Link from "next/link";
