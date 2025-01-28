"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_helmet_1 = require("react-helmet");
const AppBanner_1 = __importDefault(require("../appBanner/AppBanner"));
const MarvelService_1 = __importDefault(require("../../services/MarvelService"));
const Spinner_1 = __importDefault(require("../spinner/Spinner"));
const ErrorMessage_1 = __importDefault(require("../errorMessage/ErrorMessage"));
const react_1 = require("react");
const react_router_dom_1 = require("react-router-dom");
const SinglePage = ({ Component, dataType }) => {
    const [data, setData] = (0, react_1.useState)([]);
    const { ID } = (0, react_router_dom_1.useParams)();
    const { getComics, getCharacter, clearError, error, loading } = (0, MarvelService_1.default)();
    (0, react_1.useEffect)(() => {
        updating();
        // eslint-disable-next-line
    }, [ID]);
    const updating = () => {
        clearError();
        // eslint-disable-next-line
        switch (dataType) {
            case 'comic':
                getComics(ID)
                    .then(onLoaded);
                break;
            case "character":
                getCharacter(ID)
                    .then(onLoaded);
        }
    };
    const onLoaded = (elem) => {
        console.log(elem);
        setData(elem);
    };
    const spinner = loading ? (0, jsx_runtime_1.jsx)(Spinner_1.default, {}) : null;
    const errorMessage = error ? (0, jsx_runtime_1.jsx)(ErrorMessage_1.default, {}) : null;
    const content = !loading || error || !data || ID ? (0, jsx_runtime_1.jsx)(Component, { data: data }) : null;
    return ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsxs)(react_helmet_1.Helmet, { children: [(0, jsx_runtime_1.jsx)("meta", { charSet: "utf-8" }), (0, jsx_runtime_1.jsx)("meta", { name: "description", content: "Marvel description portal" }), (0, jsx_runtime_1.jsx)("title", { children: "description" })] }), (0, jsx_runtime_1.jsx)(AppBanner_1.default, {}), spinner, errorMessage, content] }));
};
exports.default = SinglePage;
