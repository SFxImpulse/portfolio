import Button from "./Button";

const Header = () => {
  return (
    <nav className="nav-container">
      <h2 className="last-name">Braverman</h2>
      <Button label="ABOUT"/>
      <Button label="RESUME"/>
      <Button label="PORTFOLIO"/>
    </nav>
  );
}

export default Header;