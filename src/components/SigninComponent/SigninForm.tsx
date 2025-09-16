import style from "./Signinform.module.css";
import lock from "../../assets/Lock.png";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../ButtonForm/Button";
import FormInput from "../FormInput/FormInput";
import { ErrorMessage } from "../Error/ErrorMessage";
export const SigninForm = () => {
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
      navigate("/main");
    }
  };

  return (
    <form onSubmit={handleSubmit} className={style.signin__form}>
      <div className={style.signin__formtitle}>Sign in</div>

      <FormInput
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
        type="password"
        icon={lock}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
      />

      <FormInput
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
      />

      <ErrorMessage message="Wrong password or email" visible={error} />

      <Button text="Sign in" type="submit" activeBtn={isFocused} />
    </form>
  );
};
