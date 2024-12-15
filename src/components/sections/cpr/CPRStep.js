import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
export function CPRStep({ icon: Icon, title, description, index }) {
    return (_jsxs("div", { className: "flex items-start", children: [_jsx("div", { className: "flex-shrink-0", children: _jsx("div", { className: "flex items-center justify-center h-12 w-12 rounded-md bg-red-500 text-white", children: _jsx(Icon, { className: "h-6 w-6" }) }) }), _jsxs("div", { className: "ml-4", children: [_jsxs("h3", { className: "text-lg font-medium text-gray-900", children: ["Step ", index + 1, ": ", title] }), _jsx("p", { className: "mt-2 text-gray-500", children: description })] })] }));
}
//# sourceMappingURL=CPRStep.js.map