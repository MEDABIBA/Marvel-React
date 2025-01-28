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
const formik_1 = require("formik");
const Yup = __importStar(require("yup"));
const react_router_dom_1 = require("react-router-dom");
const MarvelService_1 = __importDefault(require("../../services/MarvelService"));
const CharSearchForm = () => {
    const [data, setData] = (0, react_1.useState)(null);
    const { getCharacterByName, clearError, loading } = (0, MarvelService_1.default)();
    const onSubmit = (name) => {
        clearError();
        getCharacterByName(name)
            .then(onLoaded);
    };
    const onLoaded = (char) => {
        console.log(char);
        setData(char);
    };
    const results = !data ? null : data.length > 0 ?
        (0, jsx_runtime_1.jsxs)("div", { className: 'valid-success', children: [(0, jsx_runtime_1.jsxs)("div", { className: 'valid-success-block', children: ["There is! Visit ", data[0].name, " page?"] }), (0, jsx_runtime_1.jsx)(react_router_dom_1.Link, { to: `/characters/${data[0].id}`, href: "#", className: "success-block-button", children: "TO PAGE" })] })
        : (0, jsx_runtime_1.jsx)("div", { className: 'valid-failed', children: (0, jsx_runtime_1.jsx)("div", { className: 'valid-failed-block', children: "The character was not found. Check the name and try again" }) });
    return ((0, jsx_runtime_1.jsx)(formik_1.Formik, { initialValues: {
            search: ''
        }, validationSchema: Yup.object({
            search: Yup.string().required('This field is required!')
        }), onSubmit: ({ search }) => onSubmit(search), children: ({ errors, touched }) => ((0, jsx_runtime_1.jsxs)("div", { className: 'search', children: [(0, jsx_runtime_1.jsx)(formik_1.Form, { children: (0, jsx_runtime_1.jsxs)("div", { className: "search-form", children: [(0, jsx_runtime_1.jsxs)("div", { className: "search-form-right", children: [(0, jsx_runtime_1.jsx)("h3", { className: "search-form-title", children: "Or find a character by name:" }), (0, jsx_runtime_1.jsx)(formik_1.Field, { id: "search", name: "search", type: "text", className: "search-form-input", placeholder: "Enter name" }), touched.search && errors.search ? (0, jsx_runtime_1.jsx)("div", { className: 'errorValidate', children: errors.search }) : null] }), (0, jsx_runtime_1.jsx)("button", { className: "button-find", type: 'submit', disabled: loading, children: "FIND" })] }) }), results] })) }));
};
exports.default = CharSearchForm;
