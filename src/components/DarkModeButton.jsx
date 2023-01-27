import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon } from '@fortawesome/free-solid-svg-icons';
import "./DarkModeButton.scss";

const DarkModeButton = () => {
  return (
    <FontAwesomeIcon icon={faMoon} size="2x" className="darkmode-button" onClick={() => console.log("Dark Mode Activated")} />
  );
};

export default DarkModeButton;