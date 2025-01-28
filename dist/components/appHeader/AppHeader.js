"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_router_dom_1 = require("react-router-dom");
const AppHeader = () => {
    return ((0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, { children: (0, jsx_runtime_1.jsxs)("header", { className: "header", children: [(0, jsx_runtime_1.jsx)(react_router_dom_1.Link, { className: "header-marvel", to: "/", children: "Marvel" }), (0, jsx_runtime_1.jsx)("span", { className: "header-marvel", children: " information portal" }), (0, jsx_runtime_1.jsxs)("ul", { className: "header-ul", children: [(0, jsx_runtime_1.jsxs)("li", { className: "characters", children: [" ", (0, jsx_runtime_1.jsx)(react_router_dom_1.NavLink, { end: true, to: "/", className: ({ isActive, isPending }) => isPending ? "" : isActive ? "button-active" : "", children: "Characters" })] }), (0, jsx_runtime_1.jsx)("li", { children: "/" }), (0, jsx_runtime_1.jsx)("li", { className: "comics", children: (0, jsx_runtime_1.jsx)(react_router_dom_1.NavLink, { end: true, to: "/comics", className: ({ isActive, isPending }) => isPending ? "" : isActive ? "button-active" : "", children: "Comics" }) })] })] }) }));
};
exports.default = AppHeader;
