import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Clock, Heart, Users, AlertCircle } from 'lucide-react';
import { CPRTechniques } from './cpr/CPRTechniques';
import { CPRGuidelines } from './cpr/CPRGuidelines';
import { CPRStep } from './cpr/CPRStep';
const steps = [
    {
        title: "Check the Scene & Response",
        description: "Ensure the area is safe and check if the person is responsive by tapping their shoulder and asking loudly if they're okay",
        icon: Users,
    },
    {
        title: "Call Emergency Services",
        description: "Dial emergency number (911) immediately and get an AED if available. If alone with an adult, call first then begin CPR",
        icon: Clock,
    },
    {
        title: "Begin Chest Compressions",
        description: "Push hard and fast at the center of the chest, allowing full chest recoil between compressions",
        icon: Heart,
    },
    {
        title: "Watch for Signs of Life",
        description: "Continue CPR until you see obvious signs of life, an AED is ready to use, or emergency medical services take over",
        icon: AlertCircle,
    },
];
export function CPRAwareness() {
    return (_jsx("div", { className: "py-16 bg-gray-50", children: _jsxs("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: [_jsxs("div", { className: "text-center", children: [_jsx("h2", { className: "text-3xl font-extrabold text-gray-900 sm:text-4xl", children: "CPR Awareness" }), _jsx("p", { className: "mt-4 text-xl text-gray-500", children: "Learn the basics of life-saving CPR" })] }), _jsxs("div", { className: "mt-12 lg:mt-16", children: [_jsxs("div", { className: "grid grid-cols-1 gap-8 lg:grid-cols-2", children: [_jsx("div", { className: "relative h-64 lg:h-auto", children: _jsx("img", { src: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1200&q=80", alt: "CPR Training", className: "w-full h-full object-cover rounded-lg shadow-lg" }) }), _jsx("div", { className: "space-y-8", children: steps.map((step, index) => (_jsx(CPRStep, { ...step, index: index }, step.title))) })] }), _jsx(CPRTechniques, {}), _jsx(CPRGuidelines, {}), _jsxs("div", { className: "mt-12 text-center bg-red-50 p-6 rounded-lg", children: [_jsx("h3", { className: "text-xl font-bold text-red-900 mb-4", children: "Remember" }), _jsxs("p", { className: "text-red-700", children: ["High-quality CPR is crucial for survival. The most important aspects are:", _jsx("br", {}), "Compress hard (2 inches deep), compress fast (100-120/min), allow full chest recoil,", _jsx("br", {}), "minimize interruptions, and avoid excessive ventilation."] })] }), _jsx("div", { className: "mt-8 text-center", children: _jsx("a", { href: "#contact", className: "inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-red-500 hover:bg-red-600 transition-colors duration-200", children: "Sign Up for CPR Training" }) })] })] }) }));
}
//# sourceMappingURL=CPRAwareness.js.map