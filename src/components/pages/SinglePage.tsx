import {Helmet} from "react-helmet"
import AppBanner from "../appBanner/AppBanner"
import useMarvelService from '../../services/MarvelService'
import Spinner from '../spinner/Spinner'
import ErrorMessage from "../errorMessage/ErrorMessage"
import {useState, useEffect} from 'react'
import {useParams} from 'react-router-dom'
import dataChar, { IdataComics } from "../types/marvel"
import { IsinglePageProps } from "../types/marvel"

const SinglePage =  <T extends dataChar | IdataComics>({Component, dataType}: IsinglePageProps<T>) => {
    const [data, setData] = useState<IdataComics | dataChar | null>(null)
    const {ID} = useParams<string>()
    const {getComics, getCharacter, clearError, error, loading} = useMarvelService()

 
    useEffect(()=>{
        updating()
        // eslint-disable-next-line
    }, [ID])
        const updating = (): void => {
            clearError();
            // eslint-disable-next-line
            switch(dataType){
                case 'comic':
                getComics(ID)
                .then(onLoaded);
                break;
                case "character":
                getCharacter(ID ?  parseInt(ID) : null)
                .then(onLoaded);
            }

        }
         const onLoaded = (elem: IdataComics | dataChar)=>{
            setData(elem)
         }

         const spinner =  loading ? <Spinner/> : null;
         const errorMessage = error ? <ErrorMessage/> : null
         const content = !loading && !error && data && ID ?  <Component data={data as T}/> : null
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