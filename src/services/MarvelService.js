import { useHttp } from "../hooks/http.hook";
const useMarvelService = ()=> {
    const {loading, request, error, clearError,  process, setProcess} = useHttp();
    const _apiBase = 'https://gateway.marvel.com:443/v1/public/';
    const _apiKey = 'apikey=542bf7b71e0bb49b1ccdfd05b02f9ced';
    const _baseOffSet = 210
    const getAllCharacters = async (offset = _baseOffSet)=>{ 
        const res = await request(`${_apiBase}characters?limit=9&offset=${offset}&${_apiKey}`);
        return res.data.results.map(_transformCharacter)
    }
    const getAllComics = async(offset = 0)=>{
        const res = await request(`${_apiBase}comics?orderBy=-onsaleDate&limit=8&offset=${offset}&${_apiKey}`);
        return res.data.results.map(_transformComics)
    } 
    const getComics = async(id)=>{
        const res = await request(`${_apiBase}comics/${id}?${_apiKey}`)
        return _transformComics(res.data.results[0])
    }
    const getCharacter = async (id)=>{    
        const res = await request(`${_apiBase}characters/${id}?${_apiKey}`)
        return _transformCharacter(res.data.results[0])
    }
    const getCharacterByName = async (name) =>{
        const res = await request(`${_apiBase}characters?name=${name}&${_apiKey}`)
        return res.data.results.map(_transformCharacter)   /*CHECK*/
    }
    const  _transformCharacter = (char)=>{
        return{
            name: char.name,
            id: char.id,
            description: char.description ? `${char.description.slice(0, 210)}...` : 'There is no descriotion for this character',
            thumbnail: char.thumbnail.path + '.' + char.thumbnail.extension,
            homepage: char.urls[0].url,
            wiki: char.urls[1].url,
            comics: char.comics.items
        }
    }
    const _transformComics = (comics)=>{
        return{
            id: comics.id,
            thumbnail: comics.thumbnail.path + '.' + comics.thumbnail.extension,
            title: comics.title,
            description: comics.description || "There is no description",
            language: comics.textObjects[0]?.language || 'en-us',
            pageCount: comics.pageCount,
            price: comics.prices[0].price ? comics.prices[0].price  + '$' : 'NOT AVAILABLE'

        }
    }
    return{loading, error, getAllCharacters, getCharacter, clearError, getAllComics, getComics, getCharacterByName, process, setProcess}
}
export default useMarvelService