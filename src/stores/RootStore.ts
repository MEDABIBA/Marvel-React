import { makeAutoObservable } from "mobx";
import MarvelStore from "./marvelStore";
import ComicsStore from "./ComicsStore";
import CharStore from "./CharStore";
import searchFormStore from "./searchFormStore";
import CharInfoStore from "./charInfoStore";
import SinglePage from "./singlePage";
import RandomCharStore from "./randomCharStore";
class RootStore {
	marvelStore = new MarvelStore(this);
	comicsStore = new ComicsStore(this);
	charStore = new CharStore(this);
	searchFormStore = new searchFormStore(this);
	charInfoStore = new CharInfoStore(this);
	singlePage = new SinglePage(this);
	randomChar = new RandomCharStore(this);
	constructor() {
		makeAutoObservable(this);
	}
}
export const store = new RootStore();
export default RootStore;
