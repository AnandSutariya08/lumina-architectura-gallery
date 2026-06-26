import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/lumere/PageHero";
import { FAQ } from "@/components/lumere/FAQ";

export const Route = createFileRoute("/faq")({
  head: () => ({
    meta: [
      { title: "FAQ — House of Lumere" },
      { name: "description", content: "Frequently asked questions about House of Lumere — lead times, customisation, trade pricing, installation and shipping." },
      { property: "og:title", content: "FAQ — House of Lumere" },
      { property: "og:description", content: "Questions about lead times, customisation, trade pricing, installation and shipping." },
    ],
  }),
  component: FaqPage,
});

function FaqPage() {
  return (
    <>
      <PageHero
        eyebrow="Frequently Asked"
        title={<>Questions, <em className="not-italic text-muted-foreground">answered with care.</em></>}
        intro="For anything not covered here, our atelier responds to written enquiries within one working day."
      />
      <FAQ />
    </>
  );
}
