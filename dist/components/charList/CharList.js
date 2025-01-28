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
const react_1 = __importStar(require("react"));
const react_transition_group_1 = require("react-transition-group");
const prop_types_1 = __importDefault(require("prop-types"));
const MarvelService_1 = __importDefault(require("../../services/MarvelService"));
const CharList = (props) => {
    const [charList, setCharList] = (0, react_1.useState)([]);
    const [newItemLoading, setNewItemLoading] = (0, react_1.useState)(false);
    const [offset, setOffset] = (0, react_1.useState)(210);
    const [charEnded, setCharEnded] = (0, react_1.useState)(false);
    const [activeIndex, setActiveIndex] = (0, react_1.useState)(null);
    const { getAllCharacters } = (0, MarvelService_1.default)();
    (0, react_1.useEffect)(() => {
        onRequest();
        // eslint-disable-next-line
    }, []);
    const onRequest = (offset) => {
        setNewItemLoading(true);
        getAllCharacters(offset)
            .then(onCharLoaded);
    };
    // onListAdd = ()=>{
    //     this.marvelService
    //     .getAllCharacters()
    //     .then(this.onCharLoaded)
    // }
    const onCharLoaded = (newChar) => {
        let ended = false;
        if (newChar.length < 9) {
            ended = true;
        }
        setCharList(charList => [...charList, ...newChar]);
        setNewItemLoading(false);
        setOffset(offset => offset + 9);
        setCharEnded(ended);
    };
    let itemRefs = (0, react_1.useRef)([]);
    //  Использую ref, чтобы поставить box-shadow на активный елемент
    const focusOnItem = (id) => {
        setActiveIndex(id); // Сохраняем индекс активного элемента
    };
    function RenderList() {
        const items = charList.map((item, i) => {
            return ((0, jsx_runtime_1.jsx)(react_transition_group_1.CSSTransition, { timeout: 300, classNames: "my-node", children: (0, jsx_runtime_1.jsxs)("li", { onClick: () => {
                        props.onCharSelected(item.id); // Вызываем по отдельности
                        focusOnItem(i);
                    }, className: `list-item ${i === activeIndex ? 'char__item_selected' : ''}`, ref: el => itemRefs.current[i] = el, children: [(0, jsx_runtime_1.jsx)("img", { src: item.thumbnail, alt: "", className: "list-item-img" }), (0, jsx_runtime_1.jsx)("div", { className: "list-item-text", children: item.name })] }) }, item.id));
        });
        return ((0, jsx_runtime_1.jsx)("ul", { className: "list-ul", children: (0, jsx_runtime_1.jsx)(react_transition_group_1.TransitionGroup, { component: null, children: items }) }));
    }
    return ((0, jsx_runtime_1.jsxs)("div", { children: [(0, jsx_runtime_1.jsx)(RenderList, {}), (0, jsx_runtime_1.jsx)("button", { className: "footer-btn", disabled: newItemLoading, onClick: () => onRequest(offset), style: { display: charEnded ? 'none' : 'block' }, children: "LOAD MORE" })] }));
};
CharList.propTypes = {
    onCharSelected: prop_types_1.default.func.isRequired
};
exports.default = CharList;
