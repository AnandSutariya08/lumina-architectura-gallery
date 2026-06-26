import { useReveal } from "@/hooks/use-reveal";
import about from "@/assets/about.jpg";

export function About() {
  const ref = useReveal<HTMLDivElement>();
  return (
    <section id="about" className="bg-background py-28 md:py-40">
      <div ref={ref} className="reveal mx-auto max-w-[1600px] px-6 md:px-10 lg:px-14 grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-20 items-center">
        <div className="md:col-span-5">
          <div className="overflow-hidden aspect-[4/5]">
            <img src={about} alt="A craftsman finishing a brass pendant in the Lumere atelier" loading="lazy" width={1400} height={1750} className="h-full w-full object-cover" />
          </div>
        </div>
        <div className="md:col-span-6 md:col-start-7">
          <p className="eyebrow mb-6">The House</p>
          <h2 className="font-serif text-5xl md:text-6xl lg:text-7xl leading-[1.04] mb-10">
            A house devoted to <em className="not-italic text-muted-foreground">light, material and silence.</em>
          </h2>
          <div className="space-y-6 text-muted-foreground text-base md:text-lg leading-relaxed max-w-xl">
            <p>
              House of Lumere was founded on a quiet idea — that light is the first
              piece of furniture in any great room. We work alongside architects,
              interior designers and private clients to specify lighting that
              elevates an interior without raising its voice.
            </p>
            <p>
              Every fixture is built to order in solid brass, hand-blown glass and
              hand-cut crystal, finished by artisans whose families have shaped
              metal for four generations.
            </p>
          </div>
          <div className="mt-14 grid grid-cols-3 gap-8 border-t border-border pt-10">
            {[
              ["10+", "Years of practice"],
              ["220", "Realised projects"],
              ["38", "Countries served"],
            ].map(([n, l]) => (
              <div key={l}>
                <div className="font-serif text-4xl md:text-5xl">{n}</div>
                <div className="eyebrow mt-3">{l}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
