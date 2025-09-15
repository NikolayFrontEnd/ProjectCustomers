import style from './Signinform.module.css';
import lock from '../assets/Lock.png';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const SigninForm = () => {
      const navigate = useNavigate();
  const [isFocused, setIsFocused] = useState<boolean>(false);
    const [email, setEmail] = useState<string>("");
        const [password, setPassword] = useState<string>("");
            const [error, setError] = useState<boolean>(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
        const regex = /^\S+@\S+\.\S+$/;
        if(!regex.test(email) || password.length<6){
            setError(true)
        }
        else{
         navigate('/main');
        }
  };

    return <>
    <form onSubmit={handleSubmit} className={style.signin__form}>

                <div className={style.signin__formtitle}>Sign in</div>
      
        <div className={style.signin__forminputblock}>
          <img src = {lock} className={style.signin__forminputicon} />
          <input 
            className={style.signin__forminput}
            placeholder='Password' 
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        
        <div className={style.signin__forminputblock}>
          <input 
            className={style.signin__forminput}
            placeholder='Email' 
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
       <div 
       className = {style.signin__forminputBlock__errormessage} style={{ display: error ? "block" : "none" }}
 >
        {error && "Неверно введен логин или пароль!"}
       </div> 
        <button className={
          isFocused ? style.signin__formbutton__active : style.signin__formbutton
        }>Sign in</button>
            </form>
    </>
}