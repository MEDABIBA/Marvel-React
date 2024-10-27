import AppBanner from "../appBanner/AppBanner"
import useMarvelService from '../../services/MarvelService'
import Spinner from '../spinner/Spinner'
import ErrorMessage from "../errorMessage/ErrorMessage"
import {useState, useEffect} from 'react'
import {useParams, Link} from 'react-router-dom'
const SingleComicsPage = ()=>{
    const [comics, setComics] = useState([])
    const {comicID} = useParams()
    const {getComics, clearError, error, loading} = useMarvelService()

 
    useEffect(()=>{
        updatecomic()
        // eslint-disable-next-line
        console.log(comicID)
    }, [comicID])
        const updatecomic = () => {
            clearError();

            getComics(comicID)
                .then(onComicLoaded)
        }
         const onComicLoaded = (comic)=>{
            setComics(comic)
         }

         const spinner =  loading ? <Spinner/> : null;
         const errorMessage = error ? <ErrorMessage/> : null
         const content = !loading || error || !comics ?  <Viev comic={comics}/> : null
    return(
        <>
        <AppBanner/>
        {spinner}
        {errorMessage}
        {content}
        </>
    )
}
const Viev = ({comic})=>{
    const {id, thumbnail,title,description,language, pageCount,price} = comic
return(
    <div className="comics-descr">
    <img className="comics-descr-img" src={thumbnail} alt={title}/>
    <div className="comics-descr-right">
        <div className="comics-descr-right-info">
        <h2 className="comics-descr-right-title">{title}</h2>
        <p className="comics-descr-right-text">{description}</p>
        <p className="comics-descr-right-pages">{pageCount}</p>
        <p className="comics-descr-right-language">{language}</p>
        <h2 className="comics-descr-right-price">{price}</h2>
        </div>
        <Link to="/comics" className="button-back">Back to all</Link>
       
    </div>
    </div>  
)
}
export default SingleComicsPage