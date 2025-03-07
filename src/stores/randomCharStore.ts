import { makeAutoObservable, runInAction } from "mobx";
import RootStore from "./RootStore";
import DataChar, { TypeOfProcess } from "../components/types/marvel";
class RandomCharStore {
  rootStore: RootStore;
  char: DataChar | null = null;
  process: TypeOfProcess = "loading";
  constructor(RootStore: RootStore) {
    this.rootStore = RootStore;
    this.updateChar();
    makeAutoObservable(this);
  }

  setProcess = (value: TypeOfProcess) => {
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
    this.rootStore.marvelStore.getCharacter(id, this.setProcess).then((char: DataChar) => this.onChatLoaded(char));
  };
  onChatLoaded = (char: DataChar) => {
    this.char = char;
  };
  TryRandomBtn = (): void => {
    this.updateChar();
  };
}
export default RandomCharStore;
