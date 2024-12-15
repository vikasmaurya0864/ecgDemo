"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_router_dom_1 = require("react-router-dom");
const react_toastify_1 = require("react-toastify");
require("react-toastify/dist/ReactToastify.css");
const Header_1 = require("./components/layout/Header");
const Footer_1 = require("./components/layout/Footer");
const HomePage_1 = require("./pages/HomePage");
const Consultation_1 = require("./pages/Consultation");
const Guide_1 = require("./pages/Guide");
function App() {
    return ((0, jsx_runtime_1.jsx)(react_router_dom_1.BrowserRouter, { children: (0, jsx_runtime_1.jsxs)("div", { className: "min-h-screen bg-white", children: [(0, jsx_runtime_1.jsx)(Header_1.Header, {}), (0, jsx_runtime_1.jsxs)(react_router_dom_1.Routes, { children: [(0, jsx_runtime_1.jsx)(react_router_dom_1.Route, { path: "/", element: (0, jsx_runtime_1.jsx)(HomePage_1.HomePage, {}) }), (0, jsx_runtime_1.jsx)(react_router_dom_1.Route, { path: "/consultation", element: (0, jsx_runtime_1.jsx)(Consultation_1.Consultation, {}) }), (0, jsx_runtime_1.jsx)(react_router_dom_1.Route, { path: "/guide", element: (0, jsx_runtime_1.jsx)(Guide_1.Guide, {}) })] }), (0, jsx_runtime_1.jsx)(Footer_1.Footer, {}), (0, jsx_runtime_1.jsx)(react_toastify_1.ToastContainer, { position: "top-right" })] }) }));
}
exports.default = App;
//# sourceMappingURL=App.js.map