import { makeAutoObservable } from "mobx";
import RootStore from "./RootStore";
import DataChar, { IDataComics, ISinglePageProps, TypeOfProcess } from "../components/types/marvel";
class SinglePage {
  rootStore: RootStore;
  data: IDataComics | DataChar | null = null;
  process: TypeOfProcess = "loading";
  constructor(RootStore: RootStore) {
    this.rootStore = RootStore;
    makeAutoObservable(this);
  }
  setProcess = (value: TypeOfProcess) => {
    this.process = value;
  };

  updating = (dataType: ISinglePageProps<any>["dataType"], ID: string | undefined): void => {
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
  onLoaded = (elem: IDataComics | DataChar) => {
    this.data = elem;
  };
}
export default SinglePage;
