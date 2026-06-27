import { Link } from "@tanstack/react-router";
import logo from "@/assets/logo.png";

const COLS: { title: string; links: { label: string; to: string }[] }[] = [
  {
    title: "Collections",
    links: [
      { label: "Chandeliers", to: "/collections/chandeliers" },
      { label: "Pendants", to: "/collections/pendants" },
      { label: "Wall Sconces", to: "/collections/wall" },
      { label: "Ceiling", to: "/collections/ceiling" },
      { label: "Floor & Table", to: "/collections/floor-table" },
      { label: "Decorative", to: "/collections/decor" },
      { label: "Outdoor", to: "/collections/outdoor" },
    ],
  },
  {
    title: "House",
    links: [
      { label: "About", to: "/about" },
      { label: "Projects", to: "/projects" },
      { label: "Journal", to: "/blog" },
      { label: "FAQ", to: "/faq" },
    ],
  },
  {
    title: "Trade",
    links: [
      { label: "Contact", to: "/contact" },
      { label: "For Designers", to: "/contact" },
      { label: "For Architects", to: "/contact" },
      { label: "Showroom Visit", to: "/contact" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="bg-foreground text-background pt-24 md:pt-32 pb-10">
      <div className="mx-auto max-w-[1600px] px-6 md:px-10 lg:px-14">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-16 pb-20 border-b border-white/15">
          <div className="md:col-span-4">
            <img src={logo} alt="House of Lumere" className="h-36 w-auto invert opacity-90" />
            <p className="mt-8 max-w-sm text-white/65 text-sm leading-relaxed">
              House of Lumere — exclusive lighting and architectural fixtures,
              hand-assembled for residences, hotels and ateliers worldwide.
            </p>

            {/* Showroom address */}
            <div className="mt-8 border-t border-white/15 pt-8">
              <p className="eyebrow !text-white/40 mb-3">Showroom</p>
              <p className="text-white/80 text-sm leading-relaxed">
                House of Lumere<br />
                Surat, Gujarat — India
              </p>
              <a
                href="https://wa.me/919377555555?text=Hello%20House%20of%20Lumere%2C%20I%20would%20like%20to%20visit%20your%20showroom%20in%20Surat."
                target="_blank"
                rel="noreferrer"
                className="mt-3 inline-block text-[11px] uppercase tracking-[0.28em] text-white/50 hover:text-white transition-colors"
              >
                +91 93775 55555
              </a>
            </div>

            <form className="mt-8 flex items-center border-b border-white/30 max-w-sm">
              <input
                type="email"
                placeholder="Receive the journal"
                className="flex-1 bg-transparent py-3 text-sm text-white placeholder:text-white/50 focus:outline-none"
              />
              <button type="button" className="text-[11px] uppercase tracking-[0.28em] text-white/80 hover:text-white">
                Subscribe →
              </button>
            </form>
          </div>

          {COLS.map((c) => (
            <div key={c.title} className="md:col-span-2">
              <p className="eyebrow !text-white/55 mb-6">{c.title}</p>
              <ul className="space-y-3 text-sm text-white/85">
                {c.links.map((l) => (
                  <li key={l.label}>
                    <Link to={l.to} className="hover:text-white transition-colors">
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div className="md:col-span-2">
            <p className="eyebrow !text-white/55 mb-6">Connect</p>
            <ul className="space-y-3 text-sm text-white/85">
              {[
                { label: "Instagram", href: "#" },
                { label: "Pinterest", href: "#" },
                { label: "LinkedIn", href: "#" },
                {
                  label: "WhatsApp",
                  href: "https://wa.me/919377555555?text=Hello%20House%20of%20Lumere%2C%20I%20would%20like%20to%20make%20an%20enquiry.",
                },
              ].map((l) => (
                <li key={l.label}>
                  <a
                    href={l.href}
                    target={l.href !== "#" ? "_blank" : undefined}
                    rel="noreferrer"
                    className="hover:text-white transition-colors"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="pt-8 flex flex-col md:flex-row md:items-center md:justify-between gap-4 text-[11px] uppercase tracking-[0.28em] text-white/55">
          <p>© {new Date().getFullYear()} House of Lumere. All rights reserved.</p>
          <p className="text-white/35">Surat · Gujarat · India</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-white">Privacy</a>
            <a href="#" className="hover:text-white">Terms</a>
            <a href="#" className="hover:text-white">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
