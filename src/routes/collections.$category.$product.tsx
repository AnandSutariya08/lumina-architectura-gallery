import { useState } from "react";
import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { CATEGORIES, PRODUCTS, whatsappHref } from "@/lib/lumere-data";

export const Route = createFileRoute("/collections/$category/$product")({
  loader: ({ params }) => {
    const category = CATEGORIES.find((c) => c.slug === params.category);
    if (!category) throw notFound();
    const product = PRODUCTS.find(
      (p) => p.slug === params.product && p.category === params.category,
    );
    if (!product) throw notFound();
    const related = PRODUCTS.filter(
      (p) => p.category === params.category && p.slug !== params.product,
    ).slice(0, 4);
    return { category, product, related };
  },
  head: ({ loaderData }) => {
    const p = loaderData?.product;
    const title = p
      ? `${p.name} — House of Lumere`
      : "Product — House of Lumere";
    return {
      meta: [
        { title },
        { name: "description", content: p?.description ?? "" },
        { property: "og:title", content: title },
        { property: "og:description", content: p?.description ?? "" },
        { property: "og:image", content: p?.img ?? "" },
      ],
    };
  },
  notFoundComponent: () => (
    <div className="pt-48 pb-32 text-center">
      <p className="eyebrow mb-6">404</p>
      <h1 className="font-serif text-5xl mb-8">Product not found.</h1>
      <Link
        to="/collections"
        className="link-underline text-[11px] uppercase tracking-[0.28em]"
      >
        View all collections →
      </Link>
    </div>
  ),
  component: ProductPage,
});

function ProductPage() {
  const { category, product: p, related } = Route.useLoaderData();
  const [activeImg, setActiveImg] = useState(0);
  const [activeTab, setActiveTab] = useState<
    "description" | "specifications" | "installation"
  >("description");

  const waHref = whatsappHref(p, typeof window !== "undefined" ? window.location.href : "");

  return (
    <>
      <div className="pt-28 md:pt-36">
        <div className="mx-auto max-w-[1600px] px-6 md:px-10 lg:px-14 py-6">
          <nav className="flex items-center gap-3 eyebrow">
            <Link to="/collections" className="hover:text-foreground transition-colors">
              Collections
            </Link>
            <span>/</span>
            <Link
              to="/collections/$category"
              params={{ category: category.slug }}
              className="hover:text-foreground transition-colors"
            >
              {category.title}
            </Link>
            <span>/</span>
            <span className="text-foreground">{p.name}</span>
          </nav>
        </div>

        <section className="mx-auto max-w-[1600px] px-6 md:px-10 lg:px-14 pb-24 md:pb-32">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
            <div className="lg:col-span-7">
              <div className="relative overflow-hidden bg-bone aspect-[4/5] mb-4">
                <img
                  key={activeImg}
                  src={p.images[activeImg] ?? p.img}
                  alt={p.name}
                  width={1400}
                  height={1750}
                  className="h-full w-full object-cover transition-opacity duration-700"
                />
                {p.badge && (
                  <span className="absolute top-6 left-6 eyebrow !text-[10px] bg-background px-3 py-1.5 text-foreground">
                    {p.badge}
                  </span>
                )}
              </div>
              {p.images.length > 1 && (
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  {p.images.map((img, i) => (
                    <button
                      key={i}
                      onClick={() => setActiveImg(i)}
                      className={[
                        "overflow-hidden bg-bone aspect-square transition-all duration-300",
                        activeImg === i
                          ? "ring-1 ring-foreground"
                          : "opacity-60 hover:opacity-100",
                      ].join(" ")}
                    >
                      <img
                        src={img}
                        alt={`${p.name} view ${i + 1}`}
                        className="h-full w-full object-cover"
                      />
                    </button>
                  ))}
                </div>
              )}
            </div>

            <div className="lg:col-span-5 lg:pt-4">
              <p className="eyebrow mb-4">
                {category.title} · {p.collection}
              </p>
              <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl leading-[1.04] mb-6">
                {p.name}
              </h1>
              <p className="eyebrow mb-2">Ref. {p.code}</p>
              <div className="hairline my-8" />

              <div className="flex items-baseline justify-between gap-4 mb-10">
                <span className="font-serif text-2xl md:text-3xl">{p.price}</span>
                <span className="eyebrow">{p.finish}</span>
              </div>

              <div className="space-y-4 mb-10">
                <a
                  href={waHref}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-center gap-3 w-full bg-foreground text-background py-4 px-8 text-[11px] uppercase tracking-[0.28em] hover:bg-foreground/90 transition-colors duration-500"
                >
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  Inquire on WhatsApp
                </a>
                <Link
                  to="/contact"
                  className="flex items-center justify-center gap-3 w-full border border-foreground py-4 px-8 text-[11px] uppercase tracking-[0.28em] hover:bg-foreground hover:text-background transition-colors duration-500"
                >
                  Request Specification Sheet
                </Link>
              </div>

              <div className="border-t border-border pt-8 space-y-4">
                <div className="flex items-start gap-4 text-sm">
                  <span className="eyebrow w-28 shrink-0 pt-0.5">Finish</span>
                  <span className="text-muted-foreground">{p.finish}</span>
                </div>
                <div className="flex items-start gap-4 text-sm">
                  <span className="eyebrow w-28 shrink-0 pt-0.5">Dimensions</span>
                  <span className="text-muted-foreground">{p.dimensions}</span>
                </div>
                <div className="flex items-start gap-4 text-sm">
                  <span className="eyebrow w-28 shrink-0 pt-0.5">Materials</span>
                  <span className="text-muted-foreground">{p.materials}</span>
                </div>
                <div className="flex items-start gap-4 text-sm">
                  <span className="eyebrow w-28 shrink-0 pt-0.5">Bulb</span>
                  <span className="text-muted-foreground">{p.bulbDetails}</span>
                </div>
              </div>

              {p.finishOptions.length > 1 && (
                <div className="border-t border-border pt-8 mt-6">
                  <p className="eyebrow mb-4">Finish Options</p>
                  <div className="flex flex-wrap gap-2">
                    {p.finishOptions.map((f) => (
                      <span
                        key={f}
                        className="border border-border px-4 py-2 text-[11px] uppercase tracking-[0.18em] text-muted-foreground hover:border-foreground hover:text-foreground transition-colors cursor-default"
                      >
                        {f}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>

        <section className="border-t border-border">
          <div className="mx-auto max-w-[1600px] px-6 md:px-10 lg:px-14">
            <div className="flex gap-10 border-b border-border">
              {(
                [
                  ["description", "Description"],
                  ["specifications", "Specifications"],
                  ["installation", "Installation"],
                ] as const
              ).map(([key, label]) => (
                <button
                  key={key}
                  onClick={() => setActiveTab(key)}
                  className={[
                    "py-6 text-[11px] uppercase tracking-[0.28em] border-b-2 -mb-px transition-colors duration-300",
                    activeTab === key
                      ? "border-foreground text-foreground"
                      : "border-transparent text-muted-foreground hover:text-foreground",
                  ].join(" ")}
                >
                  {label}
                </button>
              ))}
            </div>
            <div className="py-14 max-w-3xl">
              {activeTab === "description" && (
                <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                  {p.description}
                </p>
              )}
              {activeTab === "specifications" && (
                <dl className="space-y-6">
                  {[
                    ["Product Name", p.name],
                    ["Reference", p.code],
                    ["Collection", p.collection],
                    ["Dimensions", p.dimensions],
                    ["Materials", p.materials],
                    ["Finish", p.finish],
                    ["Finish Options", p.finishOptions.join(" · ")],
                    ["Bulb Details", p.bulbDetails],
                  ].map(([label, value]) => (
                    <div
                      key={label}
                      className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-8 border-b border-border pb-6"
                    >
                      <dt className="eyebrow">{label}</dt>
                      <dd className="text-sm text-muted-foreground leading-relaxed">
                        {value}
                      </dd>
                    </div>
                  ))}
                </dl>
              )}
              {activeTab === "installation" && (
                <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                  {p.installationGuide}
                </p>
              )}
            </div>
          </div>
        </section>

        {related.length > 0 && (
          <section className="bg-bone border-t border-border py-24 md:py-32">
            <div className="mx-auto max-w-[1600px] px-6 md:px-10 lg:px-14">
              <div className="mb-16">
                <p className="eyebrow mb-4">From the same collection</p>
                <h2 className="font-serif text-4xl md:text-5xl">
                  Related Pieces
                </h2>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-12">
                {related.map((r) => (
                  <Link
                    key={r.code}
                    to="/collections/$category/$product"
                    params={{ category: r.category, product: r.slug }}
                    className="group block"
                  >
                    <div className="relative overflow-hidden bg-background aspect-[4/5]">
                      <img
                        src={r.img}
                        alt={r.name}
                        loading="lazy"
                        className="h-full w-full object-cover transition-transform duration-[1500ms] ease-out group-hover:scale-[1.03]"
                      />
                    </div>
                    <div className="mt-5">
                      <p className="eyebrow mb-2">{r.collection}</p>
                      <div className="flex items-baseline justify-between gap-4">
                        <h3 className="font-serif text-xl">{r.name}</h3>
                        <span className="text-sm text-muted-foreground whitespace-nowrap">
                          {r.price}
                        </span>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}

        <div className="border-t border-border py-10">
          <div className="mx-auto max-w-[1600px] px-6 md:px-10 lg:px-14 flex flex-col md:flex-row items-center justify-between gap-6">
            <Link
              to="/collections/$category"
              params={{ category: category.slug }}
              className="link-underline text-[11px] uppercase tracking-[0.28em]"
            >
              ← Back to {category.title}
            </Link>
            <a
              href={waHref}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-4 bg-foreground text-background px-8 py-4 text-[11px] uppercase tracking-[0.28em] hover:bg-foreground/90 transition-colors duration-500"
            >
              Inquire About This Piece →
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
