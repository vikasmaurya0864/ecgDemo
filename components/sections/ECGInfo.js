"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ECGInfo = ECGInfo;
const jsx_runtime_1 = require("react/jsx-runtime");
const lucide_react_1 = require("lucide-react");
const ECGFeature_1 = require("./ecg/ECGFeature");
const features = [
    {
        icon: lucide_react_1.CheckCircle,
        title: "Regular P Waves",
        description: "Normal atrial depolarization pattern indicating healthy heart rhythm initiation."
    },
    {
        icon: lucide_react_1.Activity,
        title: "QRS Complex",
        description: "Proper ventricular contraction showing normal electrical conduction through the heart."
    },
    {
        icon: lucide_react_1.AlertCircle,
        title: "T Wave Characteristics",
        description: "Normal ventricular repolarization indicating healthy recovery phase."
    }
];
function ECGInfo() {
    return ((0, jsx_runtime_1.jsx)("div", { className: "py-16 bg-white", children: (0, jsx_runtime_1.jsxs)("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: [(0, jsx_runtime_1.jsxs)("div", { className: "text-center", children: [(0, jsx_runtime_1.jsx)("h2", { className: "text-3xl font-extrabold text-gray-900 sm:text-4xl", children: "Understanding Normal ECG" }), (0, jsx_runtime_1.jsx)("p", { className: "mt-4 text-xl text-gray-500", children: "Learn to recognize healthy heart patterns" })] }), (0, jsx_runtime_1.jsxs)("div", { className: "mt-12 grid grid-cols-1 gap-8 lg:grid-cols-2", children: [(0, jsx_runtime_1.jsxs)("div", { className: "relative", children: [(0, jsx_runtime_1.jsx)("img", { src: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=1200&q=80", alt: "Normal ECG Reading", className: "rounded-lg shadow-lg" }), (0, jsx_runtime_1.jsx)("div", { className: "absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-6 rounded-b-lg", children: (0, jsx_runtime_1.jsx)("p", { className: "text-white text-lg font-semibold", children: "Normal Sinus Rhythm" }) })] }), (0, jsx_runtime_1.jsx)("div", { className: "space-y-6", children: features.map((feature) => ((0, jsx_runtime_1.jsx)(ECGFeature_1.ECGFeature, { ...feature }, feature.title))) })] })] }) }));
}
//# sourceMappingURL=ECGInfo.js.map