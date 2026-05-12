"use client";

import { useAuth } from "@/lib/AuthContext";
import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";
import { useState, useEffect } from "react";
import { shopDb as db } from "@/lib/firebase";
import { collection, query, where, getDocs, doc, writeBatch, Timestamp } from "firebase/firestore";
import { motion } from "framer-motion";
import { Search, UserPlus, CheckCircle, AlertCircle, Loader2 } from "lucide-react";

export default function MarketerPanel() {
  const { user, userData, loading: authLoading } = useAuth();
  const [searchEmail, setSearchEmail] = useState("");
  const [foundUser, setFoundUser] = useState<any>(null);
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [receiptNumber, setReceiptNumber] = useState("");
  const [selectedPlan, setSelectedPlan] = useState<49 | 499 | 799>(499);
  
  const [stats, setStats] = useState({ totalUsers: 0, totalProfit: 0 });
  const [loadingStats, setLoadingStats] = useState(true);

  const isMarketer = userData?.role === "marketer";

  useEffect(() => {
    const fetchStats = async () => {
      if (!user?.uid || !isMarketer) {
        setLoadingStats(false);
        return;
      }
      try {
        const q = query(collection(db, "transactions"), where("marketerUid", "==", user.uid));
        const querySnapshot = await getDocs(q);
        
        let profit = 0;
        let count = 0;

        querySnapshot.forEach((doc) => {
          const data = doc.data();
          count++;
          if (data.amount === 49) profit += 5;
          else if (data.amount === 499) profit += 249;
          else if (data.amount === 799) profit += 400;
        });

        setStats({ totalUsers: count, totalProfit: profit });
      } catch (error) {
        console.error("Error fetching stats:", error);
      } finally {
        setLoadingStats(false);
      }
    };

    fetchStats();
  }, [user?.uid, isMarketer]);

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!searchEmail) return;

    setLoading(true);
    setStatus("idle");
    setFoundUser(null);
    setErrorMessage("");
    setReceiptNumber(""); // Reset receipt number on new search
    setSelectedPlan(499); // Reset to default plan

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
      setErrorMessage("Please enter the Vyop Bill Number.");
      setStatus("error");
      return;
    }

    setLoading(true);
    try {
      const startDate = new Date();
      const endDate = new Date();
      
      let planName = "yearly";
      if (selectedPlan === 49) {
        endDate.setMonth(startDate.getMonth() + 1);
        planName = "monthly";
      } else if (selectedPlan === 499) {
        endDate.setFullYear(startDate.getFullYear() + 1);
        planName = "yearly";
      } else if (selectedPlan === 799) {
        endDate.setFullYear(startDate.getFullYear() + 2);
        planName = "biennial";
      }

      const batch = writeBatch(db);

      // 1. Update User Document (keep it clean)
      const userRef = doc(db, "users", foundUser.id);
      batch.update(userRef, {
        plan: "pro",
      });

      // 2. Create Subscription Document
      const subRef = doc(db, "subscriptions", foundUser.id);
      batch.set(subRef, {
        userId: foundUser.id,
        userEmail: foundUser.email,
        status: "active",
        plan: "pro",
        startDate: Timestamp.fromDate(startDate),
        endDate: Timestamp.fromDate(endDate),
        activatedBy: userData.email,
        activatedByUid: user?.uid,
        receiptNumber: receiptNumber,
        activatedAt: Timestamp.now(),
        planTier: selectedPlan,
      });

      // 3. Create Transaction Log
      const txRef = doc(collection(db, "transactions"));
      batch.set(txRef, {
        userId: foundUser.id,
        userEmail: foundUser.email,
        amount: selectedPlan,
        planDuration: planName,
        method: "cash_marketer",
        receiptNumber: receiptNumber,
        marketerEmail: userData.email,
        marketerUid: user?.uid,
        timestamp: Timestamp.now(),
        subscriptionEndDate: Timestamp.fromDate(endDate),
      });

      await batch.commit();

      // Update local stats so they don't have to refresh
      setStats(prev => {
        let newProfit = prev.totalProfit;
        if (selectedPlan === 49) newProfit += 5;
        else if (selectedPlan === 499) newProfit += 249;
        else if (selectedPlan === 799) newProfit += 400;
        return { totalUsers: prev.totalUsers + 1, totalProfit: newProfit };
      });

      setFoundUser({ ...foundUser, plan: "pro", subscriptionEndDate: Timestamp.fromDate(endDate) });
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

          {/* Dashboard Stats */}
          {!loadingStats && !foundUser && status === "idle" && (
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="grid grid-cols-2 gap-4 mb-10"
            >
              <div className="bg-[var(--bg-hero)] border border-[var(--border-subtle)] rounded-2xl p-6 text-center">
                <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-2">Total Activations</p>
                <p className="text-4xl font-extrabold text-[var(--text-primary)]">{stats.totalUsers}</p>
              </div>
              <div className="bg-[var(--brand-glow)] border border-[var(--brand-primary)] rounded-2xl p-6 text-center">
                <p className="text-xs font-bold text-[var(--brand-primary)] uppercase tracking-widest mb-2">Total Profit</p>
                <p className="text-4xl font-extrabold text-[var(--brand-primary)]">₹{stats.totalProfit}</p>
              </div>
            </motion.div>
          )}

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
                  foundUser.plan === "pro" ? "bg-green-100 text-green-700" : "bg-gray-200 text-gray-600"
                }`}>
                  {foundUser.plan === "pro" ? "Premium Active" : "Free User"}
                </div>
              </div>

              {foundUser.plan !== "pro" ? (
                <div className="space-y-6">
                  
                  {/* Plan Selection */}
                  <div className="p-4 rounded-2xl bg-white border border-gray-100">
                    <p className="text-xs text-gray-400 font-bold mb-3 uppercase tracking-wider">Select Plan Duration</p>
                    <div className="grid grid-cols-3 gap-3">
                      {[
                        { price: 49, label: "1 Month" },
                        { price: 499, label: "1 Year" },
                        { price: 799, label: "2 Years" },
                      ].map((plan) => (
                        <button
                          key={plan.price}
                          type="button"
                          onClick={() => setSelectedPlan(plan.price as 49 | 499 | 799)}
                          className={`py-3 rounded-xl border-2 transition-all font-bold ${
                            selectedPlan === plan.price
                              ? "border-[var(--brand-primary)] bg-[var(--brand-glow)] text-[var(--brand-primary)] shadow-sm"
                              : "border-gray-100 text-gray-500 hover:border-gray-200 bg-gray-50"
                          }`}
                        >
                          ₹{plan.price}
                          <span className="block text-xs font-normal opacity-80 mt-1">{plan.label}</span>
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="p-4 rounded-2xl bg-white border border-gray-100">
                    <div className="flex justify-between items-center mb-2">
                      <p className="text-xs text-gray-400 font-bold uppercase tracking-wider">Vyop Bill Number</p>
                      <a href="https://vyop.shop" target="_blank" className="text-[10px] font-bold text-[var(--brand-primary)] hover:underline">Create Bill in App ↗</a>
                    </div>
                    <input 
                      type="text"
                      placeholder="e.g. BILL-1024"
                      required
                      className="w-full bg-gray-50 border border-gray-100 rounded-xl px-4 py-3 focus:ring-2 focus:ring-[var(--brand-primary)] font-bold text-lg text-[var(--brand-primary)] placeholder:text-gray-300 transition-all uppercase"
                      value={receiptNumber}
                      onChange={(e) => setReceiptNumber(e.target.value.toUpperCase())}
                    />
                    <p className="text-[11px] text-gray-500 mt-2">
                      First, create a cash bill for ₹{selectedPlan} in your own Vyop account, then type the Bill Number here to prove payment was collected.
                    </p>
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
                  {foundUser.subscriptionEndDate && (
                    <p className="text-sm text-gray-500 mt-2">
                      Subscription is active until <strong>{foundUser.subscriptionEndDate?.toDate ? foundUser.subscriptionEndDate.toDate().toLocaleDateString() : new Date(foundUser.subscriptionEndDate).toLocaleDateString()}</strong>.
                    </p>
                  )}
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
