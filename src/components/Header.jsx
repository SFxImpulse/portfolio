import DarkModeButton from "./DarkModeButton";
import MenuButton from "./MenuButton";
import Button from "./Button";
import "./Header.scss";

const Header = props => {

  return (
    <nav className="nav-container">
      <h2 className="last-name text--light">Braverman</h2>
      <section className="button-container">
        <DarkModeButton 
          dark={props.dark}
          setDark={props.setDark}
        />
        <MenuButton 
          menuIsActive={props.menuIsActive}
          setMenuIsActive={props.setMenuIsActive}
        />
      </section>
    </nav>
  );
}

export default Header;