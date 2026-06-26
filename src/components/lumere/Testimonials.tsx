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
];

export function Testimonials() {
  const ref = useReveal<HTMLDivElement>();
  return (
    <section className="bg-background py-28 md:py-40">
      <div ref={ref} className="reveal mx-auto max-w-[1200px] px-6 md:px-10">
        <p className="eyebrow text-center mb-16">In conversation</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24">
          {QUOTES.map((t) => (
            <figure key={t.name} className="relative">
              <span aria-hidden className="absolute -top-10 -left-2 font-serif text-[140px] leading-none text-border select-none">“</span>
              <blockquote className="relative font-serif text-2xl md:text-3xl leading-[1.35] text-foreground">
                {t.q}
              </blockquote>
              <figcaption className="mt-10">
                <div className="text-sm">{t.name}</div>
                <div className="eyebrow mt-2">{t.role}</div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
