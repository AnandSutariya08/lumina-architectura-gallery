import { useReveal } from "@/hooks/use-reveal";
import chand from "@/assets/collection-chandeliers.jpg";
import pend from "@/assets/collection-pendants.jpg";
import wall from "@/assets/collection-wall.jpg";
import floor from "@/assets/collection-floor.jpg";

const ITEMS = [
  { title: "Luxury Chandeliers", count: "24 pieces", img: chand },
  { title: "Pendant Lighting", count: "36 pieces", img: pend },
  { title: "Wall Sconces", count: "18 pieces", img: wall },
  { title: "Floor & Table Lamps", count: "29 pieces", img: floor },
];

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
          <a href="#bestsellers" className="link-underline text-[11px] uppercase tracking-[0.28em]">
            View all collections
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-20 md:gap-y-28">
          {ITEMS.map((it, i) => (
            <a
              key={it.title}
              href="#bestsellers"
              className={`group block ${i % 2 === 1 ? "md:mt-24" : ""}`}
            >
              <div className="relative overflow-hidden bg-bone aspect-[4/5]">
                <img
                  src={it.img}
                  alt={it.title}
                  loading="lazy"
                  width={1200}
                  height={1500}
                  className="h-full w-full object-cover transition-transform duration-[1800ms] ease-out group-hover:scale-[1.04]"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-700" />
              </div>
              <div className="mt-6 flex items-end justify-between">
                <div>
                  <p className="eyebrow mb-2">{it.count}</p>
                  <h3 className="font-serif text-2xl md:text-3xl">{it.title}</h3>
                </div>
                <span className="text-[11px] uppercase tracking-[0.28em] text-foreground/70 transition-transform duration-500 group-hover:translate-x-2">
                  Explore →
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
