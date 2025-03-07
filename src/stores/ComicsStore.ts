import { makeAutoObservable } from "mobx";
import { IDataComics } from "../components/types/marvel";
import RootStore from "./RootStore";
class ComicsStore {
  rootStore: RootStore;
  comicsList: IDataComics[] = [];
  offset: number = 0;
  newLoading: boolean = false;
  end: boolean = false;
  error: string | null = null;

  constructor(RootStore: RootStore) {
    this.rootStore = RootStore;
    makeAutoObservable(this);
    this.onRequest(true);
  }

  setNewLoading(value: boolean) {
    this.newLoading = value;
  }
  onRequest(initial?: boolean): void {
    initial ? this.setNewLoading(false) : this.setNewLoading(true);
    this.rootStore.marvelStore
      .getAllComics(this.offset)
      .then((comics: IDataComics[]) => this.onComicsLoaded(comics))
      .finally(() => this.setNewLoading(false));
  }
  onComicsLoaded(newComics: IDataComics[]): void {
    if (newComics.length === 8) {
      this.offset = this.offset + 8;
      this.comicsList = [...this.comicsList, ...newComics.filter((newComics) => !this.comicsList.some((comic) => comic.id === newComics.id))];
    } else {
      this.comicsList = [...this.comicsList, ...newComics.filter((newComics) => !this.comicsList.some((comic) => comic.id === newComics.id))];
      this.end = false;
    }
  }
}

export default ComicsStore;
