"use client";

import Link from "next/link";
import { useState, useMemo } from "react";
import {
  ArrowLeft,
  ArrowUpRight,
  Sparkles,
  Wine,
  Zap,
  Phone,
  Mail,
  MapPin,
  Flame,
} from "lucide-react";

// Drink pairing logic — keyed off dish category
const PAIRING_MAP: Record<string, { name: string; price: number; vibe: string; color: string }[]> = {
  "Steak / Ribeye": [
    { name: "Old Fashioned", price: 240, vibe: "Smoky, citrus-zested", color: "from-amber-500 to-orange-700" },
    { name: "Negroni", price: 240, vibe: "Bitter, balanced", color: "from-rose-500 to-red-800" },
  ],
  "Pasta / Pizza": [
    { name: "Aperol Spritz", price: 220, vibe: "Crisp, bittersweet", color: "from-orange-400 to-pink-600" },
    { name: "Red Sangria (pitcher)", price: 1040, vibe: "Fruity, share-ready", color: "from-red-500 to-rose-800" },
  ],
  "Bar Bites / Shareables": [
    { name: "Moscow Mule", price: 230, vibe: "Spicy ginger kick", color: "from-lime-400 to-emerald-600" },
    { name: "Margarita", price: 240, vibe: "Salt-rim refresh", color: "from-cyan-400 to-emerald-500" },
  ],
  "Seafood / Light": [
    { name: "Mojito", price: 240, vibe: "Mint, crushed ice", color: "from-emerald-400 to-teal-700" },
    { name: "Gin Tonic", price: 200, vibe: "Botanical, clean", color: "from-cyan-300 to-blue-600" },
  ],
};

const dishOptions = Object.keys(PAIRING_MAP);

const matchups = [
  { league: "UFC", title: "Fight Night Main Card", time: "Sat · 10 PM", crowd: "Loud" },
  { league: "PBA", title: "Ginebra vs. TNT", time: "Wed · 7 PM", crowd: "Big" },
  { league: "EPL", title: "Liverpool vs. Arsenal", time: "Sun · 9 PM", crowd: "Buzzing" },
];

export default function Concept2() {
  const [dish, setDish] = useState<keyof typeof PAIRING_MAP>("Steak / Ribeye");
  const [selected, setSelected] = useState(0);

  const pairings = useMemo(() => PAIRING_MAP[dish], [dish]);
  const active = pairings[selected];

  return (
    <main
      className="bg-[#0A1F1A] text-[#E8FFE0] min-h-screen overflow-x-hidden"
      style={{ fontFamily: "var(--font-outfit, sans-serif)" }}
    >
      {/* Top bar */}
      <header className="sticky top-0 z-30 bg-[#0A1F1A]/90 backdrop-blur border-b border-[#FF2EAA]/20">
        <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2.5 text-white">
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#FF2EAA] via-[#9B30FF] to-[#00E5FF] flex items-center justify-center shadow-[0_0_20px_rgba(255,46,170,0.6)]">
              <span className="text-white font-black text-[12px]">8</span>
            </div>
            <span className="text-sm font-black tracking-[0.2em]" style={{ fontFamily: "var(--font-space-grotesk, sans-serif)" }}>
              8BALL<span className="text-[#FF2EAA]">.TAVERN</span>
            </span>
          </Link>
          <nav className="hidden md:flex items-center gap-7 text-[11px] font-bold uppercase tracking-[0.2em] text-[#7DFFB7]/70">
            <a href="#tonight" className="hover:text-[#00E5FF]">Tonight</a>
            <a href="#pairing" className="hover:text-[#00E5FF]">Pair My Drink</a>
            <a href="#tables" className="hover:text-[#00E5FF]">Tables</a>
            <a href="#visit" className="hover:text-[#00E5FF]">Visit</a>
          </nav>
          <Link href="/" className="text-xs text-[#7DFFB7]/40 hover:text-[#00E5FF] flex items-center gap-1.5">
            <ArrowLeft size={14} /> Back
          </Link>
        </div>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden border-b border-[#FF2EAA]/15">
        {/* Felt-table radial */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_50%_30%,rgba(15,80,55,0.7)_0%,transparent_70%)]" />
        {/* Neon glows */}
        <div className="absolute -top-20 -left-20 w-96 h-96 rounded-full bg-[#FF2EAA]/20 blur-[120px]" />
        <div className="absolute -bottom-20 -right-20 w-96 h-96 rounded-full bg-[#00E5FF]/20 blur-[120px]" />
        {/* Felt diamond pattern overlay */}
        <div className="absolute inset-0 opacity-[0.04] [background-image:repeating-linear-gradient(45deg,transparent,transparent_30px,#fff_30px,#fff_31px),repeating-linear-gradient(-45deg,transparent,transparent_30px,#fff_30px,#fff_31px)]" />

        <div className="relative max-w-7xl mx-auto px-6 pt-20 pb-24 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FF2EAA]/15 text-[#FF2EAA] text-[11px] font-black uppercase tracking-[0.24em] mb-7 border border-[#FF2EAA]/30">
            <span className="w-1.5 h-1.5 rounded-full bg-[#FF2EAA] animate-pulse" />
            Open · Game on tonight
          </div>
          <h1
            className="text-[64px] sm:text-8xl lg:text-[140px] font-black tracking-[-0.04em] leading-[0.85] mb-7"
            style={{ fontFamily: "var(--font-space-grotesk, sans-serif)" }}
          >
            <span className="text-white">RACK&rsquo;EM</span><br />
            <span className="bg-gradient-to-r from-[#FF2EAA] via-[#9B30FF] to-[#00E5FF] bg-clip-text text-transparent">UP.</span>
          </h1>
          <p className="text-lg sm:text-2xl text-[#7DFFB7]/85 max-w-2xl mx-auto leading-[1.4] mb-9 font-medium">
            Game nights, fight nights, and the loudest cheer in Kalibo.<br />
            <span className="text-[#00E5FF]">Pull up a stool.</span>
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3 mb-14">
            <a
              href="#pairing"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-[#FF2EAA] to-[#9B30FF] hover:from-[#9B30FF] hover:to-[#FF2EAA] text-white px-7 py-4 rounded-full text-sm font-black uppercase tracking-[0.18em] shadow-[0_0_30px_rgba(255,46,170,0.5)] transition-all"
            >
              <Zap size={16} /> Plan my night
            </a>
            <a
              href="#tonight"
              className="inline-flex items-center gap-2 border-2 border-[#00E5FF] hover:bg-[#00E5FF] hover:text-[#0A1F1A] text-[#00E5FF] px-7 py-4 rounded-full text-sm font-black uppercase tracking-[0.18em] transition-all"
            >
              What&rsquo;s on tonight →
            </a>
          </div>

          {/* Animated marquee */}
          <div className="relative -mx-6 overflow-hidden">
            <div className="flex gap-8 whitespace-nowrap text-[14px] font-black uppercase tracking-[0.3em] text-[#7DFFB7]/30 py-6 border-y border-[#FF2EAA]/20">
              {Array.from({ length: 6 }).map((_, i) => (
                <span key={i} className="flex items-center gap-8">
                  <span>BILLIARDS</span><span className="text-[#FF2EAA]">●</span>
                  <span>FIGHT NIGHT</span><span className="text-[#00E5FF]">●</span>
                  <span>CRAFT COCKTAILS</span><span className="text-[#9B30FF]">●</span>
                  <span>STEAK NIGHT</span><span className="text-[#7DFFB7]">●</span>
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Tonight's matchups */}
      <section id="tonight" className="border-b border-[#FF2EAA]/15">
        <div className="max-w-7xl mx-auto px-6 py-20">
          <div className="flex items-end justify-between mb-12 flex-wrap gap-4">
            <div>
              <div className="text-[11px] font-black uppercase tracking-[0.32em] text-[#FF2EAA] mb-3">
                ◆ This Week ◆
              </div>
              <h2
                className="text-5xl sm:text-7xl font-black tracking-tight"
                style={{ fontFamily: "var(--font-space-grotesk, sans-serif)" }}
              >
                Big <span className="text-[#00E5FF]">screens.</span><br />
                Bigger <span className="text-[#FF2EAA]">crowd.</span>
              </h2>
            </div>
          </div>
          <div className="grid sm:grid-cols-3 gap-5">
            {matchups.map((m, i) => (
              <div
                key={m.title}
                className="relative group bg-[#0F2C24] border border-[#7DFFB7]/15 hover:border-[#00E5FF] transition-all p-6 overflow-hidden"
              >
                <div className={`absolute top-0 right-0 w-32 h-32 rounded-full blur-3xl opacity-30 group-hover:opacity-60 transition-opacity ${
                  i === 0 ? "bg-[#FF2EAA]" : i === 1 ? "bg-[#00E5FF]" : "bg-[#9B30FF]"
                }`} />
                <div className="relative">
                  <div className={`inline-block text-[10px] font-black tracking-[0.32em] mb-4 px-2 py-1 ${
                    i === 0 ? "text-[#FF2EAA] bg-[#FF2EAA]/10 border border-[#FF2EAA]/30"
                    : i === 1 ? "text-[#00E5FF] bg-[#00E5FF]/10 border border-[#00E5FF]/30"
                    : "text-[#9B30FF] bg-[#9B30FF]/10 border border-[#9B30FF]/30"
                  }`}>
                    {m.league}
                  </div>
                  <div
                    className="text-2xl font-black mb-3 leading-tight"
                    style={{ fontFamily: "var(--font-space-grotesk, sans-serif)" }}
                  >
                    {m.title}
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-[#7DFFB7]/70 font-semibold">{m.time}</span>
                    <span className="text-[#00E5FF] uppercase text-[10px] tracking-[0.2em] font-black">
                      Crowd: {m.crowd}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AI Drink Pairing */}
      <section
        id="pairing"
        className="border-b border-[#FF2EAA]/15 relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(0,229,255,0.1),transparent_60%),radial-gradient(ellipse_at_bottom_left,rgba(255,46,170,0.1),transparent_60%)]" />
        <div className="relative max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-12 gap-10">
          <div className="md:col-span-5">
            <div className="text-[11px] font-black uppercase tracking-[0.32em] text-[#00E5FF] mb-3 flex items-center gap-2">
              <Sparkles size={14} /> AI DRINK PAIRING
            </div>
            <h2
              className="text-5xl sm:text-6xl font-black tracking-tight leading-[0.95] mb-6"
              style={{ fontFamily: "var(--font-space-grotesk, sans-serif)" }}
            >
              Pick a dish.<br />
              <span className="text-[#FF2EAA]">Get the pour.</span>
            </h2>
            <p className="text-[#7DFFB7]/85 text-lg leading-relaxed mb-7">
              Tell our bartender what&rsquo;s on the table, and we&rsquo;ll
              suggest the cocktail (or pitcher) that goes best with it. Add it
              to your reservation in a tap.
            </p>
            <ul className="space-y-3 text-[#7DFFB7]/75">
              <li className="flex items-start gap-3"><Wine size={18} className="text-[#FF2EAA] mt-0.5 shrink-0" /><span>Built on real bartender pairings — not generic AI noise.</span></li>
              <li className="flex items-start gap-3"><Wine size={18} className="text-[#FF2EAA] mt-0.5 shrink-0" /><span>Shareable pitchers automatically suggested for groups.</span></li>
              <li className="flex items-start gap-3"><Wine size={18} className="text-[#FF2EAA] mt-0.5 shrink-0" /><span>One tap to add the pour to your reservation note.</span></li>
            </ul>
          </div>

          <div className="md:col-span-7">
            <div className="bg-[#0F2C24] border border-[#00E5FF]/30 rounded-3xl overflow-hidden shadow-[0_0_60px_rgba(0,229,255,0.15)]">
              <div className="px-5 py-4 border-b border-[#00E5FF]/20 flex items-center gap-3 bg-gradient-to-r from-[#0A1F1A] to-[#0F2C24]">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#FF2EAA] to-[#9B30FF] flex items-center justify-center shadow-[0_0_20px_rgba(255,46,170,0.5)]">
                  <Wine size={16} className="text-white" />
                </div>
                <div>
                  <div className="font-black text-sm text-white" style={{ fontFamily: "var(--font-space-grotesk, sans-serif)" }}>
                    AI Bartender
                  </div>
                  <div className="text-[11px] text-[#00E5FF] font-bold uppercase tracking-[0.16em]">
                    On shift · pouring now
                  </div>
                </div>
              </div>

              <div className="p-6 space-y-6">
                {/* Dish picker */}
                <div>
                  <label className="text-[10px] font-black uppercase tracking-[0.24em] text-[#00E5FF] mb-3 block">
                    What&rsquo;s on the table?
                  </label>
                  <div className="grid grid-cols-2 gap-2">
                    {dishOptions.map((d) => (
                      <button
                        key={d}
                        onClick={() => { setDish(d as keyof typeof PAIRING_MAP); setSelected(0); }}
                        className={`text-left text-sm px-3 py-3 rounded-xl border-2 transition-all ${
                          dish === d
                            ? "border-[#FF2EAA] bg-[#FF2EAA]/10 text-white font-bold shadow-[0_0_20px_rgba(255,46,170,0.3)]"
                            : "border-[#7DFFB7]/15 hover:border-[#00E5FF]/50 text-[#7DFFB7]/80"
                        }`}
                      >
                        {d}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Pairing recommendations */}
                <div>
                  <label className="text-[10px] font-black uppercase tracking-[0.24em] text-[#00E5FF] mb-3 block">
                    The pour we&rsquo;d suggest
                  </label>
                  <div className="space-y-2.5">
                    {pairings.map((p, i) => (
                      <button
                        key={p.name}
                        onClick={() => setSelected(i)}
                        className={`w-full text-left p-4 rounded-2xl border-2 transition-all flex items-center gap-4 ${
                          selected === i
                            ? "border-[#00E5FF] bg-[#00E5FF]/5"
                            : "border-[#7DFFB7]/15 hover:border-[#00E5FF]/50"
                        }`}
                      >
                        <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${p.color} shrink-0`} />
                        <div className="flex-1">
                          <div className="font-black text-white" style={{ fontFamily: "var(--font-space-grotesk, sans-serif)" }}>
                            {p.name}
                          </div>
                          <div className="text-[11px] text-[#7DFFB7]/70 italic">{p.vibe}</div>
                        </div>
                        <div className="text-[#FF2EAA] font-black text-lg" style={{ fontFamily: "var(--font-space-grotesk, sans-serif)" }}>
                          ₱{p.price}
                        </div>
                      </button>
                    ))}
                  </div>
                </div>

                <div className="rounded-2xl bg-gradient-to-br from-[#FF2EAA]/15 via-[#9B30FF]/10 to-[#00E5FF]/15 border border-[#FF2EAA]/30 p-5">
                  <div className="text-[10px] uppercase tracking-[0.2em] text-[#FF2EAA] font-black mb-2">
                    Tonight&rsquo;s match
                  </div>
                  <div className="text-xl font-black text-white mb-1" style={{ fontFamily: "var(--font-space-grotesk, sans-serif)" }}>
                    {dish} + {active.name}
                  </div>
                  <div className="text-sm text-[#7DFFB7]/80 italic mb-4">
                    {active.vibe}. <span className="text-[#00E5FF] not-italic font-bold">A pour your table will remember.</span>
                  </div>
                  <a
                    href={`https://wa.me/63366361208?text=${encodeURIComponent(`Hi 8 Ball Tavern! I'd like to reserve a table — pair with ${active.name} for ${dish}.`)}`}
                    className="block text-center bg-gradient-to-r from-[#FF2EAA] to-[#00E5FF] hover:from-[#00E5FF] hover:to-[#FF2EAA] text-[#0A1F1A] py-3 rounded-full text-sm font-black uppercase tracking-[0.16em] transition-all shadow-[0_0_30px_rgba(255,46,170,0.4)]"
                  >
                    Add to my reservation →
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tables / Billiards */}
      <section id="tables" className="border-b border-[#FF2EAA]/15">
        <div className="max-w-7xl mx-auto px-6 py-20">
          <div className="text-[11px] font-black uppercase tracking-[0.32em] text-[#FF2EAA] mb-3">
            ◆ The Felt ◆
          </div>
          <h2
            className="text-5xl sm:text-7xl font-black tracking-tight mb-12 leading-[0.95]"
            style={{ fontFamily: "var(--font-space-grotesk, sans-serif)" }}
          >
            Four tables.<br />
            <span className="text-[#00E5FF]">Always one open.</span>
          </h2>
          <div className="grid md:grid-cols-2 gap-5">
            {[
              { hour: "5–7 PM", title: "Happy Hour", body: "House cocktails ₱180. Quick pool warmups.", glow: "bg-[#FF2EAA]" },
              { hour: "7–10 PM", title: "Dinner Crowd", body: "Steaks plate up. The bar gets loud.", glow: "bg-[#9B30FF]" },
              { hour: "10 PM–12 AM", title: "Game Time", body: "Big screens go on. Crowd locks in.", glow: "bg-[#00E5FF]" },
              { hour: "12 AM+", title: "Late Stack", body: "Last orders. Final racks. Slow it down.", glow: "bg-[#7DFFB7]" },
            ].map((t) => (
              <div
                key={t.title}
                className="relative bg-[#0F2C24] border border-[#7DFFB7]/15 hover:border-[#00E5FF] transition-all p-7 overflow-hidden group"
              >
                <div className={`absolute -top-10 -right-10 w-40 h-40 rounded-full blur-3xl opacity-40 ${t.glow}`} />
                <div className="relative">
                  <div className="text-[10px] font-black uppercase tracking-[0.24em] text-[#00E5FF] mb-3">
                    {t.hour}
                  </div>
                  <div
                    className="text-3xl font-black mb-2"
                    style={{ fontFamily: "var(--font-space-grotesk, sans-serif)" }}
                  >
                    {t.title}
                  </div>
                  <div className="text-[#7DFFB7]/80 text-sm leading-relaxed">
                    {t.body}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AI strip */}
      <section className="border-b border-[#FF2EAA]/15 bg-gradient-to-br from-[#0F2C24] via-[#0A1F1A] to-[#0F2C24]">
        <div className="max-w-7xl mx-auto px-6 py-20">
          <div className="text-[11px] font-black uppercase tracking-[0.32em] text-[#FF2EAA] mb-3">
            ◆ Smart Layers ◆
          </div>
          <h2
            className="text-5xl sm:text-6xl font-black tracking-tight mb-12 max-w-3xl leading-[0.95]"
            style={{ fontFamily: "var(--font-space-grotesk, sans-serif)" }}
          >
            Three tools.<br />
            <span className="text-[#00E5FF]">Zero friction.</span>
          </h2>
          <div className="grid md:grid-cols-3 gap-5">
            {[
              { title: "Reservation Concierge", body: "Tell us the vibe — we pick the table.", color: "from-[#FF2EAA] to-[#9B30FF]" },
              { title: "Drink Pairing", body: "Dish in. Pour out. Take the win.", color: "from-[#9B30FF] to-[#00E5FF]" },
              { title: "Game Night Planner", body: "Full evening, one tap, locked in.", color: "from-[#00E5FF] to-[#7DFFB7]" },
            ].map((c) => (
              <div
                key={c.title}
                className="relative border border-[#7DFFB7]/15 hover:border-[#00E5FF] transition-all p-7 bg-[#0A1F1A] group overflow-hidden"
              >
                <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${c.color} flex items-center justify-center mb-5 shadow-[0_0_20px_rgba(255,46,170,0.4)]`}>
                  <Sparkles size={18} className="text-white" />
                </div>
                <div
                  className="font-black text-2xl mb-2"
                  style={{ fontFamily: "var(--font-space-grotesk, sans-serif)" }}
                >
                  {c.title}
                </div>
                <div className="text-sm text-[#7DFFB7]/75 leading-relaxed">
                  {c.body}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        id="visit"
        className="bg-[#0A1F1A] relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,46,170,0.15),transparent_70%)]" />
        <div className="relative max-w-7xl mx-auto px-6 py-24 text-center">
          <h2
            className="text-6xl sm:text-8xl font-black tracking-tight mb-6 leading-[0.9]"
            style={{ fontFamily: "var(--font-space-grotesk, sans-serif)" }}
          >
            <span className="text-white">Game on.</span><br />
            <span className="bg-gradient-to-r from-[#FF2EAA] via-[#9B30FF] to-[#00E5FF] bg-clip-text text-transparent">See you tonight.</span>
          </h2>
          <p className="text-lg text-[#7DFFB7]/85 max-w-xl mx-auto mb-10">
            Vanyard Hotel · Kalibo, Aklan. Open daily, lunch through late.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 mb-10">
            <a
              href="https://wa.me/63366361208"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-[#FF2EAA] to-[#9B30FF] hover:scale-105 text-white px-7 py-4 rounded-full text-sm font-black uppercase tracking-[0.18em] transition-all shadow-[0_0_30px_rgba(255,46,170,0.5)]"
            >
              <Phone size={16} /> Text us now
            </a>
            <a
              href="mailto:hello@8balltavern.com"
              className="inline-flex items-center gap-2 border-2 border-[#00E5FF] hover:bg-[#00E5FF] hover:text-[#0A1F1A] text-[#00E5FF] px-7 py-4 rounded-full text-sm font-black uppercase tracking-[0.18em] transition-all"
            >
              <Mail size={16} /> Email
            </a>
          </div>
          <div className="text-xs text-[#7DFFB7]/40 inline-flex items-center gap-2">
            <MapPin size={14} className="text-[#FF2EAA]" /> GF Vanyard Hotel · Jaime Cardinal Sin Avenue · Kalibo, Aklan
          </div>
        </div>
      </section>

      <footer className="bg-[#0A1F1A] border-t border-[#FF2EAA]/15">
        <div className="max-w-7xl mx-auto px-6 py-10 flex flex-col sm:flex-row justify-between gap-4 text-xs text-[#7DFFB7]/40">
          <div>© {new Date().getFullYear()} 8 Ball Tavern · Concept 2 — Neon Game Night</div>
          <div className="flex gap-5">
            <Link href="/" className="hover:text-[#00E5FF]">All concepts</Link>
            <Link href="/proposal" className="hover:text-[#00E5FF]">Proposal</Link>
          </div>
        </div>
      </footer>
    </main>
  );
}
