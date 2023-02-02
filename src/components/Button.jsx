import classNames from "classnames";

import "./Button.scss";

const Button = props => {

  const button = classNames({
    "button": !props.dark,
    "button-dark": props.dark,
  });

  return (
    <button className={button}>
      <h3 type="button" className="label text--regular">{props.label}</h3>
    </button>
  );
};

export default Button;