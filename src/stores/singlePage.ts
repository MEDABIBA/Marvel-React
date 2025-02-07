import { makeAutoObservable } from "mobx";
import RootStore from "./RootStore";
import dataChar, { IdataComics, IsinglePageProps, typeOfProcess } from "../components/types/marvel";
class SinglePage {
	rootStore: RootStore;
	data: IdataComics | dataChar | null = null;
	process: typeOfProcess = "loading";
	constructor(RootStore: RootStore) {
		this.rootStore = RootStore;
		makeAutoObservable(this);
	}
	setProcess = (value: typeOfProcess) => {
		this.process = value;
	};

	updating = (dataType: IsinglePageProps<any>["dataType"], ID: string | undefined): void => {
		this.rootStore.marvelStore.clearError();
		// eslint-disable-next-line
		switch (dataType) {
			case "comic":
				this.rootStore.marvelStore.getComics(ID).then(this.onLoaded);
				break;
			case "character":
				this.rootStore.marvelStore.getCharacter(ID ? parseInt(ID) : null, this.setProcess).then(this.onLoaded);
		}
	};
	onLoaded = (elem: IdataComics | dataChar) => {
		this.data = elem;
	};
}
export default SinglePage;
