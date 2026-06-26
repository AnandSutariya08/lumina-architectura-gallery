import { createFileRoute, Link } from "@tanstack/react-router";
import { useReveal } from "@/hooks/use-reveal";
import a from "@/assets/signature-crystal.jpg";
import b from "@/assets/signature-modern.jpg";
import c from "@/assets/about.jpg";
import d from "@/assets/project-2.jpg";
import e from "@/assets/project-4.jpg";
import hero from "@/assets/hero.jpg";

const POSTS = [
  {
    slug: "lighting-a-double-height-foyer",
    title: "Lighting a double-height foyer",
    cat: "Lighting Guides",
    date: "March 2026",
    readTime: "8 min read",
    img: a,
    excerpt:
      "Five rules we apply when drawing chandeliers for stairwells, foyers and atriums above five metres.",
  },
  {
    slug: "the-return-of-alabaster",
    title: "The quiet return of alabaster",
    cat: "Interior Trends",
    date: "February 2026",
    readTime: "6 min read",
    img: b,
    excerpt:
      "Why alabaster — soft, milky, structural — is replacing frosted glass in the houses we light.",
  },
  {
    slug: "in-the-atelier-jaipur",
    title: "In the atelier — Jaipur",
    cat: "Designer Interviews",
    date: "January 2026",
    readTime: "10 min read",
    img: c,
    excerpt:
      "A morning with the family of metal-spinners who finish every Lumere brass shade by hand.",
  },
  {
    slug: "lighting-restaurant-sera",
    title: "Lighting Restaurant Sera, Milan",
    cat: "Project Stories",
    date: "December 2025",
    readTime: "9 min read",
    img: d,
    excerpt:
      "Forty-two sconces, three months, one chef's table — the case study behind Restaurant Sera.",
  },
  {
    slug: "ceiling-installation-guide",
    title: "A short guide to ceiling installation",
    cat: "Installation",
    date: "November 2025",
    readTime: "7 min read",
    img: e,
    excerpt:
      "Boxing, plate sizes, dimming and load — the details we hand to every electrician before delivery.",
  },
];

const CATEGORIES = ["All", "Lighting Guides", "Interior Trends", "Designer Interviews", "Project Stories", "Installation"];

export const Route = createFileRoute("/blog/")({
  head: () => ({
    meta: [
      { title: "Journal — House of Lumere" },
      { name: "description", content: "Interior trends, lighting guides, designer interviews and project stories from the House of Lumere atelier." },
      { property: "og:title", content: "Journal — House of Lumere" },
      { property: "og:description", content: "Slow writing on light, material and architecture." },
      { property: "og:image", content: hero },
    ],
  }),
  component: BlogIndexPage,
});

function BlogIndexPage() {
  const [feature, ...rest] = POSTS;
  const heroRef = useReveal<HTMLDivElement>();
  const gridRef = useReveal<HTMLDivElement>();

  return (
    <>
      {/* Editorial header */}
      <div className="bg-bone border-b border-border pt-36 pb-16 md:pt-48 md:pb-20">
        <div className="mx-auto max-w-[1600px] px-6 md:px-10 lg:px-14">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-10">
            <div>
              <p className="eyebrow mb-6">The Journal</p>
              <h1 className="font-serif text-6xl md:text-8xl lg:text-[100px] leading-[0.95] max-w-3xl">
                Slow writing<br />
                <em className="not-italic text-muted-foreground">on light.</em>
              </h1>
            </div>
            <div className="max-w-sm">
              <p className="text-muted-foreground text-base leading-relaxed mb-6">
                Lighting guides, interior trends, designer interviews and project
                stories — published monthly from the Lumere atelier.
              </p>
              <div className="flex items-center gap-2 flex-wrap">
                {CATEGORIES.map((cat) => (
                  <span
                    key={cat}
                    className="eyebrow !text-[9px] border border-border px-3 py-1.5 hover:border-foreground hover:text-foreground transition-colors cursor-pointer"
                  >
                    {cat}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Featured essay — full bleed */}
      <div ref={heroRef} className="reveal bg-background border-b border-border">
        <div className="mx-auto max-w-[1600px] px-6 md:px-10 lg:px-14 py-16 md:py-20">
          <Link
            to="/blog/$slug"
            params={{ slug: feature.slug }}
            className="group grid grid-cols-1 lg:grid-cols-12 gap-0 lg:gap-0 overflow-hidden"
          >
            <div className="lg:col-span-8 overflow-hidden aspect-[16/9] lg:aspect-auto lg:min-h-[560px]">
              <img
                src={feature.img}
                alt={feature.title}
                className="h-full w-full object-cover transition-transform duration-[2000ms] ease-out group-hover:scale-[1.04]"
              />
            </div>
            <div className="lg:col-span-4 bg-bone flex flex-col justify-between p-8 md:p-12 lg:p-14">
              <div>
                <div className="flex items-center gap-3 mb-8">
                  <span className="inline-block bg-foreground text-background eyebrow !text-[9px] px-3 py-1.5">
                    Featured Essay
                  </span>
                  <span className="eyebrow text-muted-foreground">{feature.readTime}</span>
                </div>
                <p className="eyebrow mb-5 text-brass">{feature.cat} · {feature.date}</p>
                <h2 className="font-serif text-4xl md:text-5xl lg:text-[52px] leading-[1.05] mb-8">
                  {feature.title}
                </h2>
                <p className="text-muted-foreground text-base md:text-lg leading-relaxed mb-10">
                  {feature.excerpt}
                </p>
              </div>
              <div className="flex items-center justify-between border-t border-border pt-8">
                <span className="font-serif text-2xl italic text-muted-foreground">House of Lumere</span>
                <span className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.28em] group-hover:gap-4 transition-all duration-300">
                  Read the essay →
                </span>
              </div>
            </div>
          </Link>
        </div>
      </div>

      {/* Issue divider */}
      <div className="bg-bone py-8 border-b border-border">
        <div className="mx-auto max-w-[1600px] px-6 md:px-10 lg:px-14 flex items-center justify-between">
          <p className="eyebrow">Further reading — Issue 04, 2025–26</p>
          <div className="hidden md:block h-px flex-1 bg-border mx-8" />
          <p className="eyebrow text-muted-foreground">5 essays</p>
        </div>
      </div>

      {/* Grid of remaining articles */}
      <section className="bg-background py-20 md:py-28">
        <div
          ref={gridRef}
          className="reveal mx-auto max-w-[1600px] px-6 md:px-10 lg:px-14"
        >
          {/* Top two — large */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-border mb-px">
            {rest.slice(0, 2).map((p) => (
              <Link
                key={p.slug}
                to="/blog/$slug"
                params={{ slug: p.slug }}
                className="group block bg-background p-8 md:p-10"
              >
                <div className="overflow-hidden bg-bone aspect-[4/3] mb-8">
                  <img
                    src={p.img}
                    alt={p.title}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-[1800ms] ease-out group-hover:scale-[1.04]"
                  />
                </div>
                <p className="eyebrow mb-3 text-brass">{p.cat}</p>
                <h3 className="font-serif text-3xl md:text-4xl leading-[1.1] mb-4 group-hover:text-brass transition-colors duration-300">
                  {p.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-6">{p.excerpt}</p>
                <div className="flex items-center justify-between border-t border-border pt-6">
                  <span className="eyebrow text-muted-foreground">{p.date} · {p.readTime}</span>
                  <span className="text-[11px] uppercase tracking-[0.28em] group-hover:tracking-[0.34em] transition-all duration-300">
                    Read →
                  </span>
                </div>
              </Link>
            ))}
          </div>

          {/* Bottom two — compact horizontal list */}
          <div className="border border-border border-t-0">
            {rest.slice(2).map((p, i) => (
              <Link
                key={p.slug}
                to="/blog/$slug"
                params={{ slug: p.slug }}
                className={`group flex flex-col sm:flex-row gap-6 sm:gap-10 p-8 md:p-10 hover:bg-bone transition-colors duration-300 ${i < rest.slice(2).length - 1 ? "border-b border-border" : ""}`}
              >
                <div className="overflow-hidden bg-bone aspect-[16/9] sm:w-52 sm:flex-shrink-0 sm:aspect-[4/3]">
                  <img
                    src={p.img}
                    alt={p.title}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-[1800ms] ease-out group-hover:scale-[1.04]"
                  />
                </div>
                <div className="flex flex-col justify-center flex-1">
                  <p className="eyebrow mb-3 text-brass">{p.cat} · {p.date}</p>
                  <h3 className="font-serif text-2xl md:text-3xl leading-snug mb-3 group-hover:text-brass transition-colors duration-300">
                    {p.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed max-w-xl">{p.excerpt}</p>
                </div>
                <div className="sm:flex sm:items-center sm:flex-shrink-0">
                  <span className="text-[11px] uppercase tracking-[0.28em] whitespace-nowrap group-hover:tracking-[0.34em] transition-all duration-300">
                    Read →
                  </span>
                </div>
              </Link>
            ))}
          </div>

          {/* Newsletter strip */}
          <div className="mt-24 bg-foreground text-background p-10 md:p-14 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <div>
              <p className="eyebrow !text-background/60 mb-4">The Lumere Letter</p>
              <h3 className="font-serif text-3xl md:text-4xl">
                One essay, once a month.<br />
                <em className="not-italic text-background/60">Nothing else.</em>
              </h3>
            </div>
            <div>
              <p className="text-background/70 text-sm leading-relaxed mb-8">
                We write one piece of long-form content each month — on materials, lighting technique,
                or a project we've just completed. No promotions. No product announcements.
              </p>
              <a
                href="https://wa.me/919377555555?text=Please%20add%20me%20to%20the%20House%20of%20Lumere%20Journal%20mailing%20list."
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-3 border border-background/40 text-background px-8 py-4 text-[11px] uppercase tracking-[0.28em] hover:bg-background hover:text-foreground transition-colors duration-500"
              >
                Subscribe via WhatsApp →
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
