import MarvelAvengers from '../img/Marvel-Avengers.svg'
import MarvelComics from '../img/Marvel-Hero.svg'
const AppBanner = ()=>{
    return(
        <div className="comics-every-week">
                <div className="comics-every-week-left">
        <img src={MarvelComics} alt="" className="img-marvel-hero"/>
        <h2 className="comics-every-week-text">New comics every week!<br/> Stay tuned!</h2>
    </div>
    <img src={MarvelAvengers} alt="" className="img-marvel-avengers"/>
</div>

    )
}
export default AppBanner 