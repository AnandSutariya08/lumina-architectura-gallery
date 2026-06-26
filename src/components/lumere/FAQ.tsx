import { useState } from "react";
import { useReveal } from "@/hooks/use-reveal";

const FAQS = [
  { q: "Do you ship internationally?", a: "Yes. We ship globally with white-glove logistics partners. Lead times typically range from 6 to 14 weeks depending on the piece and finish." },
  { q: "Can fixtures be customised?", a: "Almost every piece can be tailored — dimensions, finishes, glass tones, drop height, electrical specification. Our atelier produces to order." },
  { q: "Do you work with architects and designers?", a: "We work primarily through the trade. Dedicated account managers, technical files, IES data and CAD blocks are available on request." },
  { q: "How do I view a piece in person?", a: "Our showrooms are by appointment. We also coordinate private installations and architectural visits during specification." },
  { q: "What about installation?", a: "We provide installation guidance, technical drawings and on-site supervision in select cities. Network electricians are vetted by the house." },
];

export function FAQ() {
  const [open, setOpen] = useState(0);
  const ref = useReveal<HTMLDivElement>();
  return (
    <section className="bg-background py-28 md:py-40">
      <div ref={ref} className="reveal mx-auto max-w-[1100px] px-6 md:px-10">
        <div className="mb-16 md:mb-20">
          <p className="eyebrow mb-6">Frequently Asked</p>
          <h2 className="font-serif text-5xl md:text-6xl">Questions, answered.</h2>
        </div>
        <div className="border-t border-border">
          {FAQS.map((f, i) => {
            const isOpen = open === i;
            return (
              <div key={f.q} className="border-b border-border">
                <button
                  onClick={() => setOpen(isOpen ? -1 : i)}
                  className="w-full flex items-center justify-between gap-8 py-7 md:py-8 text-left"
                >
                  <span className="font-serif text-xl md:text-2xl pr-4">{f.q}</span>
                  <span className={`text-2xl font-light text-muted-foreground transition-transform duration-500 ${isOpen ? "rotate-45" : ""}`}>+</span>
                </button>
                <div
                  className="grid transition-all duration-700 ease-out"
                  style={{ gridTemplateRows: isOpen ? "1fr" : "0fr" }}
                >
                  <div className="overflow-hidden">
                    <p className="pb-8 pr-12 text-muted-foreground text-base md:text-lg leading-relaxed max-w-2xl">
                      {f.a}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
