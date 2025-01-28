import {useState, useEffect, useRef} from "react"
import {CSSTransition, TransitionGroup  } from 'react-transition-group'
import useMarvelService from "../../services/MarvelService"

import dataChar from "../types/marvel";

interface IcharListPros { 
    onCharSelected: (id: number) => void
}
const CharList = (props: IcharListPros): JSX.Element=> {
    const [charList, setCharList] = useState<dataChar[]>([]);
    const [newItemLoading, setNewItemLoading] = useState<boolean>(false);
    const [offset, setOffset] = useState<number>(210);
    const [charEnded, setCharEnded] = useState<boolean>(false)
    const [activeIndex, setActiveIndex] = useState<number | null>(null);
    const {getAllCharacters} = useMarvelService();

    useEffect(()=>{
        onRequest()
        // eslint-disable-next-line
    }, []);

    const onRequest: (offset?: number) => void = (offset)=>{        
        setNewItemLoading(true)       
        getAllCharacters(offset)
        .then((arrayOfChar: dataChar[]) => onCharLoaded(arrayOfChar))
    }

    const onCharLoaded = (newChar: dataChar[]): void => {
        let ended = false;
        if(newChar.length  < 9){
            ended = true
        }
        setCharList(charList =>[...charList, ...newChar]);
        setNewItemLoading(false);
        setOffset(offset => offset + 9);
        setCharEnded(ended)
    }   
    //  Использую ref, чтобы поставить box-shadow на активный елемент
        const itemRefs = useRef<(HTMLLIElement | null)[]>([]);              //ЧЕКНУТЬ ДОКУМЕНТАЦИЮ ПОЧЕМУ ТАК 
        const focusOnItem = (id: number): void => {
            setActiveIndex(id); // Сохраняем индекс активного элемента
        };
        function RenderList(): JSX.Element {
            const items: JSX.Element[] = charList.map((item: dataChar, i: number) => {
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
                         ref={(el) => {itemRefs.current[i] = el}}>
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
export default CharList