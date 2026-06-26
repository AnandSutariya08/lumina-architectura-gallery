import { createFileRoute } from "@tanstack/react-router";
import { Hero } from "@/components/lumere/Hero";
import {
  HomeManifesto,
  HomeCollectionsEditorial,
  HomeFeaturedProducts,
  HomeAtelier,
  HomeProjects,
  HomeSignaturePiece,
  HomeTestimonials,
  HomeEditorialStrip,
  HomeProcess,
  HomeGallery,
  HomeCommissionCTA,
} from "@/components/lumere/HomeSections";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "House of Lumere — Luxury Lighting & Bespoke Chandeliers" },
      {
        name: "description",
        content:
          "House of Lumere curates exclusive chandeliers, pendant lighting and architectural fixtures for residences, hotels and ateliers worldwide.",
      },
      { property: "og:title", content: "House of Lumere — Luxury Lighting" },
      {
        property: "og:description",
        content: "Curated collections of luxury lighting crafted for timeless interiors.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      <Hero />
      <HomeManifesto />
      <HomeCollectionsEditorial />
      <HomeFeaturedProducts />
      <HomeAtelier />
      <HomeProjects />
      <HomeSignaturePiece />
      <HomeTestimonials />
      <HomeEditorialStrip />
      <HomeProcess />
      <HomeGallery />
      <HomeCommissionCTA />
    </>
  );
}
