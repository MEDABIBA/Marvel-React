import  React, {useState, useEffect, useRef} from "react"
import {CSSTransition, TransitionGroup  } from 'react-transition-group'
import PropTypes from "prop-types";
import useMarvelService from "../../services/MarvelService"
const CharList = (props)=> {

    const [charList, setCharList] = useState([]);
    const [newItemLoading, setNewItemLoading] = useState(false);
    const [offset, setOffset] = useState(210);
    const [charEnded, setCharEnded] = useState(false)
    const [activeIndex, setActiveIndex] = useState(null);

    const {getAllCharacters} = useMarvelService();

    useEffect(()=>{
        onRequest()
    }, []);

    const onRequest = (offset)=>{
        setNewItemLoading(true)       
        getAllCharacters(offset)
        .then(onCharLoaded)
    }
    // onListAdd = ()=>{
    //     this.marvelService
    //     .getAllCharacters()
    //     .then(this.onCharLoaded)
    // }
    const onCharLoaded = (newChar)=>{
        let ended = false;
        if(newChar.length  < 9){
            ended = true
        }
        setCharList(charList =>[...charList, ...newChar]);
        setNewItemLoading(false);
        setOffset(offset => offset + 9);
        setCharEnded(ended)
    }   
        let itemRefs = useRef([]);   
         //  Использую ref, чтобы поставить box-shadow на активный елемент


        const focusOnItem = (id) => {
            setActiveIndex(id); // Сохраняем индекс активного элемента
        };
        function RenderList(){
            const items = charList.map((item, i) => {
                    return(
                        <CSSTransition
                        key={item.id}
                        timeout={300}
                        classNames="my-node">
                        <li 
                            onClick={() => {
                                props.onCharSelected(item.id); // Вызываем по отдельности
                                focusOnItem(i);
                            }} 
                         className={`list-item ${i === activeIndex ? 'char__item_selected' : ''}`}
                         ref={el => itemRefs.current[i] = el}>
                                    <img  src={item.thumbnail} alt="" className="list-item-img"/>
                                    <div  className="list-item-text">{item.name}</div>
                                </li>
                        </CSSTransition>
                            )
                       
                })
            return (
                <ul className="list-ul">
                <TransitionGroup component={null}>
                    {items}
                </TransitionGroup>
                </ul>
            )

    }

        return(
            <div>

            <RenderList/>

                <button className="footer-btn"
                disabled={newItemLoading} //Для filter: grayscale(50%);
                onClick={()=>  onRequest(offset)}
                style={{display: charEnded ? 'none' : 'block'}}>
                LOAD MORE
                </button>
        </div>
         )
}
 CharList.propTypes = {  // проверяем тип с помощю npm propTypes 
    onCharSelected: PropTypes.func.isRequired
}
export default CharList