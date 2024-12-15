"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Features = Features;
const jsx_runtime_1 = require("react/jsx-runtime");
const lucide_react_1 = require("lucide-react");
const FeatureCard_1 = require("./features/FeatureCard");
const features = [
    {
        name: 'Real-time Monitoring',
        description: 'Get instant ECG readings with professional-grade accuracy',
        icon: lucide_react_1.Heart,
    },
    {
        name: 'Bluetooth Connectivity',
        description: 'Seamlessly connect to your smartphone or tablet',
        icon: lucide_react_1.Bluetooth,
    },
    {
        name: 'Long Battery Life',
        description: 'Up to 48 hours of continuous monitoring on a single charge',
        icon: lucide_react_1.Battery,
    },
    {
        name: 'Cloud Storage',
        description: 'Secure storage and access to your ECG history',
        icon: lucide_react_1.Cloud,
    },
    {
        name: 'Mobile App',
        description: 'User-friendly app for iOS and Android devices',
        icon: lucide_react_1.Smartphone,
    },
    {
        name: '24/7 Support',
        description: 'Round-the-clock technical and medical support',
        icon: lucide_react_1.Clock,
    },
];
function Features() {
    return ((0, jsx_runtime_1.jsx)("div", { id: "features", className: "py-12 bg-gray-50", children: (0, jsx_runtime_1.jsxs)("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: [(0, jsx_runtime_1.jsxs)("div", { className: "lg:text-center", children: [(0, jsx_runtime_1.jsx)("h2", { className: "text-base text-red-500 font-semibold tracking-wide uppercase", children: "Features" }), (0, jsx_runtime_1.jsx)("p", { className: "mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl", children: "Advanced Heart Monitoring Made Simple" })] }), (0, jsx_runtime_1.jsx)("div", { className: "mt-10", children: (0, jsx_runtime_1.jsx)("div", { className: "grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3", children: features.map((feature) => ((0, jsx_runtime_1.jsx)(FeatureCard_1.FeatureCard, { ...feature }, feature.name))) }) })] }) }));
}
//# sourceMappingURL=Features.js.map