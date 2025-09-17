import style from "./SignIn.module.css";
import logo from "../../assets/Logo.png";
import { SigninForm } from "../../components/SigninComponent/SigninForm";
export const SignIn = () => {
  return (
    <div className={style.signIn}>
      <div className={style.signin__logo}>
        <img src={logo} />
      </div>

      <SigninForm />
    </div>
  );
};
