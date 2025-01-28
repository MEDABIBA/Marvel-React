interface IItemComics {
    name: string,
    resourceAPI: string
}

export interface IforComics {
    id: number,
    thumbnail: {extension: 'jpg', path: string},
    title: string,
    description: string | null,
    textObjects: {language: string}[],
    pageCount: number,
    prices: {price: number | null}[]
}

export interface IdataComics {
    description?: string,
    id: number,
    language: string,
    pageCount: number,
    price: "NOT AVAILABLE" | string,
    thumbnail: string,
    title: string,
}

export interface IallDataRes<T> {
    attributionHTML: string,
    attributionText: string,
    code: number,
    copyright: string,
    data: {
        results: T
    }
    etag: string,
    status: 'OK' | 'Error'  

}

type urls = {type: string, url: string}

export interface IforChar {
    comics: {items: IItemComics[]},
    description: string,
    id : number,
    name: string,
    thumbnail:  {path: string, extension: 'jpg'}
    urls: urls[],
    title: string
}

export default interface dataChar {
    comics: IItemComics[],
    description?: string,
    homepage: string,
    id: number,
    name: string,
    thumbnail: string,
    wiki: string,
    title: string
}

export interface IsinglePageProps <T> {
    Component:  React.ComponentType<{data: T}>,
    dataType: 'comic' | 'character'
}