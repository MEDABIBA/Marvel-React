import { Component } from "react"
import MarvelService from "../../services/MarvelService";
import ErrorMessage from "../errorMessage/ErrorMessage";
import Spinner from "../spinner/Spinner";
import mjolnir from '../img/molot.png'
class RandomChar extends Component {
    state = {
        char: {},
        loading: true,
        error: false
    }
     marvelService = new MarvelService();
    componentDidMount(){
        this.updateChar()
    }
     onChatLoaded = (char)=>{
        this.setState({char: char, loading: false})
     }
     onChatLoading = (char)=>{
        this.setState({loading: true})
     }
     onError = ()=>{
        this.setState({loading: false, error: true})
     }
     updateChar = ()=>{
        const id = Math.floor(Math.random() * (1011400 - 1011000) + 1011000)
        this.marvelService
        .getCharacter(id)
        .then(this.onChatLoaded)
        .catch(this.onError)
     }
     TryRandomBtn = ()=>{
        this.onChatLoading()
        this.updateChar()
     }
    render(){
        const {char, loading, error} = this.state;
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
                    <button className="randomchar-static-btn"  onClick={this.TryRandomBtn}>
                        <div className="randomchar-static-btn-text">TRY IT</div>
                    </button>
                    
                </section>
                <img src={mjolnir} alt="" className="randomchar-static-molot"/>
            </div>
        </div>
        )
    }
  
   
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