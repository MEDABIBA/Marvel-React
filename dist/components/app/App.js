"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const react_router_dom_1 = require("react-router-dom");
const AppHeader_1 = __importDefault(require("../appHeader/AppHeader"));
const SinglePage_1 = __importDefault(require("../pages/SinglePage"));
const SingleCharacter_1 = __importDefault(require("../pages/SingleCharacter/SingleCharacter"));
const SingleComic_1 = __importDefault(require("../pages/SingleComic/SingleComic"));
const Spinner_1 = __importDefault(require("../spinner/Spinner"));
const Appp = () => {
    const MainPage = (0, react_1.lazy)(() => Promise.resolve().then(() => __importStar(require('../pages/MainPage'))));
    const ComicsPage = (0, react_1.lazy)(() => Promise.resolve().then(() => __importStar(require('../pages/ComicsPage'))));
    const Page404 = (0, react_1.lazy)(() => Promise.resolve().then(() => __importStar(require('../pages/404'))));
    return ((0, jsx_runtime_1.jsx)(react_1.Suspense, { fallback: (0, jsx_runtime_1.jsx)(Spinner_1.default, {}), children: (0, jsx_runtime_1.jsx)(react_router_dom_1.BrowserRouter, { children: (0, jsx_runtime_1.jsxs)("div", { className: "app", children: [(0, jsx_runtime_1.jsx)(AppHeader_1.default, {}), (0, jsx_runtime_1.jsx)("main", { children: (0, jsx_runtime_1.jsxs)(react_router_dom_1.Routes, { children: [(0, jsx_runtime_1.jsx)(react_router_dom_1.Route, { path: "/comics", element: (0, jsx_runtime_1.jsx)(ComicsPage, {}) }), (0, jsx_runtime_1.jsx)(react_router_dom_1.Route, { path: "/", element: (0, jsx_runtime_1.jsx)(MainPage, {}) }), (0, jsx_runtime_1.jsx)(react_router_dom_1.Route, { path: "/comics/:ID", element: (0, jsx_runtime_1.jsx)(SinglePage_1.default, { Component: SingleComic_1.default, dataType: "comic" }) }), (0, jsx_runtime_1.jsx)(react_router_dom_1.Route, { path: "/characters/:ID", element: (0, jsx_runtime_1.jsx)(SinglePage_1.default, { Component: SingleCharacter_1.default, dataType: "character" }) }), (0, jsx_runtime_1.jsx)(react_router_dom_1.Route, { path: "*", element: (0, jsx_runtime_1.jsx)(Page404, {}) })] }) })] }) }) }));
};
exports.default = Appp;
