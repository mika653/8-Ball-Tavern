import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowUpRight,
  CalendarCheck,
  Calendar,
  CheckCircle2,
  Check,
  Minus,
  Wine,
  Globe,
  Megaphone,
  TrendingUp,
  PenTool,
  Palette,
  Package,
  PartyPopper,
  LayoutDashboard,
} from "lucide-react";

export const metadata: Metadata = {
  title: "8 Ball Tavern — Website Proposal",
  description:
    "Proposed scope, AI integrations, timeline, and investment tiers for the new 8 Ball Tavern website.",
};

const aiFeatures = [
  {
    icon: <CalendarCheck size={20} />,
    name: "AI Reservation Concierge",
    summary:
      "Guests describe their plan — \"date night for 2\" or \"barkada for the UFC fight\" — and the concierge picks the right table (booth, bar-side, billiards-view) and confirms via WhatsApp in seconds.",
    impact:
      "Replaces back-and-forth DMs. Captures reservations after hours, including big-game weekends when calls go unanswered.",
  },
  {
    icon: <Wine size={20} />,
    name: "AI Drink Pairing Bartender",
    summary:
      "Diners pick a dish and the bartender suggests a cocktail, beer, or sangria pitcher to match — with a one-tap add to their reservation note.",
    impact:
      "Lifts bar attach rate without retraining staff. Turns the cocktail menu into something guests actually use, not just admire.",
  },
  {
    icon: <PartyPopper size={20} />,
    name: "AI Game Night Planner",
    summary:
      "Builds a full evening: live sports schedule, recommended billiards block, group meal package, and a sangria pitcher — bundled into a single bookable plan.",
    impact:
      "Sells the experience, not just the seat. Bigger spend per booking, longer dwell time, and a reason to return next weekend.",
  },
];

const scope = [
  {
    title: "Design",
    items: [
      "Brand-aligned design system (colours, typography, components)",
      "Full responsive UI for desktop, tablet, mobile",
      "On-site food, cocktails & ambience photo art direction",
      "AI feature interfaces",
    ],
  },
  {
    title: "Build",
    items: [
      "Next.js + Tailwind for performance",
      "CMS so your team can update menu, promos, and events without us",
      "AI integrations wired to OpenAI / Claude APIs",
      "SEO, schema markup, sitemaps, analytics",
    ],
  },
  {
    title: "Content & Launch",
    items: [
      "Rewritten food & drink copy (taste-led, not stiff)",
      "Featured promo + signature cocktail spotlights",
      "Sports schedule + events template",
      "Migration, redirects, training session",
    ],
  },
];

const timeline = [
  {
    week: "Day 0",
    phase: "Discovery & onboarding",
    deliverable:
      "Brand assets, photos, and menu info gathered (1–3 days, before the 7-day clock starts)",
  },
  {
    week: "Day 1",
    phase: "Kickoff & direction",
    deliverable:
      "Sitemap confirmed, design direction locked, content outline approved",
  },
  {
    week: "Days 2–3",
    phase: "Design",
    deliverable: "Homepage + reservation flow designs ready for sign-off",
  },
  {
    week: "Days 4–5",
    phase: "Build",
    deliverable: "Site built, content placed, mobile + tablet checked",
  },
  {
    week: "Day 6",
    phase: "QA & polish",
    deliverable: "Cross-browser checks, performance pass, SEO basics in place",
  },
  {
    week: "Day 7",
    phase: "Launch 🚀",
    deliverable: "Site goes live, you get the keys, walkthrough call done",
  },
  {
    week: "Week 2+",
    phase: "AI features layered in",
    deliverable:
      "Optional — Reservation Concierge, Drink Pairing, or Game Night Planner added live (Growth & Premium tiers)",
  },
];

const addOns = [
  {
    icon: <LayoutDashboard size={20} />,
    name: "CMS Setup",
    price: "₱2,500",
    unit: "/one-time",
    body: "Simple admin panel so your team can update menu items, prices, promos, and event posts without us. Already included in Growth and Premium — add this to Foundation if you want self-edit capability without committing to a monthly retainer.",
  },
  {
    icon: <Megaphone size={20} />,
    name: "Social Media Management",
    price: "₱3,000",
    unit: "/month",
    body: "Content calendar, post creation, and scheduling for Facebook and Instagram. Includes 8 branded posts per month — perfect for surfacing weekend specials, live sports events, and new arrivals at the bar.",
  },
  {
    icon: <TrendingUp size={20} />,
    name: "AI-Powered SEO",
    price: "₱2,500",
    unit: "/month",
    body: "Keyword research, meta tag optimisation, schema markup, and monthly ranking reports for terms like \"sports bar Kalibo\" and \"steaks Aklan\". Keeps your site climbing local Google results.",
  },
  {
    icon: <PenTool size={20} />,
    name: "Blog & Content Writing",
    price: "₱2,000",
    unit: "/month",
    body: "2 SEO-optimised articles per month — cocktail features, behind-the-bar stories, sports event recaps, or food guides. Drives organic traffic and turns the site into a real local destination.",
  },
  {
    icon: <Palette size={20} />,
    name: "Social Media Design",
    price: "₱350",
    unit: "/design",
    body: "Design-only service for individual social posts — branded graphics for promos, fight nights, and weekly specials. No scheduling or management included. Perfect if your team handles posting in-house.",
  },
];

type Cell = boolean | string;
type CompareRow = { label: string; foundation: Cell; growth: Cell; premium: Cell };
type CompareGroup = { group: string; rows: CompareRow[] };

const comparison: CompareGroup[] = [
  {
    group: "What's included",
    rows: [
      { label: "Live in 7 days", foundation: true, growth: true, premium: true },
      { label: "Pages included", foundation: "4–5", growth: "Up to 8", premium: "Up to 10" },
      { label: "Mobile-first responsive", foundation: true, growth: true, premium: true },
      { label: "Branded with your logo & colours", foundation: true, growth: true, premium: true },
      { label: "WhatsApp reservation form", foundation: true, growth: true, premium: true },
    ],
  },
  {
    group: "Design depth",
    rows: [
      { label: "Custom design polish", foundation: false, growth: "Light", premium: "Full design system" },
      { label: "Sports schedule + events template", foundation: false, growth: false, premium: true },
      { label: "Featured cocktail / signature dish spotlight", foundation: false, growth: false, premium: true },
    ],
  },
  {
    group: "Smart layers",
    rows: [
      { label: "AI integrations", foundation: false, growth: "1 feature", premium: "2 features" },
      { label: "CMS for self-editing", foundation: false, growth: true, premium: true },
    ],
  },
  {
    group: "Monthly retainer",
    rows: [
      { label: "Monthly fee", foundation: "—", growth: "₱1,500/mo", premium: "₱3,000/mo" },
      { label: "Menu / page updates per month", foundation: false, growth: "2", premium: "4" },
      { label: "Monthly performance check + insights", foundation: false, growth: false, premium: true },
      { label: "Priority support (same-day response)", foundation: false, growth: false, premium: true },
      { label: "Lock-in commitment", foundation: "None", growth: "Month-to-month", premium: "Month-to-month" },
    ],
  },
  {
    group: "Tech & support",
    rows: [
      { label: "Vercel hosting (year 1 included)", foundation: true, growth: true, premium: true },
      { label: "Basic SEO + Google Analytics", foundation: true, growth: true, premium: true },
      { label: "Revision rounds", foundation: "1", growth: "2", premium: "2" },
    ],
  },
];

const tiers = [
  {
    name: "Foundation",
    tagline: "Best for taverns and bars who just need a polished online presence.",
    price: "₱9,000",
    monthly: null,
    pillNote: "One-Time Payment",
    bullets: [
      "Mobile-first site (4–5 pages: Home, About, Menu, Reserve, Contact)",
      "Branded layout using your existing logo + colours",
      "WhatsApp reservation form",
      "Basic SEO + Google Analytics",
      "Vercel hosting (fast, free, reliable)",
      "1 round of revisions",
    ],
    bottomStrip: "No monthly fees. No lock-in.",
    bottomStripVariant: "neutral" as const,
    accent: "#94A3B8",
    highlight: false,
  },
  {
    name: "Growth",
    tagline: "Best for places that want consistency without big upfront cost.",
    price: "₱8,000",
    monthly: "₱1,500",
    pillNote: "Initial + Monthly Retainer",
    bullets: [
      "Everything in Foundation, plus:",
      "Up to 8 pages with light custom polish",
      "1 AI feature of your choice — Reservation Concierge, Drink Pairing, or Game Night Planner",
      "Simple CMS so your team can edit content",
      "Google Maps + analytics tracking",
      "2 menu / page updates per month (specials, prices, events)",
      "2 rounds of revisions",
    ],
    bottomStrip: "Includes 2 menu updates / month.",
    bottomStripVariant: "primary" as const,
    accent: "#C4935A",
    highlight: true,
  },
  {
    name: "Premium",
    tagline: "Best for taverns that want to stay active, updated, and competitive.",
    price: "₱7,000",
    monthly: "₱3,000",
    pillNote: "Initial + Monthly Retainer",
    bullets: [
      "Everything in Growth, plus:",
      "Up to 10 pages with custom design system",
      "2 AI features of your choice (from Reservation Concierge, Drink Pairing, Game Night Planner)",
      "Sports schedule + events template",
      "Signature cocktail / dish spotlight section",
      "4 menu / page updates per month",
      "Monthly performance check + insights",
      "Priority support (same-day response)",
    ],
    bottomStrip: "Priority support + monthly insights.",
    bottomStripVariant: "primary" as const,
    accent: "#0D0D0D",
    highlight: false,
  },
];

export default function ProposalPage() {
  return (
    <main
      className="bg-white text-neutral-900"
      style={{ fontFamily: "var(--font-inter, sans-serif)" }}
    >
      <header className="sticky top-0 z-30 bg-white/95 backdrop-blur border-b border-neutral-200">
        <div className="max-w-5xl mx-auto px-6 py-3 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2.5">
            <div className="w-7 h-7 rounded-full bg-[#0D0D0D] flex items-center justify-center ring-2 ring-[#C4935A]/40">
              <span className="text-[#C4935A] font-bold text-[11px]" style={{ fontFamily: "var(--font-cinzel-decorative, serif)" }}>8</span>
            </div>
            <span
              className="text-sm font-semibold text-neutral-800 hidden sm:inline tracking-wider"
              style={{ fontFamily: "var(--font-cinzel, serif)" }}
            >
              8 BALL TAVERN
            </span>
          </Link>
          <Link
            href="/"
            className="text-xs text-neutral-500 hover:text-neutral-900 transition-colors flex items-center gap-1.5"
          >
            <ArrowLeft size={14} /> Back to overview
          </Link>
        </div>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden border-b border-neutral-200 bg-gradient-to-br from-[#0D0D0D] via-[#141414] to-[#3D2A14] text-white">
        <div className="absolute inset-0 opacity-[0.04] bg-noise pointer-events-none" />
        <div className="max-w-5xl mx-auto px-6 pt-20 pb-16 relative">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#C4935A]/15 text-[#E8C07A] text-xs font-bold uppercase tracking-[0.18em] mb-6">
            Website Proposal
          </div>
          <h1
            className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.02] mb-6"
            style={{ fontFamily: "var(--font-cinzel-decorative, serif)" }}
          >
            A new digital
            <br />
            <span className="text-[#C4935A]">home for the Tavern.</span>
          </h1>
          <p className="text-lg sm:text-xl text-white/75 max-w-2xl leading-relaxed mb-8">
            Built for what guests actually want: faster reservations, clearer
            answers, and a sports lounge that feels modern, magnetic, and
            unmistakably yours.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-x-8 gap-y-4 pt-8 border-t border-white/10 text-sm">
            <div>
              <div className="text-white/50 text-xs uppercase tracking-wider mb-1">
                Delivery
              </div>
              <div className="font-semibold text-white">Live in 7 days</div>
            </div>
            <div>
              <div className="text-white/50 text-xs uppercase tracking-wider mb-1">
                Investment
              </div>
              <div className="font-semibold text-white">From ₱7,000 + retainer</div>
            </div>
            <div>
              <div className="text-white/50 text-xs uppercase tracking-wider mb-1">
                AI features
              </div>
              <div className="font-semibold text-white">Up to 2</div>
            </div>
            <div>
              <div className="text-white/50 text-xs uppercase tracking-wider mb-1">
                Validity
              </div>
              <div className="font-semibold text-white">90 days</div>
            </div>
          </div>
        </div>
      </section>

      {/* 7-Day Promise */}
      <section className="border-b border-neutral-200 bg-[#C4935A] text-[#0D0D0D]">
        <div className="max-w-5xl mx-auto px-6 py-14 sm:py-16 grid md:grid-cols-12 gap-8 items-center">
          <div className="md:col-span-5">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0D0D0D]/15 text-[#0D0D0D] text-[11px] font-bold uppercase tracking-[0.18em] mb-4">
              The Fishbone Promise
            </div>
            <div
              className="text-7xl sm:text-8xl font-bold tracking-tight leading-[0.9]"
              style={{ fontFamily: "var(--font-cinzel-decorative, serif)" }}
            >
              7 days.
            </div>
            <div
              className="text-2xl font-semibold text-[#0D0D0D]/85 mt-3"
              style={{ fontFamily: "var(--font-cinzel, serif)" }}
            >
              From kickoff to live.
            </div>
          </div>
          <div className="md:col-span-7 text-[#0D0D0D]/85 text-lg leading-relaxed space-y-4">
            <p>
              Once we&rsquo;ve gathered your assets and aligned on direction,
              your new site goes live in{" "}
              <strong className="text-[#0D0D0D]">seven calendar days</strong>.
              No drag, no &ldquo;final-final&rdquo; loop, no surprise
              extensions.
            </p>
            <p className="text-[#0D0D0D]/70 text-base">
              Discovery and onboarding (1–3 days of brand assets, photos, and
              menu info) happen <em>before</em> the 7-day clock starts, so the
              build phase stays focused. AI features in Growth and Premium tiers
              are layered in{" "}
              <strong className="text-[#0D0D0D]">after launch</strong> — the
              site is already live and earning while we add the smart layers on
              top.
            </p>
          </div>
        </div>
      </section>

      {/* Why this proposal */}
      <section className="max-w-5xl mx-auto px-6 py-16 sm:py-20">
        <div className="text-xs font-bold uppercase tracking-[0.18em] text-[#C4935A] mb-3">
          01 &mdash; Why now
        </div>
        <h2
          className="text-3xl sm:text-4xl font-bold tracking-tight mb-6"
          style={{ fontFamily: "var(--font-cinzel-decorative, serif)" }}
        >
          The next leap isn&rsquo;t bigger — it&rsquo;s smarter.
        </h2>
        <div className="grid md:grid-cols-3 gap-5 max-w-5xl">
          {[
            {
              title: "Guests expect instant reservations.",
              body: "Big-game nights, anniversaries, barkada birthdays — they shouldn't require a Messenger ping. The new site books, confirms, and remembers.",
            },
            {
              title: "AI changes the playing field.",
              body: "Most PH bars haven't moved on AI yet. A 12-month head start in Aklan is a real competitive moat — especially for tourist season.",
            },
            {
              title: "Your tavern has the story.",
              body: "Steaks, billiards, signature cocktails, live sports, and the only proper sports lounge in town — there's plenty to brag about. We just need to surface it.",
            },
          ].map((c) => (
            <div
              key={c.title}
              className="bg-neutral-50 rounded-xl border border-neutral-200 p-6"
            >
              <div
                className="font-bold text-neutral-900 mb-2"
                style={{ fontFamily: "var(--font-cinzel, serif)" }}
              >
                {c.title}
              </div>
              <div className="text-neutral-600 text-sm leading-relaxed">
                {c.body}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* AI Features */}
      <section className="bg-neutral-50 border-y border-neutral-200">
        <div className="max-w-5xl mx-auto px-6 py-16 sm:py-20">
          <div className="text-xs font-bold uppercase tracking-[0.18em] text-[#C4935A] mb-3">
            02 &mdash; AI Integrations
          </div>
          <h2
            className="text-3xl sm:text-4xl font-bold tracking-tight mb-4"
            style={{ fontFamily: "var(--font-cinzel-decorative, serif)" }}
          >
            Three AI features designed for the tavern guest.
          </h2>
          <p className="text-neutral-600 text-lg max-w-3xl mb-10 leading-relaxed">
            Each one solves a real friction point in the guest journey — and
            each runs on built-in logic, so there are no ongoing API costs.{" "}
            <strong className="text-neutral-900">Growth</strong> ships with 1
            feature of your choice;{" "}
            <strong className="text-neutral-900">Premium</strong> ships with 2.
          </p>
          <div className="grid sm:grid-cols-2 gap-4">
            {aiFeatures.map((f) => (
              <div
                key={f.name}
                className="bg-white rounded-xl border border-neutral-200 p-6 hover:border-[#C4935A]/60 transition-colors"
              >
                <div className="flex items-start gap-4">
                  <div className="shrink-0 w-11 h-11 rounded-lg bg-[#C4935A]/15 text-[#8A6838] flex items-center justify-center">
                    {f.icon}
                  </div>
                  <div className="flex-1">
                    <div
                      className="font-bold text-neutral-900 mb-1.5"
                      style={{ fontFamily: "var(--font-cinzel, serif)" }}
                    >
                      {f.name}
                    </div>
                    <p className="text-neutral-700 text-sm leading-relaxed mb-2">
                      {f.summary}
                    </p>
                    <p className="text-neutral-500 text-xs leading-relaxed italic">
                      <span className="font-semibold text-[#8A6838] not-italic">
                        Why it matters:
                      </span>{" "}
                      {f.impact}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Scope */}
      <section className="max-w-5xl mx-auto px-6 py-16 sm:py-20">
        <div className="text-xs font-bold uppercase tracking-[0.18em] text-[#C4935A] mb-3">
          03 &mdash; Scope
        </div>
        <h2
          className="text-3xl sm:text-4xl font-bold tracking-tight mb-10"
          style={{ fontFamily: "var(--font-cinzel-decorative, serif)" }}
        >
          What we&rsquo;ll deliver
        </h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-5">
          {scope.map((s) => (
            <div
              key={s.title}
              className="bg-neutral-50 rounded-xl border border-neutral-200 p-6"
            >
              <div
                className="font-bold text-neutral-900 mb-3 text-lg"
                style={{ fontFamily: "var(--font-cinzel, serif)" }}
              >
                {s.title}
              </div>
              <ul className="space-y-2">
                {s.items.map((i) => (
                  <li
                    key={i}
                    className="flex gap-2.5 text-sm text-neutral-700 leading-relaxed"
                  >
                    <CheckCircle2
                      size={16}
                      className="text-[#C4935A] shrink-0 mt-0.5"
                    />
                    <span>{i}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Timeline */}
      <section className="bg-neutral-50 border-y border-neutral-200">
        <div className="max-w-5xl mx-auto px-6 py-16 sm:py-20">
          <div className="text-xs font-bold uppercase tracking-[0.18em] text-[#C4935A] mb-3">
            04 &mdash; Timeline
          </div>
          <h2
            className="text-3xl sm:text-4xl font-bold tracking-tight mb-4"
            style={{ fontFamily: "var(--font-cinzel-decorative, serif)" }}
          >
            Seven days, start to finish
          </h2>
          <p className="text-neutral-600 text-lg max-w-3xl mb-10 leading-relaxed">
            Discovery happens before the clock starts. Once we kick off, the
            build is laser-focused on shipping by Day 7.
          </p>
          <div className="space-y-3">
            {timeline.map((t, i) => (
              <div
                key={t.phase}
                className="bg-white rounded-xl border border-neutral-200 p-5 sm:p-6 flex flex-col sm:flex-row gap-4 sm:items-center"
              >
                <div className="flex items-center gap-3 sm:w-44 shrink-0">
                  <div className="w-9 h-9 rounded-full bg-[#C4935A] text-white flex items-center justify-center text-xs font-bold shrink-0">
                    {i + 1}
                  </div>
                  <div className="text-xs font-bold uppercase tracking-[0.14em] text-neutral-500">
                    {t.week}
                  </div>
                </div>
                <div className="flex-1">
                  <div
                    className="font-bold text-neutral-900"
                    style={{ fontFamily: "var(--font-cinzel, serif)" }}
                  >
                    {t.phase}
                  </div>
                  <div className="text-sm text-neutral-600">
                    {t.deliverable}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tiers */}
      <section className="max-w-5xl mx-auto px-6 py-16 sm:py-20">
        <div className="text-xs font-bold uppercase tracking-[0.18em] text-[#C4935A] mb-3">
          05 &mdash; Investment
        </div>
        <h2
          className="text-3xl sm:text-4xl font-bold tracking-tight mb-4"
          style={{ fontFamily: "var(--font-cinzel-decorative, serif)" }}
        >
          Three ways to start
        </h2>
        <p className="text-neutral-600 text-lg max-w-3xl mb-10 leading-relaxed">
          Every tier ships in 7 days. Foundation is a clean one-time build.
          Growth and Premium pair a smaller upfront with a monthly retainer that
          keeps your site fresh — menu updates, performance insights, and
          ongoing support handled by us, month after month.
        </p>
        <div className="grid lg:grid-cols-3 gap-5">
          {tiers.map((t) => (
            <div
              key={t.name}
              className={`relative rounded-2xl border flex flex-col overflow-hidden ${
                t.highlight
                  ? "border-[#C4935A] shadow-xl shadow-[#C4935A]/15 bg-white"
                  : "border-neutral-200 bg-white"
              }`}
            >
              {t.highlight && (
                <div className="bg-[#C4935A] text-white text-[10px] font-bold uppercase tracking-[0.22em] px-3 py-2 text-center">
                  ★ Recommended
                </div>
              )}
              <div className="p-6 sm:p-7 flex flex-col flex-1">
                <div className="text-[10px] font-bold uppercase tracking-[0.22em] text-neutral-500 mb-4">
                  {t.name}
                </div>
                <div className="mb-5 pb-5 border-b border-neutral-200">
                  <div className="flex items-baseline gap-1 mb-1">
                    <span
                      className="text-4xl font-bold text-neutral-900"
                      style={{ fontFamily: "var(--font-cinzel-decorative, serif)" }}
                    >
                      {t.price}
                    </span>
                  </div>
                  {t.monthly && (
                    <div className="mb-2">
                      <span
                        className={`text-sm font-semibold ${
                          t.highlight ? "text-[#8A6838]" : "text-neutral-700"
                        }`}
                      >
                        + {t.monthly}
                      </span>
                      <span
                        className={`text-xs font-normal ${
                          t.highlight ? "text-[#8A6838]/70" : "text-neutral-500"
                        }`}
                      >
                        /month
                      </span>
                    </div>
                  )}
                  <div className="text-[11px] text-neutral-500 uppercase tracking-[0.12em]">
                    {t.pillNote}
                  </div>
                </div>
                <p className="text-sm text-neutral-600 leading-relaxed mb-6">
                  {t.tagline}
                </p>
                <ul className="space-y-2.5 flex-1 mb-6">
                  {t.bullets.map((b) => (
                    <li
                      key={b}
                      className="flex gap-2.5 text-sm text-neutral-700 leading-relaxed"
                    >
                      <CheckCircle2
                        size={16}
                        className="text-[#C4935A] shrink-0 mt-0.5"
                      />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
                <a
                  href={`mailto:hello@fishbonecreative.com?subject=8%20Ball%20Tavern%20%E2%80%94%20${encodeURIComponent(
                    t.name
                  )}%20tier`}
                  className={`inline-flex items-center justify-center gap-2 px-4 py-3 rounded-lg text-sm font-semibold transition-colors ${
                    t.highlight
                      ? "bg-[#C4935A] hover:bg-[#8A6838] text-white"
                      : "border border-neutral-300 hover:border-neutral-900 text-neutral-700 hover:text-neutral-900"
                  }`}
                >
                  Start with {t.name} <ArrowUpRight size={15} />
                </a>
              </div>
              <div
                className={`px-6 py-4 border-t ${
                  t.bottomStripVariant === "primary"
                    ? "bg-[#C4935A]/10 border-[#C4935A]/20 text-[#8A6838]"
                    : "bg-neutral-50 border-neutral-200 text-neutral-500 italic"
                }`}
              >
                <p className="text-xs font-semibold leading-relaxed">
                  {t.bottomStrip}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Side-by-side comparison */}
        <div className="mt-16">
          <div className="text-xs font-bold uppercase tracking-[0.18em] text-[#C4935A] mb-3">
            Compare side-by-side
          </div>
          <h3
            className="text-2xl sm:text-3xl font-bold tracking-tight mb-8"
            style={{ fontFamily: "var(--font-cinzel-decorative, serif)" }}
          >
            Everything in each tier, at a glance.
          </h3>

          <div className="overflow-x-auto -mx-6 px-6 sm:mx-0 sm:px-0">
            <div className="min-w-[640px] rounded-2xl border border-neutral-200 overflow-hidden">
              {/* Header row */}
              <div className="grid grid-cols-[minmax(180px,1.4fr)_1fr_1fr_1fr] bg-neutral-50 border-b border-neutral-200">
                <div className="p-4 sm:p-5"></div>
                {[
                  { name: "Foundation", price: "₱9,000", monthly: null, highlight: false },
                  { name: "Growth", price: "₱8,000", monthly: "+ ₱1,500/mo", highlight: true },
                  { name: "Premium", price: "₱7,000", monthly: "+ ₱3,000/mo", highlight: false },
                ].map((t) => (
                  <div
                    key={t.name}
                    className={`p-4 sm:p-5 text-center border-l border-neutral-200 ${
                      t.highlight ? "bg-[#C4935A]/8" : ""
                    }`}
                  >
                    {t.highlight && (
                      <div className="inline-block bg-[#C4935A] text-white text-[9px] font-bold uppercase tracking-[0.16em] px-2 py-0.5 rounded mb-2">
                        ★ Recommended
                      </div>
                    )}
                    <div
                      className={`text-sm font-bold ${
                        t.highlight ? "text-[#8A6838]" : "text-neutral-900"
                      }`}
                      style={{ fontFamily: "var(--font-cinzel, serif)" }}
                    >
                      {t.name}
                    </div>
                    <div
                      className={`text-xs mt-1 ${
                        t.highlight ? "text-[#8A6838]" : "text-neutral-500"
                      }`}
                    >
                      {t.price}
                    </div>
                    {t.monthly && (
                      <div
                        className={`text-[10px] mt-0.5 ${
                          t.highlight ? "text-[#8A6838]/80" : "text-neutral-400"
                        }`}
                      >
                        {t.monthly}
                      </div>
                    )}
                  </div>
                ))}
              </div>

              {/* Body */}
              {comparison.map((group, gi) => (
                <div key={group.group}>
                  <div
                    className={`grid grid-cols-[minmax(180px,1.4fr)_1fr_1fr_1fr] ${
                      gi === 0 ? "" : "border-t border-neutral-200"
                    }`}
                  >
                    <div className="col-span-4 px-5 py-2.5 bg-neutral-50/70 text-[10px] font-bold uppercase tracking-[0.16em] text-neutral-500">
                      {group.group}
                    </div>
                  </div>
                  {group.rows.map((row, ri) => (
                    <div
                      key={row.label}
                      className={`grid grid-cols-[minmax(180px,1.4fr)_1fr_1fr_1fr] ${
                        ri !== 0 || gi !== 0 ? "border-t border-neutral-100" : ""
                      }`}
                    >
                      <div className="px-5 py-3.5 text-sm text-neutral-700">
                        {row.label}
                      </div>
                      {(["foundation", "growth", "premium"] as const).map(
                        (tier) => {
                          const cell = row[tier];
                          const isGrowth = tier === "growth";
                          return (
                            <div
                              key={tier}
                              className={`px-4 py-3.5 text-center border-l border-neutral-100 ${
                                isGrowth ? "bg-[#C4935A]/5" : ""
                              }`}
                            >
                              {cell === true ? (
                                <Check
                                  size={18}
                                  className="mx-auto text-[#C4935A]"
                                  strokeWidth={3}
                                />
                              ) : cell === false ? (
                                <Minus
                                  size={16}
                                  className="mx-auto text-neutral-300"
                                />
                              ) : (
                                <span
                                  className={`text-xs sm:text-sm font-semibold ${
                                    isGrowth ? "text-[#8A6838]" : "text-neutral-900"
                                  }`}
                                >
                                  {cell}
                                </span>
                              )}
                            </div>
                          );
                        }
                      )}
                    </div>
                  ))}
                </div>
              ))}

              {/* CTA row */}
              <div className="grid grid-cols-[minmax(180px,1.4fr)_1fr_1fr_1fr] border-t border-neutral-200 bg-neutral-50">
                <div className="p-4 sm:p-5 text-xs font-semibold uppercase tracking-wider text-neutral-500 self-center">
                  Get started
                </div>
                {[
                  { name: "Foundation", highlight: false },
                  { name: "Growth", highlight: true },
                  { name: "Premium", highlight: false },
                ].map((t) => (
                  <div
                    key={t.name}
                    className={`p-3 sm:p-4 border-l border-neutral-200 ${
                      t.highlight ? "bg-[#C4935A]/8" : ""
                    }`}
                  >
                    <a
                      href={`mailto:hello@fishbonecreative.com?subject=8%20Ball%20Tavern%20%E2%80%94%20${encodeURIComponent(
                        t.name
                      )}%20tier`}
                      className={`block text-center text-xs font-bold uppercase tracking-wider px-3 py-2.5 rounded-lg transition-colors ${
                        t.highlight
                          ? "bg-[#C4935A] hover:bg-[#8A6838] text-white"
                          : "border border-neutral-300 hover:border-neutral-900 text-neutral-700 hover:text-neutral-900"
                      }`}
                    >
                      Choose {t.name}
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Add-ons */}
      <section className="bg-neutral-50 border-y border-neutral-200">
        <div className="max-w-5xl mx-auto px-6 py-16 sm:py-20">
          <div className="text-xs font-bold uppercase tracking-[0.18em] text-[#C4935A] mb-3">
            06 &mdash; Optional Add-ons
          </div>
          <h2
            className="text-3xl sm:text-4xl font-bold tracking-tight mb-4"
            style={{ fontFamily: "var(--font-cinzel-decorative, serif)" }}
          >
            Layer in extra firepower.
          </h2>
          <p className="text-neutral-600 text-lg max-w-3xl mb-3 leading-relaxed">
            Available across all tiers. Monthly services are billed alongside
            any retainer (cancellable with 15 days written notice); one-time
            services are billed at setup.
          </p>
          <p className="text-sm text-neutral-500 italic mb-10">
            Mix and match — pick any combination below.
          </p>

          <div className="grid sm:grid-cols-2 gap-4 mb-8">
            {addOns.map((a) => (
              <article
                key={a.name}
                className="bg-white rounded-2xl border border-neutral-200 hover:border-[#C4935A]/60 transition-colors p-6"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="shrink-0 w-11 h-11 rounded-lg bg-[#C4935A]/15 text-[#8A6838] flex items-center justify-center">
                    {a.icon}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-baseline justify-between gap-3 mb-1">
                      <h3
                        className="font-bold text-neutral-900 text-lg leading-tight"
                        style={{ fontFamily: "var(--font-cinzel, serif)" }}
                      >
                        {a.name}
                      </h3>
                      <div className="shrink-0 text-right">
                        <span
                          className="text-xl font-bold text-[#8A6838]"
                          style={{ fontFamily: "var(--font-cinzel-decorative, serif)" }}
                        >
                          {a.price}
                        </span>
                        <span className="text-xs font-normal text-[#8A6838]/80">
                          {a.unit}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <p className="text-sm text-neutral-700 leading-relaxed">
                  {a.body}
                </p>
              </article>
            ))}
          </div>

          {/* Bundle callout */}
          <div className="bg-gradient-to-br from-[#0D0D0D] to-[#3D2A14] text-white rounded-2xl p-6 sm:p-7 flex flex-col sm:flex-row sm:items-center gap-5 border border-[#C4935A]/30">
            <div className="shrink-0 w-12 h-12 rounded-xl bg-[#C4935A]/20 text-[#E8C07A] flex items-center justify-center">
              <Package size={22} />
            </div>
            <div className="flex-1">
              <div className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#E8C07A] mb-1.5">
                Bundle deal
              </div>
              <div
                className="font-bold text-lg sm:text-xl mb-1"
                style={{ fontFamily: "var(--font-cinzel, serif)" }}
              >
                Bundle the three monthly marketing services for ₱6,500/month.
              </div>
              <p className="text-sm text-white/80 leading-relaxed">
                That&rsquo;s Social Media Management + AI-Powered SEO + Blog
                Writing — together you save ₱1,000/month versus picking them
                individually. Add-ons begin after launch.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Concepts CTA */}
      <section className="max-w-5xl mx-auto px-6 pt-16 pb-20">
        <div className="bg-[#0D0D0D] text-white rounded-2xl p-8 sm:p-12 border border-[#C4935A]/20">
          <h3
            className="text-2xl sm:text-3xl font-bold tracking-tight mb-4"
            style={{ fontFamily: "var(--font-cinzel-decorative, serif)" }}
          >
            See three directions, side-by-side.
          </h3>
          <p className="text-white/80 leading-relaxed mb-6 max-w-3xl">
            We built three concept directions, each leading with a different AI
            feature so you can see how the brand could feel in different
            worlds. Open each and switch between mobile, tablet, and desktop
            views to compare.
          </p>
          <div className="grid sm:grid-cols-3 gap-3 mb-8">
            {[
              { href: "/concept-1", label: "Concept 1", sub: "Classic Pub Heritage" },
              { href: "/concept-2", label: "Concept 2", sub: "The Original" },
              { href: "/concept-3", label: "Concept 3", sub: "Modern Sports Lounge" },
            ].map((c) => (
              <Link
                key={c.href}
                href={c.href}
                className="rounded-xl bg-white/5 border border-white/10 hover:border-[#C4935A] hover:bg-white/10 transition-all p-5 group"
              >
                <div className="text-xs uppercase tracking-[0.14em] text-[#C4935A] font-bold mb-2">
                  {c.label}
                </div>
                <div
                  className="font-bold text-white text-lg group-hover:text-[#E8C07A] transition-colors"
                  style={{ fontFamily: "var(--font-cinzel, serif)" }}
                >
                  {c.sub}
                </div>
                <div className="mt-3 text-sm text-white/60 inline-flex items-center gap-1">
                  Open <ArrowUpRight size={14} />
                </div>
              </Link>
            ))}
          </div>
          <div className="flex flex-wrap gap-3">
            <a
              href="mailto:hello@fishbonecreative.com?subject=8%20Ball%20Tavern%20%E2%80%94%20Let%27s%20talk"
              className="inline-flex items-center gap-2 bg-[#C4935A] hover:bg-[#8A6838] transition-colors text-white px-5 py-3 rounded-lg text-sm font-semibold"
            >
              <Calendar size={16} /> Book a 30-min walkthrough
            </a>
            <a
              href="https://8balltavern.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border border-white/20 hover:border-white text-white transition-colors px-5 py-3 rounded-lg text-sm font-semibold"
            >
              <Globe size={16} /> Compare to current site
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
