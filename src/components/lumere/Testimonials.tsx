import { useReveal } from "@/hooks/use-reveal";

const QUOTES = [
  {
    q: "Lumere understood the room before we did. The light feels inevitable — as if it had always been there.",
    name: "Élise Marchand",
    role: "Marchand Studio · Paris",
  },
  {
    q: "A rare house. Quiet, exacting, and entirely without pretence. We specify them on every villa now.",
    name: "Raj Mehta",
    role: "Atelier Mehta · Mumbai",
  },
  {
    q: "The Aurelia Empire above our stair is the first thing every guest remarks upon. It is architecture, not decoration.",
    name: "Sophia Reinhardt",
    role: "Private Client · Zürich",
  },
];

export function Testimonials() {
  const ref = useReveal<HTMLDivElement>();
  return (
    <section className="bg-background py-28 md:py-40 border-t border-border">
      <div ref={ref} className="reveal mx-auto max-w-[1400px] px-6 md:px-10 lg:px-14">
        <p className="eyebrow text-center mb-20 md:mb-28">In conversation</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-12">
          {QUOTES.map((t) => (
            <figure key={t.name} className="relative">
              <span
                aria-hidden
                className="absolute -top-8 -left-2 font-serif text-[120px] leading-none text-border select-none"
              >
                "
              </span>
              <blockquote className="relative font-serif text-xl md:text-2xl leading-[1.4] text-foreground">
                {t.q}
              </blockquote>
              <figcaption className="mt-10 pt-8 border-t border-border">
                <div className="text-sm font-medium">{t.name}</div>
                <div className="eyebrow mt-2">{t.role}</div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
