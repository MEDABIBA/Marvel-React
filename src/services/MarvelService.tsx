import { useHttp } from "../hooks/http.hook";

import dataChar from "../components/types/marvel";
import { IdataComics, IallDataRes, IforChar, IforComics } from "../components/types/marvel";
const useMarvelService = () => {
	const { loading, request, error, clearError, process, setProcess } = useHttp();
	const _apiBase = "https://gateway.marvel.com:443/v1/public/";
	const _apiKey = "apikey=542bf7b71e0bb49b1ccdfd05b02f9ced";
	const _baseOffSet = 210;

	const getAllCharacters = async (offset: number = _baseOffSet): Promise<dataChar[]> => {
		const res: IallDataRes<IforChar[]> = await request(`${_apiBase}characters?limit=9&offset=${offset}&${_apiKey}`);
		return res.data.results.map(_transformCharacter);
	};
	const getAllComics = async (offset: number = 0): Promise<IdataComics[]> => {
		const res: IallDataRes<IforComics[]> = await request(`${_apiBase}comics?orderBy=-onsaleDate&limit=8&offset=${offset}&${_apiKey}`);
		return res.data.results.map(_transformComics);
	};
	const getComics = async (id: string | undefined): Promise<IdataComics> => {
		const res: IallDataRes<IforComics[]> = await request(`${_apiBase}comics/${id}?${_apiKey}`);
		return _transformComics(res.data.results[0]);
	};
	const getCharacter = async (id: number | undefined | null): Promise<dataChar> => {
		const res: IallDataRes<IforChar[]> = await request(`${_apiBase}characters/${id}?${_apiKey}`);
		return _transformCharacter(res.data.results[0]);
	};
	const getCharacterByName = async (name: string): Promise<dataChar[]> => {
		const res: IallDataRes<IforChar[]> = await request(`${_apiBase}characters?name=${name}&${_apiKey}`);
		return res.data.results.map(_transformCharacter); /*CHECK*/
	};
	const _transformCharacter = (char: IforChar): dataChar => {
		return {
			name: char.name,
			id: char.id,
			description: char.description ? `${char.description.slice(0, 210)}...` : "There is no descriotion for this character",
			thumbnail: char.thumbnail.path + "." + char.thumbnail.extension,
			homepage: char.urls[0].url,
			wiki: char.urls[1].url,
			comics: char.comics.items,
			title: char.title,
		};
	};
	const _transformComics = (comics: IforComics): IdataComics => {
		return {
			id: comics.id,
			thumbnail: comics.thumbnail.path + "." + comics.thumbnail.extension,
			title: comics.title,
			description: comics.description || "There is no description",
			language: comics.textObjects[0]?.language || "en-us",
			pageCount: comics.pageCount,
			price: comics.prices[0].price ? comics.prices[0].price + "$" : "NOT AVAILABLE",
		};
	};
	return { loading, error, getAllCharacters, getCharacter, clearError, getAllComics, getComics, getCharacterByName, process, setProcess };
};
export default useMarvelService;
