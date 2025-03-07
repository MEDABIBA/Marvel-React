import { makeAutoObservable } from "mobx";
import RootStore from "./RootStore";
import DataChar, { IAllDataRes, IDataComics, IForChar, IForComics, IRequestHeaders, TypeOfProcess } from "../components/types/marvel";

class MarvelStore {
  RootStore: RootStore;
  loading: boolean = false;
  _baseOffSet = 210;
  _apiBase = "https://gateway.marvel.com:443/v1/public/";
  _apiKey = "apikey=542bf7b71e0bb49b1ccdfd05b02f9ced";
  error: string | null = null;
  process: TypeOfProcess = "waiting";
  constructor(RootStore: RootStore) {
    this.RootStore = RootStore;
    makeAutoObservable(this);
  }

  setLoading(value: boolean) {
    this.loading = value;
  }

  request: (url: string, method?: "GET" | "POST", body?: string | null, headers?: IRequestHeaders, setProcess?: (value: TypeOfProcess) => void) => Promise<any> = async (
    url,
    method = "GET",
    body = null,
    headers = { "Content-type": "application/json" },
    setProcess
  ) => {
    this.setLoading(true);
    if (setProcess) {
      setProcess("loading");
    }
    this.process = "loading";
    try {
      const response: Response = await fetch(url, { method, body, headers });
      if (!response.ok) {
        throw new Error(`Could not fetch ${url}, status: ${response.status}`);
      }
      const data = await response.json();
      this.setLoading(false);
      if (setProcess) {
        setProcess("succes");
      }
      this.process = "succes";
      return data;
    } catch (e: unknown) {
      this.setLoading(false);
      e instanceof Error ? (this.error = e.message) : (this.error = "unknown error");
      if (setProcess) {
        setProcess("error");
      }
      this.process = "error";
      throw e;
    }
  };
  clearError() {
    this.error = null;
  }

  async getAllCharacters(offset: number = this._baseOffSet): Promise<DataChar[]> {
    const res: IAllDataRes<IForChar[]> = await this.request(`${this._apiBase}characters?limit=9&offset=${offset}&${this._apiKey}`);
    return res.data.results.map(this._transformCharacter);
  }

  async getAllComics(offset: number = 0): Promise<IDataComics[]> {
    const res: IAllDataRes<IForComics[]> = await this.request(`${this._apiBase}comics?orderBy=-onsaleDate&limit=8&offset=${offset}&${this._apiKey}`);
    return res.data.results.map(this._transformComics);
  }
  async getComics(id: string | undefined): Promise<IDataComics> {
    const res: IAllDataRes<IForComics[]> = await this.request(`${this._apiBase}comics/${id}?${this._apiKey}`);
    return this._transformComics(res.data.results[0]);
  }
  async getCharacter(id: number | undefined | null, process: (value: TypeOfProcess) => void): Promise<DataChar> {
    const res: IAllDataRes<IForChar[]> = await this.request(`${this._apiBase}characters/${id}?${this._apiKey}`, undefined, undefined, undefined, process);
    return this._transformCharacter(res.data.results[0]);
  }
  async getCharacterByName(name: string): Promise<DataChar[]> {
    const res: IAllDataRes<IForChar[]> = await this.request(`${this._apiBase}characters?name=${name}&${this._apiKey}`);
    return res.data.results.map(this._transformCharacter); /*CHECK*/
  }
  _transformCharacter(char: IForChar): DataChar {
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
  }
  _transformComics(comics: IForComics): IDataComics {
    return {
      id: comics.id,
      thumbnail: comics.thumbnail.path + "." + comics.thumbnail.extension,
      title: comics.title,
      description: comics.description || "There is no description",
      language: comics.textObjects[0]?.language || "en-us",
      pageCount: comics.pageCount,
      price: comics.prices[0].price ? comics.prices[0].price + "$" : "NOT AVAILABLE",
    };
  }
}
export default MarvelStore;
