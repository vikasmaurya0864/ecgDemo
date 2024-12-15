import { jsx as _jsx } from "react/jsx-runtime";
export function Logo({ className = '', size = 'md' }) {
    const sizes = {
        sm: 'h-8 w-8',
        md: 'h-12 w-12',
        lg: 'h-16 w-16'
    };
    return (_jsx("img", { src: "/logo.png", alt: "RhythemicBeats Logo", className: `${sizes[size]} ${className}` }));
}
//# sourceMappingURL=Logo.js.map