import "./NavButton.scss";

const NavButton = props => {
  return (
    <button className="nav-button">
      <h3 className="label text--regular">{props.label}</h3>
    </button>
  );
};

export default NavButton;