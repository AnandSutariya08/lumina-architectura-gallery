import { A as notFound, m as createFileRoute, p as lazyRouteComponent } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as PRODUCTS, t as CATEGORIES } from "./lumere-data-CUlWfz6c.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/collections._category._product-BmMAsyBE.js
var $$splitComponentImporter = () => import("./collections._category._product-CWf9OmhM.mjs");
var $$splitNotFoundComponentImporter = () => import("./collections._category._product-kVQrz_d6.mjs");
var Route = createFileRoute("/collections/$category/$product")({
	loader: ({ params }) => {
		const category = CATEGORIES.find((c) => c.slug === params.category);
		if (!category) throw notFound();
		const product = PRODUCTS.find((p) => p.slug === params.product && p.category === params.category);
		if (!product) throw notFound();
		return {
			category,
			product,
			related: PRODUCTS.filter((p) => p.category === params.category && p.slug !== params.product).slice(0, 4)
		};
	},
	head: ({ loaderData }) => {
		const p = loaderData?.product;
		const title = p ? `${p.name} — House of Lumere` : "Product — House of Lumere";
		return { meta: [
			{ title },
			{
				name: "description",
				content: p?.description ?? ""
			},
			{
				property: "og:title",
				content: title
			},
			{
				property: "og:description",
				content: p?.description ?? ""
			},
			{
				property: "og:image",
				content: p?.img ?? ""
			}
		] };
	},
	notFoundComponent: lazyRouteComponent($$splitNotFoundComponentImporter, "notFoundComponent"),
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
//#endregion
export { Route as t };
