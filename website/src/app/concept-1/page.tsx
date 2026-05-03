"use client";

import Link from "next/link";
import { useState, useMemo } from "react";
import {
  ArrowLeft,
  ArrowUpRight,
  ArrowRight,
  Sparkles,
  CalendarCheck,
  Phone,
  Mail,
  MapPin,
  Clock,
  CheckCircle2,
  Trophy,
  Wine,
  Flame,
} from "lucide-react";

const tableTypes = [
  { id: "booth", label: "Quiet Booth", desc: "Tucked away, dim, intimate", best: "Date nights, anniversaries" },
  { id: "billiards", label: "Billiards-side", desc: "Right next to the felt — close to the action", best: "Barkadas, friendly competition" },
  { id: "sports", label: "Sports View", desc: "Direct sightline to the main screen", best: "UFC nights, big-game crowds" },
  { id: "bar", label: "Bar Counter", desc: "Front-row to the bartender's craft", best: "Solo, after-work, walk-ins" },
];

const occasions = [
  "Date night", "Barkada hangout", "Big game / fight night", "Birthday", "Just drinks", "Walk-in",
];

const cocktails = [
  { name: "Old Fashioned", price: 240, note: "House pour, citrus zest" },
  { name: "Whiskey Sour", price: 240, note: "Foamy, balanced" },
  { name: "Mojito", price: 240, note: "Fresh mint, crushed ice" },
  { name: "Negroni", price: 240, note: "Equal parts, bitter" },
  { name: "Margarita", price: 240, note: "Salt rim, fresh lime" },
  { name: "Moscow Mule", price: 230, note: "Copper mug, ginger kick" },
];

const promos = [
  { day: "MON", title: "Happy Hour", body: "House cocktails ₱180, 5–7 PM", tone: "from-[#C4935A]/10 to-transparent" },
  { day: "WED", title: "Pizza & Pasta", body: "Combo for two, ₱648, 3–7 PM", tone: "from-[#C4935A]/15 to-transparent" },
  { day: "SAT", title: "UFC Night", body: "Live screening + sangria pitchers", tone: "from-[#C4935A]/20 to-transparent" },
];

export default function Concept1() {
  const [tableType, setTableType] = useState("booth");
  const [occasion, setOccasion] = useState("Date night");
  const [partySize, setPartySize] = useState(2);
  const [thinking, setThinking] = useState(false);
  const [confirmed, setConfirmed] = useState(false);

  const recommended = useMemo(() => {
    if (occasion === "Date night" || occasion === "Birthday") return "booth";
    if (occasion === "Barkada hangout") return "billiards";
    if (occasion === "Big game / fight night") return "sports";
    if (occasion === "Just drinks" || occasion === "Walk-in") return "bar";
    return "booth";
  }, [occasion]);

  function bookTable() {
    setConfirmed(false);
    setThinking(true);
    setTimeout(() => {
      setThinking(false);
      setConfirmed(true);
    }, 900);
  }

  return (
    <main
      className="bg-[#0D0D0D] text-[#F0E6D3] min-h-screen"
      style={{ fontFamily: "var(--font-outfit, sans-serif)" }}
    >
      {/* Top bar */}
      <header className="sticky top-0 z-30 bg-[#0D0D0D]/95 backdrop-blur border-b border-[#C4935A]/15">
        <div className="max-w-6xl mx-auto px-6 py-3 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2.5 text-[#F0E6D3]">
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#1a1a1a] to-[#000] flex items-center justify-center ring-2 ring-[#C4935A]/40">
              <span className="text-[#C4935A] font-bold text-[12px]" style={{ fontFamily: "var(--font-cinzel-decorative, serif)" }}>8</span>
            </div>
            <span className="text-sm font-semibold tracking-[0.2em]" style={{ fontFamily: "var(--font-cinzel, serif)" }}>
              8 BALL <span className="text-[#C4935A]">TAVERN</span>
            </span>
          </Link>
          <nav className="hidden md:flex items-center gap-8 text-[11px] font-semibold uppercase tracking-[0.16em] text-[#D4C9B8]/70">
            <a href="#about" className="hover:text-[#C4935A]">Tavern</a>
            <Link href="/menu" className="hover:text-[#C4935A]">Menu</Link>
            <a href="#promos" className="hover:text-[#C4935A]">Promos</a>
            <a href="#cocktails" className="hover:text-[#C4935A]">Cocktails</a>
            <a href="#reserve" className="hover:text-[#C4935A]">Reserve</a>
            <a href="#visit" className="hover:text-[#C4935A]">Visit</a>
          </nav>
          <Link href="/" className="text-xs text-[#D4C9B8]/40 hover:text-[#C4935A] flex items-center gap-1.5">
            <ArrowLeft size={14} /> Back
          </Link>
        </div>
      </header>

      {/* Hero with reservation concierge */}
      <section className="relative overflow-hidden border-b border-[#C4935A]/10">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_30%,rgba(196,147,90,0.12)_0%,transparent_70%)]" />
        <div className="absolute inset-0 opacity-[0.03] bg-noise pointer-events-none" />
        <div className="relative max-w-6xl mx-auto px-6 pt-20 pb-24 grid lg:grid-cols-12 gap-10 items-center">
          {/* Left column */}
          <div className="lg:col-span-7">
            <div className="flex items-center gap-3 mb-7">
              <div className="h-px w-10 bg-[#C4935A]" />
              <span className="text-[10px] font-bold uppercase tracking-[0.32em] text-[#C4935A]">
                Est. 2023 · Kalibo, Aklan
              </span>
            </div>
            <h1
              className="text-5xl sm:text-6xl lg:text-7xl xl:text-[88px] font-normal tracking-[0.02em] leading-[1.0] mb-7"
              style={{ fontFamily: "var(--font-cinzel-decorative, serif)" }}
            >
              Where every<br />
              game night<br />
              becomes <em className="italic font-light text-[#C4935A]" style={{ fontFamily: "var(--font-cormorant, serif)" }}>legendary.</em>
            </h1>
            <p className="text-lg text-[#D4C9B8]/85 max-w-xl leading-relaxed mb-9 font-light">
              The crack of billiard balls, the sizzle of hand-cut steaks, the
              clink of perfectly crafted cocktails. Aklan&rsquo;s premier
              sports lounge — built for the long evenings.
            </p>
            <div className="flex flex-wrap gap-3 mb-12">
              <a
                href="#reserve"
                className="inline-flex items-center gap-2 bg-gradient-to-br from-[#C4935A] to-[#E8C07A] hover:from-[#E8C07A] hover:to-[#C4935A] transition-all text-[#0D0D0D] px-6 py-3.5 text-sm font-bold uppercase tracking-[0.18em]"
              >
                Reserve a table <ArrowRight size={16} />
              </a>
              <Link
                href="/menu"
                className="inline-flex items-center gap-2 border border-[#C4935A]/40 hover:border-[#C4935A] text-[#C4935A] px-6 py-3.5 text-sm font-bold uppercase tracking-[0.18em] transition-colors"
              >
                See the menu
              </Link>
            </div>
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-[#C4935A]/10 max-w-md">
              <div>
                <div className="text-3xl text-[#C4935A]" style={{ fontFamily: "var(--font-cinzel-decorative, serif)" }}>
                  4
                </div>
                <div className="text-[10px] uppercase tracking-[0.2em] text-[#D4C9B8]/50 mt-1.5">
                  Pool tables
                </div>
              </div>
              <div>
                <div className="text-3xl text-[#C4935A]" style={{ fontFamily: "var(--font-cinzel-decorative, serif)" }}>
                  20+
                </div>
                <div className="text-[10px] uppercase tracking-[0.2em] text-[#D4C9B8]/50 mt-1.5">
                  Cocktails
                </div>
              </div>
              <div>
                <div className="text-3xl text-[#C4935A]" style={{ fontFamily: "var(--font-cinzel-decorative, serif)" }}>
                  Daily
                </div>
                <div className="text-[10px] uppercase tracking-[0.2em] text-[#D4C9B8]/50 mt-1.5">
                  Live sports
                </div>
              </div>
            </div>
          </div>

          {/* Reservation concierge widget */}
          <div className="lg:col-span-5" id="reserve">
            <div className="bg-[#141414] border border-[#C4935A]/30 shadow-2xl shadow-black/60 overflow-hidden">
              <div className="bg-gradient-to-r from-[#1a1a1a] to-[#0D0D0D] px-5 py-4 flex items-center gap-3 border-b border-[#C4935A]/20">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#C4935A] to-[#8A6838] flex items-center justify-center">
                  <CalendarCheck size={18} className="text-[#0D0D0D]" />
                </div>
                <div>
                  <div className="text-[10px] uppercase tracking-[0.2em] text-[#C4935A] font-bold">
                    Smart Reservation Concierge
                  </div>
                  <div className="text-sm font-bold text-[#F0E6D3]" style={{ fontFamily: "var(--font-cinzel, serif)" }}>
                    Book your perfect table
                  </div>
                </div>
                <span className="ml-auto inline-flex items-center gap-1.5 text-[10px] uppercase tracking-wider text-emerald-400">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" /> Live
                </span>
              </div>
              <div className="p-5 space-y-4">
                <div>
                  <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#C4935A]/80 mb-2 block">
                    What&rsquo;s the occasion?
                  </label>
                  <div className="flex flex-wrap gap-1.5">
                    {occasions.map((o) => (
                      <button
                        key={o}
                        onClick={() => { setOccasion(o); setConfirmed(false); setTableType(""); }}
                        className={`text-xs px-3 py-1.5 border transition-colors ${
                          occasion === o
                            ? "border-[#C4935A] bg-[#C4935A]/10 text-[#E8C07A] font-semibold"
                            : "border-[#C4935A]/15 hover:border-[#C4935A]/50 text-[#D4C9B8]/70"
                        }`}
                      >
                        {o}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#C4935A]/80 mb-2 block">
                    Party size
                  </label>
                  <div className="flex items-center gap-3">
                    <button
                      onClick={() => setPartySize(Math.max(1, partySize - 1))}
                      className="w-10 h-10 border border-[#C4935A]/30 hover:border-[#C4935A] text-[#C4935A] text-lg"
                    >
                      −
                    </button>
                    <div className="flex-1 text-center text-2xl font-bold text-[#F0E6D3]" style={{ fontFamily: "var(--font-cinzel, serif)" }}>
                      {partySize} <span className="text-xs uppercase tracking-wider text-[#D4C9B8]/50 font-normal">{partySize === 1 ? "guest" : "guests"}</span>
                    </div>
                    <button
                      onClick={() => setPartySize(Math.min(12, partySize + 1))}
                      className="w-10 h-10 border border-[#C4935A]/30 hover:border-[#C4935A] text-[#C4935A] text-lg"
                    >
                      +
                    </button>
                  </div>
                </div>

                <div>
                  <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#C4935A]/80 mb-2 block">
                    Suggested seating <span className="text-[#D4C9B8]/40 normal-case">· based on your plan</span>
                  </label>
                  <div className="grid grid-cols-2 gap-2">
                    {tableTypes.map((t) => {
                      const isSuggested = recommended === t.id;
                      const isSelected = (tableType || recommended) === t.id;
                      return (
                        <button
                          key={t.id}
                          onClick={() => { setTableType(t.id); setConfirmed(false); }}
                          className={`text-left p-3 border transition-all relative ${
                            isSelected
                              ? "border-[#C4935A] bg-[#C4935A]/10"
                              : "border-[#C4935A]/15 hover:border-[#C4935A]/50"
                          }`}
                        >
                          {isSuggested && !tableType && (
                            <span className="absolute -top-2 right-2 text-[8px] font-bold uppercase tracking-wider bg-[#C4935A] text-[#0D0D0D] px-1.5 py-0.5">
                              ★ Pick
                            </span>
                          )}
                          <div className="text-sm font-bold text-[#F0E6D3] mb-0.5" style={{ fontFamily: "var(--font-cinzel, serif)" }}>
                            {t.label}
                          </div>
                          <div className="text-[10px] text-[#D4C9B8]/60 leading-snug">
                            {t.desc}
                          </div>
                        </button>
                      );
                    })}
                  </div>
                </div>

                <button
                  onClick={bookTable}
                  disabled={thinking}
                  className="w-full bg-gradient-to-br from-[#C4935A] to-[#E8C07A] hover:from-[#E8C07A] hover:to-[#C4935A] disabled:opacity-70 transition-all text-[#0D0D0D] py-3.5 text-sm font-bold uppercase tracking-[0.18em] flex items-center justify-center gap-2"
                >
                  {thinking ? (
                    <>
                      <span className="w-4 h-4 border-2 border-[#0D0D0D]/30 border-t-[#0D0D0D] rounded-full animate-spin" /> Booking…
                    </>
                  ) : (
                    <>
                      <Sparkles size={16} /> Confirm via WhatsApp
                    </>
                  )}
                </button>

                {confirmed && (
                  <div className="bg-[#0D0D0D] border border-[#C4935A]/40 p-4 space-y-2 text-sm">
                    <div className="flex items-center gap-2 text-emerald-400 text-xs uppercase tracking-wider font-bold">
                      <CheckCircle2 size={14} /> Reservation drafted
                    </div>
                    <div className="text-[#D4C9B8]/85 text-xs leading-relaxed">
                      <strong className="text-[#F0E6D3]">{partySize} guests · {tableTypes.find(t => t.id === (tableType || recommended))?.label}</strong>
                      <br />
                      For: <em>{occasion}</em>
                      <br />
                      We&rsquo;ll send your reservation to the floor team via WhatsApp for instant confirmation.
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust strip */}
      <section className="bg-[#0D0D0D] border-b border-[#C4935A]/10">
        <div className="max-w-6xl mx-auto px-6 py-8 grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { icon: <Trophy size={18} />, label: "Championship pool tables" },
            { icon: <Flame size={18} />, label: "Hand-cut Australian ribeye" },
            { icon: <Wine size={18} />, label: "20+ classic cocktails" },
            { icon: <Clock size={18} />, label: "Open daily, lunch to late" },
          ].map((t) => (
            <div key={t.label} className="flex items-center gap-3 text-[#D4C9B8]/85">
              <div className="text-[#C4935A]">{t.icon}</div>
              <div className="text-sm font-medium">{t.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* About */}
      <section id="about" className="border-b border-[#C4935A]/10 bg-[#141414]">
        <div className="max-w-6xl mx-auto px-6 py-20 grid md:grid-cols-12 gap-12">
          <div className="md:col-span-5">
            <div className="text-[10px] font-bold uppercase tracking-[0.24em] text-[#C4935A] mb-3">
              The Tavern
            </div>
            <h2
              className="text-4xl sm:text-5xl font-normal tracking-tight leading-[1.05]"
              style={{ fontFamily: "var(--font-cinzel-decorative, serif)" }}
            >
              Where sports,<br />
              <em className="italic font-light text-[#C4935A]" style={{ fontFamily: "var(--font-cormorant, serif)" }}>food, and friends</em><br />
              come together.
            </h2>
          </div>
          <div className="md:col-span-7 text-[#D4C9B8]/80 text-lg leading-relaxed space-y-5">
            <p>
              Welcome to 8 Ball Tavern, Kalibo&rsquo;s premier destination
              where every evening turns into an event. From signature ribeye
              steaks and hand-tossed pizzas to a curated whiskey bar and
              perfectly poured cocktails — every detail has been considered.
            </p>
            <p className="text-[#D4C9B8]/65">
              Whether you&rsquo;re here for a championship pool match, a
              quiet anniversary dinner, or the loudest crowd in town for fight
              night — the Tavern always delivers.
            </p>
          </div>
        </div>
      </section>

      {/* Promos */}
      <section id="promos" className="border-b border-[#C4935A]/10">
        <div className="max-w-6xl mx-auto px-6 py-20">
          <div className="flex items-end justify-between mb-10 flex-wrap gap-4">
            <div>
              <div className="text-[10px] font-bold uppercase tracking-[0.24em] text-[#C4935A] mb-3">
                This Week at the Tavern
              </div>
              <h2
                className="text-4xl sm:text-5xl font-normal tracking-tight"
                style={{ fontFamily: "var(--font-cinzel-decorative, serif)" }}
              >
                Promos &amp; <em className="italic font-light text-[#C4935A]" style={{ fontFamily: "var(--font-cormorant, serif)" }}>specials</em>
              </h2>
            </div>
          </div>
          <div className="grid sm:grid-cols-3 gap-5">
            {promos.map((p) => (
              <div
                key={p.title}
                className={`relative bg-[#141414] border border-[#C4935A]/15 p-7 hover:border-[#C4935A]/50 transition-all overflow-hidden`}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${p.tone} opacity-60 pointer-events-none`} />
                <div className="relative">
                  <div className="text-[10px] font-bold tracking-[0.3em] text-[#C4935A] mb-4">
                    {p.day}
                  </div>
                  <div
                    className="text-2xl font-normal text-[#F0E6D3] mb-2"
                    style={{ fontFamily: "var(--font-cinzel, serif)" }}
                  >
                    {p.title}
                  </div>
                  <div className="text-sm text-[#D4C9B8]/70 leading-relaxed">
                    {p.body}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cocktails */}
      <section id="cocktails" className="border-b border-[#C4935A]/10 bg-[#141414]">
        <div className="max-w-6xl mx-auto px-6 py-20">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-3">
              <div className="h-px w-12 bg-[#C4935A]" />
              <span className="text-[10px] font-bold uppercase tracking-[0.32em] text-[#C4935A]">
                ◆ The Cocktail List ◆
              </span>
              <div className="h-px w-12 bg-[#C4935A]" />
            </div>
            <h2
              className="text-4xl sm:text-5xl font-normal tracking-tight"
              style={{ fontFamily: "var(--font-cinzel-decorative, serif)" }}
            >
              Time-honoured <em className="italic font-light text-[#C4935A]" style={{ fontFamily: "var(--font-cormorant, serif)" }}>classics.</em>
            </h2>
            <p className="text-[#D4C9B8]/70 text-base mt-4 max-w-2xl mx-auto italic font-light" style={{ fontFamily: "var(--font-cormorant, serif)" }}>
              Our version of the cocktails found in every great corner of the world — poured with care.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-[#C4935A]/10">
            {cocktails.map((c) => (
              <div
                key={c.name}
                className="bg-[#141414] hover:bg-[#1a1a1a] transition-colors p-6 group"
              >
                <div className="flex justify-between items-start mb-2">
                  <div
                    className="text-lg font-normal text-[#F0E6D3] group-hover:text-[#C4935A] transition-colors"
                    style={{ fontFamily: "var(--font-cinzel, serif)" }}
                  >
                    {c.name}
                  </div>
                  <div className="text-[#C4935A] text-lg" style={{ fontFamily: "var(--font-cinzel, serif)" }}>
                    {c.price}
                  </div>
                </div>
                <p className="text-xs text-[#D4C9B8]/55 italic font-light" style={{ fontFamily: "var(--font-cormorant, serif)" }}>
                  {c.note}
                </p>
              </div>
            ))}
          </div>
          <div className="mt-8 border border-[#C4935A]/30 bg-gradient-to-br from-[#C4935A]/5 to-transparent p-6 text-center">
            <div className="text-[10px] font-bold tracking-[0.3em] text-[#C4935A] mb-2">
              SANGRIA PITCHERS
            </div>
            <div className="flex items-center justify-center gap-8 text-sm text-[#D4C9B8]/85">
              <span><em className="italic" style={{ fontFamily: "var(--font-cormorant, serif)" }}>White Sangria</em> — <span className="text-[#C4935A] font-semibold">₱1,040</span></span>
              <span className="text-[#C4935A]/30">|</span>
              <span><em className="italic" style={{ fontFamily: "var(--font-cormorant, serif)" }}>Red Sangria</em> — <span className="text-[#C4935A] font-semibold">₱1,040</span></span>
            </div>
          </div>
        </div>
      </section>

      {/* Smart features strip */}
      <section className="border-b border-[#C4935A]/10 bg-gradient-to-br from-[#C4935A]/8 via-transparent to-transparent">
        <div className="max-w-6xl mx-auto px-6 py-20">
          <div className="text-[10px] font-bold uppercase tracking-[0.24em] text-[#C4935A] mb-3">
            Smart features
          </div>
          <h2
            className="text-4xl sm:text-5xl font-normal tracking-tight mb-12 max-w-3xl"
            style={{ fontFamily: "var(--font-cinzel-decorative, serif)" }}
          >
            Your hostess, <em className="italic font-light text-[#C4935A]" style={{ fontFamily: "var(--font-cormorant, serif)" }}>available 24/7.</em>
          </h2>
          <div className="grid md:grid-cols-3 gap-5">
            {[
              {
                title: "Reservation Concierge",
                body: "Guests describe their plan and the concierge picks the right table — booth, billiards-side, or sports view. Confirms via WhatsApp.",
              },
              {
                title: "Drink Pairing Bartender",
                body: "Pick a dish; the bartender suggests a cocktail or sangria pitcher to match. One tap to add to your reservation note.",
              },
              {
                title: "Game Night Planner",
                body: "Builds the full evening — sports schedule, billiards block, group meal, signature pitcher — bundled into one bookable plan.",
              },
            ].map((c) => (
              <div key={c.title} className="border border-[#C4935A]/15 p-6 hover:border-[#C4935A]/60 transition-colors bg-[#0D0D0D]">
                <div className="w-10 h-10 bg-gradient-to-br from-[#C4935A] to-[#8A6838] flex items-center justify-center mb-4 rounded-full">
                  <Sparkles size={16} className="text-[#0D0D0D]" />
                </div>
                <div
                  className="font-normal text-[#F0E6D3] text-lg mb-2"
                  style={{ fontFamily: "var(--font-cinzel, serif)" }}
                >
                  {c.title}
                </div>
                <div className="text-sm text-[#D4C9B8]/65 leading-relaxed">
                  {c.body}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Visit / Contact */}
      <section id="visit" className="bg-gradient-to-br from-[#0D0D0D] via-[#141414] to-[#1a1a1a] border-b border-[#C4935A]/10">
        <div className="max-w-6xl mx-auto px-6 py-20 grid md:grid-cols-12 gap-10 items-center">
          <div className="md:col-span-6">
            <div className="text-[10px] font-bold uppercase tracking-[0.24em] text-[#C4935A] mb-3">
              Visit Us
            </div>
            <h2
              className="text-4xl sm:text-5xl font-normal tracking-tight leading-[1.05] mb-6"
              style={{ fontFamily: "var(--font-cinzel-decorative, serif)" }}
            >
              The table is set,<br />
              <em className="italic font-light text-[#C4935A]" style={{ fontFamily: "var(--font-cormorant, serif)" }}>your game awaits.</em>
            </h2>
            <div className="space-y-3 text-[#D4C9B8]/85">
              <div className="flex items-start gap-3">
                <MapPin size={16} className="text-[#C4935A] mt-1 shrink-0" />
                <div>
                  <div className="font-semibold text-[#F0E6D3]">GF Vanyard Hotel</div>
                  <div className="text-sm text-[#D4C9B8]/70">Jaime Cardinal Sin Avenue · Kalibo, Aklan</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Clock size={16} className="text-[#C4935A]" />
                <span>Open daily · Lunch &amp; dinner</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone size={16} className="text-[#C4935A]" />
                <span>+63 36 636 1208</span>
              </div>
            </div>
          </div>
          <div className="md:col-span-6">
            <div className="aspect-[4/3] bg-gradient-to-br from-[#1a1a1a] via-[#222] to-[#0D0D0D] border border-[#C4935A]/20 relative overflow-hidden">
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(196,147,90,0.12)_0%,transparent_70%)]" />
              <div className="absolute inset-0 flex items-center justify-center text-[#C4935A]/30 text-[10px] tracking-[0.4em] font-bold">
                ◆ TAVERN MAP ◆
              </div>
              <div className="absolute bottom-4 left-4 right-4 bg-[#0D0D0D]/85 backdrop-blur border border-[#C4935A]/20 px-4 py-3">
                <div className="text-[10px] uppercase tracking-[0.2em] text-[#C4935A] font-bold mb-1">
                  Find us
                </div>
                <div className="text-sm text-[#F0E6D3] font-semibold">
                  Vanyard Hotel · Kalibo, Aklan
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-gradient-to-br from-[#C4935A] to-[#8A6838] text-[#0D0D0D]">
        <div className="max-w-6xl mx-auto px-6 py-20 text-center">
          <h2
            className="text-4xl sm:text-5xl font-normal tracking-tight mb-6 max-w-3xl mx-auto leading-[1.1]"
            style={{ fontFamily: "var(--font-cinzel-decorative, serif)" }}
          >
            Pull up a chair.<br />
            <em className="italic font-light" style={{ fontFamily: "var(--font-cormorant, serif)" }}>The night is yours.</em>
          </h2>
          <div className="flex flex-wrap items-center justify-center gap-3 mb-8">
            <a
              href="#reserve"
              className="inline-flex items-center gap-2 bg-[#0D0D0D] hover:bg-[#141414] text-[#C4935A] px-6 py-3.5 text-sm font-bold uppercase tracking-[0.18em] transition-colors"
            >
              <CalendarCheck size={16} /> Reserve a table
            </a>
            <a
              href="mailto:hello@8balltavern.com"
              className="inline-flex items-center gap-2 border border-[#0D0D0D]/30 hover:border-[#0D0D0D] text-[#0D0D0D] px-6 py-3.5 text-sm font-bold uppercase tracking-[0.18em] transition-colors"
            >
              <Mail size={16} /> Email us
            </a>
          </div>
        </div>
      </section>

      <footer className="bg-[#0D0D0D] border-t border-[#C4935A]/10">
        <div className="max-w-6xl mx-auto px-6 py-10 flex flex-col sm:flex-row justify-between gap-4 text-xs text-[#D4C9B8]/40">
          <div>© {new Date().getFullYear()} 8 Ball Tavern · Concept 1 — Classic Pub Heritage</div>
          <div className="flex gap-5">
            <Link href="/" className="hover:text-[#C4935A]">All concepts</Link>
            <Link href="/proposal" className="hover:text-[#C4935A]">Proposal</Link>
          </div>
        </div>
      </footer>
    </main>
  );
}
