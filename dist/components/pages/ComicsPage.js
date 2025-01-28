"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_helmet_1 = require("react-helmet");
const AppBanner_1 = __importDefault(require("../appBanner/AppBanner"));
const ComicsList_1 = __importDefault(require("../comicsList/ComicsList"));
const ComicsPage = () => {
    return ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsxs)(react_helmet_1.Helmet, { children: [(0, jsx_runtime_1.jsx)("meta", { charSet: "utf-8" }), (0, jsx_runtime_1.jsx)("title", { children: "Our comics" }), (0, jsx_runtime_1.jsx)("meta", { name: "description", content: "Marvel comics page" })] }), (0, jsx_runtime_1.jsx)(AppBanner_1.default, {}), (0, jsx_runtime_1.jsx)(ComicsList_1.default, {})] }));
};
exports.default = ComicsPage;
