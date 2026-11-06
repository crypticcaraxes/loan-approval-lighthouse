import { i as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { b as useNavigate, y as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { h as CircleCheck } from "../_libs/lucide-react.mjs";
import { i as PageIntro, n as BottomNav, t as AppHeader } from "./AppHeader-DywyPLR7.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/agreement-DFMCjBT5.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var summary = [
	["Borrower", "Ann caribell"],
	["Lender", "Lendora Finance, a division of Lendora Finance, N.A."],
	["Loan Amount", "$80,000.00"],
	["Interest Rate (APR)", "10.99% fixed"],
	["Term", "60 months"],
	["Monthly Payment", "$1,738.94"],
	["Activation Fee", "$5,000.00 · due Mon, Nov 9, 2026"],
	["First Payment", "Dec 15, 2026"]
];
var clauses = [
	["Activation Fee", "The Borrower agrees to pay a one-time approval and activation fee of $5,000.00 on or before Monday, November 9, 2026. Funds are released only after this fee is received."],
	["Promise to Pay", "The Borrower promises to repay $80,000.00 plus interest at 10.99% APR in 60 monthly installments of $1,738.94, due on the 15th of each month."],
	["Late Charges", "Payments received more than 15 days late incur a $39.00 fee and may be reported to credit bureaus."],
	["Prepayment", "The Borrower may prepay all or part of the balance at any time without penalty."],
	["Default", "Missing three consecutive payments may make the entire balance immediately due."],
	["Electronic Signature", "By signing below, the Borrower agrees that an electronic signature has the same legal effect as a handwritten one."]
];
function AgreementPage() {
	const nav = useNavigate();
	const [agree, setAgree] = (0, import_react.useState)(false);
	const [name, setName] = (0, import_react.useState)("");
	const [signed, setSigned] = (0, import_react.useState)(false);
	const valid = agree && name.trim().toLowerCase() === "Ann caribell";
	const isAuth = typeof window !== "undefined" && !!sessionStorage.getItem("lendora_auth");
	(0, import_react.useEffect)(() => {
		if (!isAuth) nav({ to: "/login" });
	}, [isAuth, nav]);
	if (!isAuth) return null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto min-h-screen w-full max-w-md md:max-w-3xl lg:max-w-5xl md:border-x bg-card pb-24",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AppHeader, {
				back: true,
				title: "Home"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageIntro, {
				title: "Sign your loan agreement",
				children: "Review the key terms below, then e-sign to continue."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "px-6 py-5 md:px-10",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "text-base font-bold",
						children: "Loan summary"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-2 divide-y-2 divide-border md:grid md:grid-cols-2 md:gap-x-10 md:divide-y-0 md:[&>*]:border-b-2",
						children: summary.map(([k, v]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex min-w-0 justify-between gap-4 py-3 text-sm",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-muted-foreground",
								children: k
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-right font-bold",
								children: v
							})]
						}, k))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-6 text-base font-bold",
						children: "Agreement"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-2 max-h-72 space-y-3 overflow-y-auto rounded-lg border-2 border-border p-4 text-sm leading-relaxed",
						children: clauses.map(([h, b], i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "font-bold",
							children: [
								i + 1,
								". ",
								h
							]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-muted-foreground",
							children: b
						})] }, h))
					}),
					signed ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-6 rounded-lg bg-cream p-5 text-center",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "mx-auto h-10 w-10 text-success" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 font-bold",
								children: "Agreement signed"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-sm text-muted-foreground",
								children: "Signed by Ann caribell on Nov 4, 2026"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/payment",
								className: "mt-4 block rounded-md bg-brand py-3 font-bold text-primary-foreground",
								children: "Pay $5,000 Activation Fee"
							})
						]
					}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-6 space-y-4",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
								className: "flex items-start gap-3 text-sm",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									type: "checkbox",
									checked: agree,
									onChange: (e) => setAgree(e.target.checked),
									className: "mt-0.5 h-4 w-4 accent-brand"
								}), "I have read and agree to the loan agreement and terms & conditions."]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
								htmlFor: "sig",
								className: "text-xs font-semibold text-muted-foreground",
								children: "Type your full legal name to sign"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								id: "sig",
								value: name,
								onChange: (e) => setName(e.target.value),
								placeholder: "Ann caribell",
								className: "mt-1 w-full rounded-md border-2 border-border bg-card px-3 py-3 text-lg italic outline-none focus:border-cta"
							})] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								disabled: !valid,
								onClick: () => setSigned(true),
								className: "w-full rounded-md bg-cta py-3.5 font-bold text-primary-foreground disabled:opacity-40",
								children: "Sign Agreement"
							})
						]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BottomNav, {})
		]
	});
}
//#endregion
export { AgreementPage as component };
