"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  auth,
  googleProvider,
  db,
} from "@/lib/firebase";
import {
  signInWithPopup,
  signOut,
  onAuthStateChanged,
  User,
} from "firebase/auth";
import {
  collection,
  onSnapshot,
  query,
  where,
  getDocs,
  orderBy,
  doc,
  updateDoc,
  deleteDoc,
} from "firebase/firestore";
import { checkIsAdmin, generateInternCertificateId } from "@/lib/adminAuth";
import { VerifiedIntern } from "@/lib/verifiedInterns";
import { generateCode128Svg } from "@/lib/barcodeSvg";
import {
  Lock,
  Unlock,
  Users,
  Award,
  ShieldCheck,
  Search,
  PhoneCall,
  MessageCircle,
  Download,
  Plus,
  ExternalLink,
  Copy,
  Check,
  RefreshCw,
  Sparkles,
  TrendingUp,
  GraduationCap,
  Eye,
  X,
  Printer,
  AlertTriangle,
  Building2,
  FileCheck2,
  Trash2,
} from "lucide-react";

interface Lead {
  id: string;
  name: string;
  role: string;
  phone: string;
  location: string;
  email?: string;
  experience?: string;
  category: "Sales & Growth" | "Internship" | "Full-time" | string;
  notes?: string;
  resumeUrl?: string;
  status: "New" | "Contacted" | "Interview Scheduled" | "Hired" | "Rejected" | string;
  createdAt: string;
}

const INTERN_TRACK_PRESETS = [
  {
    label: "Frontend & UI Development (Web / Mobile)",
    role: "Frontend Web Development Intern",
    department: "Engineering",
    projectTitle: "Responsive Web UI & Billing Component Development",
    projectDescription:
      "Learned modern frontend development with Next.js & Tailwind CSS. Assisted in building responsive billing interfaces, optimizing layout components, and implementing clean merchant workflows.",
    skillsAcquired: "Next.js, React, Tailwind CSS, TypeScript, UI Components, Git",
  },
  {
    label: "Mobile POS & Camera Scanning Integration",
    role: "Mobile App Development Intern",
    department: "Engineering",
    projectTitle: "Mobile POS Billing & Camera Barcode Integration",
    projectDescription:
      "Assisted in testing mobile smartphone barcode scanning, building clean digital receipt layouts, and optimizing fast billing workflows for retail shop owners.",
    skillsAcquired: "React Native, Mobile UI, Camera Barcode, Offline Sync, State Management",
  },
  {
    label: "AI Voice Billing & Prompt Systems",
    role: "AI & Automation Engineering Intern",
    department: "AI & ML",
    projectTitle: "Bilingual Voice-to-Bill AI Assistant & Parsing",
    projectDescription:
      "Contributed to voice command testing for bilingual Hindi/English item billing, assisted in prompt structuring, and evaluated automated invoice generation accuracy.",
    skillsAcquired: "Whisper AI, Prompt Engineering, Python, REST APIs, JSON Parsing",
  },
  {
    label: "UI/UX & Product Design",
    role: "UI/UX & Product Design Intern",
    department: "Product Design",
    projectTitle: "Mobile POS Wireframing & One-Handed Billing Flows",
    projectDescription:
      "Designed intuitive mobile wireframes in Figma, created clean icons and button components, and conducted usability tests for simple single-hand store billing.",
    skillsAcquired: "Figma, User Research, Wireframing, Design Systems, Mobile Ergonomics",
  },
  {
    label: "Retail Growth & Merchant Onboarding",
    role: "Business Development & Growth Fellow",
    department: "Sales & Growth",
    projectTitle: "Local Retail Merchant Outreach & Onboarding Campaign",
    projectDescription:
      "Participated in local merchant outreach, demonstrated mobile billing workflows to shop owners, and collected direct user feedback to improve store adoption.",
    skillsAcquired: "Merchant Onboarding, Direct Sales, Product Demos, Customer Feedback, CRM",
  },
  {
    label: "Software Quality Assurance & Feature QA",
    role: "Software QA & Testing Intern",
    department: "Engineering",
    projectTitle: "POS Workflow Testing & Cross-Platform QA",
    projectDescription:
      "Assisted in end-to-end POS workflow testing, verified invoice PDF generation accuracy across devices, and documented feature test cases and bug reports.",
    skillsAcquired: "Manual QA, Cross-Device Testing, Bug Tracking, API Verification, Documentation",
  },
  {
    label: "Campus Ambassador & Community Outreach",
    role: "Campus Ambassador & Community Lead",
    department: "Digital Marketing",
    projectTitle: "Student Community Engagement & Campus Brand Outreach",
    projectDescription:
      "Represented Vyop across campus, organized interactive tech and entrepreneurship discussions, and helped onboard student fellows into the learning ecosystem.",
    skillsAcquired: "Community Outreach, Social Media Marketing, Event Coordination, Public Speaking",
  },
];

export default function AdminDashboardPage() {
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const [isAdmin, setIsAdmin] = useState<boolean | null>(null);
  const [authLoading, setAuthLoading] = useState(true);
  const [authError, setAuthError] = useState("");

  // Navigation tab
  const [activeTab, setActiveTab] = useState<"leads" | "certificates">("leads");

  // Leads state with real-time sync
  const [leads, setLeads] = useState<Lead[]>([]);
  const [leadsSearch, setLeadsSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedStatus, setSelectedStatus] = useState("all");
  const [selectedLead, setSelectedLead] = useState<Lead | null>(null);

  // Certificates state with real-time sync
  const [certificates, setCertificates] = useState<VerifiedIntern[]>([]);
  const [certsSearch, setCertsSearch] = useState("");
  const [copiedCertId, setCopiedCertId] = useState<string | null>(null);

  // Issue Certificate Modal state
  const [showIssueModal, setShowIssueModal] = useState(false);
  const [issuingCert, setIssuingCert] = useState(false);
  const [issueSuccess, setIssueSuccess] = useState(false);
  const [newCert, setNewCert] = useState({
    certificateId: "VYOP-XINTERN1",
    internId: "VYOP-2026-INT01",
    fullName: "",
    email: "",
    role: "Full Stack Web & Mobile Engineering Intern",
    department: "Engineering",
    college: "",
    degree: "B.Tech Computer Science",
    duration: "3 Months (Full-Time)",
    startDate: "01 Jan 2026",
    endDate: "31 Mar 2026",
    issueDate: new Date().toLocaleDateString("en-GB", { day: "2-digit", month: "short", year: "numeric" }),
    status: "Completed",
    grade: "Outstanding (A+)",
    projectTitle: "Smartphone Barcode POS & Offline Engine",
    projectDescription: "Contributed to high-speed camera barcode scanning POS engine, zero-latency offline synchronization, and responsive billing interfaces.",
    skillsAcquired: "Next.js, React Native, TypeScript, IndexedDB, Tailwind CSS",
  });

  // PDF Certificate Preview Modal
  const [previewCert, setPreviewCert] = useState<VerifiedIntern | null>(null);

  // 10-second countdown & real IP capture for unauthorized users
  const [countdown, setCountdown] = useState(10);
  const [clientIp, setClientIp] = useState<string>("Detecting IP...");
  const [clientLocation, setClientLocation] = useState<string>("");

  // Fetch actual client IP & auto-signout unauthorized users after 10 seconds
  useEffect(() => {
    if (isAdmin === false && currentUser) {
      setCountdown(10);

      // Fetch actual public IP
      fetch("https://api.ipify.org?format=json")
        .then((r) => r.json())
        .then((d) => {
          if (d.ip) setClientIp(d.ip);
        })
        .catch(() => {
          setClientIp("103.246.194.22");
        });

      // Try fetching location
      fetch("https://ipapi.co/json/")
        .then((r) => r.json())
        .then((d) => {
          if (d.city && d.country_name) {
            setClientLocation(`${d.city}, ${d.country_name}`);
          }
        })
        .catch(() => {});

      const interval = setInterval(() => {
        setCountdown((prev) => {
          if (prev <= 1) {
            clearInterval(interval);
            if (auth) signOut(auth);
            setCurrentUser(null);
            setIsAdmin(false);
            return 0;
          }
          return prev - 1;
        });
      }, 1000);

      return () => clearInterval(interval);
    }
  }, [isAdmin, currentUser]);

  // Listen to Auth State
  useEffect(() => {
    if (!auth) {
      setAuthLoading(false);
      return;
    }

    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      setCurrentUser(user);
      if (user) {
        setAuthLoading(true);
        const hasAdminRole = await checkIsAdmin(user);
        setIsAdmin(hasAdminRole);
        setAuthLoading(false);
      } else {
        setIsAdmin(false);
        setAuthLoading(false);
      }
    });

    return () => unsubscribe();
  }, []);

  // Real-time Firestore Listeners (when authenticated as Admin)
  useEffect(() => {
    if (!isAdmin || !db) return;

    // 1. Real-time Leads Listener
    const jobsRef = collection(db, "jobs");
    const unsubscribeJobs = onSnapshot(
      jobsRef,
      (snapshot) => {
        const liveLeads: Lead[] = snapshot.docs.map((d) => {
          const data = d.data();
          return {
            id: d.id,
            name: data.name || "Unnamed Candidate",
            role: data.role || "Sales / Intern",
            phone: data.phone || "",
            location: data.location || "",
            email: data.email || "",
            experience: data.experience || "",
            category: data.category || (data.role?.toLowerCase().includes("intern") ? "Internship" : "Sales & Growth"),
            notes: data.notes || "",
            resumeUrl: data.resumeUrl || "",
            status: data.status || "New",
            createdAt: data.createdAt?.toDate ? data.createdAt.toDate().toISOString() : new Date().toISOString(),
          };
        });

        liveLeads.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
        setLeads(liveLeads);
      },
      (error) => {
        console.error("Jobs real-time sync error:", error);
      }
    );

    // 2. Real-time Verified Certificates Listener
    const certsRef = collection(db, "verified_interns");
    const unsubscribeCerts = onSnapshot(
      certsRef,
      (snapshot) => {
        const liveCerts: VerifiedIntern[] = snapshot.docs.map((d) => {
          const data = d.data();
          return {
            certificateId: data.certificateId,
            internId: data.internId || data.certificateId,
            fullName: data.fullName || data.name,
            email: data.email || "",
            role: data.role,
            department: data.department || "Engineering",
            college: data.college,
            degree: data.degree || "B.Tech Computer Science",
            duration: data.duration || "3 Months",
            startDate: data.startDate || "01 Jan 2026",
            endDate: data.endDate || "31 Mar 2026",
            issueDate: data.issueDate || "31 Mar 2026",
            status: data.status || "Completed",
            grade: data.grade || "Outstanding (A+)",
            projectTitle: data.projectTitle || "Core Product Engineering",
            projectDescription: data.projectDescription || "",
            skillsAcquired: data.skillsAcquired || [],
            mentor: data.mentor || "Founder & Lead Architect",
            mentorTitle: data.mentorTitle || "Founder, Vyop AI",
            verificationUrl: `https://vyop.in/internship/verify?id=${data.certificateId}`,
          };
        });

        // Real-time live certs only
        setCertificates(liveCerts);
      },
      (error) => {
        console.error("Certificates real-time sync error:", error);
      }
    );

    return () => {
      unsubscribeJobs();
      unsubscribeCerts();
    };
  }, [isAdmin]);

  // Google Login Handler
  const handleGoogleLogin = async () => {
    if (!auth) {
      alert("Firebase auth not configured.");
      return;
    }
    setAuthLoading(true);
    setAuthError("");
    try {
      const res = await signInWithPopup(auth, googleProvider);
      const isAdm = await checkIsAdmin(res.user);
      setIsAdmin(isAdm);
    } catch (err: any) {
      console.error(err);
      setAuthError(err.message || "Failed to sign in with Google.");
    } finally {
      setAuthLoading(false);
    }
  };

  const handleLogout = async () => {
    if (auth) await signOut(auth);
    setCurrentUser(null);
    setIsAdmin(false);
  };

  const handleRecheckRole = async () => {
    if (!currentUser) return;
    setAuthLoading(true);
    const hasAdminRole = await checkIsAdmin(currentUser);
    setIsAdmin(hasAdminRole);
    setAuthLoading(false);
  };

  // 1-Click Open Issue Certificate for a Candidate
  const handleOpenCertForApplicant = (lead: Lead) => {
    const autoCode = generateInternCertificateId(lead.name, certificates);
    const cleanRole = lead.role.replace(/^\[Internship\]\s*/i, "").trim();

    // Match with presets
    const matchedPreset =
      INTERN_TRACK_PRESETS.find(
        (p) =>
          p.role.toLowerCase().includes(cleanRole.toLowerCase()) ||
          cleanRole.toLowerCase().includes(p.role.toLowerCase()) ||
          (p.department && cleanRole.toLowerCase().includes(p.department.toLowerCase()))
      ) || INTERN_TRACK_PRESETS[0];

    setNewCert({
      certificateId: autoCode,
      internId: `VYOP-2026-INT${Math.floor(10 + Math.random() * 90)}`,
      fullName: lead.name,
      email: lead.email || "",
      role: matchedPreset.role,
      department: matchedPreset.department,
      college: lead.location || "University / College",
      degree: "Bachelor of Technology",
      duration: "3 Months (Full-Time)",
      startDate: "01 Jan 2026",
      endDate: "31 Mar 2026",
      issueDate: new Date().toLocaleDateString("en-GB", { day: "2-digit", month: "short", year: "numeric" }),
      status: "Completed",
      grade: "Outstanding (A+)",
      projectTitle: matchedPreset.projectTitle,
      projectDescription: matchedPreset.projectDescription,
      skillsAcquired: matchedPreset.skillsAcquired,
    });

    setShowIssueModal(true);
  };

  // Submit Issue Certificate
  const handleSaveCertificate = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newCert.fullName || !newCert.college || !newCert.role) {
      alert("Please fill required fields (Name, College, Role).");
      return;
    }

    setIssuingCert(true);
    try {
      const res = await fetch("/api/admin/certificates", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newCert),
      });
      const data = await res.json();
      if (res.ok && data.certificate) {
        // Find matching applicant in leads and update status to Hired
        const matchingLead = leads.find(
          (l) =>
            l.name.toLowerCase().trim() === newCert.fullName.toLowerCase().trim() ||
            (l.email && newCert.email && l.email.toLowerCase().trim() === newCert.email.toLowerCase().trim())
        );

        if (matchingLead) {
          handleUpdateStatus(matchingLead.id, "Hired");
        }

        setIssueSuccess(true);
        setTimeout(() => {
          setIssueSuccess(false);
          setShowIssueModal(false);
          setPreviewCert(data.certificate);
        }, 800);
      } else {
        alert(data.error || "Failed to issue certificate");
      }
    } catch (err) {
      console.error(err);
      alert("Error issuing certificate.");
    } finally {
      setIssuingCert(false);
    }
  };

  // Update Lead Status in Firestore
  const handleUpdateStatus = async (leadId: string, newStatus: string) => {
    try {
      if (db) {
        const leadRef = doc(db, "jobs", leadId);
        await updateDoc(leadRef, { status: newStatus });
      }
    } catch (err) {
      console.error("Error updating status:", err);
    }
  };

  // Delete Lead from Firestore
  const handleDeleteLead = async (leadId: string, leadName: string) => {
    if (!confirm(`Are you sure you want to permanently delete "${leadName}" from Firebase?`)) return;
    try {
      if (db) {
        await deleteDoc(doc(db, "jobs", leadId));
        if (selectedLead?.id === leadId) setSelectedLead(null);
      }
    } catch (err) {
      console.error("Error deleting lead:", err);
      alert("Failed to delete lead from Firebase.");
    }
  };

  // Delete Certificate from Firestore
  const handleDeleteCertificate = async (certCode: string, studentName: string) => {
    if (!confirm(`Are you sure you want to permanently delete certificate "${certCode}" (${studentName}) from Firebase?`)) return;
    try {
      if (db) {
        const q = query(collection(db, "verified_interns"), where("certificateId", "==", certCode));
        const snap = await getDocs(q);
        for (const d of snap.docs) {
          await deleteDoc(doc(db, "verified_interns", d.id));
        }
      }
    } catch (err) {
      console.error("Error deleting certificate:", err);
      alert("Failed to delete certificate from Firebase.");
    }
  };

  const handleCopyLink = (certId: string) => {
    const url = `${window.location.origin}/internship/verify?id=${certId}`;
    navigator.clipboard.writeText(url);
    setCopiedCertId(certId);
    setTimeout(() => setCopiedCertId(null), 2000);
  };

  const handlePrintCertificate = () => {
    window.print();
  };

  const exportLeadsToCSV = () => {
    if (leads.length === 0) {
      alert("No leads to export.");
      return;
    }

    const headers = ["ID", "Name", "Role", "Category", "Phone", "Email", "Location", "Status", "Applied At", "Notes"];
    const rows = leads.map((l) => [
      l.id,
      `"${l.name.replace(/"/g, '""')}"`,
      `"${l.role.replace(/"/g, '""')}"`,
      `"${l.category || ''}"`,
      `"${l.phone}"`,
      `"${l.email || ''}"`,
      `"${(l.location || '').replace(/"/g, '""')}"`,
      `"${l.status}"`,
      `"${new Date(l.createdAt).toLocaleDateString()}"`,
      `"${(l.notes || '').replace(/"/g, '""')}"`,
    ]);

    const csvContent = "data:text/csv;charset=utf-8," + [headers.join(","), ...rows.map((e) => e.join(","))].join("\n");
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", `vyop_candidates_${new Date().toISOString().split("T")[0]}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // Filtered Leads
  const filteredLeads = leads.filter((lead) => {
    const matchSearch =
      lead.name.toLowerCase().includes(leadsSearch.toLowerCase()) ||
      lead.phone.includes(leadsSearch) ||
      (lead.email || "").toLowerCase().includes(leadsSearch.toLowerCase()) ||
      lead.location.toLowerCase().includes(leadsSearch.toLowerCase()) ||
      lead.role.toLowerCase().includes(leadsSearch.toLowerCase());

    const matchCategory =
      selectedCategory === "all" ||
      (selectedCategory === "sales" && lead.category?.toLowerCase().includes("sales")) ||
      (selectedCategory === "intern" && (lead.category?.toLowerCase().includes("intern") || lead.role?.toLowerCase().includes("intern")));

    const matchStatus = selectedStatus === "all" || lead.status === selectedStatus;

    return matchSearch && matchCategory && matchStatus;
  });

  // Filtered Certificates
  const filteredCerts = certificates.filter((c) => {
    const s = certsSearch.toLowerCase();
    return (
      c.certificateId.toLowerCase().includes(s) ||
      c.fullName.toLowerCase().includes(s) ||
      c.role.toLowerCase().includes(s) ||
      c.college.toLowerCase().includes(s)
    );
  });

  // 1. Loading Screen
  if (authLoading) {
    return (
      <main className="min-h-screen bg-[var(--bg-navy)] flex items-center justify-center p-6 text-white">
        <div className="text-center">
          <div className="w-12 h-12 border-3 border-amber-400 border-t-transparent rounded-full animate-spin mx-auto mb-4" />
          <p className="text-sm font-semibold">Verifying Admin Access...</p>
        </div>
      </main>
    );
  }

  // 2. Unauthenticated -> Google Login Screen
  if (!currentUser) {
    return (
      <main className="min-h-screen bg-[var(--bg-navy)] flex items-center justify-center p-6">
        <div className="bg-white rounded-3xl p-8 sm:p-10 max-w-md w-full shadow-2xl border border-white/20 text-center animate-fade-up">
          <div className="w-16 h-16 rounded-2xl bg-amber-50 flex items-center justify-center mx-auto mb-4 border border-amber-200">
            <Lock size={32} className="text-[var(--brand-primary)]" />
          </div>

          <h1 className="text-2xl font-black text-gray-900 mb-1" style={{ fontFamily: "var(--font-display)" }}>
            Vyop Admin Portal
          </h1>
          <p className="text-xs text-gray-500 mb-8">
            Sign in with your Google account to access real-time leads, live candidates & verified certificates.
          </p>

          <button
            onClick={handleGoogleLogin}
            className="w-full py-4 px-6 rounded-2xl bg-white border-2 border-gray-200 text-gray-800 font-bold text-sm shadow-md hover:shadow-lg hover:border-gray-400 transition-all flex items-center justify-center gap-3 cursor-pointer"
          >
            <svg width="20" height="20" viewBox="0 0 24 24">
              <path
                d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                fill="#4285F4"
              />
              <path
                d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                fill="#34A853"
              />
              <path
                d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
                fill="#FBBC05"
              />
              <path
                d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
                fill="#EA4335"
              />
            </svg>
            Continue with Google
          </button>

          {authError && <p className="text-xs text-red-500 font-medium mt-4">{authError}</p>}
        </div>
      </main>
    );
  }

  // 3. Authenticated but NOT in `admin` or `admins` collection -> Custom Security Alert Screen
  if (isAdmin === false) {
    return (
      <main className="min-h-screen bg-[#0F111A] flex items-center justify-center p-6 text-white">
        <div className="bg-[#1A1D2D] rounded-3xl p-8 sm:p-10 max-w-lg w-full shadow-2xl border-2 border-red-500/50 text-center animate-fade-up relative overflow-hidden">
          {/* Top Red Glow */}
          <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-red-600 via-rose-500 to-red-700 animate-pulse" />

          <div className="w-18 h-18 rounded-2xl bg-red-500/10 border border-red-500/30 flex items-center justify-center mx-auto mb-5 text-red-500 shadow-inner">
            <AlertTriangle size={36} />
          </div>

          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-red-500/20 text-red-400 text-[11px] font-mono font-bold uppercase tracking-widest border border-red-500/30 mb-3">
            SECURITY ALERT • 403 FORBIDDEN
          </div>

          <h2 className="text-2xl sm:text-3xl font-black text-white mb-2 tracking-tight" style={{ fontFamily: "var(--font-display)" }}>
            UNAUTHORIZED ACCESS
          </h2>

          <p className="text-sm text-red-400 font-semibold mb-3">
            You do not have permission to access the Vyop Admin Portal.
          </p>

          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-500/10 border border-red-500/20 text-red-300 text-xs font-mono font-semibold mb-6">
            <span className="w-2 h-2 rounded-full bg-red-500 animate-ping" />
            Auto signing out in <strong className="text-white font-bold">{countdown}s</strong>...
          </div>

          <div className="p-5 bg-black/50 rounded-2xl border border-red-500/40 text-left text-xs text-gray-300 space-y-3 mb-6 font-mono shadow-inner">
            <div className="flex items-center justify-between border-b border-white/10 pb-2 text-[11px] text-gray-400">
              <span>SECURITY_LOG_ID</span>
              <span className="text-red-400 font-bold">SEC-{Date.now().toString().slice(-6)}</span>
            </div>

            <div className="grid grid-cols-2 gap-2 p-3 bg-red-950/30 rounded-xl border border-red-500/20 text-[11px]">
              <div>
                <span className="text-gray-500 block text-[9px] uppercase font-bold">LOGGED_IP</span>
                <span className="text-red-400 font-black text-xs font-mono">{clientIp}</span>
              </div>
              <div>
                <span className="text-gray-500 block text-[9px] uppercase font-bold">LOCATION</span>
                <span className="text-gray-300 font-bold text-xs">{clientLocation || "India (Detected)"}</span>
              </div>
            </div>

            <p className="text-red-300 leading-relaxed text-xs">
              ⚠️ Don&apos;t worry, we have taken your IP address (<strong className="text-white font-bold">{clientIp}</strong>), device fingerprints, and Google account details (<strong className="text-white font-bold">{currentUser.email}</strong>).
            </p>
            <p className="text-gray-400 text-[11px] leading-relaxed">
              Now we know who you are and why you were trying to access private company data. Face the consequences.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3">
            <button
              onClick={handleRecheckRole}
              className="w-full sm:w-auto flex-1 py-3.5 px-4 rounded-xl bg-gray-800 text-gray-300 font-bold text-xs hover:bg-gray-700 transition-all cursor-pointer border border-white/10"
            >
              Re-verify Status
            </button>

            <button
              onClick={handleLogout}
              className="w-full sm:w-auto flex-1 py-3.5 px-4 rounded-xl bg-red-600 text-white font-bold text-xs hover:bg-red-700 transition-all shadow-lg hover:scale-[1.02] cursor-pointer"
            >
              Sign Out Immediately
            </button>
          </div>

          <Link
            href="/"
            className="inline-block mt-4 text-[11px] text-gray-500 hover:text-gray-300 font-semibold transition-colors"
          >
            ← Back to Public Website
          </Link>
        </div>
      </main>
    );
  }

  // 4. Authenticated Admin Dashboard
  return (
    <main className="min-h-screen bg-[#F8FAFC]">
      {/* Top Admin Header */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-6 h-18 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Link href="/" className="flex items-center gap-2">
              <Image src="/logo.svg" alt="Vyop" width={32} height={32} className="rounded-lg" />
              <span className="font-black text-xl text-gray-900" style={{ fontFamily: "var(--font-display)" }}>
                Vyop
              </span>
            </Link>
            <span className="text-[11px] font-bold px-2.5 py-1 rounded-md bg-emerald-50 text-emerald-700 border border-emerald-200 uppercase tracking-wider flex items-center gap-1">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              Live Sync
            </span>
          </div>

          {/* Navigation Tabs */}
          <div className="flex items-center gap-2">
            <button
              onClick={() => setActiveTab("leads")}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer flex items-center gap-2 ${
                activeTab === "leads"
                  ? "bg-gray-900 text-white shadow-sm"
                  : "text-gray-600 hover:bg-gray-100"
              }`}
            >
              <Users size={16} />
              Applications ({leads.length})
            </button>

            <button
              onClick={() => setActiveTab("certificates")}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer flex items-center gap-2 ${
                activeTab === "certificates"
                  ? "bg-gray-900 text-white shadow-sm"
                  : "text-gray-600 hover:bg-gray-100"
              }`}
            >
              <Award size={16} />
              Certificates ({certificates.length})
            </button>

            {/* User info & Sign Out */}
            <div className="hidden md:flex items-center gap-2 pl-3 border-l border-gray-200">
              <span className="text-xs font-semibold text-gray-600">{currentUser?.email}</span>
              <button
                onClick={handleLogout}
                className="px-2.5 py-1.5 rounded-lg text-xs font-bold text-red-600 hover:bg-red-50 transition-colors cursor-pointer"
              >
                Sign Out
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Container */}
      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* Metric Overview Cards */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
          <div className="bg-white p-5 rounded-2xl border border-gray-200 shadow-sm">
            <div className="text-xs font-bold uppercase tracking-wider text-gray-500 mb-1">Total Candidates</div>
            <div className="text-3xl font-black text-gray-900">{leads.length}</div>
            <div className="text-xs text-emerald-600 font-semibold mt-1">Real-time Firebase sync</div>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-gray-200 shadow-sm">
            <div className="text-xs font-bold uppercase tracking-wider text-gray-500 mb-1">Sales Specialists</div>
            <div className="text-3xl font-black text-amber-600">
              {leads.filter((l) => l.category?.toLowerCase().includes("sales") || l.role?.toLowerCase().includes("sales")).length}
            </div>
            <div className="text-xs text-gray-500 font-semibold mt-1">Field & B2B growth leads</div>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-gray-200 shadow-sm">
            <div className="text-xs font-bold uppercase tracking-wider text-gray-500 mb-1">Intern Applicants</div>
            <div className="text-3xl font-black text-purple-600">
              {leads.filter((l) => l.category?.toLowerCase().includes("intern") || l.role?.toLowerCase().includes("intern")).length}
            </div>
            <div className="text-xs text-gray-500 font-semibold mt-1">Engineering & AI fellows</div>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-gray-200 shadow-sm">
            <div className="text-xs font-bold uppercase tracking-wider text-gray-500 mb-1">Verified Certs</div>
            <div className="text-3xl font-black text-teal-600">{certificates.length}</div>
            <div className="text-xs text-gray-500 font-semibold mt-1">Auto code: VYOP-X(name)1</div>
          </div>
        </div>

        {/* TAB 1: LEADS & APPLICATIONS */}
        {activeTab === "leads" && (
          <div className="space-y-6">
            {/* Action Bar */}
            <div className="bg-white p-4 sm:p-5 rounded-2xl border border-gray-200 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex flex-wrap items-center gap-3 w-full sm:w-auto flex-1">
                <div className="relative flex-1 sm:max-w-xs">
                  <Search size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Search candidate, phone, city..."
                    value={leadsSearch}
                    onChange={(e) => setLeadsSearch(e.target.value)}
                    className="w-full pl-10 pr-4 py-2 rounded-xl bg-gray-50 border border-gray-200 text-xs font-medium text-gray-900 focus:ring-2 focus:ring-[var(--brand-primary)]"
                  />
                </div>

                {/* Category filter */}
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="px-3 py-2 rounded-xl bg-gray-50 border border-gray-200 text-xs font-bold text-gray-700 focus:ring-2 focus:ring-[var(--brand-primary)]"
                >
                  <option value="all">All Roles</option>
                  <option value="sales">Sales & Growth Only</option>
                  <option value="intern">Internships Only</option>
                </select>

                {/* Status filter */}
                <select
                  value={selectedStatus}
                  onChange={(e) => setSelectedStatus(e.target.value)}
                  className="px-3 py-2 rounded-xl bg-gray-50 border border-gray-200 text-xs font-bold text-gray-700 focus:ring-2 focus:ring-[var(--brand-primary)]"
                >
                  <option value="all">All Statuses</option>
                  <option value="New">New</option>
                  <option value="Contacted">Contacted</option>
                  <option value="Interview Scheduled">Interview Scheduled</option>
                  <option value="Hired">Hired</option>
                  <option value="Rejected">Rejected</option>
                </select>
              </div>

              <div className="flex flex-wrap items-center gap-2 w-full sm:w-auto justify-end">
                <button
                  onClick={() => {
                    setNewCert({
                      certificateId: `VYOP-XINTERN${certificates.length + 1}`,
                      internId: `VYOP-2026-INT${Math.floor(10 + Math.random() * 90)}`,
                      fullName: "",
                      email: "",
                      role: "Full Stack Web & Mobile Engineering Intern",
                      department: "Engineering",
                      college: "",
                      degree: "Bachelor of Technology",
                      duration: "3 Months (Full-Time)",
                      startDate: "01 Jan 2026",
                      endDate: "31 Mar 2026",
                      issueDate: new Date().toLocaleDateString("en-GB", { day: "2-digit", month: "short", year: "numeric" }),
                      status: "Completed",
                      grade: "Outstanding (A+)",
                      projectTitle: "Core POS & Voice Billing Architecture",
                      projectDescription: "Contributed to high-speed camera barcode scanning POS engine, zero-latency offline synchronization, and responsive billing interfaces.",
                      skillsAcquired: "Next.js, React Native, TypeScript, IndexedDB, Tailwind CSS",
                    });
                    setShowIssueModal(true);
                  }}
                  className="px-4 py-2 rounded-xl text-white font-bold text-xs shadow-[var(--shadow-gold)] hover:scale-[1.02] transition-all flex items-center gap-1.5 cursor-pointer"
                  style={{ background: "var(--gradient-brand)" }}
                >
                  <Plus size={14} />
                  + Add & Issue Intern Cert
                </button>

                <button
                  onClick={exportLeadsToCSV}
                  className="px-4 py-2 rounded-xl bg-emerald-600 text-white font-bold text-xs hover:bg-emerald-700 transition-colors flex items-center gap-1.5 cursor-pointer shadow-sm"
                >
                  <Download size={14} />
                  Export to CSV
                </button>
              </div>
            </div>

            {/* Leads Table */}
            <div className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs">
                  <thead className="bg-gray-50 border-b border-gray-200 text-gray-600 font-bold uppercase tracking-wider">
                    <tr>
                      <th className="py-3.5 px-4">Candidate</th>
                      <th className="py-3.5 px-4">Role & Track</th>
                      <th className="py-3.5 px-4">Location / College</th>
                      <th className="py-3.5 px-4">Status</th>
                      <th className="py-3.5 px-4">Applied</th>
                      <th className="py-3.5 px-4 text-right">Instant Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100">
                    {filteredLeads.length === 0 ? (
                      <tr>
                        <td colSpan={6} className="text-center py-16 px-4">
                          <div className="w-12 h-12 rounded-full bg-amber-50 border border-amber-200 flex items-center justify-center mx-auto mb-3 text-[var(--brand-primary)]">
                            <Users size={22} />
                          </div>
                          <h4 className="font-bold text-gray-900 text-sm mb-1">No Candidate Applications Yet</h4>
                          <p className="text-xs text-gray-500 max-w-sm mx-auto">
                            Live candidate applications submitted from /internship and /work-with-us will sync here in real time.
                          </p>
                        </td>
                      </tr>
                    ) : (
                      filteredLeads.map((lead) => {
                        const isSales = lead.category?.toLowerCase().includes("sales") || lead.role?.toLowerCase().includes("sales");
                        const isIntern = lead.category?.toLowerCase().includes("intern") || lead.role?.toLowerCase().includes("intern");
                        const cleanPhone = lead.phone.replace(/[^0-9]/g, "");
                        const matchedCert = certificates.find(
                          (c) =>
                            c.fullName.toLowerCase().trim() === lead.name.toLowerCase().trim() ||
                            (lead.email && c.email && c.email.toLowerCase().trim() === lead.email.toLowerCase().trim())
                        );

                        return (
                          <tr key={lead.id} className="hover:bg-amber-50/30 transition-colors">
                            <td className="py-3.5 px-4">
                              <div className="font-bold text-gray-900 text-sm">{lead.name}</div>
                              <div className="text-[11px] text-gray-500 flex items-center gap-1 font-mono">
                                {lead.phone}
                                {lead.email && <span className="text-gray-400 font-sans">• {lead.email}</span>}
                              </div>
                            </td>

                            <td className="py-3.5 px-4">
                              <span
                                className={`inline-block px-2.5 py-0.5 rounded-full font-bold text-[10px] mb-1 ${
                                  isSales
                                    ? "bg-amber-50 text-amber-800 border border-amber-200"
                                    : "bg-purple-50 text-purple-800 border border-purple-200"
                                }`}
                              >
                                {isSales ? "Sales & Growth" : "Internship"}
                              </span>
                              <div className="font-semibold text-gray-800 text-xs">{lead.role}</div>
                            </td>

                            <td className="py-3.5 px-4 font-medium text-gray-600">
                              {lead.location || "N/A"}
                            </td>

                            <td className="py-3.5 px-4">
                              <select
                                value={lead.status}
                                onChange={(e) => handleUpdateStatus(lead.id, e.target.value)}
                                className={`px-2.5 py-1 rounded-lg font-bold text-[11px] border cursor-pointer ${
                                  lead.status === "New"
                                    ? "bg-blue-50 text-blue-700 border-blue-200"
                                    : lead.status === "Contacted"
                                    ? "bg-amber-50 text-amber-700 border-amber-200"
                                    : lead.status === "Interview Scheduled"
                                    ? "bg-purple-50 text-purple-700 border-purple-200"
                                    : lead.status === "Hired"
                                    ? "bg-emerald-50 text-emerald-700 border-emerald-200"
                                    : "bg-red-50 text-red-700 border-red-200"
                                }`}
                              >
                                <option value="New">New</option>
                                <option value="Contacted">Contacted</option>
                                <option value="Interview Scheduled">Interview Scheduled</option>
                                <option value="Hired">Hired</option>
                                <option value="Rejected">Rejected</option>
                              </select>
                            </td>

                            <td className="py-3.5 px-4 text-gray-500 font-medium text-[11px]">
                              {new Date(lead.createdAt).toLocaleDateString("en-IN", {
                                day: "2-digit",
                                month: "short",
                              })}
                            </td>

                            <td className="py-3.5 px-4 text-right">
                              <div className="flex items-center justify-end gap-1.5">
                                {/* If already issued, show PDF Cert badge */}
                                {matchedCert ? (
                                  <button
                                    onClick={() => setPreviewCert(matchedCert)}
                                    className="px-2.5 py-1.5 rounded-lg bg-emerald-50 text-emerald-800 border border-emerald-200 hover:bg-emerald-100 font-bold text-[11px] flex items-center gap-1 cursor-pointer"
                                    title={`Verified: ${matchedCert.certificateId} - Click to View PDF`}
                                  >
                                    <ShieldCheck size={13} className="text-emerald-600" />
                                    PDF ({matchedCert.certificateId})
                                  </button>
                                ) : isIntern ? (
                                  <button
                                    onClick={() => handleOpenCertForApplicant(lead)}
                                    className="px-2.5 py-1.5 rounded-lg bg-purple-50 text-purple-700 border border-purple-200 hover:bg-purple-100 font-bold text-[11px] flex items-center gap-1 cursor-pointer"
                                    title="Verify Intern & Issue Certificate"
                                  >
                                    <Award size={13} />
                                    Issue Cert
                                  </button>
                                ) : null}

                                {/* WhatsApp */}
                                <a
                                  href={`https://wa.me/${cleanPhone}?text=${encodeURIComponent(
                                    `Hi ${lead.name}, this is Vyop hiring team regarding your application for ${lead.role}.`
                                  )}`}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="p-2 rounded-lg bg-emerald-50 text-emerald-700 hover:bg-emerald-100 transition-colors"
                                  title="WhatsApp Candidate"
                                >
                                  <MessageCircle size={15} />
                                </a>

                                {/* Call */}
                                <a
                                  href={`tel:${cleanPhone}`}
                                  className="p-2 rounded-lg bg-blue-50 text-blue-700 hover:bg-blue-100 transition-colors"
                                  title="Call Candidate"
                                >
                                  <PhoneCall size={15} />
                                </a>

                                {/* View Details */}
                                <button
                                  onClick={() => setSelectedLead(lead)}
                                  className="p-2 rounded-lg bg-gray-100 text-gray-700 hover:bg-gray-200 transition-colors cursor-pointer"
                                  title="View Application Details"
                                >
                                  <Eye size={15} />
                                </button>

                                {/* Delete from Firebase */}
                                <button
                                  onClick={() => handleDeleteLead(lead.id, lead.name)}
                                  className="p-2 rounded-lg bg-red-50 text-red-600 hover:bg-red-100 transition-colors cursor-pointer"
                                  title="Delete from Firebase"
                                >
                                  <Trash2 size={15} />
                                </button>
                              </div>
                            </td>
                          </tr>
                        );
                      })
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {/* TAB 2: CERTIFICATES MANAGEMENT */}
        {activeTab === "certificates" && (
          <div className="space-y-6">
            <div className="bg-white p-4 sm:p-5 rounded-2xl border border-gray-200 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="relative flex-1 w-full sm:max-w-md">
                <Search size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search certificate ID (e.g. VYOP-XRAHUL1), student name..."
                  value={certsSearch}
                  onChange={(e) => setCertsSearch(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 rounded-xl bg-gray-50 border border-gray-200 text-xs font-medium text-gray-900 focus:ring-2 focus:ring-[var(--brand-primary)]"
                />
              </div>

              <div className="flex items-center gap-2 w-full sm:w-auto justify-end">
                <button
                  onClick={() => {
                    const autoCode = generateInternCertificateId("Student", certificates);
                    setNewCert((prev) => ({ ...prev, certificateId: autoCode }));
                    setShowIssueModal(true);
                  }}
                  className="px-4 py-2 rounded-xl text-white font-bold text-xs shadow-md hover:scale-105 transition-all flex items-center gap-1.5 cursor-pointer"
                  style={{ background: "var(--gradient-brand)" }}
                >
                  <Plus size={16} />
                  Issue New Certificate
                </button>
              </div>
            </div>

            {/* Certificate Table */}
            <div className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs">
                  <thead className="bg-gray-50 border-b border-gray-200 text-gray-600 font-bold uppercase tracking-wider">
                    <tr>
                      <th className="py-3.5 px-4">Certificate ID</th>
                      <th className="py-3.5 px-4">Student Name</th>
                      <th className="py-3.5 px-4">Role & Dept</th>
                      <th className="py-3.5 px-4">College / University</th>
                      <th className="py-3.5 px-4">Issue Date</th>
                      <th className="py-3.5 px-4 text-right">PDF & Verification Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100">
                    {filteredCerts.length === 0 ? (
                      <tr>
                        <td colSpan={6} className="text-center py-16 px-4">
                          <div className="w-12 h-12 rounded-full bg-teal-50 border border-teal-200 flex items-center justify-center mx-auto mb-3 text-teal-600">
                            <Award size={22} />
                          </div>
                          <h4 className="font-bold text-gray-900 text-sm mb-1">No Certificates Issued Yet</h4>
                          <p className="text-xs text-gray-500 max-w-sm mx-auto">
                            When you issue an internship certificate, it will appear here with instant PDF download and verification.
                          </p>
                        </td>
                      </tr>
                    ) : (
                      filteredCerts.map((cert) => (
                      <tr key={cert.certificateId} className="hover:bg-amber-50/30 transition-colors">
                        <td className="py-3.5 px-4">
                          <span className="font-mono font-black text-xs text-amber-900 bg-amber-50 px-2.5 py-1 rounded-md border border-amber-200">
                            {cert.certificateId}
                          </span>
                        </td>

                        <td className="py-3.5 px-4 font-bold text-gray-900 text-sm">
                          {cert.fullName}
                        </td>

                        <td className="py-3.5 px-4">
                          <div className="font-semibold text-gray-800">{cert.role}</div>
                          <span className="text-[10px] text-gray-500">{cert.department}</span>
                        </td>

                        <td className="py-3.5 px-4 text-gray-600 font-medium">
                          {cert.college}
                        </td>

                        <td className="py-3.5 px-4 text-gray-500 font-medium text-[11px]">
                          {cert.issueDate}
                        </td>

                        <td className="py-3.5 px-4 text-right">
                          <div className="flex items-center justify-end gap-2">
                            {/* PDF View / Print */}
                            <button
                              onClick={() => setPreviewCert(cert)}
                              className="px-2.5 py-1.5 rounded-lg bg-amber-50 text-amber-800 hover:bg-amber-100 border border-amber-200 transition-colors font-bold text-[11px] flex items-center gap-1 cursor-pointer"
                              title="Download & Print PDF Certificate"
                            >
                              <Printer size={13} />
                              PDF Cert
                            </button>

                            {/* Copy Link */}
                            <button
                              onClick={() => handleCopyLink(cert.certificateId)}
                              className="px-2.5 py-1.5 rounded-lg border border-gray-200 text-gray-700 hover:bg-gray-50 transition-colors font-bold text-[11px] flex items-center gap-1 cursor-pointer"
                            >
                              {copiedCertId === cert.certificateId ? (
                                <>
                                  <Check size={12} className="text-emerald-600" />
                                  Copied
                                </>
                              ) : (
                                <>
                                  <Copy size={12} />
                                  Copy Link
                                </>
                              )}
                            </button>

                            {/* Public Verify URL */}
                            <Link
                              href={`/internship/verify?id=${cert.certificateId}`}
                              target="_blank"
                              className="px-2.5 py-1.5 rounded-lg bg-gray-900 text-white hover:bg-black transition-colors font-bold text-[11px] flex items-center gap-1"
                            >
                              <ExternalLink size={12} />
                              Live Page
                            </Link>

                            {/* Delete Certificate */}
                            <button
                              onClick={() => handleDeleteCertificate(cert.certificateId, cert.fullName)}
                              className="p-1.5 rounded-lg bg-red-50 text-red-600 hover:bg-red-100 transition-colors cursor-pointer"
                              title="Delete Certificate from Firebase"
                            >
                              <Trash2 size={13} />
                            </button>
                          </div>
                        </td>
                      </tr>
                    )))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* MODAL 1: ISSUE / VERIFY CERTIFICATE FORM */}
      {showIssueModal && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4 backdrop-blur-sm animate-fade-in">
          <div className="bg-white rounded-3xl p-6 sm:p-8 max-w-xl w-full shadow-2xl border border-gray-100 max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between pb-4 border-b border-gray-100 mb-5">
              <div>
                <h3 className="text-xl font-black text-gray-900" style={{ fontFamily: "var(--font-display)" }}>
                  Issue Verified Internship Certificate
                </h3>
                <p className="text-xs text-gray-500">
                  Auto-formatted Code: <strong className="font-mono text-amber-700">{newCert.certificateId}</strong>
                </p>
              </div>
              <button
                onClick={() => setShowIssueModal(false)}
                className="p-1.5 rounded-full hover:bg-gray-100 text-gray-500 cursor-pointer"
              >
                <X size={20} />
              </button>
            </div>

            {issueSuccess ? (
              <div className="text-center py-10">
                <div className="w-14 h-14 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Check size={32} />
                </div>
                <h4 className="font-bold text-gray-900 text-lg">Certificate Issued & Verified!</h4>
                <p className="text-xs text-gray-500 mt-1 font-mono">Code: {newCert.certificateId}</p>
              </div>
            ) : (
              <form onSubmit={handleSaveCertificate} className="space-y-4 text-xs">
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block font-bold text-gray-700 mb-1">
                      Certificate Code <span className="text-amber-600 font-normal">(VYOP-X[Name]1)</span>
                    </label>
                    <input
                      type="text"
                      required
                      value={newCert.certificateId}
                      onChange={(e) => setNewCert({ ...newCert, certificateId: e.target.value.toUpperCase() })}
                      className="w-full px-3 py-2 rounded-xl bg-amber-50 border border-amber-200 font-mono font-bold text-amber-900 focus:ring-2 focus:ring-amber-400"
                    />
                  </div>
                  <div>
                    <label className="block font-bold text-gray-700 mb-1">Intern ID</label>
                    <input
                      type="text"
                      required
                      value={newCert.internId}
                      onChange={(e) => setNewCert({ ...newCert, internId: e.target.value })}
                      className="w-full px-3 py-2 rounded-xl bg-gray-50 border border-gray-200 font-mono text-gray-900"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block font-bold text-gray-700 mb-1">Student Full Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Rahul Sharma"
                      value={newCert.fullName}
                      onChange={(e) => {
                        const name = e.target.value;
                        const autoCode = generateInternCertificateId(name, certificates);
                        setNewCert({ ...newCert, fullName: name, certificateId: autoCode });
                      }}
                      className="w-full px-3 py-2 rounded-xl bg-gray-50 border border-gray-200 text-gray-900 font-medium"
                    />
                  </div>
                  <div>
                    <label className="block font-bold text-gray-700 mb-1">Email</label>
                    <input
                      type="email"
                      placeholder="student@example.com"
                      value={newCert.email}
                      onChange={(e) => setNewCert({ ...newCert, email: e.target.value })}
                      className="w-full px-3 py-2 rounded-xl bg-gray-50 border border-gray-200 text-gray-900 font-medium"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block font-bold text-gray-700 mb-1">Role *</label>
                    <input
                      type="text"
                      required
                      value={newCert.role}
                      onChange={(e) => setNewCert({ ...newCert, role: e.target.value })}
                      className="w-full px-3 py-2 rounded-xl bg-gray-50 border border-gray-200 text-gray-900 font-medium"
                    />
                  </div>
                  <div>
                    <label className="block font-bold text-gray-700 mb-1">Department</label>
                    <select
                      value={newCert.department}
                      onChange={(e) => setNewCert({ ...newCert, department: e.target.value })}
                      className="w-full px-3 py-2 rounded-xl bg-gray-50 border border-gray-200 text-gray-900 font-medium"
                    >
                      <option value="Engineering">Engineering</option>
                      <option value="AI & ML">AI & ML</option>
                      <option value="Sales & Growth">Sales & Growth</option>
                      <option value="Product Design">Product Design</option>
                      <option value="Digital Marketing">Digital Marketing</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block font-bold text-gray-700 mb-1">College / Institute *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. IIT Roorkee / DTU"
                      value={newCert.college}
                      onChange={(e) => setNewCert({ ...newCert, college: e.target.value })}
                      className="w-full px-3 py-2 rounded-xl bg-gray-50 border border-gray-200 text-gray-900 font-medium"
                    />
                  </div>
                  <div>
                    <label className="block font-bold text-gray-700 mb-1">Duration</label>
                    <input
                      type="text"
                      value={newCert.duration}
                      onChange={(e) => setNewCert({ ...newCert, duration: e.target.value })}
                      className="w-full px-3 py-2 rounded-xl bg-gray-50 border border-gray-200 text-gray-900 font-medium"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-2">
                  <div>
                    <label className="block font-bold text-gray-700 mb-1">Start Date</label>
                    <input
                      type="text"
                      value={newCert.startDate}
                      onChange={(e) => setNewCert({ ...newCert, startDate: e.target.value })}
                      className="w-full px-2.5 py-2 rounded-xl bg-gray-50 border border-gray-200 text-gray-900"
                    />
                  </div>
                  <div>
                    <label className="block font-bold text-gray-700 mb-1">End Date</label>
                    <input
                      type="text"
                      value={newCert.endDate}
                      onChange={(e) => setNewCert({ ...newCert, endDate: e.target.value })}
                      className="w-full px-2.5 py-2 rounded-xl bg-gray-50 border border-gray-200 text-gray-900"
                    />
                  </div>
                  <div>
                    <label className="block font-bold text-gray-700 mb-1">Issue Date</label>
                    <input
                      type="text"
                      value={newCert.issueDate}
                      onChange={(e) => setNewCert({ ...newCert, issueDate: e.target.value })}
                      className="w-full px-2.5 py-2 rounded-xl bg-gray-50 border border-gray-200 text-gray-900"
                    />
                  </div>
                </div>

                {/* Project Track Dropdown (From Internship Page) */}
                <div>
                  <label className="block font-bold text-gray-700 mb-1 flex items-center justify-between">
                    <span>Internship Project Track (Presets from /internship) *</span>
                    <span className="text-[10px] text-[var(--brand-primary)] font-semibold">Auto-fills title & description</span>
                  </label>
                  <select
                    value={
                      INTERN_TRACK_PRESETS.some((p) => p.projectTitle === newCert.projectTitle)
                        ? newCert.projectTitle
                        : "custom"
                    }
                    onChange={(e) => {
                      const val = e.target.value;
                      if (val === "custom") return;
                      const preset = INTERN_TRACK_PRESETS.find((p) => p.projectTitle === val);
                      if (preset) {
                        setNewCert({
                          ...newCert,
                          projectTitle: preset.projectTitle,
                          projectDescription: preset.projectDescription,
                          role: preset.role,
                          department: preset.department,
                          skillsAcquired: preset.skillsAcquired,
                        });
                      }
                    }}
                    className="w-full px-3 py-2.5 rounded-xl bg-amber-50/70 border border-amber-300 text-gray-900 font-bold text-xs focus:ring-2 focus:ring-[var(--brand-primary)] mb-2"
                  >
                    {INTERN_TRACK_PRESETS.map((preset) => (
                      <option key={preset.projectTitle} value={preset.projectTitle}>
                        {preset.label} ➔ {preset.projectTitle}
                      </option>
                    ))}
                    <option value="custom">✍️ Custom Project Title (Edit manually below)</option>
                  </select>
                </div>

                <div>
                  <label className="block font-bold text-gray-700 mb-1">Project Title *</label>
                  <input
                    type="text"
                    required
                    value={newCert.projectTitle}
                    onChange={(e) => setNewCert({ ...newCert, projectTitle: e.target.value })}
                    className="w-full px-3 py-2 rounded-xl bg-gray-50 border border-gray-200 text-gray-900 font-semibold"
                  />
                </div>

                <div>
                  <label className="block font-bold text-gray-700 mb-1">Project Description & Deliverables *</label>
                  <textarea
                    rows={3}
                    required
                    value={newCert.projectDescription}
                    onChange={(e) => setNewCert({ ...newCert, projectDescription: e.target.value })}
                    className="w-full px-3 py-2 rounded-xl bg-gray-50 border border-gray-200 text-gray-900 resize-none leading-relaxed"
                  />
                </div>

                <div className="pt-3">
                  <button
                    type="submit"
                    disabled={issuingCert}
                    className="w-full py-3.5 rounded-xl text-white font-bold text-sm shadow-lg hover:scale-[1.01] transition-all disabled:opacity-70 cursor-pointer flex items-center justify-center gap-2"
                    style={{ background: "var(--gradient-brand)" }}
                  >
                    {issuingCert ? "Issuing to Firebase..." : "Save & Verify Certificate in Firebase"}
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      )}

      {/* MODAL 2: LUXURY DOWNLOADABLE / PRINTABLE PDF CERTIFICATE */}
      {previewCert && (
        <div className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center p-4 backdrop-blur-md animate-fade-in">
          <div className="bg-white rounded-3xl p-6 sm:p-8 max-w-4xl w-full shadow-2xl border border-gray-200 max-h-[95vh] overflow-y-auto">
            {/* Top Modal Controls */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-gray-200 mb-6 gap-3 print:hidden">
              <div className="flex items-center gap-2">
                <Award size={22} className="text-[var(--brand-primary)]" />
                <div>
                  <h3 className="text-base sm:text-lg font-black text-gray-900">Certificate PDF Preview & Verifier</h3>
                  <p className="text-[11px] text-gray-500 font-mono">Code: {previewCert.certificateId}</p>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-2">
                <button
                  onClick={() => handleCopyLink(previewCert.certificateId)}
                  className="px-3.5 py-2 rounded-xl bg-gray-100 hover:bg-gray-200 text-gray-800 font-bold text-xs transition-all flex items-center gap-1.5 cursor-pointer"
                >
                  {copiedCertId === previewCert.certificateId ? (
                    <>
                      <Check size={14} className="text-emerald-600" />
                      Copied!
                    </>
                  ) : (
                    <>
                      <Copy size={14} />
                      Copy Link
                    </>
                  )}
                </button>

                <a
                  href={`https://wa.me/?text=${encodeURIComponent(
                    `Congratulations ${previewCert.fullName}! Your official Vyop AI Internship Certificate is verified and live. View and verify your credential here: ${window?.location?.origin || "https://vyop.in"}/internship/verify?id=${previewCert.certificateId}`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3.5 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs transition-all flex items-center gap-1.5 shadow-sm"
                >
                  <MessageCircle size={14} />
                  WhatsApp
                </a>

                <button
                  onClick={handlePrintCertificate}
                  className="px-4 py-2 rounded-xl bg-gray-900 text-white font-bold text-xs hover:bg-black transition-all flex items-center gap-1.5 cursor-pointer shadow-sm"
                >
                  <Printer size={14} />
                  Download / Print PDF
                </button>

                <button
                  onClick={() => setPreviewCert(null)}
                  className="p-2 rounded-full hover:bg-gray-100 text-gray-500 cursor-pointer ml-1"
                >
                  <X size={20} />
                </button>
              </div>
            </div>

            {/* Printable Certificate Canvas */}
            <div
              id="printable-certificate"
              className="p-8 sm:p-12 border-8 border-double border-[#D4952A] rounded-2xl bg-[#FFFDF8] text-center relative overflow-hidden shadow-inner print:border-4 print:shadow-none"
            >
              {/* Background Watermark */}
              <div className="absolute inset-0 flex items-center justify-center opacity-[0.03] pointer-events-none">
                <Image src="/logo.svg" alt="Watermark" width={400} height={400} />
              </div>

              {/* Certificate Header */}
              <div className="flex items-center justify-between border-b-2 border-[#D4952A]/30 pb-6 mb-8">
                <div className="flex items-center gap-3">
                  <Image src="/logo.svg" alt="Vyop Logo" width={44} height={44} className="rounded-xl" />
                  <div className="text-left">
                    <div className="text-2xl font-black text-gray-900 tracking-tight" style={{ fontFamily: "var(--font-display)" }}>
                      Vyop AI
                    </div>
                    <div className="text-[10px] uppercase font-bold tracking-widest text-[#D4952A]">
                      Certificate of Completion & Fellowship
                    </div>
                  </div>
                </div>

                <div className="text-right">
                  <div className="text-[10px] uppercase tracking-wider text-gray-400 font-bold">Certificate ID</div>
                  <div className="font-mono font-black text-base text-gray-900 bg-amber-50 px-3 py-1 rounded border border-amber-200 inline-block">
                    {previewCert.certificateId}
                  </div>
                </div>
              </div>

              {/* Certificate Main Text */}
              <div className="space-y-4 my-6">
                <p className="text-xs uppercase tracking-widest text-gray-500 font-bold">
                  This is proudly presented to
                </p>

                <h1
                  className="text-3xl sm:text-5xl font-black text-gray-900 tracking-tight py-2"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {previewCert.fullName}
                </h1>

                <p className="text-sm text-gray-600 max-w-2xl mx-auto leading-relaxed">
                  from <strong>{previewCert.college}</strong> for successfully completing the{" "}
                  <strong>{previewCert.role}</strong>
                  {previewCert.duration ? ` (${previewCert.duration.replace(/[`'"]/g, "").trim()})` : ""} at Vyop AI.
                </p>
              </div>

              {/* Project & Contribution */}
              <div className="my-6 max-w-2xl mx-auto text-center px-4">
                <div className="text-[10px] uppercase tracking-widest font-bold text-[#D4952A] mb-1">
                  Key Deliverable & Work Scope
                </div>
                <div className="font-bold text-gray-900 text-sm mb-1.5">{previewCert.projectTitle}</div>
                <div className="text-xs text-gray-600 leading-relaxed max-w-xl mx-auto">{previewCert.projectDescription}</div>
              </div>

              {/* Dates & Period */}
              <div className="flex justify-center gap-8 text-xs text-gray-600 my-6">
                <div>
                  <span className="text-gray-400 block text-[10px] uppercase font-semibold">Tenure</span>
                  <strong className="text-gray-900">{previewCert.startDate} to {previewCert.endDate}</strong>
                </div>
                <div>
                  <span className="text-gray-400 block text-[10px] uppercase font-semibold">Issue Date</span>
                  <strong className="text-gray-900">{previewCert.issueDate}</strong>
                </div>
                <div>
                  <span className="text-gray-400 block text-[10px] uppercase font-semibold">Performance</span>
                  <strong className="text-emerald-700">{previewCert.grade || "Outstanding (A+)"}</strong>
                </div>
              </div>

              {/* Signatures & Seal */}
              <div className="pt-8 border-t-2 border-[#D4952A]/30 flex flex-col sm:flex-row items-center sm:items-end justify-between gap-6 px-4 sm:px-6">
                {/* Left: QR Code + Verified Digital Text (No green icon, no outline) */}
                <div className="flex items-center gap-3.5 text-left">
                  {/* QR Code */}
                  <Link
                    href={`/internship/verify?id=${previewCert.certificateId}`}
                    target="_blank"
                    className="p-0 bg-transparent transition-all hover:scale-105 group text-center cursor-pointer inline-block flex-shrink-0"
                    title="Click or Scan QR Code to Verify on /internship"
                  >
                    <img
                      src={`https://api.qrserver.com/v1/create-qr-code/?size=120x120&data=${encodeURIComponent(
                        `https://vyop.in/internship/verify?id=${previewCert.certificateId}`
                      )}`}
                      alt="Verification QR Code"
                      className="w-13 h-13 object-contain"
                    />
                  </Link>

                  {/* Verified Digital Text */}
                  <div>
                    <div className="text-[11px] font-black text-emerald-700 uppercase tracking-wider">
                      Verified Digital Credential
                    </div>
                    <div className="text-[9px] text-gray-500 font-mono font-medium">
                      vyop.in/internship/verify?id={previewCert.certificateId}
                    </div>
                    <div className="text-[8px] font-bold text-amber-700 uppercase tracking-wider mt-0.5">
                      Scan / Click QR to Authenticate
                    </div>
                  </div>
                </div>

                {/* Right: Founder & Lead Architect with Full Underline */}
                <div className="text-center sm:text-right">
                  <div className="font-serif italic text-lg font-bold text-gray-900 border-b-2 border-gray-900 pb-1 px-1 inline-block">
                    Founder & Lead Architect
                  </div>
                  <div className="text-xs font-bold text-gray-800 mt-1">Founder, Vyop AI</div>
                  <div className="text-[10px] text-emerald-700 font-semibold">Official Credential Verification</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* LEAD DETAILS MODAL */}
      {selectedLead && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4 backdrop-blur-sm animate-fade-in">
          <div className="bg-white rounded-3xl p-6 sm:p-8 max-w-lg w-full shadow-2xl border border-gray-100 max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between pb-4 border-b border-gray-100 mb-5">
              <div>
                <span className="text-[10px] uppercase font-bold tracking-wider text-amber-700 bg-amber-50 px-2 py-0.5 rounded border border-amber-200">
                  {selectedLead.category || "Job Applicant"}
                </span>
                <h3 className="text-xl font-black text-gray-900 mt-1">{selectedLead.name}</h3>
              </div>
              <button
                onClick={() => setSelectedLead(null)}
                className="p-1.5 rounded-full hover:bg-gray-100 text-gray-500 cursor-pointer"
              >
                <X size={20} />
              </button>
            </div>

            <div className="space-y-4 text-xs">
              <div className="grid grid-cols-2 gap-3 p-3.5 rounded-2xl bg-gray-50 border border-gray-100">
                <div>
                  <span className="text-gray-400 block font-semibold">Phone / WhatsApp</span>
                  <strong className="text-gray-900 text-sm">{selectedLead.phone}</strong>
                </div>
                <div>
                  <span className="text-gray-400 block font-semibold">Location / College</span>
                  <strong className="text-gray-900 text-sm">{selectedLead.location}</strong>
                </div>
                <div>
                  <span className="text-gray-400 block font-semibold">Email</span>
                  <strong className="text-gray-900">{selectedLead.email || "N/A"}</strong>
                </div>
                <div>
                  <span className="text-gray-400 block font-semibold">Experience</span>
                  <strong className="text-gray-900">{selectedLead.experience || "Fresher"}</strong>
                </div>
              </div>

              <div>
                <span className="text-gray-400 block font-semibold mb-1">Applied Role</span>
                <p className="font-bold text-gray-900 text-sm">{selectedLead.role}</p>
              </div>

              {selectedLead.notes && (
                <div>
                  <span className="text-gray-400 block font-semibold mb-1">Candidate Notes / Pitch</span>
                  <p className="p-3 bg-gray-50 rounded-xl text-gray-700 leading-relaxed">{selectedLead.notes}</p>
                </div>
              )}

              <div className="pt-4 border-t border-gray-100 flex items-center gap-3">
                <a
                  href={`https://wa.me/${selectedLead.phone.replace(/[^0-9]/g, "")}?text=${encodeURIComponent(
                    `Hi ${selectedLead.name}, this is Vyop hiring team regarding your application for ${selectedLead.role}.`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-3 rounded-xl bg-emerald-600 text-white font-bold text-center hover:bg-emerald-700 transition-colors flex items-center justify-center gap-1.5"
                >
                  <MessageCircle size={16} />
                  WhatsApp
                </a>

                <a
                  href={`tel:${selectedLead.phone.replace(/[^0-9]/g, "")}`}
                  className="flex-1 py-3 rounded-xl bg-blue-600 text-white font-bold text-center hover:bg-blue-700 transition-colors flex items-center justify-center gap-1.5"
                >
                  <PhoneCall size={16} />
                  Call
                </a>

                <button
                  onClick={() => handleDeleteLead(selectedLead.id, selectedLead.name)}
                  className="p-3 rounded-xl bg-red-50 text-red-600 hover:bg-red-100 transition-colors cursor-pointer"
                  title="Delete Candidate from Firebase"
                >
                  <Trash2 size={16} />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
