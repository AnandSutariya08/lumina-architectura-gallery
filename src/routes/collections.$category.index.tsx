import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { PageHero } from "@/components/lumere/PageHero";
import { useReveal } from "@/hooks/use-reveal";
import { CATEGORIES, PRODUCTS, whatsappHref } from "@/lib/lumere-data";

export const Route = createFileRoute("/collections/$category/")({
  loader: ({ params }) => {
    const category = CATEGORIES.find((c) => c.slug === params.category);
    if (!category) throw notFound();
    const products = PRODUCTS.filter((p) => p.category === params.category);
    return { category, products };
  },
  head: ({ loaderData }) => {
    const c = loaderData?.category;
    const title = c ? `${c.title} — House of Lumere` : "Collection — House of Lumere";
    return {
      meta: [
        { title },
        { name: "description", content: c?.intro ?? "A House of Lumere collection." },
        { property: "og:title", content: title },
        { property: "og:description", content: c?.intro ?? "" },
        { property: "og:image", content: c?.image ?? "" },
      ],
    };
  },
  notFoundComponent: () => (
    <div className="pt-48 pb-32 text-center">
      <p className="eyebrow mb-6">404</p>
      <h1 className="font-serif text-5xl mb-8">Collection not found.</h1>
      <Link to="/collections" className="link-underline text-[11px] uppercase tracking-[0.28em]">
        View all collections →
      </Link>
    </div>
  ),
  component: CategoryPage,
});

function CategoryPage() {
  const { category, products } = Route.useLoaderData();
  const ref = useReveal<HTMLDivElement>();

  return (
    <>
      {/* Hero with category image */}
      <div className="relative h-[55vh] min-h-[420px] overflow-hidden bg-bone">
        <img
          src={category.image}
          alt={category.title}
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 px-6 md:px-10 lg:px-14 pb-14 max-w-[1600px] mx-auto">
          <p className="eyebrow text-foreground/80 mb-4">
            {category.count}
          </p>
          <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl max-w-4xl leading-[1.02]">
            {category.title}
          </h1>
          <p className="mt-5 max-w-xl text-muted-foreground text-base md:text-lg leading-relaxed">
            {category.intro}
          </p>
        </div>
      </div>

      {/* Breadcrumb */}
      <div className="bg-bone border-b border-border py-4">
        <div className="mx-auto max-w-[1600px] px-6 md:px-10 lg:px-14 flex items-center gap-3 text-[11px] uppercase tracking-[0.22em] text-muted-foreground">
          <Link to="/collections" className="hover:text-foreground transition-colors">
            Collections
          </Link>
          <span>/</span>
          <span className="text-foreground">{category.title}</span>
        </div>
      </div>

      {/* Products grid */}
      <section className="bg-background py-24 md:py-32">
        <div
          ref={ref}
          className="reveal mx-auto max-w-[1600px] px-6 md:px-10 lg:px-14"
        >
          {products.length === 0 ? (
            <EmptyState />
          ) : (
            <>
              {/* Intro strip */}
              <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-20">
                <div>
                  <p className="eyebrow mb-3">{category.count} available</p>
                  <h2 className="font-serif text-3xl md:text-4xl">
                    The full {category.title} collection
                  </h2>
                </div>
                <p className="max-w-sm text-muted-foreground text-sm leading-relaxed">
                  Each piece is available to order in multiple finishes.
                  All pricing on request — WhatsApp for immediate response.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-16">
                {products.map((p) => (
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
                      {p.badge && (
                        <span className="absolute top-4 left-4 eyebrow !text-[10px] bg-background px-3 py-1.5 text-foreground">
                          {p.badge}
                        </span>
                      )}
                      <div className="absolute inset-x-4 bottom-4 flex flex-col gap-2">
                        <Link
                          to="/collections/$category/$product"
                          params={{ category: p.category, product: p.slug }}
                          className="inline-flex items-center justify-center bg-background/95 px-5 py-3 text-[11px] uppercase tracking-[0.28em] text-foreground opacity-0 translate-y-3 transition-all duration-500 group-hover:opacity-100 group-hover:translate-y-0 hover:bg-foreground hover:text-background"
                        >
                          View Details
                        </Link>
                        <a
                          href={whatsappHref(p)}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center justify-center bg-foreground px-5 py-3 text-[11px] uppercase tracking-[0.28em] text-background opacity-0 translate-y-3 transition-all duration-500 delay-75 group-hover:opacity-100 group-hover:translate-y-0 hover:bg-foreground/90"
                        >
                          Inquire on WhatsApp
                        </a>
                      </div>
                    </div>
                    <div className="mt-6">
                      <p className="eyebrow mb-2">
                        {p.collection} · {p.finish}
                      </p>
                      <div className="flex items-baseline justify-between gap-4">
                        <h3 className="font-serif text-xl md:text-2xl">{p.name}</h3>
                        <span className="text-sm text-muted-foreground whitespace-nowrap">
                          {p.price}
                        </span>
                      </div>
                      <p className="text-muted-foreground text-sm mt-2 leading-relaxed line-clamp-2">
                        {p.description}
                      </p>
                    </div>
                  </article>
                ))}
              </div>
            </>
          )}

          {/* All materials + process callout */}
          <div className="mt-32 border-t border-border pt-20 grid grid-cols-1 md:grid-cols-3 gap-12">
            <div>
              <p className="eyebrow mb-4">Materials</p>
              <p className="font-serif text-2xl mb-4">Solid brass. Hand-cut crystal. Alabaster.</p>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Every piece in the {category.title} collection is hand-finished
                in one of our ateliers before delivery. No cast zinc, no electroplating.
              </p>
            </div>
            <div>
              <p className="eyebrow mb-4">Made to order</p>
              <p className="font-serif text-2xl mb-4">Built for your space.</p>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Drop height, finish and bulb configuration are customisable at order.
                Standard lead time 8–12 weeks. Expedited available on request.
              </p>
            </div>
            <div>
              <p className="eyebrow mb-4">Specification support</p>
              <p className="font-serif text-2xl mb-4">For architects and designers.</p>
              <p className="text-muted-foreground text-sm leading-relaxed">
                IES data, CAD blocks and finish samples available for trade clients.
                Contact us for your project brief.
              </p>
            </div>
          </div>

          <div className="mt-20 flex flex-col sm:flex-row items-center justify-center gap-6">
            <Link
              to="/collections"
              className="link-underline text-[11px] uppercase tracking-[0.28em]"
            >
              ← All collections
            </Link>
            <a
              href="https://wa.me/919377555555?text=Hello%20House%20of%20Lumere%2C%20I%20would%20like%20to%20receive%20the%20full%20catalogue%20and%20pricing%20guide."
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-3 bg-foreground text-background px-8 py-4 text-[11px] uppercase tracking-[0.28em] hover:bg-foreground/90 transition-colors"
            >
              Request full catalogue →
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

function EmptyState() {
  return (
    <div className="text-center py-24 max-w-xl mx-auto">
      <p className="eyebrow mb-6">Coming soon</p>
      <p className="font-serif text-3xl md:text-4xl mb-8 leading-snug">
        New pieces from this collection are being photographed for the journal.
      </p>
      <Link
        to="/contact"
        className="link-underline text-[11px] uppercase tracking-[0.28em]"
      >
        Inquire for the full catalogue →
      </Link>
    </div>
  );
}
