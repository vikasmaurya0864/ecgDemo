import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Calendar } from 'lucide-react';
const Input = ({ label, type, required = false, placeholder = '' }) => {
    return (_jsxs("div", { className: "mb-4", children: [_jsx("label", { className: "block text-sm font-medium text-gray-700", children: label }), _jsx("input", { type: type, required: required, placeholder: placeholder, className: "mt-2 p-2 border border-gray-300 rounded-md w-full" })] }));
};
const TextArea = ({ label, rows, placeholder = '' }) => {
    return (_jsxs("div", { className: "mb-4", children: [_jsx("label", { className: "block text-sm font-medium text-gray-700", children: label }), _jsx("textarea", { rows: rows, placeholder: placeholder, className: "mt-2 p-2 border border-gray-300 rounded-md w-full" })] }));
};
const Button = ({ className, children }) => {
    return (_jsx("button", { className: `py-2 px-4 bg-blue-500 text-white rounded-md ${className}`, children: children }));
};
// Consultation Component
export function Consultation() {
    return (_jsx("div", { className: "min-h-screen bg-gray-50 pt-20", children: _jsxs("div", { className: "max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12", children: [_jsx("h1", { className: "text-4xl font-bold text-gray-900 text-center", children: "Book a Consultation" }), _jsx("p", { className: "mt-4 text-xl text-gray-500 text-center", children: "Schedule a free consultation with our healthcare experts" }), _jsx("form", { className: "mt-12 bg-white rounded-lg shadow-lg p-8", children: _jsxs("div", { className: "space-y-6", children: [_jsxs("div", { className: "grid grid-cols-1 gap-6 sm:grid-cols-2", children: [_jsx(Input, { label: "First Name", type: "text", required: true }), _jsx(Input, { label: "Last Name", type: "text", required: true })] }), _jsx(Input, { label: "Email", type: "email", required: true }), _jsx(Input, { label: "Phone", type: "tel", required: true }), _jsxs("div", { className: "flex items-center", children: [_jsx(Calendar, { className: "h-5 w-5 text-red-500 mr-2" }), _jsx(Input, { label: "Preferred Date", type: "date", required: true })] }), _jsx(TextArea, { label: "Additional Notes", rows: 4, placeholder: "Please let us know if you have any specific concerns or questions" }), _jsx(Button, { className: "w-full", children: "Schedule Consultation" })] }) })] }) }));
}
//# sourceMappingURL=Consultation.js.map