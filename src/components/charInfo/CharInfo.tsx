import {useState, useEffect} from "react"

import useMarvelService from "../../services/MarvelService";

import dataChar from "../types/marvel";

import setContent from "../../utils/SetContent";
import 'react-loading-skeleton/dist/skeleton.css'

interface IcharInfoProps {
    charId: number | null
}
interface ViewProps {
    data: dataChar;
  }
const CharInfo = (props: IcharInfoProps): JSX.Element =>{
    const [char, setChar] = useState<dataChar | null>(null)
    const {getCharacter, clearError,  process, setProcess } = useMarvelService();
    useEffect(()=>{
        updateChar()
        // eslint-disable-next-line
    }, [props.charId])
        const updateChar = (): void => {
            clearError();
        const {charId} = props;
            if (!charId) {
                return;
            }
                getCharacter(charId)
                .then((char: dataChar) => onCharLoaded(char))
        }
         const onCharLoaded = (char: dataChar | null)=>{
            setProcess('succes')
            setChar(char)
         }
    return(
        <div className="descr">

       {setContent(process, View, char)}
        </div>
    
    )

}
const View = ({data}: ViewProps): JSX.Element=>{   
    const {name, description, thumbnail, homepage, wiki, comics} = data
    return(
        <>
         <section style={{display: "flex"}}>
            <img src={thumbnail} alt={name} className="hero-avatar"/>
            <section className="section">
                <h1 className="hero-name">{name}</h1>
                <div className="randomchar-block-right-for-btn">
                    <a href={homepage} className="randomchar-block-right-btn-homepage" style={{marginBottom: '10px'}}>HOMEPAGE</a>
                    <a href={wiki} className="randomchar-block-right-btn-homepage-second">WIKI</a>
                </div>
            </section>
           
        </section>
        <p className="hero-desct-text">
           {description}
        </p>
        <section className="comics">
            <h2 className="comics-title">Comics:</h2>
            <ul className="comics-list">
                
                {comics.length  > 0 ? null : "there is no description for this char"}
            {comics.map((item,i)=>{
                // eslint-disable-next-line
                if(i > 14) return;
                    return(
                        <li key={i} className="comics-item">
                            {item.name}
                        </li>
                ) 
                

            })}
                  

                
            
              
            </ul>
        </section>
        </>
    )
}
export default CharInfo