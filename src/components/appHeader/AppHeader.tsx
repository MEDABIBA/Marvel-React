import { Link, NavLink } from "react-router-dom";
import "./appHeader.css";
const AppHeader = (): JSX.Element => {
  return (
    <>
      <header className="header">
        <Link className="header-marvel" to="/">
          Marvel
        </Link>
        <span className="header-marvel"> information portal</span>
        <ul className="header-ul">
          <li className="link">
            {" "}
            <NavLink end to="/" className={({ isActive, isPending }) => (isPending ? "" : isActive ? "button-active" : "")}>
              Characters
            </NavLink>
          </li>
          <li>/</li>
          <li className="link">
            <NavLink end to="/comics" className={({ isActive, isPending }) => (isPending ? "" : isActive ? "button-active" : "")}>
              Comics
            </NavLink>
          </li>
        </ul>
      </header>
    </>
  );
};
export default AppHeader;
