"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CPRStep = CPRStep;
const jsx_runtime_1 = require("react/jsx-runtime");
function CPRStep({ icon: Icon, title, description, index }) {
    return ((0, jsx_runtime_1.jsxs)("div", { className: "flex items-start", children: [(0, jsx_runtime_1.jsx)("div", { className: "flex-shrink-0", children: (0, jsx_runtime_1.jsx)("div", { className: "flex items-center justify-center h-12 w-12 rounded-md bg-red-500 text-white", children: (0, jsx_runtime_1.jsx)(Icon, { className: "h-6 w-6" }) }) }), (0, jsx_runtime_1.jsxs)("div", { className: "ml-4", children: [(0, jsx_runtime_1.jsxs)("h3", { className: "text-lg font-medium text-gray-900", children: ["Step ", index + 1, ": ", title] }), (0, jsx_runtime_1.jsx)("p", { className: "mt-2 text-gray-500", children: description })] })] }));
}
//# sourceMappingURL=CPRStep.js.map