"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ECGFeature = ECGFeature;
const jsx_runtime_1 = require("react/jsx-runtime");
function ECGFeature({ icon: Icon, title, description }) {
    return ((0, jsx_runtime_1.jsxs)("div", { className: "flex items-start", children: [(0, jsx_runtime_1.jsx)(Icon, { className: "h-6 w-6 text-red-500 mt-1 flex-shrink-0" }), (0, jsx_runtime_1.jsxs)("div", { className: "ml-3", children: [(0, jsx_runtime_1.jsx)("h3", { className: "text-lg font-medium text-gray-900", children: title }), (0, jsx_runtime_1.jsx)("p", { className: "mt-2 text-gray-500", children: description })] })] }));
}
//# sourceMappingURL=ECGFeature.js.map