import style from "./Signinform.module.css";
import Button from "../ButtonForm/Button";
import FormInput from "../FormInput/FormInput";
import { ErrorMessage } from "../Error/ErrorMessage";
import LockIcon from "../Icons/LockIcon";

interface SigninFormProps {
  email: string;
  password: string;
  error: boolean;
  isFocused: boolean;
  onSubmit: (e: React.FormEvent) => void;
  onEmailChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onPasswordChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onFocus: () => void;
  onBlur: () => void;
}
export const SigninForm = ({
  email,
  password,
  error,
  isFocused,
  onSubmit,
  onEmailChange,
  onPasswordChange,
  onFocus,
  onBlur,
}: SigninFormProps) => {
  return (
    <form onSubmit={onSubmit} className={style.signin__form}>
      <div className={style.signin__formtitle}>Sign in</div>

      <FormInput
        value={password}
        onChange={onPasswordChange}
        placeholder="Password"
        type="password"
        icon={<LockIcon />}
        onFocus={onFocus}
        onBlur={onBlur}
      />

      <FormInput
        value={email}
        onChange={onEmailChange}
        placeholder="Email"
        onFocus={onFocus}
        onBlur={onBlur}
      />

      <ErrorMessage message="Wrong password or email" visible={error} />

      <Button text="Sign in" type="submit" activeBtn={isFocused} />
    </form>
  );
};
