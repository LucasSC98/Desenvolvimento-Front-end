import "./Button.css";

type ButtonProps = {
  text?: string;
  onClick?: () => void;
};

const Button = ({ text, onClick }: ButtonProps) => {
  return (
    <button className="button" onClick={onClick}>
      {text}
    </button>
  );
};

export default Button;
