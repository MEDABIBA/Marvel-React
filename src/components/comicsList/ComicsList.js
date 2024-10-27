import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Spinner from '../spinner/Spinner'
import useMarvelService from '../../services/MarvelService'
const ComicsList = ()=>{
    const [comics, setComics] = useState([])
    const [offset, setOffset] = useState(0)
    const [newLoading, setNewLoading] = useState(false)
    const [end, setEnd] = useState(false)
    const {getAllComics, loading} = useMarvelService()
    useEffect(()=>{
        onRequest(offset, true)
        // eslint-disable-next-line
    }, [])

    const onRequest = (offset, ititial)=>{ 
        ititial ? setNewLoading(false) : setNewLoading(true)
        getAllComics(offset)
        .then(onComicsLoaded)
        .finally(()=> setNewLoading(false))
    }
    const onComicsLoaded = (newComics)=>{
        if (newComics > 9){
            setOffset(offset + 8)
        }else{
            setComics(comics=>[...comics, ...newComics])
            setEnd(true)
        }
    }
    const spinner =  loading && !newLoading ? <Spinner/> : null;
    function RenderList () {
        return comics.map((item, i) =>{
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
