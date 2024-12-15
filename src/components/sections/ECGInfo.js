import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Activity, AlertCircle, CheckCircle } from 'lucide-react';
import { ECGFeature } from './ecg/ECGFeature';
const features = [
    {
        icon: CheckCircle,
        title: "Regular P Waves",
        description: "Normal atrial depolarization pattern indicating healthy heart rhythm initiation."
    },
    {
        icon: Activity,
        title: "QRS Complex",
        description: "Proper ventricular contraction showing normal electrical conduction through the heart."
    },
    {
        icon: AlertCircle,
        title: "T Wave Characteristics",
        description: "Normal ventricular repolarization indicating healthy recovery phase."
    }
];
export function ECGInfo() {
    return (_jsx("div", { className: "py-16 bg-white", children: _jsxs("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: [_jsxs("div", { className: "text-center", children: [_jsx("h2", { className: "text-3xl font-extrabold text-gray-900 sm:text-4xl", children: "Understanding Normal ECG" }), _jsx("p", { className: "mt-4 text-xl text-gray-500", children: "Learn to recognize healthy heart patterns" })] }), _jsxs("div", { className: "mt-12 grid grid-cols-1 gap-8 lg:grid-cols-2", children: [_jsxs("div", { className: "relative", children: [_jsx("img", { src: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=1200&q=80", alt: "Normal ECG Reading", className: "rounded-lg shadow-lg" }), _jsx("div", { className: "absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-6 rounded-b-lg", children: _jsx("p", { className: "text-white text-lg font-semibold", children: "Normal Sinus Rhythm" }) })] }), _jsx("div", { className: "space-y-6", children: features.map((feature) => (_jsx(ECGFeature, { ...feature }, feature.title))) })] })] }) }));
}
//# sourceMappingURL=ECGInfo.js.map