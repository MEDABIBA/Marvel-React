"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const Marvel_Avengers_svg_1 = __importDefault(require("../img/Marvel-Avengers.svg"));
const Marvel_Hero_svg_1 = __importDefault(require("../img/Marvel-Hero.svg"));
const AppBanner = () => {
    return ((0, jsx_runtime_1.jsxs)("div", { className: "comics-every-week", children: [(0, jsx_runtime_1.jsxs)("div", { className: "comics-every-week-left", children: [(0, jsx_runtime_1.jsx)("img", { src: Marvel_Hero_svg_1.default, alt: "", className: "img-marvel-hero" }), (0, jsx_runtime_1.jsxs)("h2", { className: "comics-every-week-text", children: ["New comics every week!", (0, jsx_runtime_1.jsx)("br", {}), " Stay tuned!"] })] }), (0, jsx_runtime_1.jsx)("img", { src: Marvel_Avengers_svg_1.default, alt: "", className: "img-marvel-avengers" })] }));
};
exports.default = AppBanner;
