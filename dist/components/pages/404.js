"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_router_dom_1 = require("react-router-dom");
const ErrorMessage_1 = __importDefault(require("../errorMessage/ErrorMessage"));
const Page404 = () => {
    return ((0, jsx_runtime_1.jsxs)("div", { children: [(0, jsx_runtime_1.jsx)(ErrorMessage_1.default, {}), (0, jsx_runtime_1.jsx)("p", { style: { 'textAlign': 'center', 'fontWeight': 'bold', 'fontSize': '24px' }, children: "Page doesn't exist" }), (0, jsx_runtime_1.jsx)(react_router_dom_1.Link, { style: { 'display': 'block', 'textAlign': 'center', 'fontWeight': 'bold', 'fontSize': '24px', 'marginTop': '30px' }, to: "/", children: "Back to main page" })] }));
};
exports.default = Page404;
