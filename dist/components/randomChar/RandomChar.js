"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const MarvelService_1 = __importDefault(require("../../services/MarvelService"));
const SetContent_1 = __importDefault(require("../../utils/SetContent"));
const molot_png_1 = __importDefault(require("../img/molot.png"));
const RandomChar = () => {
    const [char, setChar] = (0, react_1.useState)({});
    const { getCharacter, clearError, process, setProcess } = (0, MarvelService_1.default)();
    (0, react_1.useEffect)(() => {
        updateChar();
        // eslint-disable-next-line
    }, []);
    const onChatLoaded = (char) => {
        setProcess('succes');
        setChar(char);
    };
    const updateChar = () => {
        clearError();
        const id = Math.floor(Math.random() * (1011400 - 1011000) + 1011000);
        getCharacter(id)
            .then(onChatLoaded);
    };
    const TryRandomBtn = () => {
        updateChar();
    };
    return ((0, jsx_runtime_1.jsxs)("div", { className: "randomchar", children: [(0, SetContent_1.default)(process, View, char), (0, jsx_runtime_1.jsxs)("div", { className: "randomchar-static", children: [(0, jsx_runtime_1.jsxs)("section", { className: "randomchar-static-section", children: [(0, jsx_runtime_1.jsxs)("h1", { className: "randomchar-static-text", children: ["Random character for today!", (0, jsx_runtime_1.jsx)("br", {}), "Do you want to get to know him better?"] }), (0, jsx_runtime_1.jsx)("h1", { className: "randomchar-static-text", style: { marginBottom: '17px' }, children: "Or choose another one" }), (0, jsx_runtime_1.jsx)("button", { className: "randomchar-static-btn", onClick: TryRandomBtn, children: (0, jsx_runtime_1.jsx)("div", { className: "randomchar-static-btn-text", children: "TRY IT" }) })] }), (0, jsx_runtime_1.jsx)("img", { src: molot_png_1.default, alt: "", className: "randomchar-static-molot" })] })] }));
};
const View = ({ data }) => {
    const { name, description, thumbnail, homepage, wiki } = data;
    return ((0, jsx_runtime_1.jsxs)("div", { className: "randomchar-block", children: [(0, jsx_runtime_1.jsx)("img", { src: thumbnail, className: "randomchar-block-thor", alt: "" }), (0, jsx_runtime_1.jsxs)("div", { className: "randomchar-block-right", children: [(0, jsx_runtime_1.jsx)("h2", { className: "randomchar-block-right-thor", children: name }), (0, jsx_runtime_1.jsx)("p", { className: "randomchar-block-right-text", children: description }), (0, jsx_runtime_1.jsxs)("div", { className: "randomchar-block-right-for-btn", children: [(0, jsx_runtime_1.jsxs)("button", { className: "randomchar-block-right-btn-homepage", children: [(0, jsx_runtime_1.jsx)("a", { href: homepage, className: "randomchar-block-right-btn-homepage-a", children: "HOMEPAGE" }), " "] }), (0, jsx_runtime_1.jsx)("button", { className: "randomchar-block-right-btn-homepage-second", children: (0, jsx_runtime_1.jsx)("a", { href: wiki, className: "randomchar-block-right-btn-homepage-a", children: "WIKI" }) })] })] })] }));
};
exports.default = RandomChar;
