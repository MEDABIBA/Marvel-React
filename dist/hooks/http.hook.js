"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.useHttp = void 0;
const react_1 = require("react");
const useHttp = () => {
    const [loading, setLoading] = (0, react_1.useState)(false);
    const [error, setError] = (0, react_1.useState)(null);
    const [process, setProcess] = (0, react_1.useState)('waiting');
    const request = (0, react_1.useCallback)((url_1, ...args_1) => __awaiter(void 0, [url_1, ...args_1], void 0, function* (url, method = 'GET', body = null, headers = { 'Content-type': 'application/json' }) {
        setLoading(true);
        setProcess('loading');
        try {
            const response = yield fetch(url, { method, body, headers });
            if (!response.ok) {
                throw new Error(`Could not fetch ${url}, status: ${response.status}`);
            }
            const data = yield response.json();
            setLoading(false);
            return data;
        }
        catch (e) {
            setLoading(false);
            setError(e.message);
            setProcess('error');
            throw e;
        }
    }), []);
    const clearError = (0, react_1.useCallback)(() => setError(null), []);
    return { loading, request, error, clearError, process, setProcess };
};
exports.useHttp = useHttp;
