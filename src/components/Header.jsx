import DarkModeButton from "./DarkModeButton";
import MenuButton from "./MenuButton";
import "./Header.scss";

const Header = () => {
  return (
    <nav className="nav-container">
      <h2 className="last-name text--light">Braverman</h2>
      <div className="button-container">
        <DarkModeButton />
        <MenuButton />
      </div>
    </nav>
  );
}

export default Header;