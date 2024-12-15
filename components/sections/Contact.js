"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Contact = Contact;
const jsx_runtime_1 = require("react/jsx-runtime");
const React = require("react");
const browser_1 = __importDefault(require("@emailjs/browser"));
const react_toastify_1 = require("react-toastify");
const lucide_react_1 = require("lucide-react");
function Input({ label, name, type = 'text', value, onChange, required }) {
    return ((0, jsx_runtime_1.jsxs)("div", { children: [(0, jsx_runtime_1.jsx)("label", { htmlFor: name, className: "block text-sm font-medium text-gray-700", children: label }), (0, jsx_runtime_1.jsx)("input", { id: name, name: name, type: type, value: value, onChange: onChange, required: required, className: "mt-2 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" })] }));
}
function TextArea({ label, name, value, onChange, rows, required }) {
    return ((0, jsx_runtime_1.jsxs)("div", { children: [(0, jsx_runtime_1.jsx)("label", { htmlFor: name, className: "block text-sm font-medium text-gray-700", children: label }), (0, jsx_runtime_1.jsx)("textarea", { id: name, name: name, value: value, onChange: onChange, rows: rows, required: required, className: "mt-2 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" })] }));
}
function Button({ type, children, className, disabled }) {
    return ((0, jsx_runtime_1.jsx)("button", { type: type, className: `py-3 px-6 bg-blue-500 text-white font-bold rounded-lg hover:bg-blue-600 transition ${className}`, disabled: disabled, children: children }));
}
// Contact Component
function Contact() {
    const [isSubmitting, setIsSubmitting] = React.useState(false);
    const [formData, setFormData] = React.useState({
        name: '',
        email: '',
        phone: '',
        message: ''
    });
    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        try {
            await browser_1.default.send('service_rhythemicbeats', 'template_contact', {
                from_name: formData.name,
                from_email: formData.email,
                phone: formData.phone,
                message: formData.message,
                to_email: 'rhythemicbeats@gmail.com'
            }, 'YOUR_PUBLIC_KEY' // Replace with your EmailJS public key
            );
            react_toastify_1.toast.success('Message sent successfully!');
            setFormData({ name: '', email: '', phone: '', message: '' });
        }
        catch (error) {
            react_toastify_1.toast.error('Failed to send message. Please try again.');
        }
        finally {
            setIsSubmitting(false);
        }
    };
    const handleChange = (e) => {
        setFormData(prev => ({
            ...prev,
            [e.target.name]: e.target.value
        }));
    };
    return ((0, jsx_runtime_1.jsx)("div", { id: "contact", className: "bg-gray-900 py-16", children: (0, jsx_runtime_1.jsxs)("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: [(0, jsx_runtime_1.jsxs)("div", { className: "text-center", children: [(0, jsx_runtime_1.jsx)("h2", { className: "text-3xl font-extrabold text-white sm:text-4xl", children: "Contact Us" }), (0, jsx_runtime_1.jsx)("p", { className: "mt-4 text-xl text-gray-300", children: "Get in touch with our team" })] }), (0, jsx_runtime_1.jsxs)("div", { className: "mt-12 grid grid-cols-1 gap-8 lg:grid-cols-2", children: [(0, jsx_runtime_1.jsx)("div", { className: "bg-white rounded-lg shadow-lg p-8", children: (0, jsx_runtime_1.jsxs)("form", { onSubmit: handleSubmit, className: "space-y-6", children: [(0, jsx_runtime_1.jsx)(Input, { label: "Full Name", name: "name", value: formData.name, onChange: handleChange, required: true }), (0, jsx_runtime_1.jsx)(Input, { label: "Email", type: "email", name: "email", value: formData.email, onChange: handleChange, required: true }), (0, jsx_runtime_1.jsx)(Input, { label: "Phone", type: "tel", name: "phone", value: formData.phone, onChange: handleChange, required: true }), (0, jsx_runtime_1.jsx)(TextArea, { label: "Message", name: "message", value: formData.message, onChange: handleChange, rows: 4, required: true }), (0, jsx_runtime_1.jsx)(Button, { type: "submit", className: "w-full", disabled: isSubmitting, children: isSubmitting ? 'Sending...' : 'Send Message' })] }) }), (0, jsx_runtime_1.jsx)("div", { className: "bg-white rounded-lg shadow-lg p-8", children: (0, jsx_runtime_1.jsxs)("div", { className: "space-y-8", children: [(0, jsx_runtime_1.jsxs)("div", { className: "flex items-start", children: [(0, jsx_runtime_1.jsx)(lucide_react_1.Phone, { className: "h-6 w-6 text-red-500 mt-1" }), (0, jsx_runtime_1.jsxs)("div", { className: "ml-4", children: [(0, jsx_runtime_1.jsx)("h3", { className: "text-lg font-medium text-gray-900", children: "Phone" }), (0, jsx_runtime_1.jsx)("p", { className: "mt-1 text-gray-500", children: "+91 6397083985" }), (0, jsx_runtime_1.jsx)("p", { className: "mt-1 text-gray-500", children: "+91 9510303644" })] })] }), (0, jsx_runtime_1.jsxs)("div", { className: "flex items-start", children: [(0, jsx_runtime_1.jsx)(lucide_react_1.Mail, { className: "h-6 w-6 text-red-500 mt-1" }), (0, jsx_runtime_1.jsxs)("div", { className: "ml-4", children: [(0, jsx_runtime_1.jsx)("h3", { className: "text-lg font-medium text-gray-900", children: "Email" }), (0, jsx_runtime_1.jsx)("p", { className: "mt-1 text-gray-500", children: "rhythemicbeats@gmail.com" })] })] }), (0, jsx_runtime_1.jsxs)("div", { className: "flex items-start", children: [(0, jsx_runtime_1.jsx)(lucide_react_1.MapPin, { className: "h-6 w-6 text-red-500 mt-1" }), (0, jsx_runtime_1.jsxs)("div", { className: "ml-4", children: [(0, jsx_runtime_1.jsx)("h3", { className: "text-lg font-medium text-gray-900", children: "Emergency" }), (0, jsx_runtime_1.jsx)("p", { className: "mt-1 text-gray-500", children: "Ambulance: 102" }), (0, jsx_runtime_1.jsx)("p", { className: "mt-1 text-gray-500", children: "Emergency: 112" })] })] })] }) })] })] }) }));
}
//# sourceMappingURL=Contact.js.map