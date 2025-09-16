import style from "./ErrorMessage.module.css";
interface ErrorMessageProps {
  message: string;
  visible: boolean;
}
export const ErrorMessage = ({ message, visible }: ErrorMessageProps) => {
  if (!visible) return null;
  return (
    <div className={style.signin__forminputBlock__errormessage}>{message}</div>
  );
};
