"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Slogans = Slogans;
const jsx_runtime_1 = require("react/jsx-runtime");
const lucide_react_1 = require("lucide-react");
const SloganCard_1 = require("./slogans/SloganCard");
const slogans = [
    {
        icon: lucide_react_1.Heart,
        title: "Your Heart's Guardian",
        description: "Professional ECG monitoring that travels with you everywhere",
    },
    {
        icon: lucide_react_1.Shield,
        title: "Peace of Mind, Anytime",
        description: "FDA-approved technology for reliable heart health tracking",
    },
    {
        icon: lucide_react_1.Clock,
        title: "Every Beat Matters",
        description: "Real-time monitoring with instant medical-grade analysis",
    },
];
function Slogans() {
    return ((0, jsx_runtime_1.jsx)("div", { className: "bg-gradient-to-b from-white to-gray-50 py-16", children: (0, jsx_runtime_1.jsxs)("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: [(0, jsx_runtime_1.jsxs)("div", { className: "text-center", children: [(0, jsx_runtime_1.jsx)("h2", { className: "text-3xl font-extrabold text-gray-900 sm:text-4xl", children: "Why Choose RhythemicBeats?" }), (0, jsx_runtime_1.jsx)("p", { className: "mt-4 text-xl text-gray-500", children: "Leading the revolution in portable cardiac monitoring" })] }), (0, jsx_runtime_1.jsx)("div", { className: "mt-16", children: (0, jsx_runtime_1.jsx)("div", { className: "grid grid-cols-1 gap-8 md:grid-cols-3", children: slogans.map((slogan) => ((0, jsx_runtime_1.jsx)(SloganCard_1.SloganCard, { ...slogan }, slogan.title))) }) })] }) }));
}
//# sourceMappingURL=Slogans.js.map