import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
export function Input({ label, error, className = '', ...props }) {
    return (_jsxs("div", { className: "w-full", children: [_jsx("label", { className: "block text-sm font-medium text-gray-700 mb-1", children: label }), _jsx("input", { className: `block w-full rounded-md border-gray-300 shadow-sm
          focus:border-red-500 focus:ring focus:ring-red-200 focus:ring-opacity-50
          ${error ? 'border-red-500' : ''} ${className}`, ...props }), error && (_jsx("p", { className: "mt-1 text-sm text-red-500", children: error }))] }));
}
//# sourceMappingURL=Input.js.map