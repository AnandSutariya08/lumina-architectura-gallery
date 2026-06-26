import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { g as Link } from "../_libs/@tanstack/react-router+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/collections._category.index-T8P9hsZT.js
var import_jsx_runtime = require_jsx_runtime();
var SplitNotFoundComponent = () => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
	className: "pt-48 pb-32 text-center",
	children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "eyebrow mb-6",
			children: "404"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
			className: "font-serif text-5xl mb-8",
			children: "Collection not found."
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
			to: "/collections",
			className: "link-underline text-[11px] uppercase tracking-[0.28em]",
			children: "View all collections →"
		})
	]
});
//#endregion
export { SplitNotFoundComponent as notFoundComponent };
