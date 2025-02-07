import { makeAutoObservable, runInAction } from "mobx";
import RootStore from "./RootStore";
import dataChar, { typeOfProcess } from "../components/types/marvel";
class RandomCharStore {
	rootStore: RootStore;
	char: dataChar | null = null;
	process: typeOfProcess = "loading";
	constructor(RootStore: RootStore) {
		this.rootStore = RootStore;
		this.updateChar();
		makeAutoObservable(this);
	}

	setProcess = (value: typeOfProcess) => {
		runInAction(() => {
			this.process = value;
		});
	};
	getProcess() {
		return this.process;
	}

	updateChar = () => {
		this.rootStore.marvelStore.clearError();
		const id: number = Math.floor(Math.random() * (1011400 - 1011000) + 1011000);
		this.rootStore.marvelStore.getCharacter(id, this.setProcess).then((char: dataChar) => this.onChatLoaded(char));
	};
	onChatLoaded = (char: dataChar) => {
		this.char = char;
	};
	TryRandomBtn = (): void => {
		this.updateChar();
	};
}
export default RandomCharStore;
