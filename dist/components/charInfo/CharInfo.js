"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const prop_types_1 = __importDefault(require("prop-types"));
const MarvelService_1 = __importDefault(require("../../services/MarvelService"));
const SetContent_1 = __importDefault(require("../../utils/SetContent"));
require("react-loading-skeleton/dist/skeleton.css");
const CharInfo = (props) => {
    const [char, setChar] = (0, react_1.useState)(null);
    const { getCharacter, clearError, process, setProcess } = (0, MarvelService_1.default)();
    (0, react_1.useEffect)(() => {
        updateChar();
        // eslint-disable-next-line
    }, [props.charId]);
    const updateChar = () => {
        clearError();
        const { charId } = props;
        if (!charId) {
            return;
        }
        getCharacter(charId)
            .then(onCharLoaded);
    };
    const onCharLoaded = (char) => {
        setProcess('succes');
        setChar(char);
    };
    return ((0, jsx_runtime_1.jsx)("div", { className: "descr", children: (0, SetContent_1.default)(process, View, char) }));
};
const View = ({ data }) => {
    const { name, description, thumbnail, homepage, wiki, comics } = data;
    return ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsxs)("section", { style: { display: "flex" }, children: [(0, jsx_runtime_1.jsx)("img", { src: thumbnail, alt: name, className: "hero-avatar" }), (0, jsx_runtime_1.jsxs)("section", { className: "section", children: [(0, jsx_runtime_1.jsx)("h1", { className: "hero-name", children: name }), (0, jsx_runtime_1.jsxs)("div", { className: "randomchar-block-right-for-btn", children: [(0, jsx_runtime_1.jsx)("button", { href: homepage, className: "randomchar-block-right-btn-homepage", style: { marginBottom: '10px' }, children: "HOMEPAGE" }), (0, jsx_runtime_1.jsx)("button", { href: wiki, className: "randomchar-block-right-btn-homepage-second", children: "WIKI" })] })] })] }), (0, jsx_runtime_1.jsx)("p", { className: "hero-desct-text", children: description }), (0, jsx_runtime_1.jsxs)("section", { className: "comics", children: [(0, jsx_runtime_1.jsx)("h2", { className: "comics-title", children: "Comics:" }), (0, jsx_runtime_1.jsxs)("ul", { className: "comics-list", children: [comics.length > 0 ? null : "there is no description for this char", comics.map((item, i) => {
                                // eslint-disable-next-line
                                if (i > 14)
                                    return;
                                return ((0, jsx_runtime_1.jsx)("li", { className: "comics-item", children: item.name }, i));
                            })] })] })] }));
};
CharInfo.propTypes = {
    charId: prop_types_1.default.number
};
exports.default = CharInfo;
