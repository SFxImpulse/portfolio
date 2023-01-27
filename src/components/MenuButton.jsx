import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGripLines } from "@fortawesome/free-solid-svg-icons";
import "./MenuButton.scss";

const MenuButton = () => {
  return (
    <FontAwesomeIcon
      icon={faGripLines}
      size="2x"
      className="menu-button"
      onClick={() => console.log("Menu Opened")}
    />
  );
};

export default MenuButton;