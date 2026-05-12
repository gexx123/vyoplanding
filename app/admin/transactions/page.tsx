"use client";

import { useAuth } from "@/lib/AuthContext";
import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";
import { useEffect, useState } from "react";
import { db } from "@/lib/firebase";
import { collection, query, orderBy, getDocs, limit } from "firebase/firestore";
import { motion } from "framer-motion";
import { ShieldAlert, Download, Calendar, User, Hash, IndianRupee, Loader2 } from "lucide-react";
import Link from "next/link";

export default function AdminTransactions() {
  const { userData, loading: authLoading } = useAuth();
  const [transactions, setTransactions] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  const isAdmin = userData?.role === "admin";

  useEffect(() => {
    if (isAdmin) {
      fetchTransactions();
    }
  }, [isAdmin]);

  const fetchTransactions = async () => {
    try {
      const q = query(collection(db, "transactions"), orderBy("timestamp", "desc"), limit(100));
      const querySnapshot = await getDocs(q);
      const docs = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setTransactions(docs);
    } catch (error) {
      console.error("Failed to fetch transactions:", error);
    } finally {
      setLoading(false);
    }
  };

  if (authLoading) return <div className="min-h-screen bg-[var(--bg-hero)]" />;

  if (!isAdmin) {
    return (
      <main className="min-h-screen bg-[var(--bg-hero)]">
        <Navbar />
        <div className="pt-40 text-center">
          <ShieldAlert className="w-16 h-16 text-red-500 mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-[var(--text-primary)]">Admin Access Only</h2>
          <p className="text-[var(--text-secondary)] mt-2">You do not have permission to view this page.</p>
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

      <section className="pt-40 pb-20 px-6 max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div>
            <h1 className="text-4xl font-extrabold mb-4" style={{ fontFamily: "var(--font-display)" }}>
              All <span className="gradient-text">Transactions</span>
            </h1>
            <p className="text-[var(--text-secondary)]">Platform-wide overview of all marketer activations and payments.</p>
          </div>
          
          <button 
            onClick={() => {}} 
            className="flex items-center gap-2 px-6 py-3 bg-white border border-[var(--border-subtle)] rounded-xl font-bold text-sm hover:bg-gray-50 transition-all"
          >
            <Download className="w-4 h-4" /> Export CSV
          </button>
        </div>

        <div className="bg-white rounded-3xl shadow-[var(--shadow-md)] border border-[var(--border-subtle)] overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="bg-gray-50 border-bottom border-[var(--border-subtle)]">
                  <th className="px-6 py-5 text-xs font-bold text-gray-400 uppercase tracking-wider">Date</th>
                  <th className="px-6 py-5 text-xs font-bold text-gray-400 uppercase tracking-wider">Customer</th>
                  <th className="px-6 py-5 text-xs font-bold text-gray-400 uppercase tracking-wider">Marketer</th>
                  <th className="px-6 py-5 text-xs font-bold text-gray-400 uppercase tracking-wider">Receipt #</th>
                  <th className="px-6 py-5 text-xs font-bold text-gray-400 uppercase tracking-wider">Amount</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {loading ? (
                  <tr>
                    <td colSpan={5} className="px-6 py-20 text-center">
                      <Loader2 className="w-8 h-8 animate-spin mx-auto text-[var(--brand-primary)] mb-4" />
                      <p className="text-sm text-gray-500">Loading transactions...</p>
                    </td>
                  </tr>
                ) : transactions.length === 0 ? (
                  <tr>
                    <td colSpan={5} className="px-6 py-20 text-center">
                      <p className="text-sm text-gray-500">No transactions found.</p>
                    </td>
                  </tr>
                ) : (
                  transactions.map((tx, index) => (
                    <motion.tr 
                      key={tx.id}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.05 }}
                      className="hover:bg-gray-50 transition-colors"
                    >
                      <td className="px-6 py-5">
                        <div className="flex items-center gap-2 text-sm text-[var(--text-primary)]">
                          <Calendar className="w-4 h-4 text-gray-400" />
                          {tx.timestamp?.toDate ? tx.timestamp.toDate().toLocaleDateString() : new Date(tx.timestamp).toLocaleDateString()}
                        </div>
                      </td>
                      <td className="px-6 py-5">
                        <div className="flex items-center gap-2">
                          <User className="w-4 h-4 text-[var(--brand-primary)]" />
                          <div>
                            <p className="text-sm font-bold text-[var(--text-primary)]">{tx.userEmail}</p>
                            <p className="text-[10px] text-gray-400 font-mono">{tx.userId}</p>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-5">
                        <p className="text-sm text-[var(--text-secondary)]">{tx.marketerEmail}</p>
                      </td>
                      <td className="px-6 py-5">
                        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-gray-100 border border-gray-200 text-xs font-mono font-bold text-gray-600">
                          <Hash className="w-3 h-3" /> {tx.receiptNumber || "N/A"}
                        </div>
                      </td>
                      <td className="px-6 py-5">
                        <div className="flex items-center gap-1 font-bold text-[var(--text-primary)]">
                          <IndianRupee className="w-3.5 h-3.5" />
                          {tx.amount}
                        </div>
                      </td>
                    </motion.tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>

        <div className="mt-8 p-6 bg-[var(--brand-secondary)] rounded-2xl text-white flex items-center justify-between">
          <div>
            <p className="text-xs text-gray-400 uppercase font-bold mb-1">Total Revenue (Last 100)</p>
            <h4 className="text-2xl font-bold flex items-center gap-2">
              <IndianRupee className="w-6 h-6 text-[var(--brand-primary)]" />
              {transactions.reduce((acc, tx) => acc + (tx.amount || 0), 0).toLocaleString()}
            </h4>
          </div>
          <div className="text-right">
            <p className="text-xs text-gray-400 uppercase font-bold mb-1">Active Marketers</p>
            <p className="text-xl font-bold">{new Set(transactions.map(tx => tx.marketerEmail)).size}</p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
