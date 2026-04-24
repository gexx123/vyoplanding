"use client";

const row1Pills = [
  { icon: "🎤", label: "Voice Billing" },
  { icon: "📦", label: "Auto Inventory" },
  { icon: "🧾", label: "GST Bill in 1 Click" },
  { icon: "📊", label: "Daily Reports" },
  { icon: "💬", label: "Multilingual Support" },
  { icon: "🔔", label: "UPI Payment Alert" },
  { icon: "📱", label: "Works Offline" },
  { icon: "⚡", label: "Instant Bill Share on WhatsApp" },
];

const row2Pills = [
  { icon: "📒", label: "Ledger / Credit Tracker" },
  { icon: "🏪", label: "Multi-Shop Support" },
  { icon: "🔒", label: "Bank-Level Security" },
  { icon: "📞", label: "Customer Reminder Call" },
  { icon: "💡", label: "Smart Suggestions" },
  { icon: "🌐", label: "7 Indian Languages" },
  { icon: "📈", label: "Monthly P&L" },
  { icon: "🖨️", label: "Bluetooth Printer" },
];

function MarqueePill({ icon, label }: { icon: string; label: string }) {
  return (
    <div
      className="flex items-center gap-2 px-5 py-2.5 rounded-full whitespace-nowrap shrink-0 transition-shadow duration-200"
      style={{
        background: "var(--bg-base)",
        border: "1px solid var(--border-subtle)",
        fontFamily: "var(--font-body)",
        fontSize: "14px",
        fontWeight: 500,
        color: "var(--text-secondary)",
        boxShadow: "var(--shadow-sm)",
      }}
    >
      <span className="text-lg">{icon}</span>
      {label}
    </div>
  );
}

export default function BenefitsMarquee() {
  return (
    <section
      className="py-12 overflow-hidden relative"
      style={{
        background: "var(--bg-surface)",
        borderTop: "1px solid var(--border-subtle)",
        borderBottom: "1px solid var(--border-subtle)",
      }}
    >
      {/* Fade masks */}
      <div
        className="absolute left-0 top-0 bottom-0 w-24 z-10 pointer-events-none"
        style={{
          background: "linear-gradient(to right, var(--bg-surface), transparent)",
        }}
      />
      <div
        className="absolute right-0 top-0 bottom-0 w-24 z-10 pointer-events-none"
        style={{
          background: "linear-gradient(to left, var(--bg-surface), transparent)",
        }}
      />

      {/* Row 1 — left to right */}
      <div className="mb-4 group">
        <div
          className="flex gap-4 group-hover:[animation-play-state:paused]"
          style={{
            animation: "marquee-left 30s linear infinite",
            width: "max-content",
          }}
        >
          {[...row1Pills, ...row1Pills].map((pill, i) => (
            <MarqueePill key={`r1-${i}`} {...pill} />
          ))}
        </div>
      </div>

      {/* Row 2 — right to left */}
      <div className="group">
        <div
          className="flex gap-4 group-hover:[animation-play-state:paused]"
          style={{
            animation: "marquee-right 30s linear infinite",
            width: "max-content",
          }}
        >
          {[...row2Pills, ...row2Pills].map((pill, i) => (
            <MarqueePill key={`r2-${i}`} {...pill} />
          ))}
        </div>
      </div>
    </section>
  );
}
