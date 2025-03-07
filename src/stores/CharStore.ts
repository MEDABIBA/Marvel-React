import { makeAutoObservable } from "mobx";
import RootStore from "./RootStore";
import DataChar from "../components/types/marvel";

class CharStore {
  rootStore: RootStore;
  charList: DataChar[] = [];
  newItemLoading: boolean = false;
  offset: number = 210;
  charEnded: boolean = false;
  activeIndex: number | null = null;
  itemId: number = 0;

  setItemId(id: number) {
    this.itemId = id;
  }
  setActiveIndex(id: number) {
    this.activeIndex = id;
  }
  constructor(RootStore: RootStore) {
    this.rootStore = RootStore;
    makeAutoObservable(this);
    this.onRequest();
  }

  onRequest(offset?: number): void {
    this.newItemLoading = true;
    this.rootStore.marvelStore.getAllCharacters(offset).then((arrayOfChar: DataChar[]) => this.onCharLoaded(arrayOfChar));
  }
  onCharLoaded = (newChar: DataChar[]): void => {
    let ended = false;
    if (newChar.length < 9) {
      ended = true;
    }
    this.charList = [...this.charList, ...newChar];
    this.newItemLoading = false;
    this.offset += 9;
    this.charEnded = ended;
  };
}
export default CharStore;
