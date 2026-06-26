import { Link } from "@tanstack/react-router";
import hero from "@/assets/hero.jpg";

export function Hero() {
  return (
    <section id="top" className="relative h-[100svh] w-full overflow-hidden bg-[#1a1814]">
      <img
        src={hero}
        alt="A grand crystal chandelier suspended in a luxury double-height foyer"
        className="absolute inset-0 h-full w-full object-cover hero-zoom"
        width={1920}
        height={1280}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/10 to-black/55" />

      <div className="relative z-10 mx-auto flex h-full max-w-[1600px] flex-col justify-between px-6 pb-12 pt-32 md:px-10 md:pt-40 lg:px-14">
        <div className="max-w-3xl">
          <p className="eyebrow !text-white/75 mb-8">House of Lumere · Est. 2014</p>
          <h1 className="text-white font-serif text-[44px] leading-[1.02] sm:text-6xl md:text-7xl lg:text-[96px]">
            Illuminate<br />
            <em className="not-italic text-white/95">extraordinary</em> spaces.
          </h1>
          <p className="mt-8 max-w-xl text-white/80 text-base md:text-lg font-light leading-relaxed">
            Curated collections of luxury lighting, handcrafted for timeless residences,
            hotels and architectural interiors.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <Link
              to="/collections"
              className="inline-flex items-center gap-4 bg-white px-7 py-4 text-[11px] uppercase tracking-[0.28em] text-foreground hover:bg-white/90 transition-colors duration-500"
            >
              Explore Collection
              <span aria-hidden>→</span>
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center gap-4 border border-white/70 px-7 py-4 text-[11px] uppercase tracking-[0.28em] text-white hover:bg-white hover:text-foreground transition-colors duration-500"
            >
              Book Consultation
            </Link>
          </div>
        </div>

        <div className="flex items-end justify-between text-white/70">
          <div className="space-y-1">
            <p className="eyebrow !text-white/60">Premium lighting since 2014</p>
            <p className="text-xs md:text-sm font-light">Luxury Residential &amp; Commercial Projects</p>
          </div>
          <div className="hidden md:flex items-center gap-3 text-[11px] uppercase tracking-[0.28em]">
            <span>Scroll</span>
            <span className="block h-px w-16 bg-white/40 relative overflow-hidden">
              <span className="absolute inset-y-0 left-0 w-1/2 bg-white animate-[slide_2.4s_ease-in-out_infinite]" />
            </span>
          </div>
        </div>
      </div>

      <style>{`@keyframes slide{0%{transform:translateX(-100%)}50%{transform:translateX(100%)}100%{transform:translateX(200%)}}`}</style>
    </section>
  );
}
