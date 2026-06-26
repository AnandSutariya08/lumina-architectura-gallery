import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { t as useReveal } from "./use-reveal-Cazrll_v.mjs";
import { t as PageHero } from "./PageHero-FPKD9s-6.mjs";
import { g as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as CATEGORIES } from "./lumere-data-CUlWfz6c.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/collections.index-DWqWhpoB.js
var import_jsx_runtime = require_jsx_runtime();
function CollectionsPage() {
	const ref = useReveal();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
		eyebrow: "The Collections",
		title: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
			"An index of",
			" ",
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("em", {
				className: "not-italic text-muted-foreground",
				children: "light, drawn at architectural scale."
			})
		] }),
		intro: "Seven editorial collections — from sculptural chandeliers to portable lamps. Each piece is built to order in solid brass, hand-blown glass and hand-cut crystal."
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "bg-background py-24 md:py-32",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			ref,
			className: "reveal mx-auto max-w-[1600px] px-6 md:px-10 lg:px-14",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-20 md:gap-y-28",
				children: CATEGORIES.map((c, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/collections/$category",
					params: { category: c.slug },
					className: `group block ${i % 2 === 1 ? "md:mt-24" : ""}`,
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "relative overflow-hidden bg-bone aspect-[4/5]",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: c.image,
							alt: c.title,
							loading: "lazy",
							width: 1200,
							height: 1500,
							className: "h-full w-full object-cover transition-transform duration-[1800ms] ease-out group-hover:scale-[1.04]"
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-6 flex items-end justify-between",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "eyebrow mb-2",
								children: c.count
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "font-serif text-2xl md:text-3xl",
								children: c.title
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-3 max-w-sm text-muted-foreground text-sm",
								children: c.short
							})
						] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-[11px] uppercase tracking-[0.28em] text-foreground/70 transition-transform duration-500 group-hover:translate-x-2 whitespace-nowrap",
							children: "Explore →"
						})]
					})]
				}, c.slug))
			})
		})
	})] });
}
//#endregion
export { CollectionsPage as component };
