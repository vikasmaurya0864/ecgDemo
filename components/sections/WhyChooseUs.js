"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WhyChooseUs = WhyChooseUs;
const jsx_runtime_1 = require("react/jsx-runtime");
const lucide_react_1 = require("lucide-react");
const reasons = [
    {
        icon: lucide_react_1.Heart,
        title: "Precision Monitoring",
        description: "High-accuracy ECG readings with medical-grade AD8232 sensor",
        hindi: "सटीक निगरानी"
    },
    {
        icon: lucide_react_1.Shield,
        title: "Reliable Technology",
        description: "Built on proven Arduino UNO platform with robust performance",
        hindi: "विश्वसनीय तकनीक"
    },
    {
        icon: lucide_react_1.Clock,
        title: "24/7 Monitoring",
        description: "Continuous heart monitoring with instant alerts",
        hindi: "चौबीसों घंटे निगरानी"
    },
    {
        icon: lucide_react_1.Zap,
        title: "Quick Response",
        description: "Immediate notification system for irregular patterns",
        hindi: "त्वरित प्रतिक्रिया"
    },
    {
        icon: lucide_react_1.Users,
        title: "Expert Support",
        description: "Dedicated medical professionals at your service",
        hindi: "विशेषज्ञ सहायता"
    },
    {
        icon: lucide_react_1.Award,
        title: "Quality Assured",
        description: "ISO certified manufacturing and testing process",
        hindi: "गुणवत्ता आश्वासन"
    }
];
function WhyChooseUs() {
    return ((0, jsx_runtime_1.jsx)("div", { className: "py-16 bg-white", children: (0, jsx_runtime_1.jsxs)("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: [(0, jsx_runtime_1.jsxs)("div", { className: "text-center", children: [(0, jsx_runtime_1.jsx)("h2", { className: "text-3xl font-extrabold text-gray-900 sm:text-4xl", children: "Why Choose Rhythemic Beats?" }), (0, jsx_runtime_1.jsx)("p", { className: "mt-4 text-xl text-gray-500", children: "Leading innovation in portable cardiac monitoring" })] }), (0, jsx_runtime_1.jsx)("div", { className: "mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3", children: reasons.map((reason) => ((0, jsx_runtime_1.jsxs)("div", { className: "relative bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300", children: [(0, jsx_runtime_1.jsxs)("div", { className: "flex items-center", children: [(0, jsx_runtime_1.jsx)("div", { className: "flex-shrink-0", children: (0, jsx_runtime_1.jsx)(reason.icon, { className: "h-8 w-8 text-red-500" }) }), (0, jsx_runtime_1.jsxs)("div", { className: "ml-4", children: [(0, jsx_runtime_1.jsx)("h3", { className: "text-lg font-medium text-gray-900", children: reason.title }), (0, jsx_runtime_1.jsx)("p", { className: "mt-1 text-sm text-red-500 font-medium", children: reason.hindi })] })] }), (0, jsx_runtime_1.jsx)("p", { className: "mt-4 text-gray-500", children: reason.description })] }, reason.title))) })] }) }));
}
//# sourceMappingURL=WhyChooseUs.js.map