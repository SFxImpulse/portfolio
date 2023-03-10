import DarkModeButton from "./DarkModeButton";
import NavButton from "./NavButton";
import "./Header.scss";

const Header = props => {

  return (
    <nav className="nav-container">
      <h2 className="last-name text--light">Braverman</h2>
      <section className="nav-button-container">
        <NavButton label="About"/>
        <NavButton label="Portfolio"/>
        <NavButton label="Contact"/>
      </section>
      <DarkModeButton 
        dark={props.dark}
        setDark={props.setDark}
        addDark={props.addDark}
        removeDark={props.removeDark}
      />
    </nav>
  );
}

export default Header;