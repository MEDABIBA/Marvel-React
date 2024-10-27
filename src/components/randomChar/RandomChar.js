import {useState, useEffect} from "react"
import useMarvelService from "../../services/MarvelService";
import ErrorMessage from "../errorMessage/ErrorMessage";
import Spinner from "../spinner/Spinner";
import mjolnir from '../img/molot.png'
const RandomChar = () => {
    const [char, setChar] = useState({})

    const {loading, error, getCharacter,  clearError} = useMarvelService();

    useEffect(()=>{
        updateChar()
    }, [])
     const onChatLoaded = (char)=>{
        setChar(char)
     }
     const updateChar = ()=>{
        clearError();
        const id = Math.floor(Math.random() * (1011400 - 1011000) + 1011000)
        getCharacter(id)
        .then(onChatLoaded)
     }
     const TryRandomBtn = ()=>{
        updateChar()
     }
        const Error = error ? <ErrorMessage/> : null;
        const spinner = loading ? <Spinner/> : null;
        const Content = !(loading || error) ? <View char={char}/> : null;
        return(
            <div className="randomchar">
                {Error}
                {spinner}
                {Content}
            <div className="randomchar-static">
                <section className="randomchar-static-section">
                    <h1 className="randomchar-static-text">Random character for today!<br/>
                        Do you want to get to know him better?
                    </h1>
                    <h1 className="randomchar-static-text" style={{marginBottom: '17px'}}>Or choose another one</h1>
                    <button className="randomchar-static-btn"  onClick={TryRandomBtn}>
                        <div className="randomchar-static-btn-text">TRY IT</div>
                    </button>
                    
                </section>
                <img src={mjolnir} alt="" className="randomchar-static-molot"/>
            </div>
        </div>
        )
  
   
}   
const View = ({char})=>{
    const {name, description, thumbnail, homepage, wiki} = char; 

    return(
        <div className="randomchar-block">
        <img src={thumbnail} className="randomchar-block-thor" alt=""/>
        <div className="randomchar-block-right">
            <h2 className="randomchar-block-right-thor">{name}</h2>
            <p className="randomchar-block-right-text">
                {description}
            </p>
                <div className="randomchar-block-right-for-btn">
                    <button className="randomchar-block-right-btn-homepage"><a href={homepage} className="randomchar-block-right-btn-homepage-a">HOMEPAGE</a> </button>  
                    <button className="randomchar-block-right-btn-homepage-second"><a href={wiki} className="randomchar-block-right-btn-homepage-a">WIKI</a></button>
                </div>

        </div>
    </div>
    )
}
export default RandomChar