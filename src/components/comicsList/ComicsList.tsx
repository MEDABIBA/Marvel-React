import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Spinner from '../spinner/Spinner'
import useMarvelService from '../../services/MarvelService'
import { IdataComics } from '../types/marvel'
const ComicsList = ()=>{
    const [comics, setComics] = useState<IdataComics[]>([])
    const [offset, setOffset] = useState<number>(0)
    const [newLoading, setNewLoading] = useState<boolean>(false)
    const [end, setEnd] = useState<boolean>(false)
    const {getAllComics, loading} = useMarvelService()
    useEffect(()=>{
        onRequest(offset, true)
        // eslint-disable-next-line
    }, [])

    const onRequest = (offset: number, initial?: boolean): void => { 
        initial ? setNewLoading(false) : setNewLoading(true)
        getAllComics(offset)
        .then((comics: IdataComics[]) => onComicsLoaded(comics))
        .finally(()=> setNewLoading(false))
    }
    const onComicsLoaded = (newComics: IdataComics[]): void => {
        if (newComics.length > 9){
            setOffset(prevOffset => prevOffset + 8)
        }else{
            setComics(comics => [...comics, ...newComics])
            setEnd(true)
        }
    }
    const spinner: JSX.Element | null =  loading && !newLoading ? <Spinner/> : null;
    function RenderList (): JSX.Element[] {
        return comics.map((item: IdataComics, i: number) =>{
            return(
                <li className="list-item2" key={i}>
                    <Link to={`/comics/${item.id}`}>    
                <img src={item.thumbnail} alt="" className="list-item2-img"/>
                <p className="list-item-text2">{item.title}</p>
                <p className="list-item-price">{item.price}</p>
                </Link>
            </li>
            )
        })

        
    }
    return(
        <>
    <ul className="list">
        {spinner}
        <RenderList/>
    </ul>
    <button     style={{ 
        marginBottom: 67, 
        display: end ? 'inline' : 'none' 
                        }}  
        className='footer-btn' 
        disabled={newLoading} 
        onClick={()=> onRequest(offset)}>
            LOAD MORE
            </button>
        </>

    )
}
export default ComicsList
