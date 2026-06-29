import { useEffect, useRef, useState } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import logo from "@/assets/image_1782473633448.png";
import { CATEGORIES } from "@/lib/lumere-data";

const NAV: { label: string; to: string; hasDropdown?: boolean }[] = [
  { label: "About", to: "/about" },
  { label: "Collections", to: "/collections", hasDropdown: true },
  { label: "Projects", to: "/projects" },
  { label: "Journal", to: "/blog" },
  { label: "FAQ", to: "/faq" },
  { label: "Contact", to: "/contact" },
];

export function Nav() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const isHome = pathname === "/";
  const [scrolled, setScrolled] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isHome) return;
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [isHome]);

  useEffect(() => {
    setMobileOpen(false);
    setDropdownOpen(false);
  }, [pathname]);

  const solid = !isHome || scrolled || mobileOpen;

  return (
    <header
      className={[
        "fixed inset-x-0 top-0 z-50 transition-all duration-700 ease-out",
        solid
          ? "bg-background/95 backdrop-blur-md border-b border-border"
          : "bg-transparent",
      ].join(" ")}
    >
      <div className="mx-auto max-w-[1600px] px-6 md:px-10 lg:px-14">
        <div className="flex h-16 items-center justify-between md:h-20">
          <Link to="/" className="flex items-center gap-3 shrink-0">
            <img
              src={logo}
              alt="House of Lumere"
              className="h-[47px] w-auto md:h-[55px] transition-all duration-700"
              style={{ filter: solid ? "none" : "brightness(0) invert(1)" }}
            />
          </Link>

          <nav className="hidden lg:flex items-center gap-10">
            {NAV.map((n) =>
              n.hasDropdown ? (
                <div
                  key={n.label}
                  ref={dropdownRef}
                  className="relative"
                  onMouseEnter={() => setDropdownOpen(true)}
                  onMouseLeave={() => setDropdownOpen(false)}
                >
                  <button
                    className={[
                      "nav-link text-[12px] uppercase tracking-[0.28em] flex items-center gap-1.5 cursor-default",
                      solid ? "text-foreground/85" : "text-white/90",
                    ].join(" ")}
                  >
                    {n.label}
                    <span
                      className={[
                        "inline-block transition-transform duration-300 leading-none",
                        dropdownOpen ? "rotate-180" : "",
                      ].join(" ")}
                      style={{ fontSize: 9 }}
                    >
                      ▾
                    </span>
                  </button>

                  <div
                    className={[
                      "absolute top-full left-1/2 -translate-x-1/2 pt-5 transition-all duration-300 origin-top",
                      dropdownOpen
                        ? "opacity-100 scale-y-100 pointer-events-auto"
                        : "opacity-0 scale-y-95 pointer-events-none",
                    ].join(" ")}
                    style={{ minWidth: 220 }}
                  >
                    <div className="bg-background border border-border shadow-sm py-3">
                      <Link
                        to="/collections"
                        className="block px-6 py-3 text-[11px] uppercase tracking-[0.28em] text-muted-foreground hover:text-foreground transition-colors border-b border-border mb-2"
                      >
                        All Collections
                      </Link>
                      {CATEGORIES.map((c) => (
                        <Link
                          key={c.slug}
                          to="/collections/$category"
                          params={{ category: c.slug }}
                          className="block px-6 py-2.5 text-[11px] uppercase tracking-[0.22em] text-foreground/75 hover:text-foreground hover:bg-bone transition-colors"
                        >
                          {c.title}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                <Link
                  key={n.label}
                  to={n.to}
                  activeProps={{ className: "!text-foreground" }}
                  className={[
                    "nav-link text-[12px] uppercase tracking-[0.28em]",
                    solid ? "text-foreground/85" : "text-white/90",
                  ].join(" ")}
                >
                  {n.label}
                </Link>
              ),
            )}
          </nav>

          <div className="flex items-center gap-5">
            <button
              aria-label="Search"
              className={[
                "hidden lg:flex transition-colors duration-300",
                solid
                  ? "text-foreground/60 hover:text-foreground"
                  : "text-white/70 hover:text-white",
              ].join(" ")}
            >
              <svg
                width="17"
                height="17"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="11" cy="11" r="8" />
                <path d="m21 21-4.35-4.35" />
              </svg>
            </button>

            <a
              href="https://wa.me/919377555555?text=Hello%20House%20of%20Lumere%2C%20I%20would%20like%20to%20make%20an%20enquiry."
              target="_blank"
              rel="noreferrer"
              className={[
                "hidden md:inline-flex items-center gap-3 border px-5 py-2.5 text-[11px] uppercase tracking-[0.28em] transition-colors duration-500",
                solid
                  ? "border-foreground/80 text-foreground hover:bg-foreground hover:text-background"
                  : "border-white/80 text-white hover:bg-white hover:text-foreground",
              ].join(" ")}
            >
              Inquire
            </a>

            <button
              aria-label="Toggle menu"
              onClick={() => setMobileOpen((o) => !o)}
              className={[
                "flex lg:hidden flex-col gap-[5px] p-1 transition-colors",
                solid ? "text-foreground" : "text-white",
              ].join(" ")}
            >
              <span
                className={[
                  "block h-px w-6 bg-current transition-all duration-300",
                  mobileOpen ? "rotate-45 translate-y-[7px]" : "",
                ].join(" ")}
              />
              <span
                className={[
                  "block h-px w-6 bg-current transition-all duration-300",
                  mobileOpen ? "opacity-0" : "",
                ].join(" ")}
              />
              <span
                className={[
                  "block h-px w-6 bg-current transition-all duration-300",
                  mobileOpen ? "-rotate-45 -translate-y-[7px]" : "",
                ].join(" ")}
              />
            </button>
          </div>
        </div>
      </div>

      {mobileOpen && (
        <div className="lg:hidden border-t border-border bg-background/98 backdrop-blur-md">
          <div className="mx-auto max-w-[1600px] px-6 py-8">
            {NAV.map((n) =>
              n.hasDropdown ? (
                <div key={n.label} className="border-b border-border">
                  <Link
                    to="/collections"
                    className="block py-3 text-[12px] uppercase tracking-[0.28em] text-foreground/80 hover:text-foreground transition-colors"
                  >
                    All Collections
                  </Link>
                  {CATEGORIES.map((c) => (
                    <Link
                      key={c.slug}
                      to="/collections/$category"
                      params={{ category: c.slug }}
                      className="block py-2 pl-4 text-[11px] uppercase tracking-[0.22em] text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {c.title}
                    </Link>
                  ))}
                  <div className="pb-1" />
                </div>
              ) : (
                <Link
                  key={n.label}
                  to={n.to}
                  className="block py-3 text-[12px] uppercase tracking-[0.28em] text-foreground/80 hover:text-foreground transition-colors border-b border-border"
                >
                  {n.label}
                </Link>
              )
            )}
            <div className="pt-6">
              <a
                href="https://wa.me/919377555555?text=Hello%20House%20of%20Lumere%2C%20I%20would%20like%20to%20make%20an%20enquiry."
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-3 bg-foreground text-background px-6 py-3.5 text-[11px] uppercase tracking-[0.28em]"
              >
                WhatsApp Inquiry
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
