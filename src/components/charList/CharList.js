import  React, { Component } from "react"
import PropTypes from "prop-types";
import MarvelService from "../../services/MarvelService"
class CharList extends Component {
    state = {
            charList: [],
            newItemLoading: false,
            offset: 210,
            charEnded:false
    }
    marvelService = new MarvelService();
    componentDidMount(){
        this.onRequest()
    }
    onRequest = (offset)=>{
        this.onCharListLoading()
        this.marvelService
        .getAllCharacters(offset)
        .then(this.onCharLoaded)
    }
    onCharListLoading = ()=>{
        this.setState({
            newItemLoading: true
        })
    }
    // onListAdd = ()=>{
    //     this.marvelService
    //     .getAllCharacters()
    //     .then(this.onCharLoaded)
    // }
    onCharLoaded = (newChar)=>{
        let ended = false;
        if(newChar.length  < 9){
            ended = true
        }
        this.setState(({charList, offset})=>( 
            {charList: [...charList, ...newChar], newItemLoading: false, offset: offset + 9, charEnded: ended}
        ))
    }
        itemRefs = [];             //  Использую ref, чтобы поставить box-shadow на активный елемент
        setRef = (ref)=>{
            this.itemRefs.push(ref)
        }
        focusOnItem = (id)=>{
            this.itemRefs.forEach(item => item.classList.remove('char__item_selected'));
            this.itemRefs[id].classList.add('char__item_selected');
            
        }
    RenderList = ()=>{
       return this.state.charList.map((item, i) => {
            return(
                
                <li key={item.id} onClick={() => [this.props.onCharSelected(item.id), this.focusOnItem(i)] } className="list-item" ref={this.setRef}>
                        <img  src={item.thumbnail} alt="" className="list-item-img"/>
                        <div  className="list-item-text">{item.name}</div>
                    </li>
                    )
               
        })
    }
    render(){    
        const {offset, newItemLoading, charEnded} = this.state
        return(
            <div>
            <ul className="list-ul">
            <this.RenderList/>
            </ul>
                <button className="footer-btn"
                disabled={newItemLoading} //Для filter: grayscale(50%);
                onClick={()=> this.onRequest(offset)}
                style={{display: charEnded ? 'none' : 'block'}}>
                LOAD MORE
                </button>
        </div>
         )  
    }
}
 CharList.propTypes = {  // проверяем тип с помощю npm propTypes 
    onCharSelected: PropTypes.func.isRequired
}
export default CharList