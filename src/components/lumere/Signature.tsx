import { Link } from "@tanstack/react-router";
import { useReveal } from "@/hooks/use-reveal";
import crystal from "@/assets/signature-crystal.jpg";
import modern from "@/assets/signature-modern.jpg";

const ROWS = [
  {
    chapter: "Chapter 01",
    title: "The Crystal Collection",
    body: "Handcrafted brilliance inspired by timeless European architecture. Each fixture is assembled by master artisans across three generations, set in solid brass and hand-cut crystal.",
    img: crystal,
  },
  {
    chapter: "Chapter 02",
    title: "Linear & Modern",
    body: "Architectural pieces drawn in single, uninterrupted gestures. Made for vaulted kitchens, gallery walls and rooms that prefer quiet to ornament.",
    img: modern,
  },
];

export function Signature() {
  return (
    <section id="signature" className="bg-bone py-28 md:py-40">
      <div className="mx-auto max-w-[1600px] px-6 md:px-10 lg:px-14">
        <div className="text-center max-w-3xl mx-auto mb-24 md:mb-32">
          <p className="eyebrow mb-6">Signature Collections</p>
          <h2 className="font-serif text-5xl md:text-6xl lg:text-7xl">
            Quiet objects, <em className="not-italic text-muted-foreground">made to outlast us.</em>
          </h2>
        </div>

        <div className="space-y-32 md:space-y-48">
          {ROWS.map((r, i) => (
            <Row key={r.title} row={r} reverse={i % 2 === 1} />
          ))}
        </div>
      </div>
    </section>
  );
}

function Row({ row: r, reverse }: { row: typeof ROWS[number]; reverse: boolean }) {
  const ref = useReveal<HTMLDivElement>();
  return (
    <div ref={ref} className="reveal grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-16 items-center">
      <div className={`md:col-span-7 ${reverse ? "md:order-2" : ""}`}>
        <div className="overflow-hidden aspect-[4/3]">
          <img src={r.img} alt={r.title} loading="lazy" width={1600} height={1200} className="h-full w-full object-cover" />
        </div>
      </div>
      <div className={`md:col-span-5 ${reverse ? "md:order-1 md:pr-10" : "md:pl-10"}`}>
        <p className="eyebrow mb-6">{r.chapter}</p>
        <h3 className="font-serif text-4xl md:text-5xl lg:text-6xl mb-8 leading-[1.05]">{r.title}</h3>
        <p className="text-base md:text-lg leading-relaxed text-muted-foreground max-w-md mb-10">{r.body}</p>
        <Link to="/collections" className="link-underline text-[11px] uppercase tracking-[0.28em]">
          Explore Collection →
        </Link>
      </div>
    </div>
  );
}
