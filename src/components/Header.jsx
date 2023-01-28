import { useState } from "react";

import DarkModeButton from "./DarkModeButton";
import MenuButton from "./MenuButton";
import "./Header.scss";

const Header = () => {

  const [state, setState] = useState({
    dark: false,
  });

  return (
    <nav className="nav-container">
      <h2 className="last-name text--light">Braverman</h2>
      <div className="button-container">
        <DarkModeButton 
          dark={state.dark}
          setDark={setState}
        />
        <MenuButton />
      </div>
    </nav>
  );
}

export default Header;