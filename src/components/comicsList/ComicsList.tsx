import { Link } from "react-router-dom";
import Spinner from "../spinner/Spinner";
import { IDataComics } from "../types/marvel";
import { store } from "../../stores/RootStore";
import { observer } from "mobx-react-lite";
import "./comicsList.css";
const ComicsList = observer(() => {
  const loading = store.marvelStore.loading;
  const newLoading = store.comicsStore.newLoading;
  const comics = store.comicsStore.comicsList;
  const end = store.comicsStore.end;

  const spinner: JSX.Element | null = loading && !newLoading ? <Spinner /> : null;
  function RenderList(): JSX.Element[] {
    return comics.map((item: IDataComics) => {
      return (
        <li className="list-item2" key={item.id}>
          <Link to={`/comics/${item.id}`}>
            <img src={item.thumbnail} alt="" className="list-item2-img" />
            <p className="list-item-text2">{item.title}</p>
            <p className="list-item-price">{item.price}</p>
          </Link>
        </li>
      );
    });
  }
  return (
    <>
      <ul className="list">
        {spinner}
        {RenderList()}
      </ul>
      <button
        style={{
          marginBottom: 67,
          display: end ? "none" : "inline",
        }}
        className="footer-btn"
        disabled={newLoading}
        onClick={() => store.comicsStore.onRequest()}
      >
        LOAD MORE
      </button>
    </>
  );
});
export default ComicsList;

// The user is noticing that the UI shows outdated values while the address bar is correct. It could be an issue with caching, delayed state updates, or MobX not triggering a re-render in time. The fact that it involves a lazy-loaded component suggests it may not render until the fetch is complete. I’ll need to figure out which part of this is causing the delay and make sure the state updates properly to reflect the new URL.

// There are quite a few possibilities here: First, t
