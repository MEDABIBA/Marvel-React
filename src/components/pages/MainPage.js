import {useState} from "react"
import {Helmet} from "react-helmet"

import RandomChar from "../randomChar/RandomChar"
import CharList from "../charList/CharList"
import CharInfo from "../charInfo/CharInfo"
import CharSearchForm from "../charSearchForm/CharSearchForm"
import ErrorBoundary from "../errorBoundary/ErrorBoundary"

import decoration from "../img/bg footer.svg"

const MainPage = ()=>{
    const [selectedChar, setChar] = useState(null)
    const  onCharSelected = (id) => {
        setChar(id)
    }
    return(
        <>
            <Helmet>
        <meta charSet="utf-8" />
        <meta name="description" content="Marvel information portal"/>
            <title>Main page</title>
        </Helmet>
            <ErrorBoundary>
                <RandomChar/>
            </ErrorBoundary>
            <div className='list-and-descr'>
            <ErrorBoundary> 
                <CharList onCharSelected={onCharSelected}/> 
            </ErrorBoundary>
            <div>
            <ErrorBoundary>
                <CharInfo charId={selectedChar}/>
                </ErrorBoundary>
            <ErrorBoundary>
            <CharSearchForm/>
            </ErrorBoundary>
            </div>

                    </div>
                    <img src={decoration} alt="" className="footer-bck-img"/>   
        </>
    )
}
export default MainPage