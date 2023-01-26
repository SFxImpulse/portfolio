import "./Button.scss";

const Button = props => {
  return (
    <button className="button">
      <h3 className="label">{props.label}</h3>
    </button>
  );
};

export default Button;