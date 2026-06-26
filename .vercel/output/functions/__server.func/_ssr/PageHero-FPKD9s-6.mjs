import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { t as useReveal } from "./use-reveal-Cazrll_v.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/PageHero-FPKD9s-6.js
var import_jsx_runtime = require_jsx_runtime();
function PageHero({ eyebrow, title, intro }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "bg-bone pt-40 md:pt-52 pb-24 md:pb-32 border-b border-border",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			ref: useReveal(),
			className: "reveal mx-auto max-w-[1400px] px-6 md:px-10 lg:px-14",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "eyebrow mb-8",
					children: eyebrow
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "font-serif text-5xl md:text-7xl lg:text-[96px] leading-[1.02] max-w-5xl",
					children: title
				}),
				intro ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-10 max-w-2xl text-muted-foreground text-base md:text-lg leading-relaxed",
					children: intro
				}) : null
			]
		})
	});
}
//#endregion
export { PageHero as t };
