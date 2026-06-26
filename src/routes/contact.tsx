import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/lumere/PageHero";
import { Contact } from "@/components/lumere/Contact";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — House of Lumere" },
      { name: "description", content: "Begin a conversation with House of Lumere — for private clients, designers and architects worldwide." },
      { property: "og:title", content: "Contact — House of Lumere" },
      { property: "og:description", content: "Tell us about the room you are lighting." },
    ],
  }),
  component: ContactPage,
});

const SHOWROOMS = [
  { city: "Paris", address: "12 rue de Sèvres, 75006", tel: "+33 1 00 00 00 00" },
  { city: "New York", address: "211 Greene Street, SoHo", tel: "+1 212 000 0000" },
  { city: "Mumbai", address: "Kala Ghoda, Fort", tel: "+91 22 0000 0000" },
];

function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Begin a conversation"
        title={<>Tell us about the room <em className="not-italic text-muted-foreground">you are lighting.</em></>}
        intro="Our atelier responds within one working day. For trade enquiries, please include the project name and scope."
      />

      <Contact />

      <section className="bg-background py-24 md:py-32 border-t border-border">
        <div className="mx-auto max-w-[1400px] px-6 md:px-10 lg:px-14">
          <p className="eyebrow mb-6">Showrooms</p>
          <h2 className="font-serif text-4xl md:text-5xl mb-16">By appointment.</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16">
            {SHOWROOMS.map((s) => (
              <div key={s.city} className="border-t border-border pt-8">
                <h3 className="font-serif text-3xl mb-4">{s.city}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{s.address}</p>
                <p className="mt-3 text-sm">{s.tel}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
