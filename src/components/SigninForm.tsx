import style from './Signinform.module.css';
import lock from '../assets/Lock.png';

export const SigninForm = () => {
    
    return <>
            <div className={style.signin__formtitle}>Sign in</div>
        
        <div className={style.signin__forminputblock}>
          <img src = {lock} className={style.signin__forminputicon} />
          <input 
            className={style.signin__forminput}
            placeholder='Password' 
            type='password'
          />
        </div>
        
        <div className={style.signin__forminputblock}>
          <input 
            className={style.signin__forminput}
            placeholder='Email' 
            type='email'
          />
        </div>
        
        <button className={style.signin__formbutton}>Sign in</button>
    </>
}