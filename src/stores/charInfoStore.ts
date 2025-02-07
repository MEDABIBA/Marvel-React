import { makeAutoObservable } from "mobx";
import RootStore from "./RootStore";
import dataChar, { typeOfProcess } from "../components/types/marvel";
class CharInfoStore {
	rootState: RootStore;
	char: dataChar | null = null;
	waiting: "waiting" | "none" = "waiting";
	process: typeOfProcess = "loading";
	constructor(RootStore: RootStore) {
		this.rootState = RootStore;
		makeAutoObservable(this);
	}

	setProcess = (value: typeOfProcess) => {
		this.process = value;
	};
	updateChar(props: number): void {
		this.rootState.marvelStore.clearError();
		// const { charId } = props;
		if (!props) {
			return;
		}
		this.waiting = "none";
		this.rootState.marvelStore.getCharacter(props, this.setProcess).then((char: dataChar) => this.onCharLoaded(char));
	}
	onCharLoaded(char: dataChar | null) {
		this.char = char;
	}
}
export default CharInfoStore;
