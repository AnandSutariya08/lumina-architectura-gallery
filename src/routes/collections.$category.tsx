import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { PageHero } from "@/components/lumere/PageHero";
import { CATEGORIES, PRODUCTS, whatsappHref } from "@/lib/lumere-data";

export const Route = createFileRoute("/collections/$category")({
  loader: ({ params }) => {
    const category = CATEGORIES.find((c) => c.slug === params.category);
    if (!category) throw notFound();
    return { category };
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
  errorComponent: ({ error }) => (
    <div className="pt-48 pb-32 text-center">
      <h1 className="font-serif text-5xl mb-8">Something went wrong.</h1>
      <p className="text-muted-foreground">{error.message}</p>
    </div>
  ),
  component: CategoryPage,
});

function CategoryPage() {
  const { category } = Route.useLoaderData();
  const products = PRODUCTS.filter((p) => p.category === category.slug);

  return (
    <>
      <PageHero
        eyebrow={`Collection · ${category.count}`}
        title={category.title}
        intro={category.intro}
      />

      <section className="bg-background py-24 md:py-32">
        <div className="mx-auto max-w-[1600px] px-6 md:px-10 lg:px-14">
          {products.length === 0 ? (
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
          ) : (
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
                  </div>
                </article>
              ))}
            </div>
          )}

          <div className="mt-24 md:mt-32 text-center">
            <Link
              to="/collections"
              className="link-underline text-[11px] uppercase tracking-[0.28em]"
            >
              ← All collections
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
