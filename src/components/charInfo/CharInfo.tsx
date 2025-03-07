import { useEffect } from "react";

import DataChar from "../types/marvel";

import setContent from "../../utils/SetContent";
import "react-loading-skeleton/dist/skeleton.css";
import { store } from "../../stores/RootStore";
import { observer } from "mobx-react-lite";
import "./charInfo.css";
interface ViewProps {
	data: DataChar;
}
const CharInfo = observer((): JSX.Element => {
	const char = store.charInfoStore.char;
	const process = store.charInfoStore.process;
	const waiting = store.charInfoStore.waiting;
	useEffect(() => {
		store.charInfoStore.updateChar(store.charStore.itemId);
		// eslint-disable-next-line
	}, [store.charStore.itemId]);
	return <div className="descr">{setContent(waiting === "waiting" ? waiting : process, View, char)}</div>;
});
const View = ({ data }: ViewProps): JSX.Element => {
	const { name, description, thumbnail, homepage, wiki, comics } = data;
	return (
		<>
			<section className="info-section">
				<img
					src={thumbnail}
					alt={name}
					className="hero-avatar"
				/>
				<section className="section">
					<h1 className="hero-name">{name}</h1>
					<div className="randomchar-block-right-for-btn">
						<a
							href={homepage}
							className="randomchar-block-right-btn-homepage"
							style={{ marginBottom: "10px" }}>
							HOMEPAGE
						</a>
						<a
							href={wiki}
							className="randomchar-block-right-btn-homepage-second">
							WIKI
						</a>
					</div>
				</section>
			</section>
			<p className="hero-desct-text">{description}</p>
			<section className="comics">
				<h2 className="comics-title">Comics:</h2>
				<ul className="comics-list">
					{comics.length > 0 ? null : "there is no description for this char"}
					{comics.map((item, i) => {
						if (i > 14) return null;
						return (
							<li
								key={item.name}
								className="comics-item">
								{item.name}
							</li>
						);
					})}
				</ul>
			</section>
		</>
	);
};
export default CharInfo;
