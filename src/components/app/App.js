import { Component } from "react"
import AppHeader from "../appHeader/AppHeader"
import RandomChar from "../randomChar/RandomChar"
import CharList from "../charList/CharList"
import CharInfo from "../charInfo/CharInfo"
import ErrorBoundary from "../errorBoundary/ErrorBoundary"

import decoration from "../img/bg footer.svg"
class Appp extends Component{
    state = {
        selectedChar: null
    }
    onCharSelected = (id) => {
        this.setState({
            selectedChar: id
        })
    }
   render(){
    return(
        <div className="app">
        <AppHeader/>
        <main>
            <ErrorBoundary>
                <RandomChar/>
            </ErrorBoundary>
            <div className='list-and-descr'>
                <ErrorBoundary> 
                    <CharList onCharSelected={this.onCharSelected}/> 
                </ErrorBoundary>
                <ErrorBoundary>
                    <CharInfo charId={this.state.selectedChar}/>
                </ErrorBoundary>
            </div>
            <img src={decoration} alt="" className="footer-bck-img"/> 
        </main>
        </div>
        
    )
   }
}

export default Appp