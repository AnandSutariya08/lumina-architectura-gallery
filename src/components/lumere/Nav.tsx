import { useEffect, useState } from "react";
import logo from "@/assets/logo.png";

const NAV = [
  { label: "Collections", href: "#collections" },
  { label: "Signature", href: "#signature" },
  { label: "Best Sellers", href: "#bestsellers" },
  { label: "Projects", href: "#projects" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={[
        "fixed inset-x-0 top-0 z-50 transition-all duration-700 ease-out",
        scrolled
          ? "bg-background/95 backdrop-blur-md border-b border-border"
          : "bg-transparent",
      ].join(" ")}
    >
      <div className="mx-auto max-w-[1600px] px-6 md:px-10 lg:px-14">
        <div className="flex h-20 items-center justify-between md:h-24">
          <a href="#top" className="flex items-center gap-3">
            <img src={logo} alt="House of Lumere" className="h-9 w-auto md:h-11" />
          </a>

          <nav className="hidden lg:flex items-center gap-10">
            {NAV.map((n) => (
              <a
                key={n.label}
                href={n.href}
                className="nav-link text-[12px] uppercase tracking-[0.28em] text-foreground/85"
              >
                {n.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-6">
            <button
              aria-label="Search"
              className="hidden md:inline-flex text-foreground/80 hover:text-foreground transition-colors"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.25">
                <circle cx="11" cy="11" r="7" />
                <path d="m20 20-3.5-3.5" />
              </svg>
            </button>
            <a
              href="https://wa.me/000000000?text=Hello%20House%20of%20Lumere"
              target="_blank"
              rel="noreferrer"
              className="hidden md:inline-flex items-center gap-3 border border-foreground/80 px-5 py-2.5 text-[11px] uppercase tracking-[0.28em] text-foreground hover:bg-foreground hover:text-background transition-colors duration-500"
            >
              Inquire
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
