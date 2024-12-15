import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import { HomePage } from './pages/HomePage';
import { Consultation } from './pages/Consultation';
import { Guide } from './pages/Guide';
function App() {
    return (_jsx(Router, { children: _jsxs("div", { className: "min-h-screen bg-white", children: [_jsx(Header, {}), _jsxs(Routes, { children: [_jsx(Route, { path: "/", element: _jsx(HomePage, {}) }), _jsx(Route, { path: "/consultation", element: _jsx(Consultation, {}) }), _jsx(Route, { path: "/guide", element: _jsx(Guide, {}) })] }), _jsx(Footer, {}), _jsx(ToastContainer, { position: "top-right" })] }) }));
}
export default App;
//# sourceMappingURL=App.js.map