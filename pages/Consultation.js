"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Consultation = Consultation;
const jsx_runtime_1 = require("react/jsx-runtime");
const lucide_react_1 = require("lucide-react");
const Input = ({ label, type, required = false, placeholder = '' }) => {
    return ((0, jsx_runtime_1.jsxs)("div", { className: "mb-4", children: [(0, jsx_runtime_1.jsx)("label", { className: "block text-sm font-medium text-gray-700", children: label }), (0, jsx_runtime_1.jsx)("input", { type: type, required: required, placeholder: placeholder, className: "mt-2 p-2 border border-gray-300 rounded-md w-full" })] }));
};
const TextArea = ({ label, rows, placeholder = '' }) => {
    return ((0, jsx_runtime_1.jsxs)("div", { className: "mb-4", children: [(0, jsx_runtime_1.jsx)("label", { className: "block text-sm font-medium text-gray-700", children: label }), (0, jsx_runtime_1.jsx)("textarea", { rows: rows, placeholder: placeholder, className: "mt-2 p-2 border border-gray-300 rounded-md w-full" })] }));
};
const Button = ({ className, children }) => {
    return ((0, jsx_runtime_1.jsx)("button", { className: `py-2 px-4 bg-blue-500 text-white rounded-md ${className}`, children: children }));
};
// Consultation Component
function Consultation() {
    return ((0, jsx_runtime_1.jsx)("div", { className: "min-h-screen bg-gray-50 pt-20", children: (0, jsx_runtime_1.jsxs)("div", { className: "max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12", children: [(0, jsx_runtime_1.jsx)("h1", { className: "text-4xl font-bold text-gray-900 text-center", children: "Book a Consultation" }), (0, jsx_runtime_1.jsx)("p", { className: "mt-4 text-xl text-gray-500 text-center", children: "Schedule a free consultation with our healthcare experts" }), (0, jsx_runtime_1.jsx)("form", { className: "mt-12 bg-white rounded-lg shadow-lg p-8", children: (0, jsx_runtime_1.jsxs)("div", { className: "space-y-6", children: [(0, jsx_runtime_1.jsxs)("div", { className: "grid grid-cols-1 gap-6 sm:grid-cols-2", children: [(0, jsx_runtime_1.jsx)(Input, { label: "First Name", type: "text", required: true }), (0, jsx_runtime_1.jsx)(Input, { label: "Last Name", type: "text", required: true })] }), (0, jsx_runtime_1.jsx)(Input, { label: "Email", type: "email", required: true }), (0, jsx_runtime_1.jsx)(Input, { label: "Phone", type: "tel", required: true }), (0, jsx_runtime_1.jsxs)("div", { className: "flex items-center", children: [(0, jsx_runtime_1.jsx)(lucide_react_1.Calendar, { className: "h-5 w-5 text-red-500 mr-2" }), (0, jsx_runtime_1.jsx)(Input, { label: "Preferred Date", type: "date", required: true })] }), (0, jsx_runtime_1.jsx)(TextArea, { label: "Additional Notes", rows: 4, placeholder: "Please let us know if you have any specific concerns or questions" }), (0, jsx_runtime_1.jsx)(Button, { className: "w-full", children: "Schedule Consultation" })] }) })] }) }));
}
//# sourceMappingURL=Consultation.js.map