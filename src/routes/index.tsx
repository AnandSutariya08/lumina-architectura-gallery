import { createFileRoute } from "@tanstack/react-router";
import { Hero } from "@/components/lumere/Hero";
import { Collections } from "@/components/lumere/Collections";
import { Signature } from "@/components/lumere/Signature";
import { BestSellers } from "@/components/lumere/BestSellers";
import { About } from "@/components/lumere/About";
import { Projects } from "@/components/lumere/Projects";
import { Testimonials } from "@/components/lumere/Testimonials";
import { Values } from "@/components/lumere/Values";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "House of Lumere — Luxury Lighting & Bespoke Chandeliers" },
      { name: "description", content: "House of Lumere curates exclusive chandeliers, pendant lighting and architectural fixtures for residences, hotels and ateliers worldwide." },
      { property: "og:title", content: "House of Lumere — Luxury Lighting" },
      { property: "og:description", content: "Curated collections of luxury lighting crafted for timeless interiors." },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      <Hero />
      <Collections />
      <Signature />
      <BestSellers />
      <About />
      <Projects />
      <Testimonials />
      <Values />
    </>
  );
}
