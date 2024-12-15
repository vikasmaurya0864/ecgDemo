import { createRequire as _createRequire } from "module";
const __require = _createRequire(import.meta.url);
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
const React = __require("react");
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { Logo } from '../ui/Logo';
export function Header() {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);
    const location = useLocation();
    const isHomePage = location.pathname === '/';
    const scrollToSection = (sectionId) => {
        if (!isHomePage) {
            window.location.href = `/#${sectionId}`;
            return;
        }
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
        setIsMenuOpen(false);
    };
    return (_jsxs("header", { className: "bg-white shadow-sm fixed w-full top-0 z-50", children: [_jsxs("nav", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between", children: [_jsxs(Link, { to: "/", className: "flex items-center", children: [_jsx(Logo, { size: "sm", className: "mr-2" }), _jsx("span", { className: "text-xl font-bold text-gray-900", children: "RhythemicBeats" })] }), _jsxs("div", { className: "hidden md:flex space-x-8", children: [_jsx(NavLink, { onClick: () => scrollToSection('features'), children: "Features" }), _jsx(NavLink, { onClick: () => scrollToSection('how-it-works'), children: "How it Works" }), _jsx(NavLink, { onClick: () => scrollToSection('specifications'), children: "Specifications" }), _jsx(NavLink, { onClick: () => scrollToSection('contact'), children: "Contact" })] }), _jsx("button", { className: "md:hidden", onClick: () => setIsMenuOpen(!isMenuOpen), children: isMenuOpen ? (_jsx(X, { className: "h-6 w-6 text-gray-600" })) : (_jsx(Menu, { className: "h-6 w-6 text-gray-600" })) })] }), isMenuOpen && (_jsx("div", { className: "md:hidden", children: _jsxs("div", { className: "px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white shadow-lg", children: [_jsx(MobileNavLink, { onClick: () => scrollToSection('features'), children: "Features" }), _jsx(MobileNavLink, { onClick: () => scrollToSection('how-it-works'), children: "How it Works" }), _jsx(MobileNavLink, { onClick: () => scrollToSection('specifications'), children: "Specifications" }), _jsx(MobileNavLink, { onClick: () => scrollToSection('contact'), children: "Contact" })] }) }))] }));
}
function NavLink({ onClick, children }) {
    return (_jsx("button", { onClick: onClick, className: "text-gray-600 hover:text-gray-900 transition-colors duration-200", children: children }));
}
function MobileNavLink({ onClick, children }) {
    return (_jsx("button", { onClick: onClick, className: "block w-full text-left px-3 py-2 text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 rounded-md", children: children }));
}
//# sourceMappingURL=Header.js.map