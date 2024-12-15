"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Header = Header;
const jsx_runtime_1 = require("react/jsx-runtime");
const React = require("react");
const react_router_dom_1 = require("react-router-dom");
const lucide_react_1 = require("lucide-react");
const Logo_1 = require("../ui/Logo");
function Header() {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);
    const location = (0, react_router_dom_1.useLocation)();
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
    return ((0, jsx_runtime_1.jsxs)("header", { className: "bg-white shadow-sm fixed w-full top-0 z-50", children: [(0, jsx_runtime_1.jsxs)("nav", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between", children: [(0, jsx_runtime_1.jsxs)(react_router_dom_1.Link, { to: "/", className: "flex items-center", children: [(0, jsx_runtime_1.jsx)(Logo_1.Logo, { size: "sm", className: "mr-2" }), (0, jsx_runtime_1.jsx)("span", { className: "text-xl font-bold text-gray-900", children: "RhythemicBeats" })] }), (0, jsx_runtime_1.jsxs)("div", { className: "hidden md:flex space-x-8", children: [(0, jsx_runtime_1.jsx)(NavLink, { onClick: () => scrollToSection('features'), children: "Features" }), (0, jsx_runtime_1.jsx)(NavLink, { onClick: () => scrollToSection('how-it-works'), children: "How it Works" }), (0, jsx_runtime_1.jsx)(NavLink, { onClick: () => scrollToSection('specifications'), children: "Specifications" }), (0, jsx_runtime_1.jsx)(NavLink, { onClick: () => scrollToSection('contact'), children: "Contact" })] }), (0, jsx_runtime_1.jsx)("button", { className: "md:hidden", onClick: () => setIsMenuOpen(!isMenuOpen), children: isMenuOpen ? ((0, jsx_runtime_1.jsx)(lucide_react_1.X, { className: "h-6 w-6 text-gray-600" })) : ((0, jsx_runtime_1.jsx)(lucide_react_1.Menu, { className: "h-6 w-6 text-gray-600" })) })] }), isMenuOpen && ((0, jsx_runtime_1.jsx)("div", { className: "md:hidden", children: (0, jsx_runtime_1.jsxs)("div", { className: "px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white shadow-lg", children: [(0, jsx_runtime_1.jsx)(MobileNavLink, { onClick: () => scrollToSection('features'), children: "Features" }), (0, jsx_runtime_1.jsx)(MobileNavLink, { onClick: () => scrollToSection('how-it-works'), children: "How it Works" }), (0, jsx_runtime_1.jsx)(MobileNavLink, { onClick: () => scrollToSection('specifications'), children: "Specifications" }), (0, jsx_runtime_1.jsx)(MobileNavLink, { onClick: () => scrollToSection('contact'), children: "Contact" })] }) }))] }));
}
function NavLink({ onClick, children }) {
    return ((0, jsx_runtime_1.jsx)("button", { onClick: onClick, className: "text-gray-600 hover:text-gray-900 transition-colors duration-200", children: children }));
}
function MobileNavLink({ onClick, children }) {
    return ((0, jsx_runtime_1.jsx)("button", { onClick: onClick, className: "block w-full text-left px-3 py-2 text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 rounded-md", children: children }));
}
//# sourceMappingURL=Header.js.map