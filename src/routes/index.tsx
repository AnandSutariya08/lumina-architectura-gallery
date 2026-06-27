import { createFileRoute } from "@tanstack/react-router";
import { Hero } from "@/components/lumere/Hero";
import {
  HomePhilosophy,
  HomeMaterials,
  HomeShowroom,
  HomeRoomStory,
  HomeHowToBegin,
  HomeEditorialPull,
  HomeFeaturedPieces,
  HomeTestimonials,
  HomeFloorTableInterlude,
  HomeClosingCTA,
} from "@/components/lumere/HomeSections";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "House of Lumere — Luxury Lighting & Bespoke Chandeliers, Surat" },
      {
        name: "description",
        content:
          "House of Lumere crafts exclusive chandeliers, pendant lighting and architectural fixtures in solid brass, crystal and alabaster. Showroom in Surat, Gujarat. Inquire on WhatsApp.",
      },
      { property: "og:title", content: "House of Lumere — Luxury Lighting, Surat" },
      {
        property: "og:description",
        content: "Bespoke lighting in brass, crystal and alabaster. Handcrafted for residences, hotels and architectural interiors. Showroom in Surat, Gujarat.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      <Hero />
      <HomePhilosophy />
      <HomeMaterials />
      <HomeShowroom />
      <HomeRoomStory />
      <HomeHowToBegin />
      <HomeEditorialPull />
      <HomeFeaturedPieces />
      <HomeTestimonials />
      <HomeFloorTableInterlude />
      <HomeClosingCTA />
    </>
  );
}
