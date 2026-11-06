//#region node_modules/.nitro/vite/services/ssr/assets/__23tanstack-start-server-fn-resolver-Ch2j56mN.js
var manifest = { "91f60f6e8da0765566e92cbbf8c39d709fde93787ba2daa6d837a1d262a1a321": {
	functionName: "diagnoseLayout_createServerFn_handler",
	importer: () => import("./_ssr/layout-help.functions-DHARwwWE.mjs")
} };
async function getServerFnById(id, access) {
	const serverFnInfo = manifest[id];
	if (!serverFnInfo) throw new Error("Server function info not found for " + id);
	const fnModule = serverFnInfo.module ??= await serverFnInfo.importer();
	if (!fnModule) throw new Error("Server function module not resolved for " + id);
	const action = fnModule[serverFnInfo.functionName];
	if (!action) throw new Error("Server function module export not resolved for serverFn ID: " + id);
	return action;
}
//#endregion
export { getServerFnById as t };
