"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const error_gif_1 = __importDefault(require("./error.gif"));
const ErrorMessage = () => {
    return ((0, jsx_runtime_1.jsx)("div", { className: 'randomchar-block', children: (0, jsx_runtime_1.jsx)("img", { src: error_gif_1.default, alt: 'error', style: { display: 'block' } }) }));
};
exports.default = ErrorMessage;
