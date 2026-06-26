import { r as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { t as useReveal } from "./use-reveal-Cazrll_v.mjs";
import { t as PageHero } from "./PageHero-FPKD9s-6.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/faq-C98ZjYDF.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var FAQS = [
	{
		q: "Do you ship internationally?",
		a: "Yes. We ship globally with white-glove logistics partners. Lead times typically range from 6 to 14 weeks depending on the piece and finish."
	},
	{
		q: "Can fixtures be customised?",
		a: "Almost every piece can be tailored — dimensions, finishes, glass tones, drop height, electrical specification. Our atelier produces to order."
	},
	{
		q: "Do you work with architects and designers?",
		a: "We work primarily through the trade. Dedicated account managers, technical files, IES data and CAD blocks are available on request."
	},
	{
		q: "How do I view a piece in person?",
		a: "Our showrooms are by appointment. We also coordinate private installations and architectural visits during specification."
	},
	{
		q: "What about installation?",
		a: "We provide installation guidance, technical drawings and on-site supervision in select cities. Network electricians are vetted by the house."
	}
];
function FAQ() {
	const [open, setOpen] = (0, import_react.useState)(0);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "bg-background py-28 md:py-40",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			ref: useReveal(),
			className: "reveal mx-auto max-w-[1100px] px-6 md:px-10",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mb-16 md:mb-20",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "eyebrow mb-6",
					children: "Frequently Asked"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-serif text-5xl md:text-6xl",
					children: "Questions, answered."
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "border-t border-border",
				children: FAQS.map((f, i) => {
					const isOpen = open === i;
					return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "border-b border-border",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							onClick: () => setOpen(isOpen ? -1 : i),
							className: "w-full flex items-center justify-between gap-8 py-7 md:py-8 text-left",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-serif text-xl md:text-2xl pr-4",
								children: f.q
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: `text-2xl font-light text-muted-foreground transition-transform duration-500 ${isOpen ? "rotate-45" : ""}`,
								children: "+"
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "grid transition-all duration-700 ease-out",
							style: { gridTemplateRows: isOpen ? "1fr" : "0fr" },
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "overflow-hidden",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "pb-8 pr-12 text-muted-foreground text-base md:text-lg leading-relaxed max-w-2xl",
									children: f.a
								})
							})
						})]
					}, f.q);
				})
			})]
		})
	});
}
function FaqPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
		eyebrow: "Frequently Asked",
		title: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: ["Questions, ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("em", {
			className: "not-italic text-muted-foreground",
			children: "answered with care."
		})] }),
		intro: "For anything not covered here, our atelier responds to written enquiries within one working day."
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FAQ, {})] });
}
//#endregion
export { FaqPage as component };
