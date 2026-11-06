import { i as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { b as useNavigate } from "../_libs/@tanstack/react-router+[...].mjs";
import { g as CircleAlert, p as Copy, y as Check } from "../_libs/lucide-react.mjs";
import { i as PageIntro, n as BottomNav, t as AppHeader } from "./AppHeader-DywyPLR7.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/payment-C8g70YP6.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var details = [
	["Bank Name", "Lendora Finance, N.A."],
	["Account Name", "Lendora Finance Activation Escrow"],
	["Account Number", "722 9255 026"],
	["Wire Routing Number", "026 009 593"],
	["Account Type", "Everyday Checking"],
	["Payment Reference", "APP-2026-118734"],
	["Bank Address", "400 Market St, Minneapolis, MN 55402"]
];
function PaymentPage() {
	const nav = useNavigate();
	const [copied, setCopied] = (0, import_react.useState)(null);
	const isAuth = typeof window !== "undefined" && !!sessionStorage.getItem("lendora_auth");
	(0, import_react.useEffect)(() => {
		if (!isAuth) nav({ to: "/login" });
	}, [isAuth, nav]);
	if (!isAuth) return null;
	const copy = (k, v) => {
		navigator.clipboard?.writeText(v.replace(/\s/g, k === "Bank Address" || k.includes("Name") ? " " : ""));
		setCopied(k);
		setTimeout(() => setCopied(null), 1500);
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto min-h-screen w-full max-w-md md:max-w-3xl lg:max-w-5xl md:border-x bg-card pb-24",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AppHeader, {
				back: true,
				title: "Home"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(PageIntro, {
				title: "Pay your $5,000 activation fee",
				children: [
					"Send the fee by bank transfer to the account below on or before ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", {
						className: "text-foreground",
						children: "Monday, November 9, 2026"
					}),
					"."
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "px-6 py-5 md:px-10",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "rounded-lg border-2 border-border p-4 text-center",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-xs font-semibold uppercase tracking-wide text-muted-foreground",
								children: "Amount due"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-3xl font-extrabold",
								children: "$5,000.00"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-1 text-xs font-semibold text-brand",
								children: "Due Mon, Nov 9, 2026"
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-6 text-base font-bold",
						children: "Transfer details"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-2 divide-y-2 divide-border md:grid md:grid-cols-2 md:gap-x-10 md:divide-y-0 md:[&>*]:border-b-2",
						children: details.map(([k, v]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center justify-between gap-3 py-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-xs text-muted-foreground",
								children: k
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-sm font-bold",
								children: v
							})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								onClick: () => copy(k, v),
								"aria-label": `Copy ${k}`,
								className: "text-cta",
								children: copied === k ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "h-4 w-4" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Copy, { className: "h-4 w-4" })
							})]
						}, k))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-5 flex gap-3 rounded-lg bg-cream p-4 text-sm",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleAlert, { className: "h-5 w-5 shrink-0 text-brand" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
							"Include your payment reference ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", { children: "APP-2026-118734" }),
							" so we can match your transfer. Your loan of $80,000 is released within 1 business day of receipt."
						] })]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BottomNav, {})
		]
	});
}
//#endregion
export { PaymentPage as component };
