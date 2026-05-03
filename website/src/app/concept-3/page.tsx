"use client";

import Link from "next/link";
import { useState } from "react";
import {
  ArrowLeft,
  ArrowUpRight,
  ArrowRight,
  Sparkles,
  PartyPopper,
  Phone,
  Mail,
  MapPin,
  Clock,
  Users,
  Tv,
  Wine,
  Plus,
  Check,
} from "lucide-react";

type Plan = {
  table: string;
  meal: string;
  pour: string;
  watching?: string;
  total: number;
};

const occasions = [
  {
    id: "date",
    label: "Date Night",
    sub: "for two",
    plan: { table: "Quiet Booth, candle-lit", meal: "Ribeye for two + truffle fries", pour: "Old Fashioned + glass of red", total: 2480 },
  },
  {
    id: "barkada",
    label: "Barkada Hangout",
    sub: "group of 4–6",
    plan: { table: "Billiards-side high table", meal: "Pizza & pasta combo (×2)", pour: "Red Sangria pitcher", total: 2336 },
  },
  {
    id: "fight",
    label: "Fight Night",
    sub: "main card crowd",
    plan: { table: "Front-row sports view", meal: "Bar bites platter + wings", pour: "Buckets of San Mig Light", watching: "UFC main card · 10 PM", total: 2200 },
  },
  {
    id: "birthday",
    label: "Birthday",
    sub: "party of 8+",
    plan: { table: "Long communal table, balloons up", meal: "Steak board + sides for the table", pour: "Two sangria pitchers", total: 4880 },
  },
];

const photos = [
  { label: "The Bar", note: "Twenty-plus pours" },
  { label: "The Felt", note: "Championship tables" },
  { label: "The Floor", note: "Booths to bar-tops" },
  { label: "The Crowd", note: "Game-night energy" },
];

const dishes = [
  { name: "Australian Ribeye", price: 1480, tag: "Signature" },
  { name: "Truffle Fries", price: 280, tag: "Sides" },
  { name: "Margherita Pizza", price: 380, tag: "Stone-baked" },
  { name: "Spaghetti Puttanesca", price: 320, tag: "Pasta" },
  { name: "Buffalo Wings", price: 320, tag: "Bar bites" },
  { name: "Sangria Pitcher", price: 1040, tag: "Bar" },
];

export default function Concept3() {
  const [selected, setSelected] = useState("fight");
  const active = occasions.find((o) => o.id === selected)!;

  return (
    <main
      className="bg-[#F8F4ED] text-[#1A1A14]"
      style={{ fontFamily: "var(--font-inter, sans-serif)" }}
    >
      {/* Top bar */}
      <header className="sticky top-0 z-30 bg-[#F8F4ED]/95 backdrop-blur border-b border-[#1A1A14]/10">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-full bg-[#1A1A14] flex items-center justify-center">
              <span className="text-[#D4B896] font-bold text-[12px]" style={{ fontFamily: "var(--font-cinzel-decorative, serif)" }}>8</span>
            </div>
            <span className="text-sm font-bold tracking-tight" style={{ fontFamily: "var(--font-space-grotesk, sans-serif)" }}>
              8 Ball Tavern<span className="text-[#7C5E3A]">.</span>
            </span>
          </Link>
          <nav className="hidden md:flex items-center gap-7 text-sm text-[#3D3528]/80">
            <a href="#tonight" className="hover:text-[#1A1A14]">Tonight</a>
            <a href="#planner" className="hover:text-[#1A1A14]">Plan a Night</a>
            <a href="#kitchen" className="hover:text-[#1A1A14]">Kitchen</a>
            <Link href="/menu" className="hover:text-[#1A1A14]">Full Menu</Link>
            <a href="#visit" className="hover:text-[#1A1A14]">Visit</a>
          </nav>
          <Link href="/" className="text-xs text-[#3D3528]/50 hover:text-[#1A1A14] flex items-center gap-1.5">
            <ArrowLeft size={14} /> Back
          </Link>
        </div>
      </header>

      {/* Hero — editorial split */}
      <section className="border-b border-[#1A1A14]/10">
        <div className="max-w-6xl mx-auto px-6 pt-20 pb-16 grid md:grid-cols-12 gap-10 items-end">
          <div className="md:col-span-7">
            <div className="text-[10px] font-bold uppercase tracking-[0.32em] text-[#7C5E3A] mb-7">
              Est. 2023 · Vanyard Hotel · Kalibo, Aklan
            </div>
            <h1
              className="text-6xl sm:text-8xl lg:text-[120px] font-bold tracking-[-0.03em] leading-[0.92]"
              style={{ fontFamily: "var(--font-space-grotesk, sans-serif)" }}
            >
              The lounge<br />
              <em className="italic font-light text-[#7C5E3A]" style={{ fontFamily: "var(--font-cormorant, serif)" }}>where the night</em><br />
              <span className="text-[#3F4D2C]">unfolds.</span>
            </h1>
          </div>
          <div className="md:col-span-5 md:pb-8">
            <p className="text-xl text-[#3D3528] leading-[1.5] mb-7 font-light" style={{ fontFamily: "var(--font-cormorant, serif)" }}>
              A modern sports lounge for grown-ups — <strong className="font-semibold not-italic">hand-cut steaks, properly built cocktails, championship pool, and the loudest cheer in town</strong> when it counts.
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href="#planner"
                className="inline-flex items-center gap-2 bg-[#1A1A14] hover:bg-[#3F4D2C] text-[#F8F4ED] px-6 py-3.5 rounded-full text-sm font-semibold transition-colors"
              >
                Plan tonight <ArrowRight size={16} />
              </a>
              <a
                href="#tonight"
                className="inline-flex items-center gap-2 text-[#1A1A14] hover:text-[#7C5E3A] px-5 py-3.5 text-sm font-semibold underline decoration-[#7C5E3A] decoration-2 underline-offset-4"
              >
                What&rsquo;s on tonight
              </a>
            </div>
          </div>
        </div>

        {/* Feature image strip — 4 mood tiles */}
        <div className="border-t border-[#1A1A14]/10">
          <div className="max-w-6xl mx-auto px-6 py-3 grid grid-cols-2 md:grid-cols-4 gap-px bg-[#1A1A14]/10">
            {photos.map((p, i) => (
              <div
                key={p.label}
                className="bg-[#F8F4ED] aspect-[4/3] relative overflow-hidden group"
                style={{
                  background: i === 0 ? "linear-gradient(135deg, #2C2418 0%, #5C4632 100%)"
                    : i === 1 ? "linear-gradient(135deg, #1F3326 0%, #3F4D2C 100%)"
                    : i === 2 ? "linear-gradient(135deg, #4A3826 0%, #7C5E3A 100%)"
                    : "linear-gradient(135deg, #1A1A14 0%, #3D3528 100%)",
                }}
              >
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(212,184,150,0.15),transparent_70%)]" />
                <div className="absolute bottom-0 left-0 right-0 p-4 text-[#F8F4ED]">
                  <div className="text-[9px] uppercase tracking-[0.2em] text-[#D4B896] font-bold mb-1">
                    {p.note}
                  </div>
                  <div className="font-bold text-lg" style={{ fontFamily: "var(--font-space-grotesk, sans-serif)" }}>
                    {p.label}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What's on tonight */}
      <section id="tonight" className="border-b border-[#1A1A14]/10">
        <div className="max-w-6xl mx-auto px-6 py-20 grid md:grid-cols-12 gap-10">
          <div className="md:col-span-4">
            <div className="text-[10px] font-bold uppercase tracking-[0.32em] text-[#7C5E3A] mb-3">
              On the calendar
            </div>
            <h2
              className="text-4xl sm:text-5xl font-bold tracking-tight leading-[1.05]"
              style={{ fontFamily: "var(--font-space-grotesk, sans-serif)" }}
            >
              Tonight at<br />
              <em className="italic font-light text-[#7C5E3A]" style={{ fontFamily: "var(--font-cormorant, serif)" }}>the Tavern.</em>
            </h2>
          </div>
          <div className="md:col-span-8 space-y-px bg-[#1A1A14]/10">
            {[
              { time: "5:00 PM", title: "Happy Hour", body: "House cocktails ₱180 · all signature pours · until 7 PM", tag: "Daily" },
              { time: "7:00 PM", title: "Dinner Service", body: "Full kitchen open · ribeye, pasta, pizza, bar bites", tag: "Daily" },
              { time: "10:00 PM", title: "UFC 312 — Main Card", body: "All screens · sangria pitchers ₱950 · sports view tables prioritised", tag: "Saturday" },
            ].map((e) => (
              <div
                key={e.title}
                className="bg-[#F8F4ED] hover:bg-[#F0EADC] transition-colors p-6 grid sm:grid-cols-12 gap-4 items-baseline"
              >
                <div className="sm:col-span-2">
                  <div className="font-bold text-[#1A1A14] text-lg" style={{ fontFamily: "var(--font-space-grotesk, sans-serif)" }}>
                    {e.time}
                  </div>
                  <div className="text-[10px] uppercase tracking-[0.16em] text-[#7C5E3A] font-bold">{e.tag}</div>
                </div>
                <div className="sm:col-span-10">
                  <div className="text-xl font-bold mb-1" style={{ fontFamily: "var(--font-space-grotesk, sans-serif)" }}>
                    {e.title}
                  </div>
                  <div className="text-sm text-[#3D3528] leading-relaxed">{e.body}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Smart Game Night Planner */}
      <section
        id="planner"
        className="border-b border-[#1A1A14]/10 bg-gradient-to-br from-[#F0EADC] via-[#F8F4ED] to-[#F0EADC]"
      >
        <div className="max-w-6xl mx-auto px-6 py-20">
          <div className="grid md:grid-cols-12 gap-10 mb-12">
            <div className="md:col-span-7">
              <div className="text-[10px] font-bold uppercase tracking-[0.32em] text-[#7C5E3A] mb-3 flex items-center gap-2">
                <Sparkles size={13} /> Smart Game Night Planner · New
              </div>
              <h2
                className="text-5xl sm:text-6xl font-bold tracking-tight leading-[0.98]"
                style={{ fontFamily: "var(--font-space-grotesk, sans-serif)" }}
              >
                Pick the occasion.<br />
                <em className="italic font-light text-[#7C5E3A]" style={{ fontFamily: "var(--font-cormorant, serif)" }}>We build the night.</em>
              </h2>
            </div>
            <div className="md:col-span-5 text-[#3D3528] text-lg leading-relaxed">
              Tell the planner what kind of evening you want — date, barkada, fight night, birthday — and it pulls together the right table, the right meal, the right pour, and what&rsquo;s playing. One tap to lock it in.
            </div>
          </div>

          <div className="bg-white rounded-3xl border border-[#1A1A14]/10 shadow-xl shadow-[#1A1A14]/5 overflow-hidden grid md:grid-cols-12">
            {/* Occasion picker */}
            <div className="md:col-span-5 bg-[#1A1A14] p-7 text-[#F8F4ED]">
              <div className="text-[10px] font-bold uppercase tracking-[0.24em] text-[#D4B896] mb-4 flex items-center gap-2">
                <PartyPopper size={13} /> What&rsquo;s the occasion?
              </div>
              <div className="space-y-2.5">
                {occasions.map((o) => (
                  <button
                    key={o.id}
                    onClick={() => setSelected(o.id)}
                    className={`w-full text-left p-4 rounded-xl border transition-all ${
                      selected === o.id
                        ? "border-[#D4B896] bg-[#D4B896]/10"
                        : "border-[#F8F4ED]/15 hover:border-[#D4B896]/40"
                    }`}
                  >
                    <div className="flex items-center justify-between mb-0.5">
                      <div className="font-bold text-[#F8F4ED]" style={{ fontFamily: "var(--font-space-grotesk, sans-serif)" }}>
                        {o.label}
                      </div>
                      {selected === o.id && <Check size={16} className="text-[#D4B896]" />}
                    </div>
                    <div className="text-xs text-[#D4B896]/70 italic" style={{ fontFamily: "var(--font-cormorant, serif)" }}>
                      {o.sub}
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Plan output */}
            <div className="md:col-span-7 p-7 sm:p-9">
              <div className="text-[10px] font-bold uppercase tracking-[0.24em] text-[#7C5E3A] mb-2">
                Your evening, sorted
              </div>
              <h3 className="text-3xl font-bold mb-7 leading-tight" style={{ fontFamily: "var(--font-space-grotesk, sans-serif)" }}>
                {active.label} <em className="italic font-light text-[#7C5E3A]" style={{ fontFamily: "var(--font-cormorant, serif)" }}>— here&rsquo;s the plan.</em>
              </h3>

              <ul className="space-y-4 mb-7">
                <li className="flex items-start gap-4 pb-4 border-b border-[#1A1A14]/8">
                  <div className="w-10 h-10 rounded-full bg-[#3F4D2C]/10 text-[#3F4D2C] flex items-center justify-center shrink-0">
                    <Users size={16} />
                  </div>
                  <div>
                    <div className="text-[10px] uppercase tracking-[0.16em] text-[#7C5E3A] font-bold mb-0.5">
                      The table
                    </div>
                    <div className="font-semibold text-[#1A1A14]">{active.plan.table}</div>
                  </div>
                </li>
                <li className="flex items-start gap-4 pb-4 border-b border-[#1A1A14]/8">
                  <div className="w-10 h-10 rounded-full bg-[#7C5E3A]/15 text-[#7C5E3A] flex items-center justify-center shrink-0">
                    <Plus size={16} />
                  </div>
                  <div>
                    <div className="text-[10px] uppercase tracking-[0.16em] text-[#7C5E3A] font-bold mb-0.5">
                      From the kitchen
                    </div>
                    <div className="font-semibold text-[#1A1A14]">{active.plan.meal}</div>
                  </div>
                </li>
                <li className="flex items-start gap-4 pb-4 border-b border-[#1A1A14]/8">
                  <div className="w-10 h-10 rounded-full bg-[#7C5E3A]/15 text-[#7C5E3A] flex items-center justify-center shrink-0">
                    <Wine size={16} />
                  </div>
                  <div>
                    <div className="text-[10px] uppercase tracking-[0.16em] text-[#7C5E3A] font-bold mb-0.5">
                      The pour
                    </div>
                    <div className="font-semibold text-[#1A1A14]">{active.plan.pour}</div>
                  </div>
                </li>
                {active.plan.watching && (
                  <li className="flex items-start gap-4 pb-4 border-b border-[#1A1A14]/8">
                    <div className="w-10 h-10 rounded-full bg-[#3F4D2C]/10 text-[#3F4D2C] flex items-center justify-center shrink-0">
                      <Tv size={16} />
                    </div>
                    <div>
                      <div className="text-[10px] uppercase tracking-[0.16em] text-[#7C5E3A] font-bold mb-0.5">
                        On the screens
                      </div>
                      <div className="font-semibold text-[#1A1A14]">{active.plan.watching}</div>
                    </div>
                  </li>
                )}
              </ul>

              <div className="flex items-center justify-between mb-5 pt-2">
                <div>
                  <div className="text-[10px] uppercase tracking-[0.16em] text-[#7C5E3A] font-bold mb-1">
                    Estimated total
                  </div>
                  <div className="text-3xl font-bold" style={{ fontFamily: "var(--font-space-grotesk, sans-serif)" }}>
                    ₱{active.plan.total.toLocaleString()}
                  </div>
                </div>
                <a
                  href={`https://wa.me/63366361208?text=${encodeURIComponent(`Hi 8 Ball Tavern! I'd like to book a ${active.label} package: ${active.plan.table}, ${active.plan.meal}, ${active.plan.pour}.`)}`}
                  className="inline-flex items-center gap-2 bg-[#1A1A14] hover:bg-[#3F4D2C] text-[#F8F4ED] px-6 py-3.5 rounded-full text-sm font-semibold transition-colors"
                >
                  Lock the night in <ArrowRight size={15} />
                </a>
              </div>
              <p className="text-[11px] text-[#3D3528]/60 italic" style={{ fontFamily: "var(--font-cormorant, serif)" }}>
                Indicative pricing. Final bill depends on additions and party size — confirmed when our floor team replies.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Kitchen */}
      <section id="kitchen" className="border-b border-[#1A1A14]/10">
        <div className="max-w-6xl mx-auto px-6 py-20">
          <div className="grid md:grid-cols-12 gap-10 mb-12 items-end">
            <div className="md:col-span-7">
              <div className="text-[10px] font-bold uppercase tracking-[0.32em] text-[#7C5E3A] mb-3">
                The Kitchen
              </div>
              <h2
                className="text-5xl sm:text-6xl font-bold tracking-tight leading-[1.0]"
                style={{ fontFamily: "var(--font-space-grotesk, sans-serif)" }}
              >
                Hand-cut, slow-built,<br />
                <em className="italic font-light text-[#7C5E3A]" style={{ fontFamily: "var(--font-cormorant, serif)" }}>worth every minute.</em>
              </h2>
            </div>
            <div className="md:col-span-5 text-[#3D3528] text-base leading-relaxed">
              From the steaks to the sangria, every plate and pour is built in-house — no shortcuts, no pre-mix, no apologies.
            </div>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-[#1A1A14]/10">
            {dishes.map((d) => (
              <article
                key={d.name}
                className="bg-[#F8F4ED] hover:bg-[#F0EADC] transition-colors p-6 group flex flex-col justify-between min-h-[160px]"
              >
                <div>
                  <div className="text-[10px] uppercase tracking-[0.18em] text-[#7C5E3A] font-bold mb-2">
                    {d.tag}
                  </div>
                  <div
                    className="text-2xl font-bold mb-2 leading-tight"
                    style={{ fontFamily: "var(--font-space-grotesk, sans-serif)" }}
                  >
                    {d.name}
                  </div>
                </div>
                <div className="flex items-baseline justify-between mt-4">
                  <span
                    className="text-2xl font-bold text-[#7C5E3A]"
                    style={{ fontFamily: "var(--font-space-grotesk, sans-serif)" }}
                  >
                    ₱{d.price.toLocaleString()}
                  </span>
                  <ArrowUpRight size={16} className="text-[#1A1A14]/40 group-hover:text-[#7C5E3A] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Editorial pull-quote */}
      <section className="border-b border-[#1A1A14]/10 bg-[#1A1A14] text-[#F8F4ED]">
        <div className="max-w-4xl mx-auto px-6 py-24 text-center">
          <div className="text-[#D4B896] text-5xl mb-6 font-serif leading-none">&ldquo;</div>
          <p className="text-3xl sm:text-4xl font-light leading-[1.35] mb-8 italic" style={{ fontFamily: "var(--font-cormorant, serif)" }}>
            The first proper sports lounge Aklan ever needed — a real bar, a real kitchen, a real crowd. We come back every weekend.
          </p>
          <div className="inline-flex items-center gap-3 text-sm">
            <div className="w-12 h-12 rounded-full bg-[#7C5E3A] text-[#F8F4ED] flex items-center justify-center font-bold">RP</div>
            <div className="text-left">
              <div className="font-bold">Ramon &amp; Pia</div>
              <div className="text-[#D4B896]/70 text-xs uppercase tracking-wider">Regulars · Friday Pool Night</div>
            </div>
          </div>
        </div>
      </section>

      {/* Visit / CTA */}
      <section id="visit" className="bg-[#F8F4ED]">
        <div className="max-w-6xl mx-auto px-6 py-20 grid md:grid-cols-12 gap-10">
          <div className="md:col-span-7">
            <div className="text-[10px] font-bold uppercase tracking-[0.32em] text-[#7C5E3A] mb-3">
              Find Us
            </div>
            <h2
              className="text-5xl sm:text-6xl font-bold tracking-tight leading-[1.0] mb-7"
              style={{ fontFamily: "var(--font-space-grotesk, sans-serif)" }}
            >
              Pull up.<br />
              <em className="italic font-light text-[#7C5E3A]" style={{ fontFamily: "var(--font-cormorant, serif)" }}>The night is waiting.</em>
            </h2>
            <div className="space-y-4 text-[#3D3528] mb-8">
              <div className="flex items-start gap-3">
                <MapPin size={18} className="text-[#7C5E3A] mt-1 shrink-0" />
                <div>
                  <div className="font-semibold text-[#1A1A14]">GF Vanyard Hotel</div>
                  <div className="text-sm">Jaime Cardinal Sin Avenue · Kalibo, Aklan, Philippines</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Clock size={18} className="text-[#7C5E3A]" />
                <span>Open daily · Lunch &amp; dinner · Late on weekends</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone size={18} className="text-[#7C5E3A]" />
                <span className="font-semibold">+63 36 636 1208</span>
              </div>
            </div>
          </div>
          <div className="md:col-span-5">
            <div className="bg-[#1A1A14] text-[#F8F4ED] rounded-2xl p-7">
              <div className="text-[10px] font-bold uppercase tracking-[0.24em] text-[#D4B896] mb-2">
                Reach the floor team
              </div>
              <div className="text-2xl font-bold mb-6" style={{ fontFamily: "var(--font-space-grotesk, sans-serif)" }}>
                Reservations confirmed in minutes.
              </div>
              <div className="space-y-3">
                <input placeholder="Name" className="w-full px-4 py-3 rounded-lg bg-[#F8F4ED]/5 border border-[#F8F4ED]/15 focus:border-[#D4B896] focus:outline-none text-sm text-[#F8F4ED] placeholder-[#F8F4ED]/40" />
                <input placeholder="Phone or email" className="w-full px-4 py-3 rounded-lg bg-[#F8F4ED]/5 border border-[#F8F4ED]/15 focus:border-[#D4B896] focus:outline-none text-sm text-[#F8F4ED] placeholder-[#F8F4ED]/40" />
                <textarea
                  placeholder="What kind of night? (Date, barkada, fight night, birthday…)"
                  rows={3}
                  className="w-full px-4 py-3 rounded-lg bg-[#F8F4ED]/5 border border-[#F8F4ED]/15 focus:border-[#D4B896] focus:outline-none text-sm text-[#F8F4ED] placeholder-[#F8F4ED]/40 resize-none"
                />
                <a
                  href="https://wa.me/63366361208"
                  className="block text-center bg-[#D4B896] hover:bg-[#7C5E3A] hover:text-[#F8F4ED] text-[#1A1A14] py-3 rounded-lg font-semibold text-sm transition-colors"
                >
                  Send via WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-[#1A1A14] border-t border-[#F8F4ED]/10">
        <div className="max-w-6xl mx-auto px-6 py-10 flex flex-col sm:flex-row justify-between gap-4 text-xs text-[#F8F4ED]/40">
          <div>© {new Date().getFullYear()} 8 Ball Tavern · Concept 3 — Modern Sports Lounge</div>
          <div className="flex gap-5">
            <Link href="/" className="hover:text-[#D4B896]">All concepts</Link>
            <Link href="/proposal" className="hover:text-[#D4B896]">Proposal</Link>
          </div>
        </div>
      </footer>
    </main>
  );
}
