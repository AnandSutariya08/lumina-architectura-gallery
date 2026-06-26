import { Link } from "@tanstack/react-router";
import { useReveal } from "@/hooks/use-reveal";
import { CATEGORIES } from "@/lib/lumere-data";

export function Collections() {
  const ref = useReveal<HTMLDivElement>();
  return (
    <section id="collections" className="bg-background py-28 md:py-40">
      <div ref={ref} className="reveal mx-auto max-w-[1600px] px-6 md:px-10 lg:px-14">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-20 md:mb-28">
          <div className="max-w-2xl">
            <p className="eyebrow mb-6">Featured Collections</p>
            <h2 className="font-serif text-5xl md:text-6xl lg:text-7xl">
              Editorial collections,<br />
              <span className="text-muted-foreground italic font-light">architectural by design.</span>
            </h2>
          </div>
          <Link to="/collections" className="link-underline text-[11px] uppercase tracking-[0.28em] whitespace-nowrap">
            View all collections →
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-20 md:gap-y-28">
          {CATEGORIES.map((it, i) => (
            <Link
              key={it.slug}
              to="/collections/$category"
              params={{ category: it.slug }}
              className={`group block ${i % 2 === 1 ? "md:mt-24" : ""}`}
            >
              <div className="relative overflow-hidden bg-bone aspect-[4/5]">
                <img
                  src={it.image}
                  alt={it.title}
                  loading="lazy"
                  width={1200}
                  height={1500}
                  className="h-full w-full object-cover transition-transform duration-[1800ms] ease-out group-hover:scale-[1.04]"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-700" />
                <div className="absolute inset-0 flex items-end p-8 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <span className="eyebrow !text-white/90 bg-black/30 px-4 py-2 backdrop-blur-sm">
                    Explore Collection →
                  </span>
                </div>
              </div>
              <div className="mt-6 flex items-end justify-between">
                <div>
                  <p className="eyebrow mb-2">{it.count}</p>
                  <h3 className="font-serif text-2xl md:text-3xl">{it.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground max-w-xs">{it.short}</p>
                </div>
                <span className="text-[11px] uppercase tracking-[0.28em] text-foreground/70 transition-transform duration-500 group-hover:translate-x-2 whitespace-nowrap">
                  →
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
