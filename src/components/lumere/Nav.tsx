import { useEffect, useState } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import logo from "@/assets/logo.png";

const NAV: { label: string; to: string }[] = [
  { label: "Collections", to: "/collections" },
  { label: "Projects", to: "/projects" },
  { label: "About", to: "/about" },
  { label: "Journal", to: "/blog" },
  { label: "FAQ", to: "/faq" },
  { label: "Contact", to: "/contact" },
];

export function Nav() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const isHome = pathname === "/";
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    if (!isHome) return;
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [isHome]);

  const solid = !isHome || scrolled;

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
        <div className="flex h-20 items-center justify-between md:h-24">
          <Link to="/" className="flex items-center gap-3">
            <img src={logo} alt="House of Lumere" className="h-9 w-auto md:h-11" />
          </Link>

          <nav className="hidden lg:flex items-center gap-10">
            {NAV.map((n) => (
              <Link
                key={n.label}
                to={n.to}
                activeProps={{ className: "text-foreground" }}
                className={[
                  "nav-link text-[12px] uppercase tracking-[0.28em]",
                  solid ? "text-foreground/85" : "text-white/90",
                ].join(" ")}
              >
                {n.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-6">
            <a
              href="https://wa.me/000000000?text=Hello%20House%20of%20Lumere"
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
          </div>
        </div>
      </div>
    </header>
  );
}
