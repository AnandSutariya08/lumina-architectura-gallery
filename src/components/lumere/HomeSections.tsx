import { Link } from "@tanstack/react-router";
import { useReveal } from "@/hooks/use-reveal";
import n1 from "@/assets/new-1.png";
import n2 from "@/assets/new-2.png";
import n3 from "@/assets/new-3.png";
import n4 from "@/assets/new-4.png";
import n5 from "@/assets/new-5.png";
import n6 from "@/assets/new-6.png";

/* ─────────────────────────────────────────────
   1. PHILOSOPHY — the Lumere worldview, homepage-only
───────────────────────────────────────────── */
export function HomePhilosophy() {
  const ref = useReveal<HTMLDivElement>();
  return (
    <section className="bg-foreground text-background overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[700px]">
        <div className="relative order-2 lg:order-1 min-h-[400px] lg:min-h-0">
          <img
            src={n4}
            alt="Blue crystal chandelier — House of Lumere"
            className="absolute inset-0 h-full w-full object-cover opacity-70"
            style={{ transform: "rotate(-45deg) scale(1.44)" }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-foreground/60 to-transparent" />
          {/* Floating material label */}
          <div className="absolute bottom-8 left-8 text-white/60">
            <p className="eyebrow !text-white/40 mb-1">Material</p>
            <p className="font-serif text-xl text-white">Burnished Brass · Bohemian Crystal</p>
          </div>
        </div>

        <div
          ref={ref}
          className="reveal order-1 lg:order-2 flex flex-col justify-center px-8 md:px-16 lg:px-20 xl:px-28 py-24"
        >
          <p className="eyebrow !text-background/45 mb-10 tracking-[0.3em]">Surat · Est. 2014 · India</p>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-[60px] leading-[1.06] text-background mb-10">
            We do not sell fixtures.<br />
            <em className="not-italic text-background/40">We compose rooms.</em>
          </h2>
          <p className="text-background/60 text-base md:text-lg leading-relaxed max-w-md mb-14">
            Light is the first decision in a room — made before the furniture, before the
            stone, before the art. At House of Lumere, every chandelier, every sconce,
            every pendant is built to answer one question: what does this room need to become?
          </p>
          <div className="grid grid-cols-3 gap-6 border-t border-white/15 pt-12 mb-14">
            {[
              ["10+", "Years in craft"],
              ["220+", "Commissions"],
              ["38", "Countries"],
            ].map(([n, l]) => (
              <div key={l}>
                <div className="font-serif text-3xl md:text-4xl text-background mb-1">{n}</div>
                <div className="eyebrow !text-background/40 leading-snug">{l}</div>
              </div>
            ))}
          </div>
          <Link
            to="/about"
            className="self-start text-[11px] uppercase tracking-[0.28em] text-background/60 hover:text-background border-b border-background/20 hover:border-background/60 pb-px transition-all duration-300"
          >
            Our story →
          </Link>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────
   2. MATERIALS — Brass / Crystal / Alabaster
   Unique homepage content — not on any other page
───────────────────────────────────────────── */
export function HomeMaterials() {
  const ref = useReveal<HTMLDivElement>();
  const MATS = [
    {
      name: "Solid Brass",
      grade: "Naval grade C46400",
      img: n1,
      text: "Spun and planished by hand in our Jaipur atelier. Naval brass — 80% copper, 20% zinc — is chosen for its density, colour and the depth of patina it develops over decades. Every shade is finished by a single craftsman, never on a production line.",
      finish: "Polished · Brushed · Aged · Blackened",
    },
    {
      name: "Bohemian Crystal",
      grade: "30% full lead crystal",
      img: n3,
      text: "Hand-cut in the Bohemian tradition by a fourth-generation cutting family. Each drop is individually checked for optical clarity before stringing. No two pendants are identical — the cuts are made by hand, and the hand is never perfectly repeated.",
      finish: "Clear · Smoke · Champagne",
    },
    {
      name: "Spanish Alabaster",
      grade: "Aragon quarry, single-seam",
      img: n5,
      text: "Carved in slabs 8–12 mm thin — thin enough to transmit light, thick enough to hold structure. Sourced from a single quarrier in Aragon whose family has worked the same seam for sixty years. Each piece is unique in veining and translucency.",
      finish: "Natural · Warm white · Honey",
    },
  ];

  return (
    <section className="bg-bone py-28 md:py-40 border-t border-border">
      <div className="mx-auto max-w-[1600px] px-6 md:px-10 lg:px-14">
        <div ref={ref} className="reveal mb-20 md:mb-28">
          <p className="eyebrow mb-5">The Materials</p>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8">
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl leading-[1.04] max-w-xl">
              Three materials.<br />
              <em className="not-italic text-muted-foreground">Chosen once. Kept forever.</em>
            </h2>
            <p className="max-w-sm text-muted-foreground text-base leading-relaxed">
              We work in brass, crystal and alabaster because they age beautifully
              and honestly — unlike plated zinc or cast resin, which only pretend to.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-px bg-border">
          {MATS.map((m, i) => (
            <MaterialCard key={m.name} mat={m} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function MaterialCard({
  mat: m,
  index,
}: {
  mat: { name: string; grade: string; img: string; text: string; finish: string };
  index: number;
}) {
  const ref = useReveal<HTMLDivElement>();
  return (
    <div
      ref={ref}
      className="reveal bg-background group"
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <div className="overflow-hidden aspect-[4/3]">
        <img
          src={m.img}
          alt={m.name}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-[2000ms] ease-out group-hover:scale-[1.04]"
          style={{ transform: "rotate(-45deg) scale(1.44)" }}
        />
      </div>
      <div className="p-8 md:p-10">
        <div className="flex items-start justify-between gap-4 mb-6">
          <h3 className="font-serif text-2xl md:text-3xl">{m.name}</h3>
          <span className="eyebrow text-muted-foreground text-right shrink-0 pt-1">{m.grade}</span>
        </div>
        <p className="text-muted-foreground text-sm leading-relaxed mb-8">{m.text}</p>
        <div className="border-t border-border pt-6">
          <p className="eyebrow text-muted-foreground mb-1">Available finishes</p>
          <p className="text-sm font-medium">{m.finish}</p>
        </div>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────
   3. SURAT SHOWROOM — physical home, homepage-only
───────────────────────────────────────────── */
export function HomeShowroom() {
  const ref = useReveal<HTMLDivElement>();
  return (
    <section className="bg-foreground text-background">
      <div
        ref={ref}
        className="reveal mx-auto max-w-[1600px] px-6 md:px-10 lg:px-14 py-28 md:py-40"
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
          {/* Left: images */}
          <div className="lg:col-span-7 grid grid-cols-2 gap-3">
            <div className="overflow-hidden aspect-[3/4]">
              <img
                src={n2}
                alt="House of Lumere showroom — chandeliers"
                loading="lazy"
                className="h-full w-full object-cover"
                style={{ transform: "rotate(-45deg) scale(1.44)" }}
              />
            </div>
            <div className="overflow-hidden aspect-[3/4] mt-12">
              <img
                src={n4}
                alt="House of Lumere showroom — sconces"
                loading="lazy"
                className="h-full w-full object-cover"
                style={{ transform: "rotate(-45deg) scale(1.44)" }}
              />
            </div>
          </div>

          {/* Right: showroom details */}
          <div className="lg:col-span-5 flex flex-col justify-center">
            <p className="eyebrow !text-background/45 mb-8">Our Showroom</p>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-[56px] leading-[1.04] text-background mb-10">
              Visit us in<br />
              <em className="not-italic text-background/40">Surat, Gujarat.</em>
            </h2>
            <p className="text-background/60 text-base leading-relaxed mb-12 max-w-md">
              Our Surat showroom displays the full range — chandeliers lit to their correct drop
              heights, sconces on finished plaster walls, pendants over actual table heights.
              You see the light before you order it. That is the point of coming in person.
            </p>

            <div className="space-y-6 mb-12">
              {[
                { label: "Address", value: "Surat, Gujarat, India" },
                { label: "Phone / WhatsApp", value: "+91 93775 55555" },
                { label: "Open", value: "Mon – Sat · 10 am – 7 pm" },
                { label: "By appointment", value: "Sunday visits welcome" },
              ].map((row) => (
                <div key={row.label} className="flex gap-8 items-start border-b border-white/10 pb-6 last:border-0">
                  <dt className="eyebrow !text-background/40 w-36 shrink-0">{row.label}</dt>
                  <dd className="text-background/80 text-sm">{row.value}</dd>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="https://wa.me/919377555555?text=Hello%20House%20of%20Lumere%2C%20I%20would%20like%20to%20visit%20your%20showroom%20in%20Surat.%20Please%20let%20me%20know%20the%20best%20time%20to%20come."
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-3 bg-background text-foreground px-8 py-4 text-[11px] uppercase tracking-[0.28em] hover:bg-background/90 transition-colors duration-500"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                Book a visit
              </a>
              <Link
                to="/contact"
                className="inline-flex items-center gap-3 border border-white/30 text-background px-8 py-4 text-[11px] uppercase tracking-[0.28em] hover:border-white/60 transition-colors duration-500"
              >
                Send a brief →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────
   4. ONE ROOM STORY — a single project told in depth
   Not a link to projects page — unique homepage content
───────────────────────────────────────────── */
export function HomeRoomStory() {
  const ref = useReveal<HTMLDivElement>();
  return (
    <section className="bg-background py-28 md:py-40 border-t border-border overflow-hidden">
      <div className="mx-auto max-w-[1600px] px-6 md:px-10 lg:px-14">
        <div ref={ref} className="reveal mb-16 md:mb-20">
          <p className="eyebrow mb-4">A Room, Transformed</p>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl leading-[1.04] max-w-3xl">
            The Mehta Residence —<br />
            <em className="not-italic text-muted-foreground">Ahmedabad, 2025.</em>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-16">
          <div className="lg:col-span-8 overflow-hidden aspect-[16/9]">
            <img src={n1} alt="Mehta Residence double-height foyer — House of Lumere" className="h-full w-full object-cover" loading="lazy" style={{ transform: "rotate(-45deg) scale(1.44)" }} />
          </div>
          <div className="lg:col-span-4 grid grid-rows-2 gap-6">
            <div className="overflow-hidden">
              <img src={n2} alt="Aurelia Empire chandelier detail" className="h-full w-full object-cover aspect-video lg:aspect-auto" loading="lazy" style={{ transform: "rotate(-45deg) scale(1.44)" }} />
            </div>
            <div className="overflow-hidden">
              <img src={n3} alt="Brass finish detail" className="h-full w-full object-cover aspect-video lg:aspect-auto" loading="lazy" style={{ transform: "rotate(-45deg) scale(1.44)" }} />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-16">
          <div className="md:col-span-5">
            <dl className="space-y-0">
              {[
                { label: "Fixture", value: "Aurelia Empire, Ø 130 cm" },
                { label: "Drop", value: "4.8 m — custom extended chain" },
                { label: "Finish", value: "Aged brass, champagne crystal" },
                { label: "Space", value: "Double-height entry foyer, 6.4 m" },
                { label: "Completion", value: "March 2025" },
              ].map((r) => (
                <div key={r.label} className="flex justify-between py-4 border-b border-border">
                  <dt className="eyebrow text-muted-foreground">{r.label}</dt>
                  <dd className="text-sm font-medium text-right">{r.value}</dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="md:col-span-7">
            <p className="font-serif text-xl md:text-2xl leading-[1.6] text-muted-foreground mb-8">
              "We asked for something that felt inevitable — as if the house had been built
              around the chandelier, not the other way around."
            </p>
            <p className="text-muted-foreground text-base leading-relaxed mb-6">
              The brief was straightforward: a double-height foyer in a contemporary home, ceiling
              at 6.4 metres, staircase wrapping the left wall. The Mehta family wanted nothing
              modern, nothing cold. They wanted presence without weight.
            </p>
            <p className="text-muted-foreground text-base leading-relaxed mb-10">
              We specified the Aurelia Empire at 130 cm diameter — wider than our standard
              recommendation for the floor area, but correct for the volume. The drop was extended
              to 4.8 m on a custom brass armature. The champagne crystal reads warmer against the
              ivory plaster than clear crystal would. Three months from the first WhatsApp message
              to installation day.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="https://wa.me/919377555555?text=Hello%20House%20of%20Lumere%2C%20I%20saw%20the%20Mehta%20Residence%20story%20and%20would%20like%20to%20discuss%20a%20similar%20project."
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-3 bg-foreground text-background px-8 py-4 text-[11px] uppercase tracking-[0.28em] hover:bg-foreground/90 transition-colors duration-500"
              >
                Start a similar project →
              </a>
              <Link
                to="/projects"
                className="inline-flex items-center gap-3 text-[11px] uppercase tracking-[0.28em] hover:gap-5 transition-all duration-300"
              >
                All projects →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────
   5. THE BRIEF — how to work with us, told visually
   Homepage-only: not a repeat of the contact page
───────────────────────────────────────────── */
export function HomeHowToBegin() {
  const ref = useReveal<HTMLDivElement>();
  return (
    <section className="bg-bone border-t border-border overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[600px]">
        {/* Left: image */}
        <div className="relative min-h-[400px] lg:min-h-0 order-2 lg:order-1">
          <img
            src={n5}
            alt="Lumere installation — restaurant Sera, Milan"
            className="absolute inset-0 h-full w-full object-cover"
            loading="lazy"
            style={{ transform: "rotate(-45deg) scale(1.44)" }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-bone/80 to-transparent lg:bg-gradient-to-r lg:from-transparent lg:to-bone/40" />
          <div className="absolute bottom-8 left-8 right-8 lg:hidden">
            <p className="font-serif text-xl text-foreground">Restaurant Sera, Milan — 42 sconces, one brief, three months.</p>
          </div>
        </div>

        {/* Right: steps */}
        <div
          ref={ref}
          className="reveal order-1 lg:order-2 flex flex-col justify-center px-8 md:px-16 lg:px-20 xl:px-24 py-24"
        >
          <p className="eyebrow mb-8">How to begin</p>
          <h2 className="font-serif text-4xl md:text-5xl leading-[1.05] mb-14">
            Three things<br />
            <em className="not-italic text-muted-foreground">to send us first.</em>
          </h2>

          <div className="space-y-0 mb-14">
            {[
              {
                n: "01",
                heading: "Room dimensions + ceiling height",
                body: "Floor area in metres and ceiling height. If it is a double-height or raked ceiling, a photo from the floor helps.",
              },
              {
                n: "02",
                heading: "Preferred finish",
                body: "Polished brass, aged brass, blackened steel, chrome — or a reference image. We work from mood boards readily.",
              },
              {
                n: "03",
                heading: "Budget range",
                body: "We work across a range. Knowing your ceiling helps us specify correctly — not maximally, but correctly.",
              },
            ].map((s, i) => (
              <div key={s.n} className={`flex gap-6 py-8 ${i < 2 ? "border-b border-border" : ""}`}>
                <span className="font-serif text-4xl text-muted-foreground/30 leading-none shrink-0">{s.n}</span>
                <div>
                  <h3 className="font-serif text-xl mb-2">{s.heading}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{s.body}</p>
                </div>
              </div>
            ))}
          </div>

          <a
            href="https://wa.me/919377555555?text=Hello%20House%20of%20Lumere%2C%20I%20would%20like%20to%20start%20a%20project%20brief.%20Here%20are%20my%20room%20details%3A"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-3 bg-foreground text-background px-8 py-4 text-[11px] uppercase tracking-[0.28em] hover:bg-foreground/90 transition-colors duration-500 self-start"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            Send your brief on WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────
   6. EDITORIAL PULL — full-bleed quote, atmospheric
───────────────────────────────────────────── */
export function HomeEditorialPull() {
  return (
    <section className="relative h-[65vh] md:h-[75vh] overflow-hidden bg-[#1a1814]">
      <img
        src={n6}
        alt="House of Lumere atelier — light and space"
        className="absolute inset-0 h-full w-full object-cover opacity-50"
        loading="lazy"
        style={{ transform: "rotate(-45deg) scale(1.44)" }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

      <div className="relative z-10 h-full flex flex-col justify-end mx-auto max-w-[1600px] px-6 md:px-10 lg:px-14 pb-20 md:pb-28">
        <div className="max-w-4xl">
          <p className="eyebrow !text-white/40 mb-8">Crafted in India · For the world</p>
          <blockquote className="font-serif text-4xl md:text-5xl lg:text-[64px] text-white leading-[1.1]">
            "Light is the first piece of furniture in any great room."
          </blockquote>
          <div className="mt-10 flex items-center gap-8">
            <div className="h-px flex-1 max-w-24 bg-white/30" />
            <cite className="eyebrow !text-white/50 not-italic">House of Lumere · Surat</cite>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────
   7. FEATURED PIECES — 4 products, unique card style
───────────────────────────────────────────── */
const FEATURED = [
  { slug: "grand-palais-chandelier", category: "chandeliers", name: "Grand Palais Chandelier", ref: "LM-CH-001", desc: "Eighteen arms, 340 hand-cut Bohemian crystal drops. Ø 120 cm.", badge: "Signature Piece", img: n2 },
  { slug: "halo-sconce",             category: "wall",        name: "Halo Sconce",             ref: "LM-WS-001", desc: "Brass ring with opal glass diffuser. Hand-blown in Murano.", badge: "Most Inquired",  img: n3 },
  { slug: "alabaster-disk",          category: "ceiling",     name: "Alabaster Disk",           ref: "LM-CL-003", desc: "Ø 55 cm, Spanish alabaster. Each piece unique in veining.", badge: "Limited stock",  img: n4 },
  { slug: "arc-pendant",             category: "pendants",    name: "Arc Pendant",              ref: "LM-PE-002", desc: "Brushed brass arc, single filament, minimal geometry.", badge: "New Arrival",    img: n1 },
];

export function HomeFeaturedPieces() {
  const ref = useReveal<HTMLDivElement>();
  return (
    <section className="bg-background py-28 md:py-40 border-t border-border">
      <div className="mx-auto max-w-[1600px] px-6 md:px-10 lg:px-14">
        <div ref={ref} className="reveal mb-16 md:mb-20 flex flex-col md:flex-row md:items-end md:justify-between gap-8">
          <div>
            <p className="eyebrow mb-4">Selected Pieces</p>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl leading-[1.04]">
              Objects that define rooms.
            </h2>
          </div>
          <Link to="/collections" className="hidden md:inline-flex items-center gap-3 link-underline text-[11px] uppercase tracking-[0.28em] shrink-0">
            Full collection →
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-border">
          {FEATURED.map((p, i) => (
            <FeaturedCard key={p.slug} product={p} index={i} />
          ))}
        </div>

        <div className="mt-10 text-center md:hidden">
          <Link to="/collections" className="link-underline text-[11px] uppercase tracking-[0.28em]">
            Browse all pieces →
          </Link>
        </div>
      </div>
    </section>
  );
}

function FeaturedCard({ product: p, index }: { product: typeof FEATURED[number]; index: number }) {
  const ref = useReveal<HTMLDivElement>();
  return (
    <div
      ref={ref}
      className="reveal bg-bone group flex flex-col"
      style={{ transitionDelay: `${index * 80}ms` }}
    >
      <Link
        to="/collections/$category/$product"
        params={{ category: p.category, product: p.slug }}
        className="block relative overflow-hidden aspect-[3/4]"
      >
        <img
          src={p.img}
          alt={p.name}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-[1800ms] ease-out group-hover:scale-[1.04]"
          style={{ transform: "rotate(-45deg) scale(1.44)" }}
        />
        {p.badge && (
          <span className="absolute top-4 left-4 eyebrow !text-[9px] bg-background px-3 py-1.5">
            {p.badge}
          </span>
        )}
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-700" />
      </Link>
      <div className="flex flex-col flex-1 p-6 md:p-8">
        <div className="flex items-start justify-between gap-3 mb-3">
          <Link
            to="/collections/$category/$product"
            params={{ category: p.category, product: p.slug }}
            className="font-serif text-xl md:text-2xl hover:text-brass transition-colors duration-300"
          >
            {p.name}
          </Link>
          <span className="eyebrow text-muted-foreground shrink-0 pt-1">{p.ref}</span>
        </div>
        <p className="text-muted-foreground text-sm leading-relaxed mb-6 flex-1">{p.desc}</p>
        <a
          href={`https://wa.me/919377555555?text=Hello%20House%20of%20Lumere%2C%20I%20am%20interested%20in%20the%20*${encodeURIComponent(p.name)}*%20(Ref%3A%20${p.ref}).%20Please%20share%20availability%2C%20finishes%20and%20pricing.`}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.24em] border border-foreground/30 px-4 py-2.5 hover:bg-foreground hover:text-background hover:border-foreground transition-all duration-300 self-start"
        >
          Inquire →
        </a>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────
   8. TESTIMONIALS — three voices, atmospheric
───────────────────────────────────────────── */
const QUOTES = [
  {
    q: "Lumere understood the room before we did. The light feels inevitable — as if it had always been there.",
    name: "Élise Marchand",
    role: "Marchand Studio · Paris",
    project: "Maison Aurore chandelier",
  },
  {
    q: "A rare house. Quiet, exacting, and entirely without pretence. We specify them on every villa now.",
    name: "Raj Mehta",
    role: "Atelier Mehta · Mumbai",
    project: "12 Halo Sconces, Mehta Villa",
  },
  {
    q: "The Aurelia Empire above our stair is the first thing every guest remarks upon. It is architecture, not decoration.",
    name: "Sophia Reinhardt",
    role: "Private Client · Zürich",
    project: "Aurelia Empire, private residence",
  },
];

export function HomeTestimonials() {
  const ref = useReveal<HTMLDivElement>();
  return (
    <section className="bg-bone py-28 md:py-40 border-t border-border">
      <div ref={ref} className="reveal mx-auto max-w-[1600px] px-6 md:px-10 lg:px-14">
        <p className="eyebrow text-center mb-20 md:mb-28 tracking-[0.3em]">In Their Words</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-border">
          {QUOTES.map((t, i) => (
            <figure
              key={t.name}
              className="bg-bone p-8 md:p-12 relative"
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <span
                aria-hidden
                className="absolute top-6 left-8 font-serif text-[80px] leading-none text-foreground/8 select-none"
              >
                "
              </span>
              <blockquote className="relative font-serif text-xl md:text-2xl leading-[1.5] text-foreground mb-10">
                {t.q}
              </blockquote>
              <figcaption className="border-t border-border pt-8">
                <div className="text-sm font-medium">{t.name}</div>
                <div className="eyebrow mt-1 text-muted-foreground">{t.role}</div>
                <div className="eyebrow mt-3 text-brass">{t.project}</div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────
   9. FLOOR & TABLE INTERLUDE — quiet editorial break
───────────────────────────────────────────── */
export function HomeFloorTableInterlude() {
  const ref = useReveal<HTMLDivElement>();
  return (
    <section className="bg-background border-t border-border overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[560px]">
        <div
          ref={ref}
          className="reveal flex flex-col justify-center px-8 md:px-16 lg:px-20 xl:px-28 py-24"
        >
          <p className="eyebrow mb-8">Floor & Table Lamps</p>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-[56px] leading-[1.04] mb-8 max-w-lg">
            Light that lives
            <em className="not-italic text-muted-foreground"> at eye level.</em>
          </h2>
          <p className="text-muted-foreground text-base leading-relaxed max-w-md mb-10">
            Our floor and table collection is for rooms where the light needs to be near you —
            beside a reading chair, at the corner of a writing desk, beside a bed.
            Each piece is solid brass, with shades in hand-blown glass, alabaster or parchment.
          </p>
          <Link
            to="/collections/floor-table"
            className="inline-flex items-center gap-3 border border-foreground px-8 py-4 text-[11px] uppercase tracking-[0.28em] hover:bg-foreground hover:text-background transition-colors duration-500 self-start"
          >
            Explore floor & table →
          </Link>
        </div>
        <div className="relative min-h-[400px] lg:min-h-0">
          <img
            src={n6}
            alt="House of Lumere floor lamps and table lighting"
            className="absolute inset-0 h-full w-full object-cover"
            loading="lazy"
            style={{ transform: "rotate(-45deg) scale(1.44)" }}
          />
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────
   10. CLOSING CTA — WhatsApp, direct and human
───────────────────────────────────────────── */
export function HomeClosingCTA() {
  const ref = useReveal<HTMLDivElement>();
  return (
    <section className="bg-foreground text-background py-28 md:py-40">
      <div
        ref={ref}
        className="reveal mx-auto max-w-[1400px] px-6 md:px-10 lg:px-14 text-center"
      >
        <p className="eyebrow !text-background/40 mb-8 tracking-[0.3em]">+91 93775 55555</p>
        <h2 className="font-serif text-5xl md:text-6xl lg:text-[80px] leading-[1.03] text-background mb-8 max-w-4xl mx-auto">
          Tell us about the room<br />
          <em className="not-italic text-background/35">you are trying to light.</em>
        </h2>
        <p className="text-background/55 text-base md:text-lg leading-relaxed max-w-xl mx-auto mb-14">
          WhatsApp us directly. Share a photo of the room, a ceiling height, a reference.
          We respond the same day with a specification and a price.
          No form. No wait list. Just a conversation.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-5 mb-16">
          <a
            href="https://wa.me/919377555555?text=Hello%20House%20of%20Lumere%2C%20I%20would%20like%20to%20discuss%20a%20lighting%20project.%20Here%20are%20my%20details%3A"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-3 bg-background text-foreground px-10 py-5 text-[11px] uppercase tracking-[0.28em] hover:bg-background/90 transition-colors duration-500"
          >
            <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            WhatsApp us now
          </a>
          <Link
            to="/contact"
            className="inline-flex items-center gap-3 border border-white/30 text-background px-10 py-5 text-[11px] uppercase tracking-[0.28em] hover:border-white/60 transition-colors duration-500"
          >
            Use the contact form →
          </Link>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-8 md:gap-16 pt-10 border-t border-white/15">
          {[
            ["Same day", "Response"],
            ["Surat showroom", "Visit in person"],
            ["38 countries", "Worldwide delivery"],
          ].map(([val, label]) => (
            <div key={label} className="text-center">
              <div className="font-serif text-xl text-background mb-1">{val}</div>
              <div className="eyebrow !text-background/40">{label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
