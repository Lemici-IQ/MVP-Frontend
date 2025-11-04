// MetricOverviewTailwind.jsx
import React from "react";

const InfoDot = () => (
  <span className="absolute bottom-3 right-3 inline-block h-3.5 w-3.5 rounded-full bg-indigo-500/90 shadow-[0_0_0_3px_rgba(99,102,241,0.15)]" />
);

const BookIcon = ({ className = "h-4 w-4" }) => (
  <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
    <path d="M4.5 5.5A2.5 2.5 0 0 1 7 3h12v16H7a2.5 2.5 0 0 0-2.5 2.5V5.5Z" stroke="#9AA3B2" strokeWidth="1.7" />
    <path d="M7 3v16" stroke="#9AA3B2" strokeWidth="1.7" />
  </svg>
);

function Card({ children }) {
  return (
    <div className="relative rounded-xl border border-slate-200 bg-white p-5 shadow-sm ring-1 ring-black/0">
      {children}
      <InfoDot />
    </div>
  );
}

export default function Top4() {
  return (
    <div className="w-full flex flex-col items-center gap-5">
      <div className="grid w-full max-w-5xl grid-cols-1 gap-5 sm:grid-cols-3">
        {/* Card 1 */}
        <Card>
          <div className="text-[13px] text-slate-600">Initial Investment</div>
          <div className="mt-2 text-3xl font-semibold leading-tight text-indigo-600">$1.9M - $3.8M</div>
        </Card>

        {/* Card 2 */}
        <Card>
          <div className="text-[13px] text-slate-600">Units as of 2025</div>
          <div className="mt-2 text-3xl font-semibold leading-tight text-indigo-600">30,680</div>
          <div className="mt-3 inline-flex items-center gap-2 rounded-full bg-emerald-100 px-3 py-1">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-600" />
            <span className="text-[12px] font-medium text-emerald-800">+ 18.5% over 3 years</span>
          </div>
        </Card>

        {/* Card 3 */}
        <Card>
          <div className="text-[13px] text-slate-600">Space req.</div>
          <div className="mt-2 text-3xl font-semibold leading-tight text-indigo-600">2000–3000sq.ft</div>
          <div className="mt-3 flex items-center gap-2 text-[12px] text-slate-500">
            <BookIcon />
            <span>Training</span>
          </div>
        </Card>
      </div>

      {/* Bottom pill CTA */}
      <button
        type="button"
        className="w-full max-w-5xl rounded-full border border-indigo-300 bg-white px-6 py-3 text-indigo-600 shadow-sm transition hover:bg-indigo-50"
      >
        Franchising overview
      </button>
    </div>
  );
}
