"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { ArrowLeft } from "lucide-react";
import "./styles.css";

const cocktails: Array<[string, number]> = [
  ["Amaretto Sour", 220],
  ["Whiskey Sour", 240],
  ["Old Fashioned", 240],
  ["Mint Julep", 240],
  ["Jack Coke", 200],
  ["Cuba Libre", 200],
  ["Mojito", 240],
  ["Piña Colada", 280],
  ["Daiquiri", 240],
  ["Gin Tonic", 200],
  ["Tom Collins", 200],
  ["Negroni", 240],
  ["Margarita", 240],
  ["Frozen Margarita", 240],
  ["Tequila Sunrise", 240],
  ["Cosmopolitan", 200],
  ["Moscow Mule", 230],
  ["Blue Lagoon", 210],
  ["White Russian", 220],
  ["Black Russian", 220],
];

export default function Concept2() {
  const [navOpen, setNavOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [preloaderDone, setPreloaderDone] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    const t = setTimeout(() => setPreloaderDone(true), 3000);
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => {
      clearTimeout(t);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = navOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [navOpen]);

  function handleReserve(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") || "").trim();
    const phone = String(data.get("phone") || "").trim();
    const date = String(data.get("date") || "");
    const time = String(data.get("time") || "");
    const party = String(data.get("party") || "");
    const notes = String(data.get("notes") || "").trim();

    const dateObj = new Date(date + "T00:00:00");
    const dateStr = dateObj.toLocaleDateString("en-US", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    });
    const [h, m] = time.split(":");
    const hour = parseInt(h);
    const timeStr =
      (hour > 12 ? hour - 12 : hour || 12) +
      ":" +
      m +
      (hour >= 12 ? " PM" : " AM");

    let message = `Hi! I'd like to reserve a table at 8 Ball Tavern.\n\n`;
    message += `*Name:* ${name}\n`;
    message += `*Phone:* ${phone}\n`;
    message += `*Date:* ${dateStr}\n`;
    message += `*Time:* ${timeStr}\n`;
    message += `*Party Size:* ${party} ${party === "1" ? "person" : "people"}\n`;
    if (notes) message += `*Special Requests:* ${notes}\n`;
    message += `\nThank you!`;

    const whatsappURL =
      "https://wa.me/63366361208?text=" + encodeURIComponent(message);
    window.open(whatsappURL, "_blank");
  }

  const today = new Date().toISOString().split("T")[0];

  return (
    <div className="tp-page">
      {/* Pitch deck back-bar */}
      <div className="tp-back">
        <span className="tp-back-tag">Concept 2 — The Original</span>
        <Link href="/">
          <ArrowLeft size={11} /> Back to overview
        </Link>
      </div>

      {/* Preloader */}
      <div className={`tp-preloader${preloaderDone ? " done" : ""}`}>
        <div className="tp-preloader-surface" />
        <div className="tp-eight-wrap">
          <div className="tp-eight">
            <div className="tp-eight-circle">
              <span className="tp-eight-num">8</span>
            </div>
          </div>
          <div className="tp-eight-shadow" />
        </div>
        <div className="tp-preloader-text">
          <div className="tp-preloader-title">8 Ball Tavern</div>
          <div className="tp-preloader-sub">
            Sports Lounge • Bar &amp; Restaurant
          </div>
        </div>
        <div className="tp-preloader-line" />
      </div>

      {/* Navigation */}
      <nav className={`nav${scrolled ? " scrolled" : ""}`}>
        <a href="#hero" className="nav-logo">
          8 Ball <span>Tavern</span>
        </a>
        <ul className="nav-links">
          <li><a href="#about">About</a></li>
          <li><a href="#promos">Promos</a></li>
          <li><Link href="/menu">Menu</Link></li>
          <li><a href="#cocktails">Cocktails</a></li>
          <li><a href="#visit">Visit</a></li>
          <li><a href="#reserve">Reserve</a></li>
        </ul>
        <button
          className={`nav-toggle${navOpen ? " active" : ""}`}
          onClick={() => setNavOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          <span /><span /><span />
        </button>
      </nav>

      <div className={`nav-menu${navOpen ? " open" : ""}`}>
        <a href="#about" onClick={() => setNavOpen(false)}>About</a>
        <a href="#promos" onClick={() => setNavOpen(false)}>Promos</a>
        <Link href="/menu" onClick={() => setNavOpen(false)}>Menu</Link>
        <a href="#cocktails" onClick={() => setNavOpen(false)}>Cocktails</a>
        <a href="#visit" onClick={() => setNavOpen(false)}>Visit</a>
        <a href="#reserve" onClick={() => setNavOpen(false)}>Reserve</a>
      </div>

      {/* Hero */}
      <section className="hero" id="hero">
        <div className="hero-bg">
          <div className="hero-pattern" />
        </div>
        <div className="hero-content">
          <img
            src="/logo.jpg"
            alt="8 Ball Tavern Logo"
            className="hero-logo"
          />
          <p className="hero-tagline">
            Sports Lounge • Bar &amp; Restaurant
          </p>
          <p className="hero-location">
            Vanyard Hotel, Kalibo, Aklan • Est. 2023
          </p>
          <div className="hero-cta-group">
            <Link href="/menu" className="hero-cta">
              <span>View Our Menu</span>
            </Link>
            <a href="#reserve" className="hero-cta hero-cta-outline">
              <span>Reserve a Table</span>
            </a>
          </div>
        </div>
        <div className="hero-scroll">
          Scroll
          <div className="hero-scroll-line" />
        </div>
      </section>

      {/* About */}
      <section className="about" id="about">
        <div className="container">
          <div>
            <h2 className="section-title">The Tavern</h2>
            <p className="section-subtitle">
              Where every game night becomes legendary
            </p>
            <div className="ornament">
              <span style={{ fontSize: 6 }}>♦</span>
            </div>
          </div>
          <div className="about-grid">
            <div className="about-text">
              <p>
                Welcome to 8 Ball Tavern, Kalibo&apos;s premier destination
                where the crack of billiard balls meets the sizzle of
                hand-cut steaks and the clink of perfectly crafted cocktails.
                Nestled in the heart of Aklan, we&apos;ve created a space where
                sports, food, and community come together under one roof.
              </p>
              <p>
                From our signature Australian ribeye steaks and hand-tossed
                pizzas to our curated selection of fine whiskeys and classic
                cocktails, every detail has been considered. Whether
                you&apos;re here for game night, a casual dinner, or
                late-night drinks with friends — the Tavern always delivers.
              </p>
              <div className="about-features">
                <div className="about-feature">
                  <span className="about-feature-icon">🎱</span>
                  <h4>Billiards</h4>
                  <p>Championship tables</p>
                </div>
                <div className="about-feature">
                  <span className="about-feature-icon">🍴</span>
                  <h4>Kitchen</h4>
                  <p>Full menu daily</p>
                </div>
                <div className="about-feature">
                  <span className="about-feature-icon">🍻</span>
                  <h4>Bar</h4>
                  <p>Craft cocktails</p>
                </div>
                <div className="about-feature">
                  <span className="about-feature-icon">🏆</span>
                  <h4>Sports</h4>
                  <p>Live screenings</p>
                </div>
              </div>
            </div>
            <div className="about-img-wrap">
              <img src="/menu-cover.jpg" alt="8 Ball Tavern Menu Cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Promos */}
      <section className="promos-section" id="promos">
        <div className="container">
          <div>
            <h2 className="section-title">Promos &amp; Specials</h2>
            <p className="section-subtitle">
              Deals you don&rsquo;t want to miss
            </p>
            <div className="ornament">
              <span style={{ fontSize: 6 }}>♦</span>
            </div>
          </div>
          <div className="promos-grid">
            <div className="promo-card">
              <div className="promo-img-wrap">
                <img
                  src="/promo-pizza-pasta.jpg"
                  alt="Pizza & Pasta Combo"
                />
              </div>
              <div className="promo-info">
                <h3 className="promo-title">Pizza &amp; Pasta Combo</h3>
                <p className="promo-desc">
                  Choose from Marinara or Margherita Pizza + Aglio Olio or
                  Spag Puttanesca. Perfect for 2&ndash;3 people.
                </p>
                <div className="promo-details">
                  <span className="promo-price">₱648 only</span>
                  <span className="promo-schedule">
                    Sun&ndash;Thurs • 3:00&ndash;7:00 PM
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cocktails */}
      <section className="cocktails-section" id="cocktails">
        <div className="container">
          <div>
            <h2 className="section-title">Classic Cocktails</h2>
            <p className="section-subtitle">
              Our version of time-honoured cocktails found in every corner of
              the world
            </p>
            <div className="ornament">
              <span style={{ fontSize: 6 }}>♦</span>
            </div>
          </div>

          <div className="cocktails-marquee-wrap">
            <div className="cocktails-marquee">
              {Array.from({ length: 2 }).map((_, group) => (
                <span key={group} style={{ display: "contents" }}>
                  <span>Old Fashioned</span><span>•</span>
                  <span>Whiskey Sour</span><span>•</span>
                  <span>Mojito</span><span>•</span>
                  <span>Negroni</span><span>•</span>
                  <span>Margarita</span><span>•</span>
                  <span>Moscow Mule</span><span>•</span>
                  <span>Cosmopolitan</span><span>•</span>
                </span>
              ))}
            </div>
          </div>

          <div className="cocktails-grid">
            {cocktails.map(([name, price]) => (
              <div className="cocktail-card" key={name}>
                <span className="cocktail-name">{name}</span>
                <span className="cocktail-price">{price}</span>
              </div>
            ))}
          </div>

          <div className="cocktails-pitcher">
            <h4>Sangria Pitchers</h4>
            <div className="cocktails-pitcher-items">
              <div className="cocktails-pitcher-item">
                <span>White Sangria</span>
                <span>1,040</span>
              </div>
              <div className="cocktails-pitcher-item">
                <span>Red Sangria</span>
                <span>1,040</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Visit */}
      <section className="visit-section" id="visit">
        <div className="container">
          <div>
            <h2 className="section-title">Visit Us</h2>
            <p className="section-subtitle">
              The table is set, your game awaits
            </p>
            <div className="ornament">
              <span style={{ fontSize: 6 }}>♦</span>
            </div>
          </div>
          <div className="visit-grid">
            <div className="visit-card">
              <span className="visit-icon">📍</span>
              <h3>Location</h3>
              <p>
                GF Vanyard Hotel
                <br />
                Jaime Cardinal Sin Avenue
                <br />
                Kalibo, Aklan, Philippines
              </p>
            </div>
            <div className="visit-card">
              <span className="visit-icon">🕒</span>
              <h3>Hours</h3>
              <p>
                Open Daily
                <br />
                Lunch &amp; Dinner
              </p>
            </div>
            <div className="visit-card">
              <span className="visit-icon">📱</span>
              <h3>Connect</h3>
              <p>
                Follow us on
                <br />
                <a
                  href="https://www.facebook.com/p/8-Ball-Tavern-100090384103165/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Facebook
                </a>{" "}
                &amp;{" "}
                <a
                  href="https://www.instagram.com/8balltavern/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Instagram
                </a>
              </p>
            </div>
            <div className="visit-map">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3906.7!2d122.3697!3d11.7083!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33a59b0d5b3e0001%3A0x1!2sVanyard+Hotel+Kalibo!5e0!3m2!1sen!2sph!4v1700000000000!5m2!1sen!2sph"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="8 Ball Tavern Location"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Reservation */}
      <section className="reserve-section" id="reserve">
        <div className="container">
          <div>
            <h2 className="section-title">Reserve a Table</h2>
            <p className="section-subtitle">
              Secure your spot for a great night
            </p>
            <div className="ornament">
              <span style={{ fontSize: 6 }}>♦</span>
            </div>
          </div>
          <div className="reserve-wrap">
            <form
              ref={formRef}
              className="reserve-form"
              onSubmit={handleReserve}
            >
              <div className="reserve-row">
                <div className="reserve-field">
                  <label htmlFor="name">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Your full name"
                    required
                  />
                </div>
                <div className="reserve-field">
                  <label htmlFor="phone">Phone Number</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    placeholder="+63 9XX XXX XXXX"
                    required
                  />
                </div>
              </div>
              <div className="reserve-row reserve-row-3">
                <div className="reserve-field">
                  <label htmlFor="date">Date</label>
                  <input
                    type="date"
                    id="date"
                    name="date"
                    min={today}
                    required
                  />
                </div>
                <div className="reserve-field">
                  <label htmlFor="time">Time</label>
                  <input type="time" id="time" name="time" required />
                </div>
                <div className="reserve-field">
                  <label htmlFor="party">Party Size</label>
                  <select id="party" name="party" required defaultValue="">
                    <option value="" disabled>
                      Guests
                    </option>
                    {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((n) => (
                      <option key={n} value={n}>
                        {n} {n === 1 ? "person" : "people"}
                      </option>
                    ))}
                    <option value="10">10+ people</option>
                  </select>
                </div>
              </div>
              <div className="reserve-field">
                <label htmlFor="notes">
                  Special Requests{" "}
                  <span className="reserve-optional">(optional)</span>
                </label>
                <textarea
                  id="notes"
                  name="notes"
                  rows={3}
                  placeholder="Birthdays, dietary needs, seating preferences..."
                />
              </div>
              <button type="submit" className="reserve-submit">
                <span style={{ fontSize: 18 }}>☎</span>
                Send via WhatsApp
              </button>
              <p className="reserve-disclaimer">
                Your reservation details will be sent to our staff via
                WhatsApp for confirmation.
              </p>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <img
          src="/logo.jpg"
          alt="8 Ball Tavern"
          className="footer-logo"
        />
        <p className="footer-tagline">
          Sports Lounge • Bar &amp; Restaurant
        </p>
        <div className="footer-links">
          <a href="#about">About</a>
          <Link href="/menu">Menu</Link>
          <a href="#cocktails">Cocktails</a>
          <a href="#visit">Visit</a>
        </div>
        <div className="footer-bottom">
          <p className="footer-copy">
            © 2025 8 Ball Tavern. All Rights Reserved.
          </p>
          <p className="footer-est">Est. 2023 • Kalibo, Aklan</p>
        </div>
      </footer>
    </div>
  );
}
