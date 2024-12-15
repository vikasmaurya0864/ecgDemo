"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Logo = Logo;
const jsx_runtime_1 = require("react/jsx-runtime");
function Logo({ className = '', size = 'md' }) {
    const sizes = {
        sm: 'h-8 w-8',
        md: 'h-12 w-12',
        lg: 'h-16 w-16'
    };
    return ((0, jsx_runtime_1.jsx)("img", { src: "/logo.png", alt: "RhythemicBeats Logo", className: `${sizes[size]} ${className}` }));
}
//# sourceMappingURL=Logo.js.map