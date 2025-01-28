"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const react_router_dom_1 = require("react-router-dom");
const Spinner_1 = __importDefault(require("../spinner/Spinner"));
const MarvelService_1 = __importDefault(require("../../services/MarvelService"));
const ComicsList = () => {
    const [comics, setComics] = (0, react_1.useState)([]);
    const [offset, setOffset] = (0, react_1.useState)(0);
    const [newLoading, setNewLoading] = (0, react_1.useState)(false);
    const [end, setEnd] = (0, react_1.useState)(false);
    const { getAllComics, loading } = (0, MarvelService_1.default)();
    (0, react_1.useEffect)(() => {
        onRequest(offset, true);
        // eslint-disable-next-line
    }, []);
    const onRequest = (offset, ititial) => {
        ititial ? setNewLoading(false) : setNewLoading(true);
        getAllComics(offset)
            .then(onComicsLoaded)
            .finally(() => setNewLoading(false));
    };
    const onComicsLoaded = (newComics) => {
        if (newComics > 9) {
            setOffset(offset + 8);
        }
        else {
            setComics(comics => [...comics, ...newComics]);
            setEnd(true);
        }
    };
    const spinner = loading && !newLoading ? (0, jsx_runtime_1.jsx)(Spinner_1.default, {}) : null;
    function RenderList() {
        return comics.map((item, i) => {
            return ((0, jsx_runtime_1.jsx)("li", { className: "list-item2", children: (0, jsx_runtime_1.jsxs)(react_router_dom_1.Link, { to: `/comics/${item.id}`, children: [(0, jsx_runtime_1.jsx)("img", { src: item.thumbnail, alt: "", className: "list-item2-img" }), (0, jsx_runtime_1.jsx)("p", { className: "list-item-text2", children: item.title }), (0, jsx_runtime_1.jsx)("p", { className: "list-item-price", children: item.price })] }) }, i));
        });
    }
    return ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsxs)("ul", { className: "list", children: [spinner, (0, jsx_runtime_1.jsx)(RenderList, {})] }), (0, jsx_runtime_1.jsx)("button", { style: {
                    marginBottom: 67,
                    display: end ? 'inline' : 'none'
                }, className: 'footer-btn', disabled: newLoading, onClick: () => onRequest(offset), children: "LOAD MORE" })] }));
};
exports.default = ComicsList;
