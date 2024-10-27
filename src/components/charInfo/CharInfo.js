import {useState, useEffect} from "react"
import PropTypes from "prop-types";
import useMarvelService from "../../services/MarvelService";
import Spinner from "../spinner/Spinner";
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import ErrorMessage from "../errorMessage/ErrorMessage";
const CharInfo = (props)=>{
    const [char, setChar] = useState(null)
    const {loading, error, getCharacter, clearError } = useMarvelService();
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
            setChar(char)
         }
    const skeleton = !(char) ? (
                                    <>
                                    <h4>Please select a character to see information</h4>
                                    <Skeleton count={5}/>
                                    
                                    </>
                                ): null
    const Error = error ? <ErrorMessage/> : null;
    const spinner = loading ? <Spinner/> : null;
    const Content = !(loading || error || !char) ? <View char={char}/>: null;
    return(
        <div className="descr">
        {skeleton}
        {Error}
        {spinner}
        {Content}
        </div>
    
    )

}
const View = ({char})=>{
    const {name, description, thumbnail, homepage, wiki, comics} = char
    
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