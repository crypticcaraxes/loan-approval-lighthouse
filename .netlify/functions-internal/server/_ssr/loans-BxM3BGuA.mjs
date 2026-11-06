import { i as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { b as useNavigate, y as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { _ as ChevronRight, d as Eye, f as EyeOff, h as CircleCheck, i as Pencil, m as CircleQuestionMark } from "../_libs/lucide-react.mjs";
import { n as BottomNav, t as AppHeader } from "./AppHeader-DywyPLR7.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/loans-BxM3BGuA.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function Row({ label, value, sub }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex items-start justify-between gap-4 py-3",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "text-sm text-muted-foreground",
			children: label
		}), sub && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "text-xs text-muted-foreground/80",
			children: sub
		})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "text-right text-sm font-bold",
			children: value
		})]
	});
}
function LoansPage() {
	const nav = useNavigate();
	const [tab, setTab] = (0, import_react.useState)("details");
	const [showNo, setShowNo] = (0, import_react.useState)(false);
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
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "bg-cream px-6 pb-8 pt-6 text-center",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm font-semibold",
						children: "My Loan · 7731"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "mt-3 inline-flex items-center gap-1.5 rounded-full bg-success px-3 py-1 text-xs font-bold text-success-foreground",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "h-3.5 w-3.5" }), " APPROVED"]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-3 text-4xl font-extrabold",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("sup", {
								className: "text-lg",
								children: "$"
							}),
							"80,000",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("sup", {
								className: "text-lg",
								children: ".00"
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 text-xs text-muted-foreground",
						children: "Approved Nov 3, 2026 · Activation fee due Mon, Nov 9"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/payment",
						className: "mt-4 inline-block rounded-md bg-brand px-5 py-2.5 text-sm font-bold text-primary-foreground",
						children: "Pay $5,000 Activation Fee"
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "sticky top-[78px] md:top-[66px] z-10 grid grid-cols-3 border-b bg-card text-sm font-semibold",
				children: [
					["details", "Loan Details"],
					["terms", "Terms"],
					["application", "Application"]
				].map(([k, l]) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					onClick: () => setTab(k),
					className: `border-b-2 py-3 ${tab === k ? "border-brand text-foreground" : "border-transparent text-muted-foreground"}`,
					children: l
				}, k))
			}),
			tab === "details" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "bg-card px-5 pb-4 md:px-10",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-end justify-between py-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm text-muted-foreground",
							children: "Account Nickname"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-lg font-bold",
							children: "Personal Loan"
						})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Pencil, { className: "h-5 w-5 text-cta" })]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "divide-y",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, {
								label: "Account Number",
								value: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
									onClick: () => setShowNo(!showNo),
									className: "flex items-center gap-2 text-cta",
									children: [showNo ? "4031 8820 1177 7731" : "•••• •••• •••• 7731", showNo ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(EyeOff, { className: "h-4 w-4" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eye, { className: "h-4 w-4" })]
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, {
								label: "Original Principal Amount",
								value: "$80,000.00"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, {
								label: "Interest Rate (APR)",
								value: "10.99%"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, {
								label: "Loan Term",
								value: "60 months"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, {
								label: "Standard Monthly Payment",
								value: "$1,738.94"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, {
								label: "First Payment Due Date",
								value: "Dec 15, 2026"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, {
								label: "Maturity Date",
								value: "Nov 15, 2031"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, {
								label: "Approval / Activation Fee",
								value: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-brand",
									children: "$5,000.00"
								}),
								sub: "Due on or before Mon, Nov 9, 2026"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, {
								label: "Origination Fee",
								value: "$0.00"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, {
								label: "Total Interest (est.)",
								value: "$24,336.40"
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						className: "mt-2 flex w-full items-center justify-between py-3 font-bold",
						children: ["Payment Breakdown ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, { className: "h-5 w-5 text-muted-foreground" })]
					})
				]
			}),
			tab === "terms" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "space-y-4 bg-card px-5 py-5 md:px-10 text-sm leading-relaxed",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "text-base font-bold",
						children: "Loan Terms & Conditions"
					}),
					[
						["1. Approval & Activation Fee", "A one-time approval and activation fee of $5,000.00 must be paid on or before Monday, November 9, 2026. Your loan will be activated and funds released only once this fee is received. If payment is not received by this date, the approval may be withdrawn."],
						["2. Repayment", "You agree to repay the principal of $80,000.00 plus interest at a fixed APR of 10.99% in 60 equal monthly installments of $1,738.94, due on the 15th of each month."],
						["3. Interest", "Interest accrues daily on the unpaid principal balance using a 365-day year. The rate is fixed for the life of the loan."],
						["4. Late Payments", "A payment received more than 15 days after its due date incurs a late fee of $39.00. Late payments may be reported to credit bureaus."],
						["5. Prepayment", "You may pay off all or part of the loan at any time without a prepayment penalty. Extra payments reduce principal first."],
						["6. Autopay", "Enrolling in autopay from a linked bank account is optional and does not change your rate."],
						["7. Default", "Failure to make three consecutive payments may result in the full balance becoming immediately due and collection activity."],
						["8. Use of Funds", "Funds may not be used for post-secondary education, business purposes, or illegal activity."],
						["9. Governing Law", "This agreement is governed by federal law and the laws of the state in which the account was opened."]
					].map(([h, b]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "font-bold",
						children: h
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-muted-foreground",
						children: b
					})] }, h)),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "rounded-lg bg-cream p-3 text-xs",
						children: "Accepted electronically by Ann caribell on Nov 3, 2026 at 4:12 PM."
					})
				]
			}),
			tab === "application" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "bg-card px-5 pb-4 md:px-10",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "pt-4 text-base font-bold",
						children: "Application Summary"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "divide-y",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, {
								label: "Application ID",
								value: "APP-2026-118734"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, {
								label: "Submitted",
								value: "Oct 28, 2026"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, {
								label: "Decision",
								value: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-success",
									children: "Approved · Nov 3, 2026"
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, {
								label: "Requested Amount",
								value: "$80,000.00"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, {
								label: "Purpose",
								value: "Personal expenses"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, {
								label: "Applicant",
								value: "Ann caribell"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, {
								label: "Employer",
								value: "Acme Inc."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, {
								label: "Annual Income",
								value: "$92,000.00"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, {
								label: "Housing",
								value: "Rent · $1,450/mo"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, {
								label: "Disbursement Account",
								value: "Checking •••• 4948"
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "mt-4 text-sm font-bold",
						children: "Status Timeline"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
						className: "mt-3 space-y-3 border-l-2 border-success pl-4 text-sm",
						children: [
							"Application submitted · Oct 28",
							"Identity verified · Oct 29",
							"Underwriting review · Oct 31",
							"Approved · Nov 3",
							"Activation fee due · Nov 9"
						].map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "relative",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "absolute -left-[23px] top-1 h-3 w-3 rounded-full bg-success" }), s]
						}, s))
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "px-4 py-5 md:px-10",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/agreement",
						className: "flex w-full items-center gap-3 rounded-xl bg-card p-4 border-2 border-border",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleQuestionMark, { className: "h-6 w-6 text-brand" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "flex-1 text-left font-semibold",
								children: "Sign your loan agreement"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, { className: "h-5 w-5 text-cta" })
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-6 text-center text-sm font-semibold text-cta",
						children: "Privacy & Terms | Provide Feedback"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 text-center text-xs text-muted-foreground",
						children: "© 2026 Lendora Finance, N.A. Member FDIC. Equal Housing Lender."
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BottomNav, {})
		]
	});
}
//#endregion
export { LoansPage as component };
