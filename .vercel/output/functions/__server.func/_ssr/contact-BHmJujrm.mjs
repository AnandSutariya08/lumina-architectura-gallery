import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { t as useReveal } from "./use-reveal-Cazrll_v.mjs";
import { t as PageHero } from "./PageHero-FPKD9s-6.mjs";
import { t as contact_default } from "./contact-B5k23OP7.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/contact-BHmJujrm.js
var import_jsx_runtime = require_jsx_runtime();
function Field({ label, type = "text", as = "input" }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
		className: "block",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "eyebrow block mb-3",
			children: label
		}), as === "textarea" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
			rows: 4,
			className: "w-full bg-transparent border-b border-border py-3 text-base text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-foreground transition-colors resize-none"
		}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
			type,
			className: "w-full bg-transparent border-b border-border py-3 text-base text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-foreground transition-colors"
		})]
	});
}
function Contact() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "contact",
		className: "bg-bone",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			ref: useReveal(),
			className: "reveal grid grid-cols-1 lg:grid-cols-2",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "relative min-h-[400px] lg:min-h-[800px]",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: contact_default,
					alt: "A quiet luxury interior with brass sconces",
					loading: "lazy",
					width: 1400,
					height: 1800,
					className: "absolute inset-0 h-full w-full object-cover"
				})
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "px-6 md:px-12 lg:px-20 py-20 md:py-32",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "eyebrow mb-6",
						children: "Begin a conversation"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-serif text-4xl md:text-5xl lg:text-6xl mb-10 leading-[1.05]",
						children: "Tell us about the room you are lighting."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
						className: "space-y-8 max-w-xl",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "grid grid-cols-2 gap-8",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, { label: "Name" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
									label: "Phone",
									type: "tel"
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "grid grid-cols-2 gap-8",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
									label: "Email",
									type: "email"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, { label: "City" })]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, { label: "Project type" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
								label: "Tell us more",
								as: "textarea"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex flex-wrap items-center gap-4 pt-6",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									type: "button",
									className: "inline-flex items-center gap-4 bg-foreground text-background px-8 py-4 text-[11px] uppercase tracking-[0.28em] hover:bg-foreground/90 transition-colors duration-500",
									children: "Send Inquiry"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: "https://wa.me/919377555555?text=Hello%20House%20of%20Lumere%2C%20I%20would%20like%20to%20make%20an%20enquiry.",
									target: "_blank",
									rel: "noreferrer",
									className: "link-underline text-[11px] uppercase tracking-[0.28em]",
									children: "Or reach us on WhatsApp →"
								})]
							})
						]
					})
				]
			})]
		})
	});
}
var SHOWROOMS = [{
	city: "Surat",
	address: "Surat, Gujarat, India",
	tel: "+91 93775 55555"
}];
function ContactPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
			eyebrow: "Begin a conversation",
			title: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: ["Tell us about the room ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("em", {
				className: "not-italic text-muted-foreground",
				children: "you are lighting."
			})] }),
			intro: "Our atelier responds within one working day. For trade enquiries, please include the project name and scope."
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Contact, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "bg-background py-24 md:py-32 border-t border-border",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto max-w-[1400px] px-6 md:px-10 lg:px-14",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "eyebrow mb-6",
						children: "Showrooms"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-serif text-4xl md:text-5xl mb-16",
						children: "By appointment."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16",
						children: SHOWROOMS.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "border-t border-border pt-8",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "font-serif text-3xl mb-4",
									children: s.city
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-muted-foreground text-sm leading-relaxed",
									children: s.address
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-3 text-sm",
									children: s.tel
								})
							]
						}, s.city))
					})
				]
			})
		})
	] });
}
//#endregion
export { ContactPage as component };
