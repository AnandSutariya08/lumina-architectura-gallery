import { useReveal } from "@/hooks/use-reveal";

const VALUES = [
  { n: "01", t: "Premium Quality", d: "Solid brass, hand-cut crystal, mouth-blown glass. Nothing else." },
  { n: "02", t: "Architectural Design", d: "Drawn alongside architects, scaled to room and ceiling." },
  { n: "03", t: "Worldwide Sourcing", d: "Studios in Murano, Paris, Jaipur and Kyoto. Shipped globally." },
  { n: "04", t: "Timeless Craft", d: "Made to outlast trends — and the houses that hold them." },
];

export function Values() {
  const ref = useReveal<HTMLDivElement>();
  return (
    <section className="bg-bone py-24 md:py-32 border-y border-border">
      <div ref={ref} className="reveal mx-auto max-w-[1600px] px-6 md:px-10 lg:px-14 grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-16">
        {VALUES.map((v) => (
          <div key={v.n}>
            <div className="font-serif text-3xl text-brass mb-6">{v.n}</div>
            <div className="hairline mb-6" />
            <h3 className="font-serif text-2xl mb-4">{v.t}</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">{v.d}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
