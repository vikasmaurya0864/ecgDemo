"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FeatureCard = FeatureCard;
const jsx_runtime_1 = require("react/jsx-runtime");
function FeatureCard({ icon: Icon, name, description }) {
    return ((0, jsx_runtime_1.jsxs)("div", { className: "relative", children: [(0, jsx_runtime_1.jsx)("div", { className: "absolute h-12 w-12 text-red-500", children: (0, jsx_runtime_1.jsx)(Icon, { className: "h-6 w-6" }) }), (0, jsx_runtime_1.jsxs)("div", { className: "ml-16", children: [(0, jsx_runtime_1.jsx)("h3", { className: "text-lg font-medium text-gray-900", children: name }), (0, jsx_runtime_1.jsx)("p", { className: "mt-2 text-base text-gray-500", children: description })] })] }));
}
//# sourceMappingURL=FeatureCard.js.map