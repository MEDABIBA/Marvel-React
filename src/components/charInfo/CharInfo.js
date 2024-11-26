import {useState, useEffect} from "react"
import PropTypes from "prop-types";

import useMarvelService from "../../services/MarvelService";
import setContent from "../../utils/SetContent";
import 'react-loading-skeleton/dist/skeleton.css'
const CharInfo = (props)=>{
    const [char, setChar] = useState(null)
    const {getCharacter, clearError,  process, setProcess } = useMarvelService();
    useEffect(()=>{
        updateChar()
        // eslint-disable-next-line
    }, [props.charId])
        const updateChar = () => {
            clearError();
        const {charId} = props;
            if (!charId) {
                return;
            }
                getCharacter(charId)
                .then(onCharLoaded)
        }
         const onCharLoaded = (char)=>{
            setProcess('succes')
            setChar(char)
         }
    return(
        <div className="descr">

       {setContent(process, View, char)}
        </div>
    
    )

}
const View = ({data})=>{
    const {name, description, thumbnail, homepage, wiki, comics} = data
    
    return(
        <>
         <section style={{display: "flex"}}>
            <img src={thumbnail} alt={name} className="hero-avatar"/>
            <section className="section">
                <h1 className="hero-name">{name}</h1>
                <div className="randomchar-block-right-for-btn">
                    <button href={homepage} className="randomchar-block-right-btn-homepage" style={{marginBottom: '10px'}}>HOMEPAGE</button>
                    <button href={wiki} className="randomchar-block-right-btn-homepage-second">WIKI</button>
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

CharInfo.propTypes = {
    charId: PropTypes.number
}
export default CharInfo