import { useReveal } from "@/hooks/use-reveal";

const REASONS = [
  {
    n: "01",
    title: "Luxury Finishes",
    body: "Solid brass, hand-cut crystal, mouth-blown glass, alabaster and stone. No substitutes, no shortcuts.",
  },
  {
    n: "02",
    title: "Custom Lighting",
    body: "Drawn to your ceiling, your stair, your room — never to a catalogue. Every dimension, finish and drop height tailored at order.",
  },
  {
    n: "03",
    title: "Exclusive Collections",
    body: "Limited editions and atelier-only pieces, never resold through third parties. Some collections are numbered and signed.",
  },
  {
    n: "04",
    title: "Professional Consultation",
    body: "Specification drawings, finish samples and photometric data for trade clients. Our atelier responds within one working day.",
  },
  {
    n: "05",
    title: "Architect Support",
    body: "Technical files, IES data, CAD blocks and on-site visits available. We speak the language of the drawings.",
  },
  {
    n: "06",
    title: "After-Sales Care",
    body: "Lifetime servicing — re-electrification, re-finishing, replacement crystal and glass. We stand behind every piece indefinitely.",
  },
];

export function WhyChooseUs() {
  const ref = useReveal<HTMLDivElement>();
  return (
    <section className="bg-background py-28 md:py-40 border-t border-border">
      <div ref={ref} className="reveal mx-auto max-w-[1600px] px-6 md:px-10 lg:px-14">
        <div className="max-w-3xl mb-20 md:mb-28">
          <p className="eyebrow mb-6">Why House of Lumere</p>
          <h2 className="font-serif text-5xl md:text-6xl lg:text-7xl leading-[1.04]">
            Specified by people<br />
            <span className="text-muted-foreground italic font-light">who know light.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-14 md:gap-y-16">
          {REASONS.map((r) => (
            <div key={r.n} className="group">
              <div className="font-serif text-3xl text-brass mb-5">{r.n}</div>
              <div className="hairline mb-6" />
              <h3 className="font-serif text-2xl mb-4">{r.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{r.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
