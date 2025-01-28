"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const ErrorMessage_1 = __importDefault(require("../errorMessage/ErrorMessage"));
class ErrorBoundary extends react_1.Component {
    constructor() {
        super(...arguments);
        this.state = {
            error: false
        };
    }
    componentDidCatch(error, infoError) {
        console.log(error, infoError);
        this.setState({ error: true });
    }
    render() {
        if (this.state.error) {
            return (0, jsx_runtime_1.jsx)(ErrorMessage_1.default, {});
        }
        return this.props.children;
    }
}
exports.default = ErrorBoundary;
