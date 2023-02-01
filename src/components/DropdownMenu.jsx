import Button from "./NavButton";

import "./DropdownMenu.scss";

const DropdownMenu = props => {
  return (
    (props.menuIsActive &&
      <section className="dropdown-menu-container">
        <Button label="About" />
        <Button label="Portfolio" />
        <Button label="Contact" />
      </section>
    )
  );
};

export default DropdownMenu;