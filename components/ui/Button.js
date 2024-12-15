"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Button = Button;
const jsx_runtime_1 = require("react/jsx-runtime");
function Button({ variant = 'primary', icon: Icon, children, className = '', ...props }) {
    const baseStyles = "inline-flex items-center justify-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium transition-colors duration-200";
    const variants = {
        primary: "text-white bg-red-500 hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500",
        secondary: "text-gray-700 bg-gray-100 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
    };
    return ((0, jsx_runtime_1.jsxs)("button", { className: `${baseStyles} ${variants[variant]} ${className}`, ...props, children: [Icon && (0, jsx_runtime_1.jsx)(Icon, { className: "h-5 w-5 mr-2" }), children] }));
}
//# sourceMappingURL=Button.js.map