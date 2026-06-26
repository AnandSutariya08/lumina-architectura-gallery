import { useReveal } from "@/hooks/use-reveal";

export function PageHero({
  eyebrow,
  title,
  intro,
}: {
  eyebrow: string;
  title: React.ReactNode;
  intro?: string;
}) {
  const ref = useReveal<HTMLDivElement>();
  return (
    <section className="bg-bone pt-40 md:pt-52 pb-24 md:pb-32 border-b border-border">
      <div ref={ref} className="reveal mx-auto max-w-[1400px] px-6 md:px-10 lg:px-14">
        <p className="eyebrow mb-8">{eyebrow}</p>
        <h1 className="font-serif text-5xl md:text-7xl lg:text-[96px] leading-[1.02] max-w-5xl">
          {title}
        </h1>
        {intro ? (
          <p className="mt-10 max-w-2xl text-muted-foreground text-base md:text-lg leading-relaxed">
            {intro}
          </p>
        ) : null}
      </div>
    </section>
  );
}
