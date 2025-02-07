import { useRef } from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { store } from "../../stores/RootStore";
import dataChar from "../types/marvel";
import { observer } from "mobx-react-lite";
const CharList = observer((): JSX.Element => {
	const charList = store.charStore.charList;
	const newItemLoading = store.charStore.newItemLoading;
	const offset = store.charStore.offset;
	const charEnded = store.charStore.charEnded;
	const activeIndex = store.charStore.activeIndex;

	//  Использую ref, чтобы поставить box-shadow на активный елемент
	const itemRefs = useRef<(HTMLLIElement | null)[]>([]); //ЧЕКНУТЬ ДОКУМЕНТАЦИЮ ПОЧЕМУ ТАК
	const focusOnItem = (id: number): void => {
		store.charStore.setActiveIndex(id); // Сохраняем индекс активного элемента
	};
	function RenderList(): JSX.Element {
		const items: JSX.Element[] = charList.map((item: dataChar, i: number) => {
			return (
				<CSSTransition key={item.id} timeout={300} classNames="my-node">
					<li
						onClick={() => {
							store.charStore.setItemId(item.id);
							focusOnItem(i);
						}}
						className={`list-item ${i === activeIndex ? "char__item_selected" : ""}`}
						ref={(el) => {
							itemRefs.current[i] = el;
						}}>
						<img src={item.thumbnail} alt="" className="list-item-img" />
						<div className="list-item-text">{item.name}</div>
					</li>
				</CSSTransition>
			);
		});
		return (
			<ul className="list-ul">
				<TransitionGroup component={null}>{items}</TransitionGroup>
			</ul>
		);
	}

	return (
		<div>
			<RenderList />

			<button
				className="footer-btn"
				disabled={newItemLoading} //Для filter: grayscale(50%);
				onClick={() => store.charStore.onRequest(offset)}
				style={{ display: charEnded ? "none" : "block" }}>
				LOAD MORE
			</button>
		</div>
	);
});
export default CharList;
