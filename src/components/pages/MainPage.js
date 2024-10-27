import {useState} from "react"

import RandomChar from "../randomChar/RandomChar"
import CharList from "../charList/CharList"
import CharInfo from "../charInfo/CharInfo"
import ErrorBoundary from "../errorBoundary/ErrorBoundary"

import decoration from "../img/bg footer.svg"

const MainPage = ()=>{
    const [selectedChar, setChar] = useState(null)
    const  onCharSelected = (id) => {
        setChar(id)
    }
    return(
        <>
            <ErrorBoundary>
                <RandomChar/>
            </ErrorBoundary>
            <div className='list-and-descr'>
            <ErrorBoundary> 
                <CharList onCharSelected={onCharSelected}/> 
            </ErrorBoundary>
            <ErrorBoundary>
                <CharInfo charId={selectedChar}/>
                </ErrorBoundary>
                    </div>
                    <img src={decoration} alt="" className="footer-bck-img"/>   
        </>
    )
}
export default MainPage