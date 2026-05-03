"use client";

import { useState } from "react";
import {
  FileText,
  Layers,
  Sparkles,
  Zap,
  Monitor,
  Tablet,
  Smartphone,
} from "lucide-react";

const tabs = [
  { slug: "proposal", label: "Proposal", icon: <FileText size={15} />, accent: "#0D0D0D" },
  { slug: "concept-1", label: "Concept 1 — Classic Pub Heritage", icon: <Layers size={15} />, accent: "#C4935A" },
  { slug: "concept-2", label: "Concept 2 — The Original", icon: <Zap size={15} />, accent: "#C4935A" },
  { slug: "concept-3", label: "Concept 3 — Modern Sports Lounge", icon: <Sparkles size={15} />, accent: "#7C5E3A" },
];

const devices = [
  { key: "mobile", label: "Mobile", icon: <Smartphone size={15} />, width: 390 },
  { key: "tablet", label: "Tablet", icon: <Tablet size={15} />, width: 820 },
  { key: "desktop", label: "Desktop", icon: <Monitor size={15} />, width: "100%" as const },
] as const;

export default function Preview() {
  const [activeTab, setActiveTab] = useState(0);
  const [activeDevice, setActiveDevice] = useState(2);

  const tab = tabs[activeTab];
  const device = devices[activeDevice];
  const w = device.width;

  return (
    <div className="h-screen flex flex-col bg-neutral-100 overflow-hidden">
      {/* Top bar */}
      <header className="bg-white border-b border-neutral-200 px-4 py-2.5 flex items-center justify-between shrink-0">
        <div className="flex items-center gap-3 min-w-0">
          <div className="w-8 h-8 rounded-full bg-[#0D0D0D] flex items-center justify-center shrink-0 ring-2 ring-[#C4935A]/40">
            <span
              className="text-[#C4935A] font-bold text-xs"
              style={{ fontFamily: "var(--font-cinzel-decorative, serif)" }}
            >
              8
            </span>
          </div>
          <div className="hidden sm:block min-w-0">
            <div
              className="text-sm font-bold text-neutral-900 truncate tracking-wide"
              style={{ fontFamily: "var(--font-cinzel, serif)" }}
            >
              8 BALL TAVERN
            </div>
            <div className="text-[10px] uppercase tracking-[0.14em] text-neutral-500 truncate">
              Proposal &amp; Concepts
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex items-center bg-neutral-100 rounded-lg p-1 gap-0.5 overflow-x-auto no-scrollbar">
          {tabs.map((t, i) => (
            <button
              key={t.slug}
              onClick={() => setActiveTab(i)}
              className={`flex items-center gap-1.5 px-2.5 py-1.5 rounded-md text-xs font-medium transition-all duration-200 cursor-pointer whitespace-nowrap ${
                activeTab === i
                  ? "bg-white text-neutral-900 shadow-sm"
                  : "text-neutral-500 hover:text-neutral-700"
              }`}
            >
              {t.icon}
              <span className="hidden md:inline">{t.label}</span>
              <span className="md:hidden">
                {i === 0 ? "Proposal" : `C${i}`}
              </span>
            </button>
          ))}
        </div>

        {/* Device switcher */}
        <div className="hidden sm:flex items-center bg-neutral-100 rounded-lg p-1 gap-0.5 shrink-0">
          {devices.map((d, i) => (
            <button
              key={d.key}
              onClick={() => setActiveDevice(i)}
              className={`flex items-center gap-1.5 px-2.5 py-1.5 rounded-md text-xs font-medium transition-all duration-200 cursor-pointer ${
                activeDevice === i
                  ? "bg-white text-neutral-900 shadow-sm"
                  : "text-neutral-500 hover:text-neutral-700"
              }`}
              title={d.label}
            >
              {d.icon}
              <span className="hidden lg:inline">{d.label}</span>
            </button>
          ))}
        </div>
      </header>

      {/* Info strip */}
      <div className="bg-white border-b border-neutral-200 px-4 py-1.5 flex items-center justify-between shrink-0">
        <div className="flex items-center gap-2 min-w-0">
          <span
            className="w-2.5 h-2.5 rounded-full shrink-0"
            style={{ backgroundColor: tab.accent }}
          />
          <span className="text-xs text-neutral-700 font-medium truncate">
            {tab.label}
          </span>
          <span className="text-xs text-neutral-400 hidden sm:inline">
            &middot; {device.label}
            {typeof w === "number" && ` (${w}px)`}
          </span>
        </div>
        <a
          href={`/${tab.slug}`}
          target="_blank"
          rel="noopener noreferrer"
          className="text-xs text-neutral-400 hover:text-neutral-700 transition-colors shrink-0"
        >
          Open in new tab &rarr;
        </a>
      </div>

      {/* Preview */}
      <div className="flex-1 flex items-start justify-center overflow-auto p-4">
        <div
          className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 ease-in-out h-full"
          style={{
            width: typeof w === "number" ? `${w}px` : "100%",
            maxWidth: "100%",
            border: `2px solid ${tab.accent}25`,
          }}
        >
          <iframe
            key={`${tab.slug}-${device.key}`}
            src={`/${tab.slug}`}
            className="w-full h-full border-0"
            title={`${tab.label} — ${device.label}`}
          />
        </div>
      </div>
    </div>
  );
}
