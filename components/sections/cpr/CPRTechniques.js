"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CPRTechniques = CPRTechniques;
const jsx_runtime_1 = require("react/jsx-runtime");
const lucide_react_1 = require("lucide-react");
const techniques = [
    {
        icon: lucide_react_1.Heart,
        title: "Compression Depth",
        description: "Push at least 2 inches (5 cm) deep for adults. Allow chest to fully recoil between compressions.",
    },
    {
        icon: lucide_react_1.Timer,
        title: "Compression Rate",
        description: "Maintain a rate of 100-120 compressions per minute. Think of the beat of 'Stayin' Alive'.",
    },
    {
        icon: lucide_react_1.Wind,
        title: "Rescue Breaths",
        description: "After 30 compressions, give 2 rescue breaths. Each breath should last about 1 second.",
    },
    {
        icon: lucide_react_1.AlertTriangle,
        title: "Minimize Interruptions",
        description: "Keep pauses in chest compressions to less than 10 seconds to maintain blood flow.",
    },
];
function CPRTechniques() {
    return ((0, jsx_runtime_1.jsxs)("div", { className: "py-12", children: [(0, jsx_runtime_1.jsx)("h3", { className: "text-2xl font-bold text-gray-900 mb-8", children: "Proper CPR Techniques" }), (0, jsx_runtime_1.jsx)("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-6", children: techniques.map((technique) => ((0, jsx_runtime_1.jsxs)("div", { className: "bg-white p-6 rounded-lg shadow-md", children: [(0, jsx_runtime_1.jsxs)("div", { className: "flex items-center mb-4", children: [(0, jsx_runtime_1.jsx)("div", { className: "bg-red-100 p-3 rounded-full", children: (0, jsx_runtime_1.jsx)(technique.icon, { className: "h-6 w-6 text-red-500" }) }), (0, jsx_runtime_1.jsx)("h4", { className: "ml-4 text-lg font-semibold text-gray-900", children: technique.title })] }), (0, jsx_runtime_1.jsx)("p", { className: "text-gray-600", children: technique.description })] }, technique.title))) })] }));
}
//# sourceMappingURL=CPRTechniques.js.map