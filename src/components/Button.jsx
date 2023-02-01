import "./Button.scss";

const Button = props => {
  return (
    <div className="button-container">
      <button type="button" className="button text--bold">{props.label}</button>
    </div>
  );
};

export default Button;