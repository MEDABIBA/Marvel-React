import { Link } from "react-router-dom";
import { IDataComics } from "../../types/marvel";
import "../forAllPage.css";
const SignleComic = ({ data }: { data: IDataComics }): JSX.Element => {
  const { thumbnail, title, description, language, pageCount, price } = data;
  return (
    <div className="comics-descr">
      <img className="comics-descr-img" src={thumbnail} alt={title} />
      <div className="comics-descr-right">
        <div className="comics-descr-right-info">
          <h2 className="comics-descr-right-title">{title}</h2>
          <p className="comics-descr-right-text">{description}</p>
          <p className="comics-descr-right-pages">{pageCount}</p>
          <p className="comics-descr-right-language">{language}</p>
          <h2 className="comics-descr-right-price">{price}</h2>
        </div>
        <Link to="/comics" className="button-back">
          Back to all
        </Link>
      </div>
    </div>
  );
};
export default SignleComic;
