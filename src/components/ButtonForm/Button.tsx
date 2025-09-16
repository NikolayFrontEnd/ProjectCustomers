import style from "./Button.module.css";

interface ButtonProps {
  text: string;
  type?: "button" | "submit";
  activeBtn?: boolean;
}
const Button = ({ text, type = "button", activeBtn = true }: ButtonProps) => {
  return (
    <button
      type={type}
      className={
        activeBtn ? style.signin__formbutton__active : style.signin__formbutton
      }
    >
      {text}
    </button>
  );
};

export default Button;
