"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_loading_skeleton_1 = __importDefault(require("react-loading-skeleton"));
const Spinner_1 = __importDefault(require("../components/spinner/Spinner"));
const ErrorMessage_1 = __importDefault(require("../components/errorMessage/ErrorMessage"));
const setContent = (process, Component, data) => {
    switch (process) {
        case 'loading':
            return (0, jsx_runtime_1.jsx)(Spinner_1.default, {});
        case 'error':
            return (0, jsx_runtime_1.jsx)(ErrorMessage_1.default, {});
        case 'waiting':
            return (0, jsx_runtime_1.jsx)(react_loading_skeleton_1.default, { count: 5 });
        case 'succes':
            return (0, jsx_runtime_1.jsx)(Component, { data: data });
        default:
            throw new Error('Unexpected process state');
    }
};
exports.default = setContent;
