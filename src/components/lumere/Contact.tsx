import { useReveal } from "@/hooks/use-reveal";
import contact from "@/assets/contact.jpg";

function Field({ label, type = "text", as = "input" }: { label: string; type?: string; as?: "input" | "textarea" }) {
  return (
    <label className="block">
      <span className="eyebrow block mb-3">{label}</span>
      {as === "textarea" ? (
        <textarea
          rows={4}
          className="w-full bg-transparent border-b border-border py-3 text-base text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-foreground transition-colors resize-none"
        />
      ) : (
        <input
          type={type}
          className="w-full bg-transparent border-b border-border py-3 text-base text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-foreground transition-colors"
        />
      )}
    </label>
  );
}

export function Contact() {
  const ref = useReveal<HTMLDivElement>();
  return (
    <section id="contact" className="bg-bone">
      <div ref={ref} className="reveal grid grid-cols-1 lg:grid-cols-2">
        <div className="relative min-h-[400px] lg:min-h-[800px]">
          <img src={contact} alt="A quiet luxury interior with brass sconces" loading="lazy" width={1400} height={1800} className="absolute inset-0 h-full w-full object-cover" />
        </div>
        <div className="px-6 md:px-12 lg:px-20 py-20 md:py-32">
          <p className="eyebrow mb-6">Begin a conversation</p>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl mb-10 leading-[1.05]">
            Tell us about the room you are lighting.
          </h2>

          <form className="space-y-8 max-w-xl">
            <div className="grid grid-cols-2 gap-8">
              <Field label="Name" />
              <Field label="Phone" type="tel" />
            </div>
            <div className="grid grid-cols-2 gap-8">
              <Field label="Email" type="email" />
              <Field label="City" />
            </div>
            <Field label="Project type" />
            <Field label="Tell us more" as="textarea" />

            <div className="flex flex-wrap items-center gap-4 pt-6">
              <button
                type="button"
                className="inline-flex items-center gap-4 bg-foreground text-background px-8 py-4 text-[11px] uppercase tracking-[0.28em] hover:bg-foreground/90 transition-colors duration-500"
              >
                Send Inquiry
              </button>
              <a
                href="https://wa.me/000000000?text=Hello%20House%20of%20Lumere"
                target="_blank"
                rel="noreferrer"
                className="link-underline text-[11px] uppercase tracking-[0.28em]"
              >
                Or reach us on WhatsApp →
              </a>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
