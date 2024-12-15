import { createRequire as _createRequire } from "module";
const __require = _createRequire(import.meta.url);
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
const React = __require("react");
import emailjs from '@emailjs/browser';
import { toast } from 'react-toastify';
import { Mail, Phone, MapPin } from 'lucide-react';
function Input({ label, name, type = 'text', value, onChange, required }) {
    return (_jsxs("div", { children: [_jsx("label", { htmlFor: name, className: "block text-sm font-medium text-gray-700", children: label }), _jsx("input", { id: name, name: name, type: type, value: value, onChange: onChange, required: required, className: "mt-2 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" })] }));
}
function TextArea({ label, name, value, onChange, rows, required }) {
    return (_jsxs("div", { children: [_jsx("label", { htmlFor: name, className: "block text-sm font-medium text-gray-700", children: label }), _jsx("textarea", { id: name, name: name, value: value, onChange: onChange, rows: rows, required: required, className: "mt-2 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" })] }));
}
function Button({ type, children, className, disabled }) {
    return (_jsx("button", { type: type, className: `py-3 px-6 bg-blue-500 text-white font-bold rounded-lg hover:bg-blue-600 transition ${className}`, disabled: disabled, children: children }));
}
// Contact Component
export function Contact() {
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
            await emailjs.send('service_rhythemicbeats', 'template_contact', {
                from_name: formData.name,
                from_email: formData.email,
                phone: formData.phone,
                message: formData.message,
                to_email: 'rhythemicbeats@gmail.com'
            }, 'YOUR_PUBLIC_KEY' // Replace with your EmailJS public key
            );
            toast.success('Message sent successfully!');
            setFormData({ name: '', email: '', phone: '', message: '' });
        }
        catch (error) {
            toast.error('Failed to send message. Please try again.');
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
    return (_jsx("div", { id: "contact", className: "bg-gray-900 py-16", children: _jsxs("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: [_jsxs("div", { className: "text-center", children: [_jsx("h2", { className: "text-3xl font-extrabold text-white sm:text-4xl", children: "Contact Us" }), _jsx("p", { className: "mt-4 text-xl text-gray-300", children: "Get in touch with our team" })] }), _jsxs("div", { className: "mt-12 grid grid-cols-1 gap-8 lg:grid-cols-2", children: [_jsx("div", { className: "bg-white rounded-lg shadow-lg p-8", children: _jsxs("form", { onSubmit: handleSubmit, className: "space-y-6", children: [_jsx(Input, { label: "Full Name", name: "name", value: formData.name, onChange: handleChange, required: true }), _jsx(Input, { label: "Email", type: "email", name: "email", value: formData.email, onChange: handleChange, required: true }), _jsx(Input, { label: "Phone", type: "tel", name: "phone", value: formData.phone, onChange: handleChange, required: true }), _jsx(TextArea, { label: "Message", name: "message", value: formData.message, onChange: handleChange, rows: 4, required: true }), _jsx(Button, { type: "submit", className: "w-full", disabled: isSubmitting, children: isSubmitting ? 'Sending...' : 'Send Message' })] }) }), _jsx("div", { className: "bg-white rounded-lg shadow-lg p-8", children: _jsxs("div", { className: "space-y-8", children: [_jsxs("div", { className: "flex items-start", children: [_jsx(Phone, { className: "h-6 w-6 text-red-500 mt-1" }), _jsxs("div", { className: "ml-4", children: [_jsx("h3", { className: "text-lg font-medium text-gray-900", children: "Phone" }), _jsx("p", { className: "mt-1 text-gray-500", children: "+91 6397083985" }), _jsx("p", { className: "mt-1 text-gray-500", children: "+91 9510303644" })] })] }), _jsxs("div", { className: "flex items-start", children: [_jsx(Mail, { className: "h-6 w-6 text-red-500 mt-1" }), _jsxs("div", { className: "ml-4", children: [_jsx("h3", { className: "text-lg font-medium text-gray-900", children: "Email" }), _jsx("p", { className: "mt-1 text-gray-500", children: "rhythemicbeats@gmail.com" })] })] }), _jsxs("div", { className: "flex items-start", children: [_jsx(MapPin, { className: "h-6 w-6 text-red-500 mt-1" }), _jsxs("div", { className: "ml-4", children: [_jsx("h3", { className: "text-lg font-medium text-gray-900", children: "Emergency" }), _jsx("p", { className: "mt-1 text-gray-500", children: "Ambulance: 102" }), _jsx("p", { className: "mt-1 text-gray-500", children: "Emergency: 112" })] })] })] }) })] })] }) }));
}
//# sourceMappingURL=Contact.js.map