import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Heart, Shield, Clock, Zap, Users, Award } from 'lucide-react';
const reasons = [
    {
        icon: Heart,
        title: "Precision Monitoring",
        description: "High-accuracy ECG readings with medical-grade AD8232 sensor",
        hindi: "सटीक निगरानी"
    },
    {
        icon: Shield,
        title: "Reliable Technology",
        description: "Built on proven Arduino UNO platform with robust performance",
        hindi: "विश्वसनीय तकनीक"
    },
    {
        icon: Clock,
        title: "24/7 Monitoring",
        description: "Continuous heart monitoring with instant alerts",
        hindi: "चौबीसों घंटे निगरानी"
    },
    {
        icon: Zap,
        title: "Quick Response",
        description: "Immediate notification system for irregular patterns",
        hindi: "त्वरित प्रतिक्रिया"
    },
    {
        icon: Users,
        title: "Expert Support",
        description: "Dedicated medical professionals at your service",
        hindi: "विशेषज्ञ सहायता"
    },
    {
        icon: Award,
        title: "Quality Assured",
        description: "ISO certified manufacturing and testing process",
        hindi: "गुणवत्ता आश्वासन"
    }
];
export function WhyChooseUs() {
    return (_jsx("div", { className: "py-16 bg-white", children: _jsxs("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: [_jsxs("div", { className: "text-center", children: [_jsx("h2", { className: "text-3xl font-extrabold text-gray-900 sm:text-4xl", children: "Why Choose Rhythemic Beats?" }), _jsx("p", { className: "mt-4 text-xl text-gray-500", children: "Leading innovation in portable cardiac monitoring" })] }), _jsx("div", { className: "mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3", children: reasons.map((reason) => (_jsxs("div", { className: "relative bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300", children: [_jsxs("div", { className: "flex items-center", children: [_jsx("div", { className: "flex-shrink-0", children: _jsx(reason.icon, { className: "h-8 w-8 text-red-500" }) }), _jsxs("div", { className: "ml-4", children: [_jsx("h3", { className: "text-lg font-medium text-gray-900", children: reason.title }), _jsx("p", { className: "mt-1 text-sm text-red-500 font-medium", children: reason.hindi })] })] }), _jsx("p", { className: "mt-4 text-gray-500", children: reason.description })] }, reason.title))) })] }) }));
}
//# sourceMappingURL=WhyChooseUs.js.map