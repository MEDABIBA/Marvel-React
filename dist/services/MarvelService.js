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
const http_hook_1 = require("../hooks/http.hook");
const useMarvelService = () => {
    const { loading, request, error, clearError, process, setProcess } = (0, http_hook_1.useHttp)();
    const _apiBase = 'https://gateway.marvel.com:443/v1/public/';
    const _apiKey = 'apikey=542bf7b71e0bb49b1ccdfd05b02f9ced';
    const _baseOffSet = 210;
    const getAllCharacters = (...args_1) => __awaiter(void 0, [...args_1], void 0, function* (offset = _baseOffSet) {
        const res = yield request(`${_apiBase}characters?limit=9&offset=${offset}&${_apiKey}`);
        return res.data.results.map(_transformCharacter);
    });
    const getAllComics = (...args_1) => __awaiter(void 0, [...args_1], void 0, function* (offset = 0) {
        const res = yield request(`${_apiBase}comics?orderBy=-onsaleDate&limit=8&offset=${offset}&${_apiKey}`);
        return res.data.results.map(_transformComics);
    });
    const getComics = (id) => __awaiter(void 0, void 0, void 0, function* () {
        const res = yield request(`${_apiBase}comics/${id}?${_apiKey}`);
        return _transformComics(res.data.results[0]);
    });
    const getCharacter = (id) => __awaiter(void 0, void 0, void 0, function* () {
        const res = yield request(`${_apiBase}characters/${id}?${_apiKey}`);
        return _transformCharacter(res.data.results[0]);
    });
    const getCharacterByName = (name) => __awaiter(void 0, void 0, void 0, function* () {
        const res = yield request(`${_apiBase}characters?name=${name}&${_apiKey}`);
        return res.data.results.map(_transformCharacter); /*CHECK*/
    });
    const _transformCharacter = (char) => {
        return {
            name: char.name,
            id: char.id,
            description: char.description ? `${char.description.slice(0, 210)}...` : 'There is no descriotion for this character',
            thumbnail: char.thumbnail.path + '.' + char.thumbnail.extension,
            homepage: char.urls[0].url,
            wiki: char.urls[1].url,
            comics: char.comics.items
        };
    };
    const _transformComics = (comics) => {
        var _a;
        return {
            id: comics.id,
            thumbnail: comics.thumbnail.path + '.' + comics.thumbnail.extension,
            title: comics.title,
            description: comics.description || "There is no description",
            language: ((_a = comics.textObjects[0]) === null || _a === void 0 ? void 0 : _a.language) || 'en-us',
            pageCount: comics.pageCount,
            price: comics.prices[0].price ? comics.prices[0].price + '$' : 'NOT AVAILABLE'
        };
    };
    return { loading, error, getAllCharacters, getCharacter, clearError, getAllComics, getComics, getCharacterByName, process, setProcess };
};
exports.default = useMarvelService;
