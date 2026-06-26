import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/lumere/PageHero";
import { useReveal } from "@/hooks/use-reveal";
import p1 from "@/assets/project-1.jpg";
import p2 from "@/assets/project-2.jpg";
import p3 from "@/assets/project-3.jpg";
import p4 from "@/assets/project-4.jpg";

const PROJECTS = [
  { title: "Maison Aurore", type: "Private Residence · Paris", year: "2024", img: p1, body: "A six-bedroom Haussmann apartment relit across three floors — including a bespoke crystal cascade above the central stair." },
  { title: "The Adler Penthouse", type: "Penthouse · New York", year: "2023", img: p2, body: "Architectural lighting study for a 6,400 sq ft penthouse on Park Avenue, with linear pendants drawn to the steel coffers." },
  { title: "Restaurant Sera", type: "Hospitality · Milan", year: "2024", img: p3, body: "Forty-two custom sconces, paired along stone-clad corridors and the chef's table — completed with Studio Marchand." },
  { title: "Villa Calanque", type: "Villa · Côte d'Azur", year: "2022", img: p4, body: "A coastal villa lit entirely in patinated brass and alabaster — including an outdoor lantern garden." },
];

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title: "Projects — House of Lumere" },
      { name: "description", content: "Selected residential, hospitality and architectural projects lit by House of Lumere." },
      { property: "og:title", content: "Projects — House of Lumere" },
      { property: "og:description", content: "A portfolio of residences, penthouses, hotels and ateliers shaped by our lighting." },
    ],
  }),
  component: ProjectsPage,
});

function ProjectsPage() {
  const ref = useReveal<HTMLDivElement>();
  return (
    <>
      <PageHero
        eyebrow="Selected Projects"
        title={<>In residence — <em className="not-italic text-muted-foreground">from apartments to ateliers.</em></>}
        intro="From quiet apartments to grand hospitality interiors, a portfolio of spaces shaped by our lighting — built alongside architects and interior designers across four continents."
      />

      <section className="bg-background py-24 md:py-32">
        <div ref={ref} className="reveal mx-auto max-w-[1600px] px-6 md:px-10 lg:px-14 space-y-32 md:space-y-48">
          {PROJECTS.map((p, i) => {
            const reverse = i % 2 === 1;
            return (
              <article key={p.title} className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-16 items-center">
                <div className={`md:col-span-8 ${reverse ? "md:order-2" : ""}`}>
                  <div className="overflow-hidden bg-bone aspect-[4/3]">
                    <img src={p.img} alt={p.title} loading="lazy" width={1600} height={1200} className="h-full w-full object-cover" />
                  </div>
                </div>
                <div className={`md:col-span-4 ${reverse ? "md:order-1 md:pr-10" : "md:pl-6"}`}>
                  <p className="eyebrow mb-6">{p.type} · {p.year}</p>
                  <h2 className="font-serif text-4xl md:text-5xl leading-[1.05] mb-8">{p.title}</h2>
                  <p className="text-muted-foreground text-base md:text-lg leading-relaxed">{p.body}</p>
                </div>
              </article>
            );
          })}
        </div>
      </section>
    </>
  );
}
