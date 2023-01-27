import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';
import "./DarkModeButton.scss";

import { useState } from "react";

const DarkModeButton = () => {

  const [state, setState] = useState({
    dark: false
  });

  return (
    (state.dark
      ? <FontAwesomeIcon 
          icon={faSun}
          size="2x"
          className="darkmode-button"
          onClick={() => {
            state.dark ? setState({ dark: false }) : setState({ dark: true });
          }}
        />  
      : <FontAwesomeIcon
          icon={faMoon}
          size="2x"
          className="darkmode-button"
          onClick={() => {
            state.dark ? setState({ dark: false }) : setState({ dark: true });
          }}
        />
    )
  );
};

export default DarkModeButton;