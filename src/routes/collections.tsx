import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { PageHero } from "@/components/lumere/PageHero";
import { CATEGORIES } from "@/lib/lumere-data";

export const Route = createFileRoute("/collections")({
  head: () => ({
    meta: [
      { title: "Collections — House of Lumere" },
      { name: "description", content: "Editorial collections of luxury chandeliers, pendants, sconces, ceiling lights, floor & table lamps and decorative lighting." },
      { property: "og:title", content: "Collections — House of Lumere" },
      { property: "og:description", content: "Editorial collections of luxury lighting, drawn at architectural scale." },
    ],
  }),
  component: CollectionsPage,
});

function CollectionsPage() {
  return (
    <>
      <PageHero
        eyebrow="The Collections"
        title={<>An index of <em className="not-italic text-muted-foreground">light, drawn at architectural scale.</em></>}
        intro="Seven editorial collections — from sculptural chandeliers to portable lamps. Each piece is built to order in solid brass, hand-blown glass and hand-cut crystal."
      />

      <section className="bg-background py-24 md:py-32">
        <div className="mx-auto max-w-[1600px] px-6 md:px-10 lg:px-14">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-20 md:gap-y-28">
            {CATEGORIES.map((c, i) => (
              <Link
                key={c.slug}
                to="/collections/$category"
                params={{ category: c.slug }}
                className={`group block ${i % 2 === 1 ? "md:mt-24" : ""}`}
              >
                <div className="relative overflow-hidden bg-bone aspect-[4/5]">
                  <img
                    src={c.image}
                    alt={c.title}
                    loading="lazy"
                    width={1200}
                    height={1500}
                    className="h-full w-full object-cover transition-transform duration-[1800ms] ease-out group-hover:scale-[1.04]"
                  />
                </div>
                <div className="mt-6 flex items-end justify-between">
                  <div>
                    <p className="eyebrow mb-2">{c.count}</p>
                    <h3 className="font-serif text-2xl md:text-3xl">{c.title}</h3>
                    <p className="mt-3 max-w-sm text-muted-foreground text-sm">{c.short}</p>
                  </div>
                  <span className="text-[11px] uppercase tracking-[0.28em] text-foreground/70 transition-transform duration-500 group-hover:translate-x-2 whitespace-nowrap">
                    Explore →
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

// Touch notFound to keep type-aware import in case used later
export const _unused = notFound;
