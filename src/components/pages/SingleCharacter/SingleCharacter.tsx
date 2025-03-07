import { Link } from "react-router-dom";
import DataChar from "../../types/marvel";
import "../forAllPage.css";
const SingleCharacter = ({ data }: { data: DataChar }): JSX.Element => {
  const { thumbnail, title, description, name } = data;
  return (
    <div className="comics-descr">
      <img className="comics-descr-img" src={thumbnail} alt={title} />
      <div className="comics-descr-right">
        <div className="comics-descr-right-info">
          <h2 className="comics-descr-right-title">{name}</h2>
          <h2 className="comics-descr-right-title">{title}</h2>
          <p className="comics-descr-right-text">{description}</p>
        </div>
        <Link to="/" className="button-back">
          Back to all
        </Link>
      </div>
    </div>
  );
};
export default SingleCharacter;
