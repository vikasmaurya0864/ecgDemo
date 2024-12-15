import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { CheckCircle } from 'lucide-react';
const guidelines = [
    {
        title: "For Adults",
        items: [
            "Start CPR if the person is unresponsive and not breathing normally",
            "Use chest compressions and rescue breaths in a 30:2 ratio",
            "Continue until emergency services arrive or the person shows signs of life",
        ],
    },
    {
        title: "For Children (1-8 years)",
        items: [
            "Use less force for chest compressions (about 2 inches deep)",
            "Start with 5 rescue breaths before beginning compressions",
            "Use the same 30:2 ratio for compressions to breaths",
        ],
    },
    {
        title: "For Infants (Under 1 year)",
        items: [
            "Use two fingers for chest compressions (about 1.5 inches deep)",
            "Cover both nose and mouth with your mouth for rescue breaths",
            "Use gentler breaths suitable for infant lung capacity",
        ],
    },
];
export function CPRGuidelines() {
    return (_jsxs("div", { className: "py-12", children: [_jsx("h3", { className: "text-2xl font-bold text-gray-900 mb-8", children: "Age-Specific CPR Guidelines" }), _jsx("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-6", children: guidelines.map((guideline) => (_jsxs("div", { className: "bg-white p-6 rounded-lg shadow-md", children: [_jsx("h4", { className: "text-lg font-semibold text-gray-900 mb-4", children: guideline.title }), _jsx("ul", { className: "space-y-3", children: guideline.items.map((item, index) => (_jsxs("li", { className: "flex items-start", children: [_jsx(CheckCircle, { className: "h-5 w-5 text-green-500 mt-1 flex-shrink-0" }), _jsx("span", { className: "ml-3 text-gray-600", children: item })] }, index))) })] }, guideline.title))) })] }));
}
//# sourceMappingURL=CPRGuidelines.js.map