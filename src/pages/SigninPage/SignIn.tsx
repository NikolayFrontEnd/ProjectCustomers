import style from "./SignIn.module.css";
import { SigninForm } from "../../components/SigninComponent/SigninForm";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import SignInLogoIcon from "../../components/Icons/SignInLogoIcon";
export const SignIn = () => {
  const navigate = useNavigate();
  const [isFocused, setIsFocused] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const regex = /^\S+@\S+\.\S+$/;
    if (!regex.test(email) || password.length < 6) {
      setError(true);
    } else {
      setError(false);
      navigate("/main");
    }
  };
  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
    if (error) setError(false);
  };
  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
    if (error) setError(false);
  };
  const handleFocus = () => setIsFocused(true);
  const handleBlur = () => setIsFocused(false);

  return (
    <div className={style.signIn}>
      <div className={style.signin__logo}>

     <SignInLogoIcon/>
      </div>

      <SigninForm
        email={email}
        password={password}
        error={error}
        isFocused={isFocused}
        onSubmit={handleSubmit}
        onEmailChange={handleEmailChange}
        onPasswordChange={handlePasswordChange}
        onFocus={handleFocus}
        onBlur={handleBlur}
      />
    </div>
  );
};
