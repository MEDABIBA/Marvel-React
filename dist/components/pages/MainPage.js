"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const react_helmet_1 = require("react-helmet");
const RandomChar_1 = __importDefault(require("../randomChar/RandomChar"));
const CharList_1 = __importDefault(require("../charList/CharList"));
const CharInfo_1 = __importDefault(require("../charInfo/CharInfo"));
const CharSearchForm_1 = __importDefault(require("../charSearchForm/CharSearchForm"));
const ErrorBoundary_1 = __importDefault(require("../errorBoundary/ErrorBoundary"));
const bg_footer_svg_1 = __importDefault(require("../img/bg footer.svg"));
const MainPage = () => {
    const [selectedChar, setChar] = (0, react_1.useState)(null);
    const onCharSelected = (id) => {
        setChar(id);
    };
    return ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsxs)(react_helmet_1.Helmet, { children: [(0, jsx_runtime_1.jsx)("meta", { charSet: "utf-8" }), (0, jsx_runtime_1.jsx)("meta", { name: "description", content: "Marvel information portal" }), (0, jsx_runtime_1.jsx)("title", { children: "Main page" })] }), (0, jsx_runtime_1.jsx)(ErrorBoundary_1.default, { children: (0, jsx_runtime_1.jsx)(RandomChar_1.default, {}) }), (0, jsx_runtime_1.jsxs)("div", { className: 'list-and-descr', children: [(0, jsx_runtime_1.jsx)(ErrorBoundary_1.default, { children: (0, jsx_runtime_1.jsx)(CharList_1.default, { onCharSelected: onCharSelected }) }), (0, jsx_runtime_1.jsxs)("div", { children: [(0, jsx_runtime_1.jsx)(ErrorBoundary_1.default, { children: (0, jsx_runtime_1.jsx)(CharInfo_1.default, { charId: selectedChar }) }), (0, jsx_runtime_1.jsx)(ErrorBoundary_1.default, { children: (0, jsx_runtime_1.jsx)(CharSearchForm_1.default, {}) })] })] }), (0, jsx_runtime_1.jsx)("img", { src: bg_footer_svg_1.default, alt: "", className: "footer-bck-img" })] }));
};
exports.default = MainPage;
