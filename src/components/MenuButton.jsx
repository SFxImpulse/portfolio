import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGripLines, faGripLinesVertical } from "@fortawesome/free-solid-svg-icons";
import "./MenuButton.scss";

const MenuButton = props => {

  console.log(props);

  return (
    (props.menuIsActive
      ? <FontAwesomeIcon
          icon={faGripLinesVertical}
          size="2x"
          className="menu-button"
          onClick={() => {
            props.setMenuIsActive(false);
          }}
        />
      : <FontAwesomeIcon
          icon={faGripLines}
          size="2x"
          className="menu-button"
          onClick={() => {
            props.setMenuIsActive(true);
          }}
        />
    )
  );
};

export default MenuButton;