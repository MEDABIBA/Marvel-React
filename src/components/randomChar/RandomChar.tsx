import setContent from "../../utils/SetContent";
import { store } from "../../stores/RootStore";
import DataChar from "../types/marvel";

import mjolnir from "../img/molot.png";
import { observer } from "mobx-react-lite";
import "./randomChar.css";
const RandomChar = observer(() => {
  return (
    <div className="randomchar">
      {setContent(store.randomChar.getProcess(), View, store.randomChar.char as DataChar)}
      <div className="randomchar-static">
        <section className="randomchar-static-section">
          <h1 className="randomchar-static-text">
            Random character for today!
            <br />
            Do you want to get to know him better?
          </h1>
          <h1 className="randomchar-static-text" style={{ marginBottom: "17px" }}>
            Or choose another one
          </h1>
          <button className="randomchar-static-btn" onClick={store.randomChar.TryRandomBtn}>
            <div className="randomchar-static-btn-text">TRY IT</div>
          </button>
        </section>
        <img src={mjolnir} alt="" className="randomchar-static-molot" />
      </div>
    </div>
  );
});
interface IViewPort {
  data: DataChar;
}
const View = ({ data }: IViewPort): JSX.Element => {
  const { name, description, thumbnail, homepage, wiki } = data;

  return (
    <div className="randomchar-block">
      <img src={thumbnail} className="randomchar-block-thor" alt="" />
      <div className="randomchar-block-right">
        <h2 className="randomchar-block-right-thor">{name}</h2>
        <p className="randomchar-block-right-text">{description}</p>
        <div className="randomchar-block-right-for-btn">
          <button className="randomchar-block-right-btn-homepage">
            <a href={homepage} className="randomchar-block-right-btn-homepage-a">
              HOMEPAGE
            </a>{" "}
          </button>
          <button className="randomchar-block-right-btn-homepage-second">
            <a href={wiki} className="randomchar-block-right-btn-homepage-a">
              WIKI
            </a>
          </button>
        </div>
      </div>
    </div>
  );
};
export default RandomChar;
