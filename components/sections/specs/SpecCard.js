"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SpecCard = SpecCard;
const jsx_runtime_1 = require("react/jsx-runtime");
function SpecCard({ icon: Icon, title, description, details }) {
    return ((0, jsx_runtime_1.jsxs)("div", { className: "bg-white rounded-lg shadow-lg p-6", children: [(0, jsx_runtime_1.jsxs)("div", { className: "flex items-center mb-4", children: [(0, jsx_runtime_1.jsx)("div", { className: "bg-red-100 rounded-lg p-3", children: (0, jsx_runtime_1.jsx)(Icon, { className: "h-6 w-6 text-red-500" }) }), (0, jsx_runtime_1.jsx)("h3", { className: "ml-4 text-lg font-medium text-gray-900", children: title })] }), (0, jsx_runtime_1.jsx)("p", { className: "text-gray-500 mb-4", children: description }), (0, jsx_runtime_1.jsx)("ul", { className: "space-y-2", children: details.map((detail, index) => ((0, jsx_runtime_1.jsxs)("li", { className: "flex items-center text-sm text-gray-600", children: [(0, jsx_runtime_1.jsx)("span", { className: "w-1.5 h-1.5 bg-red-500 rounded-full mr-2" }), detail] }, index))) })] }));
}
//# sourceMappingURL=SpecCard.js.map