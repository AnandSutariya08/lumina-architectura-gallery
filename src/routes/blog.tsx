import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero } from "@/components/lumere/PageHero";
import { useReveal } from "@/hooks/use-reveal";
import a from "@/assets/signature-crystal.jpg";
import b from "@/assets/signature-modern.jpg";
import c from "@/assets/about.jpg";
import d from "@/assets/project-2.jpg";
import e from "@/assets/project-4.jpg";

const POSTS = [
  { slug: "lighting-a-double-height-foyer", title: "Lighting a double-height foyer", cat: "Lighting Guides", date: "March 2026", img: a, excerpt: "Five rules we apply when drawing chandeliers for stairwells, foyers and atriums above five metres." },
  { slug: "the-return-of-alabaster", title: "The quiet return of alabaster", cat: "Interior Trends", date: "February 2026", img: b, excerpt: "Why alabaster — soft, milky, structural — is replacing frosted glass in the houses we light." },
  { slug: "in-the-atelier-jaipur", title: "In the atelier — Jaipur", cat: "Designer Interviews", date: "January 2026", img: c, excerpt: "A morning with the family of metal-spinners who finish every Lumere brass shade by hand." },
  { slug: "lighting-restaurant-sera", title: "Lighting Restaurant Sera, Milan", cat: "Project Stories", date: "December 2025", img: d, excerpt: "Forty-two sconces, three months, one chef's table — the case study behind Restaurant Sera." },
  { slug: "ceiling-installation-guide", title: "A short guide to ceiling installation", cat: "Installation", date: "November 2025", img: e, excerpt: "Boxing, plate sizes, dimming and load — the details we hand to every electrician before delivery." },
];

export const Route = createFileRoute("/blog")({
  head: () => ({
    meta: [
      { title: "Journal — House of Lumere" },
      { name: "description", content: "Interior trends, lighting guides, designer interviews and project stories from the House of Lumere atelier." },
      { property: "og:title", content: "Journal — House of Lumere" },
      { property: "og:description", content: "Slow writing on light, material and architecture." },
    ],
  }),
  component: BlogPage,
});

function BlogPage() {
  const ref = useReveal<HTMLDivElement>();
  const [feature, ...rest] = POSTS;
  return (
    <>
      <PageHero
        eyebrow="The Journal"
        title={<>Slow writing on <em className="not-italic text-muted-foreground">light, material and architecture.</em></>}
        intro="Lighting guides, interior trends, designer interviews and project stories — published monthly from the Lumere atelier."
      />

      <section className="bg-background py-24 md:py-32">
        <div ref={ref} className="reveal mx-auto max-w-[1600px] px-6 md:px-10 lg:px-14">
          <Link to="/blog" className="group block mb-24 md:mb-32 grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-16 items-center">
            <div className="md:col-span-8 overflow-hidden bg-bone aspect-[16/10]">
              <img src={feature.img} alt={feature.title} loading="lazy" className="h-full w-full object-cover transition-transform duration-[1500ms] ease-out group-hover:scale-[1.03]" />
            </div>
            <div className="md:col-span-4">
              <p className="eyebrow mb-6">{feature.cat} · {feature.date}</p>
              <h2 className="font-serif text-4xl md:text-5xl leading-[1.05] mb-6">{feature.title}</h2>
              <p className="text-muted-foreground text-base leading-relaxed mb-8">{feature.excerpt}</p>
              <span className="link-underline text-[11px] uppercase tracking-[0.28em]">Read the essay →</span>
            </div>
          </Link>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
            {rest.map((p) => (
              <Link key={p.slug} to="/blog" className="group block">
                <div className="overflow-hidden bg-bone aspect-[4/5]">
                  <img src={p.img} alt={p.title} loading="lazy" className="h-full w-full object-cover transition-transform duration-[1500ms] ease-out group-hover:scale-[1.03]" />
                </div>
                <div className="mt-6">
                  <p className="eyebrow mb-3">{p.cat} · {p.date}</p>
                  <h3 className="font-serif text-2xl leading-snug mb-3">{p.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{p.excerpt}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
