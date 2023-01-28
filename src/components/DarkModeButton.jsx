import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';
import "./DarkModeButton.scss";

const DarkModeButton = props => {

  // console.log(props.dark);

  return (
    (props.dark
      ? <FontAwesomeIcon 
          icon={faSun}
          size="2x"
          className="darkmode-button"
          onClick={() => {
            props.setDark({
              dark: false
            });
          }}
        />  
      : <FontAwesomeIcon
          icon={faMoon}
          size="2x"
          className="darkmode-button"
          onClick={() => {
            props.setDark({
              dark: true
            });
          }}
        />
    )
  );
};

export default DarkModeButton;