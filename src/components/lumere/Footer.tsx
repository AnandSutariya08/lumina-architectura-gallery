import logo from "@/assets/logo.png";

const COLS = [
  { title: "Collections", links: ["Chandeliers", "Pendants", "Sconces", "Floor Lamps", "Table Lamps", "Outdoor"] },
  { title: "House", links: ["About", "Projects", "Atelier", "Journal", "Press", "Careers"] },
  { title: "Trade", links: ["For Designers", "For Architects", "Specifications", "CAD & IES", "Showrooms", "Contact"] },
];

export function Footer() {
  return (
    <footer className="bg-foreground text-background pt-24 md:pt-32 pb-10">
      <div className="mx-auto max-w-[1600px] px-6 md:px-10 lg:px-14">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-16 pb-20 border-b border-white/15">
          <div className="md:col-span-4">
            <img src={logo} alt="House of Lumere" className="h-12 w-auto invert brightness-0 mix-blend-difference opacity-90" />
            <p className="mt-10 max-w-sm text-white/65 text-sm leading-relaxed">
              House of Lumere — exclusive lighting and architectural fixtures,
              hand-assembled for residences, hotels and ateliers worldwide.
            </p>
            <form className="mt-10 flex items-center border-b border-white/30 max-w-sm">
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
            <div key={c.title} className="md:col-span-2 lg:col-span-2 md:col-start-auto">
              <p className="eyebrow !text-white/55 mb-6">{c.title}</p>
              <ul className="space-y-3 text-sm text-white/85">
                {c.links.map((l) => (
                  <li key={l}>
                    <a href="#" className="hover:text-white transition-colors">{l}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div className="md:col-span-2">
            <p className="eyebrow !text-white/55 mb-6">Follow</p>
            <ul className="space-y-3 text-sm text-white/85">
              {["Instagram", "Pinterest", "LinkedIn", "WhatsApp"].map((l) => (
                <li key={l}><a href="#" className="hover:text-white transition-colors">{l}</a></li>
              ))}
            </ul>
          </div>
        </div>

        <div className="pt-8 flex flex-col md:flex-row md:items-center md:justify-between gap-4 text-[11px] uppercase tracking-[0.28em] text-white/55">
          <p>© {new Date().getFullYear()} House of Lumere. All rights reserved.</p>
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
