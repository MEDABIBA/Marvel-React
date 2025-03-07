import img from "./error.gif";
import "./errorMessage.css";
const ErrorMessage = (): JSX.Element => {
  return (
    <div className="randomchar-block">
      <img src={img} alt="error" style={{ display: "block" }} />
    </div>
  );
};
export default ErrorMessage;
