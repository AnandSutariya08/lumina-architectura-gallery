import { Link } from "@tanstack/react-router";
import { useReveal } from "@/hooks/use-reveal";
import p1 from "@/assets/product-1.jpg";
import p2 from "@/assets/product-2.jpg";
import p3 from "@/assets/product-3.jpg";
import p4 from "@/assets/product-4.jpg";
import proj1 from "@/assets/project-1.jpg";
import proj2 from "@/assets/project-2.jpg";
import proj3 from "@/assets/project-3.jpg";
import proj4 from "@/assets/project-4.jpg";
import crystal from "@/assets/signature-crystal.jpg";
import modern from "@/assets/signature-modern.jpg";
import aboutImg from "@/assets/about.jpg";
import chand from "@/assets/collection-chandeliers.jpg";
import pend from "@/assets/collection-pendants.jpg";
import wall from "@/assets/collection-wall.jpg";
import floor from "@/assets/collection-floor.jpg";

const ITEMS: {
  img: string;
  label: string;
  category: string;
  slug: string;
  tall?: boolean;
  wide?: boolean;
}[] = [
  { img: chand,   label: "Luxury Chandeliers",    category: "chandeliers", slug: "chandeliers", tall: true },
  { img: p1,      label: "Crystal Series",        category: "chandeliers", slug: "chandeliers" },
  { img: pend,    label: "Pendant Lighting",      category: "pendants",    slug: "pendants" },
  { img: modern,  label: "Linear Pendants",       category: "pendants",    slug: "pendants", tall: true },
  { img: wall,    label: "Wall Sconces",          category: "wall",        slug: "wall" },
  { img: aboutImg, label: "Atelier Collection",  category: "floor-table", slug: "floor-table", tall: true },
  { img: p3,      label: "Stone Series",          category: "floor-table", slug: "floor-table" },
  { img: floor,   label: "Floor Lamps",           category: "floor-table", slug: "floor-table" },
  { img: crystal, label: "Crystal Collection",    category: "chandeliers", slug: "chandeliers", tall: true },
  { img: proj1,   label: "Residential Projects",  category: "chandeliers", slug: "chandeliers" },
  { img: p2,      label: "Modern Collection",     category: "pendants",    slug: "pendants" },
  { img: proj2,   label: "Hospitality Lighting",  category: "pendants",    slug: "pendants" },
  { img: p4,      label: "Decorative Objects",    category: "decor",       slug: "decor", tall: true },
  { img: proj3,   label: "Outdoor Collection",    category: "outdoor",     slug: "outdoor" },
  { img: proj4,   label: "Ceiling Lights",        category: "ceiling",     slug: "ceiling" },
];

export function Gallery() {
  const ref = useReveal<HTMLDivElement>();

  return (
    <section className="bg-bone py-28 md:py-40 border-t border-border">
      <div className="mx-auto max-w-[1600px] px-6 md:px-10 lg:px-14">
        <div ref={ref} className="reveal flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-16 md:mb-24">
          <div>
            <p className="eyebrow mb-6">The Gallery</p>
            <h2 className="font-serif text-5xl md:text-6xl lg:text-7xl">
              Light in every form,<br />
              <span className="text-muted-foreground italic font-light">for every space.</span>
            </h2>
          </div>
          <p className="max-w-sm text-muted-foreground text-sm md:text-base leading-relaxed">
            A visual index of our collections — from grand crystal chandeliers to outdoor
            lanterns and sculptural table objects.
          </p>
        </div>

        {/* Masonry-style grid */}
        <div className="columns-2 md:columns-3 lg:columns-4 gap-3 md:gap-4 space-y-3 md:space-y-4">
          {ITEMS.map((item, i) => (
            <GalleryItem key={i} item={item} index={i} />
          ))}
        </div>

        <div className="mt-16 text-center">
          <Link
            to="/collections"
            className="inline-flex items-center gap-4 border border-foreground px-10 py-4 text-[11px] uppercase tracking-[0.28em] hover:bg-foreground hover:text-background transition-colors duration-500"
          >
            Browse All Collections →
          </Link>
        </div>
      </div>
    </section>
  );
}

function GalleryItem({
  item,
  index,
}: {
  item: (typeof ITEMS)[number];
  index: number;
}) {
  const ref = useReveal<HTMLDivElement>();
  const delay = (index % 4) * 120;

  return (
    <div
      ref={ref}
      className="reveal break-inside-avoid mb-3 md:mb-4"
      style={{ transitionDelay: `${delay}ms` }}
    >
      <Link
        to="/collections/$category"
        params={{ category: item.slug }}
        className="group block relative overflow-hidden bg-background"
      >
        <img
          src={item.img}
          alt={item.label}
          loading="lazy"
          className={[
            "w-full object-cover transition-transform duration-[1800ms] ease-out group-hover:scale-[1.04]",
            item.tall ? "aspect-[3/4]" : "aspect-square",
          ].join(" ")}
        />
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-700" />
        <div className="absolute inset-0 flex flex-col justify-end p-4 md:p-5 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-2 group-hover:translate-y-0">
          <p className="eyebrow !text-white/80 mb-1">{item.category.replace("-", " & ")}</p>
          <h3 className="font-serif text-white text-lg md:text-xl leading-tight">{item.label}</h3>
          <span className="eyebrow !text-white/70 mt-2">Explore →</span>
        </div>
      </Link>
    </div>
  );
}
