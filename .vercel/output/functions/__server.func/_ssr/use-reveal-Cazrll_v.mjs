import { r as __toESM } from "../_runtime.mjs";
import { r as require_react } from "../_libs/react+tanstack__react-query.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/use-reveal-Cazrll_v.js
var import_react = /* @__PURE__ */ __toESM(require_react());
function useReveal() {
	const ref = (0, import_react.useRef)(null);
	(0, import_react.useEffect)(() => {
		const el = ref.current;
		if (!el) return;
		const io = new IntersectionObserver((entries) => {
			for (const e of entries) if (e.isIntersecting) {
				e.target.classList.add("is-visible");
				io.unobserve(e.target);
			}
		}, {
			threshold: .12,
			rootMargin: "0px 0px -60px 0px"
		});
		io.observe(el);
		return () => io.disconnect();
	}, []);
	return ref;
}
//#endregion
export { useReveal as t };
