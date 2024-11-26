import {Helmet} from "react-helmet"

import AppBanner from "../appBanner/AppBanner"
import useMarvelService from '../../services/MarvelService'
import Spinner from '../spinner/Spinner'
import ErrorMessage from "../errorMessage/ErrorMessage"
import {useState, useEffect} from 'react'
import {useParams} from 'react-router-dom'
const SinglePage = ({Component, dataType})=>{
    const [data, setData] = useState([])
    const {ID} = useParams()
    const {getComics, getCharacter, clearError, error, loading} = useMarvelService()

 
    useEffect(()=>{
        updating()
        // eslint-disable-next-line
    }, [ID])
        const updating = () => {
            clearError();
            // eslint-disable-next-line
            switch(dataType){
                case 'comic':
                getComics(ID)
                .then(onLoaded);
                break;
                case "character":
                getCharacter(ID)
                .then(onLoaded);
            }

        }
         const onLoaded = (elem)=>{
            console.log(elem)
            setData(elem)
         }

         const spinner =  loading ? <Spinner/> : null;
         const errorMessage = error ? <ErrorMessage/> : null
         const content = !loading || error || !data || ID  ?  <Component data={data}/> : null
    return(
        <>
                    <Helmet>
        <meta charSet="utf-8" />
        <meta name="description" content="Marvel description portal"/>
            <title>description</title>
        </Helmet>
        <AppBanner/>
        {spinner}
        {errorMessage}
        {content}
        </>
    )
}
export default SinglePage