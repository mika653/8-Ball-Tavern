"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { ArrowLeft } from "lucide-react";
import "./styles.css";

type SimpleItem = { name: string; desc?: string; price: number | string };
type DualPriceItem = {
  name: string;
  desc?: string;
  prices: { label: string; val: number }[];
};
type Item = SimpleItem | DualPriceItem;

const APPETIZERS: Item[] = [
  { name: "Potato Chips", desc: "Deep fried homemade paper thin potatoes with mustard and ketchup", price: 220 },
  { name: "Regular Fries", desc: "Thick baton cut skin-on potatoes", price: 210 },
  { name: "Cajun Fries", desc: "Thick baton cut fries sprinkled with Cajun seasoning", price: 220 },
  { name: "Lemon Pepper Onion Rings", desc: "Panko coated onion rings with garlic aioli", price: 270 },
  { name: "Sriracha Honey Wings", desc: "8pc — drenched in butter, garlic, sriracha and honey", price: 400 },
  { name: "Spicy Lemon Coke Wings", desc: "8pc — butter, cayenne pepper, lemon, coke, garlic and honey", price: 420 },
  { name: "Hoisin Butter Wings", desc: "8pc — hoisin sauce, butter, garlic and honey", price: 410 },
  { name: "Garlic Parmesan Wings", desc: "8pc — butter, garlic and parmesan", price: 400 },
  { name: "Chicken Fingers", desc: "Panko coated chicken tenders with spicy marinara sauce", price: 360 },
  { name: "Fish and Chips", desc: "Beer-battered Mahi-Mahi with potato fries and tartar sauce", price: 420 },
  { name: "Pigs in a Blanket", desc: "6 pcs mini breakfast sausages wrapped in bacon with honey mustard", price: 480 },
  { name: "Deconstructed Nachos", desc: "Tortilla chips, jalapeños, black olives, taco beef, cheese sauce", price: 410 },
  { name: "Mushrooms Al Ajillo", desc: "Sautéed mushrooms with oregano, chili flakes in garlic & olive oil", price: 290 },
  { name: "Garlic Shrimps", desc: "Sautéed with oregano, paprika, chili in garlic & olive oil", price: 400 },
  { name: "Deep Fried Coconut Shrimps", desc: "Panko & coconut coated with sweet & spicy orange dip", price: 430 },
  { name: "Mozzarella Sticks", desc: "Panko coated cheese logs with spicy marinara", price: 410 },
  { name: "Butter Chicken Masala", desc: "Chicken breast in garam masala, cumin, cayenne, garlic, creamy tomato butter sauce", price: 390 },
];

const SANDWICHES: Item[] = [
  { name: "Pastrami on Wheat", desc: "Pastrami, sauerkraut, emmental cheese, lettuce, tomato, mayo & dijon on toasted wheat bread", price: 450 },
  { name: "4 Cheese & Caramelized Onions", desc: "Emmental, parmesan, mozzarella & cheddar with caramelized onions on toasted wheat bread", price: 320 },
  { name: "Hot Chicken Sandwich", desc: "Corn flake crusted chicken, honey sriracha, cheddar, lettuce, tomato, dill pickle & ranch on brioche", price: 350 },
];

const BURGERS: Item[] = [
  { name: "Classic Cheese Burger", desc: "Pickle, tomato, onion, lettuce & melted cheddar", prices: [{ label: "1/3 lb", val: 350 }, { label: "Sliders", val: 390 }] },
  { name: "Blue Cheese Burger", desc: "Crumbled blue cheese, onion, lettuce & tomato", prices: [{ label: "1/3 lb", val: 370 }, { label: "Sliders", val: 410 }] },
  { name: "Bacon Mushroom Melt", desc: "2 bacon strips, sautéed mushrooms & melted cheddar", prices: [{ label: "1/3 lb", val: 380 }, { label: "Sliders", val: 420 }] },
  { name: "K-Bomb", desc: "Bold kimchi slaw, gochujang mayo — smoky, spicy & unforgettable", prices: [{ label: "1/3 lb", val: 410 }, { label: "Sliders", val: 450 }] },
  { name: "Lux Burger", desc: "Mushroom truffle aioli, Gruyère, slow-caramelized onions, fresh lettuce", prices: [{ label: "1/3 lb", val: 510 }, { label: "Sliders", val: 560 }] },
  { name: "8 Ball Burger", desc: "2 bacon strips, caramelized onions, hickory smoked BBQ & double melted cheese", price: 540 },
];

const MAINS: Item[] = [
  { name: "Chicken Parmigiana", desc: "Panko coated chicken breast, marinara, parmesan & mozzarella with green salad", price: 450 },
  { name: "Curry Basil Mahi-Mahi", desc: "Pan seared with curry basil cream sauce, steamed rice, buttered beans & carrots", price: 480 },
  { name: "Soy Pineapple Mahi-Mahi", desc: "Pan seared with soy pineapple sauce, grilled pineapple, mashed potato & vegetables", price: 480 },
  { name: "Australian Ribeye Steak", desc: "Prime rib eye with herbed gravy, mashed potato & buttered french beans", price: 820 },
  { name: "Salisbury Steak", desc: "Quarter pound beef patty, herbed gravy, mashed potato & buttered vegetables", price: 450 },
  { name: "Creamy Garlic Chicken", desc: "Pan fried chicken, creamy garlic & sundried tomato sauce, mashed potato & vegetables", price: 370 },
  { name: "Sausage Platter", desc: "3 assorted grilled sausages with homemade potato chips, dijon mustard & ketchup", price: 640 },
  { name: "Wagyu Chuck Eye Steak", desc: "Pure wagyu chuck eye, herbed gravy, mashed potato & buttered french beans", price: 998 },
  { name: "Bratwurst Sauerkraut & Mash", desc: "2 grilled German pork sausages, fried onions, sauerkraut & mashed potato", price: 470 },
  { name: "French Pork Chops", desc: "Grilled bone-in pork chop, Ardennaise white sauce, mashed potato & vegetables", price: 520 },
];

const SIDES: SimpleItem[] = [
  { name: "Mashed Potato", price: 90 },
  { name: "Buttered Vegetables", price: 70 },
  { name: "Steamed Rice", price: 50 },
  { name: "Marinara Sauce", price: 50 },
  { name: "Toasted Baguette", price: 50 },
  { name: "Cheese Sauce", price: 50 },
  { name: "Taco Beef", price: 50 },
  { name: "Pico de Gallo", price: 50 },
  { name: "Tartar Sauce", price: 50 },
  { name: "Herb Gravy", price: 50 },
  { name: "Fried Egg", price: 50 },
  { name: "PCR", price: 50 },
];

const PASTA: Item[] = [
  { name: "Spaghetti Putanesca", desc: "Tomato sauce with anchovies, garlic, fresh basil, chilli, capers & olives", price: 300 },
  { name: "Cacio e Pepe", desc: "Classic Roman — emulsified parmesan cheese and black pepper", price: 300 },
  { name: "Truffle Cream & Bacon Trivelle", desc: "Fusilli in creamy mushroom sauce with truffle oil and crispy bacon", price: 400 },
  { name: "Spaghetti Bolognese", desc: "Slow-cooked Australian beef, Italian sausage, bacon, celery, carrots & sundried tomatoes", price: 390 },
  { name: "Grilled Chicken Pesto Penne", desc: "Penne in cashew, basil, garlic & parmesan sauce with grilled chicken", price: 330 },
  { name: "Creamy Salmon & Spinach", desc: "Spaghetti in cream sauce with salmon, spinach & parmesan", price: 420 },
  { name: "Salmon Aglio Olio", desc: "Garlic & olive oil with salmon, cherry tomatoes, capers & black olives", price: 390 },
  { name: "Italian Sausage Arrabbiata", desc: "Penne in spicy tomato sauce with sliced Italian sausage & parmesan", price: 400 },
  { name: "Shrimp Scampi Linguine", desc: "Shrimps in white wine, lemon, parsley, butter & garlic with grated parmesan", price: 400 },
  { name: "Pasta Nero", desc: "Scallops in garlic & olive oil, sundried tomatoes, artichoke, capers & olives", price: 420 },
  { name: "Spaghetti Seafood Marinara", desc: "Shrimps, squid & scallops in garlic & crushed tomato sauce", price: 420 },
];

const PASTA_PLATTERS: SimpleItem[] = [
  { name: "Pasta Nero Seafood / Aglio Olio", price: "1,260" },
  { name: "Spaghetti Seafood Marinara", price: "1,250" },
  { name: "Creamy Salmon & Spinach", price: "1,250" },
  { name: "Spaghetti Bolognese", price: "1,050" },
  { name: "Truffle Cream & Bacon Trivelle", price: "1,050" },
  { name: "Salmon Aglio Olio", price: "1,050" },
  { name: "Grilled Chicken Pesto Penne", price: 950 },
  { name: "Spaghetti Putanesca", price: 950 },
  { name: "Cacio e Pepe", price: 950 },
];

const PIZZA: Item[] = [
  { name: "Margherita", desc: "Mozzarella, heirloom tomato, oregano, fresh basil", price: 400 },
  { name: "Margherita Al Crudo", desc: "Margherita with prosciutto crudo strips", price: 400 },
  { name: "Pizza Verde", desc: "Baby artichokes, green olives, fresh basil, sundried tomato, pesto", price: 480 },
  { name: "Quattro Formaggi", desc: "Mozzarella, parmigiano reggiano, Danish blue cheese, emmental", price: 520 },
  { name: "Salami Picante", desc: "Spicy salami (pepperoni), mozzarella, tomato sauce", price: 560 },
  { name: "Acciughe e Capperi", desc: "Anchovies, capers, oregano, cherry tomatoes, mozzarella", price: 480 },
  { name: "Basciola", desc: "Italian sausage, button mushrooms, mozzarella", price: 480 },
  { name: "Salmone e Pesto", desc: "Salmon, mozzarella, parmesan, pesto sauce", price: 600 },
  { name: "Frutti de Mare", desc: "Shrimp, squid, mussels, scallops, mozzarella, roasted garlic", price: 650 },
  { name: "Prosciutto e Tartufo", desc: "Prosciutto crudo, truffle oil, mushroom duxelles, béchamel", price: 650 },
  { name: "Spinaci e Carciofi", desc: "Spinach, artichoke, lemon, bell pepper, béchamel", price: 560 },
  { name: "Ortolana", desc: "Zucchini, eggplant, bell peppers, mozzarella", price: 560 },
  { name: "Capricciosa", desc: "Prosciutto crudo, champignons, olives, baby artichokes", price: 650 },
  { name: "Diavola", desc: "Salami picante, mozzarella, onions, olives, fresh basil, cherry tomato", price: 650 },
  { name: "Quattro Stagioni", desc: "4 seasons — margherita, salami picante, basciola & acciughe e capperi", price: 650 },
];

function isDualPrice(item: Item): item is DualPriceItem {
  return "prices" in item;
}

function ItemRow({ item }: { item: Item }) {
  return (
    <div className="book-item">
      <div className="book-item-info">
        <div className="book-item-name">{item.name}</div>
        {item.desc && <div className="book-item-desc">{item.desc}</div>}
      </div>
      {isDualPrice(item) ? (
        <div className="book-item-prices">
          {item.prices.map((p) => (
            <div className="bp-col" key={p.label}>
              <span className="bp-label">{p.label}</span>
              <span className="bp-val">{p.val}</span>
            </div>
          ))}
        </div>
      ) : (
        <span className="book-item-price">{item.price}</span>
      )}
    </div>
  );
}

const PAGES = [
  "Appetizers",
  "Sandwiches & Burgers",
  "Mains & Sides",
  "Pasta",
  "Pizza",
];

export default function MenuPage() {
  const [currentPage, setCurrentPage] = useState(0);
  const [hintHidden, setHintHidden] = useState(false);
  const totalPages = PAGES.length;
  const touchStart = useRef<{ x: number; y: number } | null>(null);

  function goToPage(target: number) {
    if (target < 0 || target >= totalPages || target === currentPage) return;
    setHintHidden(true);
    setCurrentPage(target);
    requestAnimationFrame(() => window.scrollTo({ top: 0, behavior: "smooth" }));
  }

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "ArrowLeft") goToPage(currentPage - 1);
      if (e.key === "ArrowRight") goToPage(currentPage + 1);
    }
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  });

  function onTouchStart(e: React.TouchEvent) {
    const t = e.changedTouches[0];
    touchStart.current = { x: t.screenX, y: t.screenY };
  }
  function onTouchEnd(e: React.TouchEvent) {
    if (!touchStart.current) return;
    const t = e.changedTouches[0];
    const dx = t.screenX - touchStart.current.x;
    const dy = t.screenY - touchStart.current.y;
    if (Math.abs(dx) > 50 && Math.abs(dx) > Math.abs(dy) * 1.5) {
      if (dx < 0) goToPage(currentPage + 1);
      else goToPage(currentPage - 1);
    }
    touchStart.current = null;
  }

  return (
    <div className="tp-menu">
      <div className="tp-back">
        <span className="tp-back-tag">Concept 2 — The Original / Menu</span>
        <Link href="/concept-2">
          <ArrowLeft size={11} /> Back to site
        </Link>
      </div>

      <nav className="nav">
        <Link href="/concept-2" className="nav-logo">
          8 Ball <span>Tavern</span>
        </Link>
        <ul className="nav-links">
          <li><Link href="/concept-2">Home</Link></li>
          <li><a href="#">Menu</a></li>
          <li><Link href="/concept-2#reserve">Reserve</Link></li>
          <li><Link href="/concept-2#visit">Visit</Link></li>
        </ul>
        <button className="nav-toggle" aria-label="Menu">
          <span /><span /><span />
        </button>
      </nav>

      <section className="menu-section" id="menu">
        <div className="container">
          <div>
            <h2 className="section-title">Our Menu</h2>
            <p className="section-subtitle">
              Crafted with passion, served with pride
            </p>
            <div className="ornament">
              <span style={{ fontSize: 6 }}>♦</span>
            </div>
          </div>

          <div className="book-wrap">
            <div
              className="book"
              onTouchStart={onTouchStart}
              onTouchEnd={onTouchEnd}
            >
              <div className="book-inner">
                {/* Page 1: Appetizers */}
                <div
                  className={`book-page${currentPage === 0 ? " active" : ""}`}
                >
                  <div className="page-corner-br" />
                  <div className="page-corner-tr" />
                  <div className="page-corner-bl" />
                  <div className="page-header">
                    <h3 className="page-category">Appetizers</h3>
                    <p className="page-category-sub">To start your evening</p>
                  </div>
                  <div className="book-items">
                    {APPETIZERS.map((it) => (
                      <ItemRow key={it.name} item={it} />
                    ))}
                  </div>
                </div>

                {/* Page 2: Sandwiches + Burgers */}
                <div
                  className={`book-page${currentPage === 1 ? " active" : ""}`}
                >
                  <div className="page-corner-br" />
                  <div className="page-corner-tr" />
                  <div className="page-corner-bl" />
                  <div className="page-header">
                    <h3 className="page-category">Sandwiches</h3>
                  </div>
                  <div className="book-items">
                    {SANDWICHES.map((it) => (
                      <ItemRow key={it.name} item={it} />
                    ))}
                  </div>
                  <div className="book-subsection">
                    <div className="page-header" style={{ marginTop: 8 }}>
                      <h3 className="page-category">Burgers</h3>
                      <p className="page-category-sub">
                        Australian beef on brioche bun
                      </p>
                    </div>
                    <div className="book-items">
                      {BURGERS.map((it) => (
                        <ItemRow key={it.name} item={it} />
                      ))}
                    </div>
                  </div>
                </div>

                {/* Page 3: Mains + Sides */}
                <div
                  className={`book-page${currentPage === 2 ? " active" : ""}`}
                >
                  <div className="page-corner-br" />
                  <div className="page-corner-tr" />
                  <div className="page-corner-bl" />
                  <div className="page-header">
                    <h3 className="page-category">Mains</h3>
                    <p className="page-category-sub">The heart of the table</p>
                  </div>
                  <div className="book-items">
                    {MAINS.map((it) => (
                      <ItemRow key={it.name} item={it} />
                    ))}
                  </div>
                  <div className="book-subsection">
                    <h4 className="book-subsection-title">Sauces &amp; Sides</h4>
                    <div className="book-sides-grid">
                      {SIDES.map((it) => (
                        <ItemRow key={it.name} item={it} />
                      ))}
                    </div>
                  </div>
                </div>

                {/* Page 4: Pasta */}
                <div
                  className={`book-page${currentPage === 3 ? " active" : ""}`}
                >
                  <div className="page-corner-br" />
                  <div className="page-corner-tr" />
                  <div className="page-corner-bl" />
                  <div className="page-header">
                    <h3 className="page-category">Pasta</h3>
                    <p className="page-category-sub">
                      Handcrafted Italian tradition
                    </p>
                  </div>
                  <div className="book-items">
                    {PASTA.map((it) => (
                      <ItemRow key={it.name} item={it} />
                    ))}
                  </div>
                  <div className="book-subsection">
                    <h4 className="book-subsection-title">Pasta Platters</h4>
                    <p className="book-note">Serves 8&ndash;10 persons</p>
                    <div className="book-items">
                      {PASTA_PLATTERS.map((it) => (
                        <ItemRow key={it.name} item={it} />
                      ))}
                    </div>
                  </div>
                </div>

                {/* Page 5: Pizza */}
                <div
                  className={`book-page${currentPage === 4 ? " active" : ""}`}
                >
                  <div className="page-corner-br" />
                  <div className="page-corner-tr" />
                  <div className="page-corner-bl" />
                  <div className="page-header">
                    <h3 className="page-category">Pizza</h3>
                    <p className="page-category-sub">
                      Stone-fired, hand-tossed perfection
                    </p>
                  </div>
                  <div className="book-items">
                    {PIZZA.map((it) => (
                      <ItemRow key={it.name} item={it} />
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="book-nav">
              <button
                className="book-nav-btn"
                onClick={() => goToPage(currentPage - 1)}
                disabled={currentPage === 0}
                aria-label="Previous page"
              >
                ←
              </button>
              <div className="book-page-dots">
                {PAGES.map((_, i) => (
                  <button
                    key={i}
                    className={`book-dot${i === currentPage ? " active" : ""}`}
                    onClick={() => goToPage(i)}
                    aria-label={`Go to ${PAGES[i]}`}
                  />
                ))}
              </div>
              <button
                className="book-nav-btn"
                onClick={() => goToPage(currentPage + 1)}
                disabled={currentPage === totalPages - 1}
                aria-label="Next page"
              >
                →
              </button>
            </div>
            <div className="book-page-label">
              {PAGES[currentPage]} &mdash; Page {currentPage + 1} of{" "}
              {totalPages}
            </div>
            {!hintHidden && (
              <div className="book-swipe-hint">
                ← Swipe or tap arrows to turn pages →
              </div>
            )}
          </div>
        </div>
      </section>

      <footer className="footer">
        <img src="/logo.jpg" alt="8 Ball Tavern" className="footer-logo" />
        <p className="footer-tagline">
          Sports Lounge • Bar &amp; Restaurant
        </p>
        <div className="footer-links">
          <Link href="/concept-2">Home</Link>
          <a href="#">Menu</a>
          <Link href="/concept-2#reserve">Reserve</Link>
          <Link href="/concept-2#visit">Visit</Link>
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
