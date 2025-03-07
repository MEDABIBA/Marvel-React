import { makeAutoObservable } from "mobx";
import RootStore from "./RootStore";
import DataChar, { TypeOfProcess } from "../components/types/marvel";
class CharInfoStore {
  rootState: RootStore;
  char: DataChar | null = null;
  waiting: "waiting" | "none" = "waiting";
  process: TypeOfProcess = "loading";
  constructor(RootStore: RootStore) {
    this.rootState = RootStore;
    makeAutoObservable(this);
  }

  setProcess = (value: TypeOfProcess) => {
    this.process = value;
  };
  updateChar(props: number): void {
    this.rootState.marvelStore.clearError();
    // const { charId } = props;
    if (!props) {
      return;
    }
    this.waiting = "none";
    this.rootState.marvelStore.getCharacter(props, this.setProcess).then((char: DataChar) => this.onCharLoaded(char));
  }
  onCharLoaded(char: DataChar | null) {
    this.char = char;
  }
}
export default CharInfoStore;
