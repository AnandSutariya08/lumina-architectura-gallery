import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/lumere/PageHero";
import { About } from "@/components/lumere/About";
import { Values } from "@/components/lumere/Values";
import { Testimonials } from "@/components/lumere/Testimonials";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — House of Lumere" },
      { name: "description", content: "A house devoted to light, material and silence — founded in 2014, working alongside architects and interior designers worldwide." },
      { property: "og:title", content: "About — House of Lumere" },
      { property: "og:description", content: "Founded on the idea that light is the first piece of furniture in any great room." },
    ],
  }),
  component: AboutPage,
});

const WHY = [
  { t: "Luxury finishes", d: "Solid brass, hand-cut crystal, mouth-blown glass, alabaster and stone." },
  { t: "Custom lighting", d: "Drawn to your ceiling, your stair, your room — never to a catalogue." },
  { t: "Exclusive collections", d: "Limited editions and atelier-only pieces, never resold." },
  { t: "Professional consultation", d: "Specification, drawings and finish samples for trade clients." },
  { t: "Architect support", d: "Technical files, IES data, CAD blocks and on-site visits." },
  { t: "After-sales", d: "Lifetime servicing — re-electrification, re-finishing, replacement crystal." },
];

function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="The House"
        title={<>House of Lumere — <em className="not-italic text-muted-foreground">a quiet practice of light.</em></>}
        intro="Founded in 2014, House of Lumere is a small house dedicated to architectural lighting — drawn for residences, hotels and ateliers across thirty-eight countries."
      />

      <About />

      <section className="bg-background py-24 md:py-32 border-t border-border">
        <div className="mx-auto max-w-[1400px] px-6 md:px-10 lg:px-14">
          <p className="eyebrow mb-6">Why House of Lumere</p>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl mb-16 max-w-3xl">
            Specified by people who know light.
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-16">
            {WHY.map((w, i) => (
              <div key={w.t}>
                <div className="font-serif text-3xl text-brass mb-5">{String(i + 1).padStart(2, "0")}</div>
                <div className="hairline mb-5" />
                <h3 className="font-serif text-2xl mb-3">{w.t}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed max-w-sm">{w.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Values />
      <Testimonials />
    </>
  );
}
