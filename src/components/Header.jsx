import Button from "./Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGripLines } from "@fortawesome/free-solid-svg-icons";
import { faMoon } from '@fortawesome/free-solid-svg-icons';
import "./Header.scss";

const Header = () => {
  return (
    <nav className="nav-container">
      <h2 className="last-name">Braverman</h2>
      <div className="button-container">
        <FontAwesomeIcon icon={faMoon} size="2x" className="darkmode-button" onClick={() => console.log("Dark Mode Activated")} />
        <FontAwesomeIcon icon={faGripLines} size="2x" className="menu-button" onClick={() => console.log("Menu Opened")} />
      </div>
    </nav>
  );
}

export default Header;