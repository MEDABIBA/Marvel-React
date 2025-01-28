"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_router_dom_1 = require("react-router-dom");
const SignleCharacter = ({ data }) => {
    const { thumbnail, title, description, name } = data;
    return ((0, jsx_runtime_1.jsxs)("div", { className: "comics-descr", children: [(0, jsx_runtime_1.jsx)("img", { className: "comics-descr-img", src: thumbnail, alt: title }), (0, jsx_runtime_1.jsxs)("div", { className: "comics-descr-right", children: [(0, jsx_runtime_1.jsxs)("div", { className: "comics-descr-right-info", children: [(0, jsx_runtime_1.jsx)("h2", { className: "comics-descr-right-title", children: name }), (0, jsx_runtime_1.jsx)("h2", { className: "comics-descr-right-title", children: title }), (0, jsx_runtime_1.jsx)("p", { className: "comics-descr-right-text", children: description })] }), (0, jsx_runtime_1.jsx)(react_router_dom_1.Link, { to: "/", className: "button-back", children: "Back to all" })] })] }));
};
exports.default = SignleCharacter;
