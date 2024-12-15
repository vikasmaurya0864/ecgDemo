"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TechnicalSpecs = TechnicalSpecs;
const jsx_runtime_1 = require("react/jsx-runtime");
const lucide_react_1 = require("lucide-react");
const SpecCard_1 = require("./specs/SpecCard");
const specifications = [
    {
        icon: lucide_react_1.Monitor,
        title: "Digital Display",
        description: "High-resolution OLED display for real-time ECG visualization",
        details: [
            "2.4-inch OLED display (240x320 pixels)",
            "Real-time waveform visualization",
            "Touch-enabled interface",
            "Anti-glare coating",
            "Adjustable brightness levels"
        ]
    },
    {
        icon: lucide_react_1.Cpu,
        title: "Arduino Implementation",
        description: "Built with Arduino UNO for robust signal processing and reliability",
        details: [
            "ATmega328P microcontroller",
            "16 MHz crystal oscillator",
            "32KB Flash memory",
            "2KB SRAM"
        ]
    },
    {
        icon: lucide_react_1.Monitor,
        title: "Sensors",
        description: "High-precision AD8232 ECG sensor module with medical-grade electrodes",
        details: [
            "Integrated signal conditioning",
            "High signal-to-noise ratio",
            "Adjustable gain settings",
            "Lead-off detection"
        ]
    },
    {
        icon: lucide_react_1.Wifi,
        title: "Connectivity",
        description: "Bluetooth module for wireless data transmission to mobile devices",
        details: [
            "HC-05 Bluetooth module",
            "Real-time data streaming",
            "Low power consumption",
            "30ft range"
        ]
    },
    {
        icon: lucide_react_1.Database,
        title: "Data Processing",
        description: "Advanced filtering and analysis algorithms",
        details: [
            "Digital filtering",
            "Baseline wander removal",
            "R-peak detection",
            "Heart rate calculation"
        ]
    },
    {
        icon: lucide_react_1.Battery,
        title: "Power System",
        description: "Efficient power management for extended use",
        details: [
            "7-12V DC input",
            "USB power option",
            "Voltage regulation",
            "Power monitoring"
        ]
    },
    {
        icon: lucide_react_1.Smartphone,
        title: "Mobile Integration",
        description: "Seamless integration with mobile devices",
        details: [
            "iOS and Android compatibility",
            "Real-time data sync",
            "Cloud backup support",
            "Automated alerts"
        ]
    }
];
function TechnicalSpecs() {
    return ((0, jsx_runtime_1.jsx)("div", { id: "specifications", className: "py-16 bg-gray-50", children: (0, jsx_runtime_1.jsxs)("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: [(0, jsx_runtime_1.jsxs)("div", { className: "text-center", children: [(0, jsx_runtime_1.jsx)("h2", { className: "text-3xl font-extrabold text-gray-900 sm:text-4xl", children: "Technical Specifications" }), (0, jsx_runtime_1.jsx)("p", { className: "mt-4 text-xl text-gray-500", children: "Advanced Arduino-based ECG monitoring system" })] }), (0, jsx_runtime_1.jsx)("div", { className: "mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3", children: specifications.map((spec) => ((0, jsx_runtime_1.jsx)(SpecCard_1.SpecCard, { ...spec }, spec.title))) }), (0, jsx_runtime_1.jsx)("div", { className: "mt-12 text-center", children: (0, jsx_runtime_1.jsx)("p", { className: "text-gray-500 max-w-2xl mx-auto", children: "Our Arduino UNO-based implementation ensures reliable performance while maintaining affordability and ease of maintenance. The system is designed for both clinical and personal use, with emphasis on accuracy and user safety." }) })] }) }));
}
//# sourceMappingURL=TechnicalSpecs.js.map