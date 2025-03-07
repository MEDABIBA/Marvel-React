interface IItemComics {
  name: string;
  resourceAPI: string;
}

export interface IForComics {
  id: number;
  thumbnail: { extension: "jpg"; path: string };
  title: string;
  description: string | null;
  textObjects: { language: string }[];
  pageCount: number;
  prices: { price: number | null }[];
}

export interface IDataComics {
  description?: string;
  id: number;
  language: string;
  pageCount: number;
  price: "NOT AVAILABLE" | string;
  thumbnail: string;
  title: string;
}

export interface IAllDataRes<T> {
  attributionHTML: string;
  attributionText: string;
  code: number;
  copyright: string;
  data: {
    results: T;
  };
  etag: string;
  status: "OK" | "Error";
}

type urls = { type: string; url: string };

export interface IForChar {
  comics: { items: IItemComics[] };
  description: string;
  id: number;
  name: string;
  thumbnail: { path: string; extension: "jpg" };
  urls: urls[];
  title: string;
}

export default interface DataChar {
  comics: IItemComics[];
  description?: string;
  homepage: string;
  id: number;
  name: string;
  thumbnail: string;
  wiki: string;
  title: string;
}

export interface ISinglePageProps<T> {
  Component: React.ComponentType<{ data: T }>;
  dataType: "comic" | "character";
}
export type TypeOfProcess = "waiting" | "loading" | "error" | "succes";

export interface IRequestHeaders {
  [key: string]: string;
}
