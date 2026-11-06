import { i as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { b as useNavigate, y as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { _ as ChevronRight, c as Landmark, t as Wallet, u as FilePenLine, x as BadgeCheck } from "../_libs/lucide-react.mjs";
import { n as BottomNav, t as AppHeader } from "./AppHeader-DywyPLR7.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-BB3PpcQ0.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var steps = [
	{
		title: "Pay activation fee",
		sub: "$5,000.00 due by Mon, Nov 9",
		icon: Wallet,
		to: "/payment"
	},
	{
		title: "Set up payments",
		sub: "Link your bank for monthly repayments",
		icon: Landmark,
		to: "/profile"
	},
	{
		title: "Sign agreement",
		sub: "Review and e-sign your terms",
		icon: FilePenLine,
		to: "/agreement"
	},
	{
		title: "Receive your funds",
		sub: "Released once activation is complete",
		icon: BadgeCheck
	}
];
function Index() {
	const nav = useNavigate();
	const isAuth = typeof window !== "undefined" && !!sessionStorage.getItem("lendora_auth");
	(0, import_react.useEffect)(() => {
		if (!isAuth) nav({ to: "/login" });
	}, [isAuth, nav]);
	if (!isAuth) return null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto min-h-screen w-full max-w-md md:max-w-3xl lg:max-w-5xl md:border-x bg-card pb-24",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AppHeader, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "bg-cream px-6 pb-10 pt-10",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-[32px] md:text-5xl font-extrabold leading-tight tracking-tight",
					children: "Congrats, you're approved for $80,000!"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-5 text-[15px] leading-relaxed text-muted-foreground",
					children: "Complete the steps below to activate your loan. Your $5,000 activation fee is due on or before Monday, November 9, 2026."
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
				className: "px-6 py-4 md:grid md:grid-cols-2 md:gap-x-10 md:px-10",
				children: steps.map(({ title, sub, icon: Icon, to }, i) => {
					const inner = /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "relative",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "h-10 w-10 stroke-[1.4]" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "absolute -bottom-1 -right-1 h-3 w-5 rounded-sm bg-brand" })]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex-1",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "text-base font-medium",
								children: [
									i + 1,
									". ",
									title
								]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-xs text-muted-foreground",
								children: sub
							})]
						}),
						to && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, { className: "h-5 w-5 text-cta" })
					] });
					return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
						className: "border-b-2 border-border",
						children: to ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to,
							className: "flex items-center gap-5 py-5",
							children: inner
						}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "flex items-center gap-5 py-5",
							children: inner
						})
					}, title);
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "px-6 pt-2 md:px-10",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/payment",
					className: "block rounded-md bg-brand py-3.5 text-center font-bold text-primary-foreground md:inline-block md:min-w-[280px] md:px-8",
					children: "Pay $5,000 Activation Fee"
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BottomNav, {})
		]
	});
}
//#endregion
export { Index as component };
