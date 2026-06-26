import { useReveal } from "@/hooks/use-reveal";
import { PRODUCTS, whatsappHref } from "@/lib/lumere-data";

export function BestSellers() {
  const ref = useReveal<HTMLDivElement>();
  const items = PRODUCTS.slice(0, 4);
  return (
    <section id="bestsellers" className="bg-background py-28 md:py-40">
      <div ref={ref} className="reveal mx-auto max-w-[1600px] px-6 md:px-10 lg:px-14">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-20 md:mb-28">
          <div>
            <p className="eyebrow mb-6">Most Inquired</p>
            <h2 className="font-serif text-5xl md:text-6xl lg:text-7xl">Best Sellers</h2>
          </div>
          <p className="max-w-sm text-muted-foreground text-sm md:text-base">
            A selection of pieces most often specified by interior designers and
            architects this season.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-16">
          {items.map((p) => (
            <article key={p.code} className="group">
              <div className="relative overflow-hidden bg-bone aspect-[4/5]">
                <img
                  src={p.img}
                  alt={p.name}
                  loading="lazy"
                  width={1000}
                  height={1300}
                  className="h-full w-full object-cover transition-transform duration-[1500ms] ease-out group-hover:scale-[1.03]"
                />
                <a
                  href={whatsappHref(p)}
                  target="_blank"
                  rel="noreferrer"
                  className="absolute inset-x-4 bottom-4 inline-flex items-center justify-center bg-background/95 px-5 py-3.5 text-[11px] uppercase tracking-[0.28em] text-foreground opacity-0 translate-y-3 transition-all duration-500 group-hover:opacity-100 group-hover:translate-y-0 hover:bg-foreground hover:text-background"
                >
                  Inquire on WhatsApp
                </a>
              </div>
              <div className="mt-6">
                <p className="eyebrow mb-2">{p.collection} · {p.finish}</p>
                <div className="flex items-baseline justify-between gap-4">
                  <h3 className="font-serif text-xl md:text-2xl">{p.name}</h3>
                  <span className="text-sm text-muted-foreground whitespace-nowrap">{p.price}</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
