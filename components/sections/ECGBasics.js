"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ECGBasics = ECGBasics;
const jsx_runtime_1 = require("react/jsx-runtime");
const lucide_react_1 = require("lucide-react");
const ECGWaveComparison_1 = require("./ecg/ECGWaveComparison");
const waves = [
    {
        name: "P Wave",
        description: "Represents atrial depolarization",
        details: "First positive deflection, indicates start of cardiac cycle"
    },
    {
        name: "QRS Complex",
        description: "Represents ventricular depolarization",
        details: "Most prominent wave, shows heart's main pumping action"
    },
    {
        name: "T Wave",
        description: "Represents ventricular repolarization",
        details: "Recovery phase of ventricles"
    },
    {
        name: "PR Interval",
        description: "Time from P wave start to QRS complex start",
        details: "Normal range: 0.12-0.20 seconds"
    },
    {
        name: "ST Segment",
        description: "Time between QRS end and T wave start",
        details: "Important for detecting heart attacks"
    }
];
function ECGBasics() {
    return ((0, jsx_runtime_1.jsx)("div", { className: "py-16 bg-gray-50", children: (0, jsx_runtime_1.jsxs)("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: [(0, jsx_runtime_1.jsxs)("div", { className: "text-center", children: [(0, jsx_runtime_1.jsx)("h2", { className: "text-3xl font-extrabold text-gray-900 sm:text-4xl", children: "Understanding ECG Waves" }), (0, jsx_runtime_1.jsx)("p", { className: "mt-4 text-xl text-gray-500", children: "Learn the basics of electrocardiogram readings" })] }), (0, jsx_runtime_1.jsxs)("div", { className: "mt-12 grid grid-cols-1 lg:grid-cols-2 gap-8", children: [(0, jsx_runtime_1.jsxs)("div", { className: "relative", children: [(0, jsx_runtime_1.jsx)("img", { src: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=800&q=80", alt: "ECG Wave Pattern", className: "rounded-lg shadow-lg" }), (0, jsx_runtime_1.jsxs)("div", { className: "absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-6 rounded-b-lg", children: [(0, jsx_runtime_1.jsx)(lucide_react_1.Activity, { className: "h-8 w-8 text-white" }), (0, jsx_runtime_1.jsx)("p", { className: "text-white text-lg font-semibold mt-2", children: "Normal Sinus Rhythm Pattern" })] })] }), (0, jsx_runtime_1.jsx)("div", { className: "space-y-6", children: waves.map((wave) => ((0, jsx_runtime_1.jsxs)("div", { className: "bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300", children: [(0, jsx_runtime_1.jsx)("h3", { className: "text-lg font-semibold text-gray-900", children: wave.name }), (0, jsx_runtime_1.jsx)("p", { className: "mt-2 text-red-500 font-medium", children: wave.description }), (0, jsx_runtime_1.jsx)("p", { className: "mt-1 text-gray-500", children: wave.details })] }, wave.name))) })] }), (0, jsx_runtime_1.jsx)(ECGWaveComparison_1.ECGWaveComparison, {})] }) }));
}
//# sourceMappingURL=ECGBasics.js.map