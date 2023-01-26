import Button from "./Button";
import "./Header.scss";

const Header = () => {
  return (
    <nav className="nav-container">
      <h2 className="last-name">Braverman</h2>
      <div className="button-container">
        <button>Light/Dark mode</button>
        <button>Drop Down Menu</button>
      </div>
    </nav>
  );
}

export default Header;