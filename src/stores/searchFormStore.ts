import { makeAutoObservable } from "mobx";
import RootStore from "./RootStore";
import dataChar from "../components/types/marvel";
class searchFormStore {
	data: dataChar[] | null = null;
	rootStore: RootStore;
	constructor(RootStore: RootStore) {
		this.rootStore = RootStore;
		makeAutoObservable(this);
	}

	onSubmit(name: string): void {
		this.rootStore.marvelStore.clearError();
		this.rootStore.marvelStore.getCharacterByName(name).then(this.onLoaded);
	}
	onLoaded = (char: dataChar[]) => {
		this.data = char;
	};
}
export default searchFormStore;
