import DarkModeButton from "./DarkModeButton";
import MenuButton from "./MenuButton";
import "./Header.scss";

const Header = props => {

  return (
    <nav className="nav-container">
      <h2 className="last-name text--light">Braverman</h2>
      <div className="button-container">
        <DarkModeButton 
          dark={props.dark}
          setDark={props.setDark}
        />
        <MenuButton />
      </div>
    </nav>
  );
}

export default Header;