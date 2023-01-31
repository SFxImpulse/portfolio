import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import "./MenuButton.scss";

const MenuButton = props => {

  console.log(props);

  const activateMenu = () => {
    if (props.menuIsActive) {
      return props.setMenuIsActive(false);
    }
    return props.setMenuIsActive(true);
  }

  return (
    <FontAwesomeIcon
      icon={faBars}
      size="2x"
      className="menu-button"
      onClick={() => {
        activateMenu();
      }}
    />
  );
};

export default MenuButton;