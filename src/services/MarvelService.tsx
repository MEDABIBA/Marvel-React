import { useHttp } from "../hooks/http.hook";

import DataChar from "../components/types/marvel";
import { IDataComics, IAllDataRes, IForChar, IForComics } from "../components/types/marvel";
const useMarvelService = () => {
  const { loading, request, error, clearError, process, setProcess } = useHttp();
  const _apiBase = "https://gateway.marvel.com:443/v1/public/";
  const _apiKey = "apikey=542bf7b71e0bb49b1ccdfd05b02f9ced";
  const _baseOffSet = 210;

  const getAllCharacters = async (offset: number = _baseOffSet): Promise<DataChar[]> => {
    const res: IAllDataRes<IForChar[]> = await request(`${_apiBase}characters?limit=9&offset=${offset}&${_apiKey}`);
    return res.data.results.map(_transformCharacter);
  };
  const getAllComics = async (offset: number = 0): Promise<IDataComics[]> => {
    const res: IAllDataRes<IForComics[]> = await request(`${_apiBase}comics?orderBy=-onsaleDate&limit=8&offset=${offset}&${_apiKey}`);
    return res.data.results.map(_transformComics);
  };
  const getComics = async (id: string | undefined): Promise<IDataComics> => {
    const res: IAllDataRes<IForComics[]> = await request(`${_apiBase}comics/${id}?${_apiKey}`);
    return _transformComics(res.data.results[0]);
  };
  const getCharacter = async (id: number | undefined | null): Promise<DataChar> => {
    const res: IAllDataRes<IForChar[]> = await request(`${_apiBase}characters/${id}?${_apiKey}`);
    return _transformCharacter(res.data.results[0]);
  };
  const getCharacterByName = async (name: string): Promise<DataChar[]> => {
    const res: IAllDataRes<IForChar[]> = await request(`${_apiBase}characters?name=${name}&${_apiKey}`);
    return res.data.results.map(_transformCharacter); /*CHECK*/
  };
  const _transformCharacter = (char: IForChar): DataChar => {
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
  const _transformComics = (comics: IForComics): IDataComics => {
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
