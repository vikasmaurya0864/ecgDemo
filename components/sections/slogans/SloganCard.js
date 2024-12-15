"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SloganCard = SloganCard;
const jsx_runtime_1 = require("react/jsx-runtime");
function SloganCard({ icon: Icon, title, description }) {
    return ((0, jsx_runtime_1.jsxs)("div", { className: "flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300", children: [(0, jsx_runtime_1.jsx)("div", { className: "flex items-center justify-center h-16 w-16 rounded-full bg-red-100 text-red-500 mb-6", children: (0, jsx_runtime_1.jsx)(Icon, { className: "h-8 w-8" }) }), (0, jsx_runtime_1.jsx)("h3", { className: "text-xl font-bold text-gray-900 mb-2", children: title }), (0, jsx_runtime_1.jsx)("p", { className: "text-gray-500", children: description })] }));
}
//# sourceMappingURL=SloganCard.js.map