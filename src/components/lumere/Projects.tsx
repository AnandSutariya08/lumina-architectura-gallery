import { Link } from "@tanstack/react-router";
import { useReveal } from "@/hooks/use-reveal";
import p1 from "@/assets/project-1.jpg";
import p2 from "@/assets/project-2.jpg";
import p3 from "@/assets/project-3.jpg";
import p4 from "@/assets/project-4.jpg";

const PROJECTS = [
  { title: "Maison Aurore", type: "Private Residence · Paris", img: p1, tall: true },
  { title: "The Adler Penthouse", type: "Penthouse · New York", img: p2 },
  { title: "Restaurant Sera", type: "Hospitality · Milan", img: p3 },
  { title: "Villa Calanque", type: "Villa · Côte d'Azur", img: p4, tall: true },
];

export function Projects() {
  const ref = useReveal<HTMLDivElement>();
  return (
    <section id="projects" className="bg-bone py-28 md:py-40">
      <div ref={ref} className="reveal mx-auto max-w-[1600px] px-6 md:px-10 lg:px-14">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-20 md:mb-28">
          <div>
            <p className="eyebrow mb-6">Selected Projects</p>
            <h2 className="font-serif text-5xl md:text-6xl lg:text-7xl">In residence.</h2>
          </div>
          <p className="max-w-sm text-muted-foreground">
            From quiet apartments to grand hospitality interiors —
            a portfolio of spaces shaped by our lighting.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {PROJECTS.map((p, i) => (
            <Link key={p.title} to="/projects" className={`group block ${i % 2 === 1 ? "md:mt-20" : ""}`}>
              <div className={`overflow-hidden bg-background ${p.tall ? "aspect-[4/5]" : "aspect-[4/3]"}`}>
                <img src={p.img} alt={p.title} loading="lazy" width={1400} height={1750}
                  className="h-full w-full object-cover transition-transform duration-[1800ms] ease-out group-hover:scale-[1.04]" />
              </div>
              <div className="mt-5 flex items-baseline justify-between">
                <h3 className="font-serif text-2xl md:text-3xl">{p.title}</h3>
                <p className="eyebrow">{p.type}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
