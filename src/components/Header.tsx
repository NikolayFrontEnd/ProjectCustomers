import style from './Header.module.css';
import logo from '../assets/LogoGreen.png';
export const Header = () => {
    
    return (
        <>
        <div className={style.header}>

        <div className = {style.header__logo}>
             <img  src = {logo}/> 
        </div>

<div className = {style.header__menu}>

    <div className = {style.header__menu__item__active}>Customers</div>
    <div className = {style.header__menu__item}>Scheduled Membership Cancellation</div>
    <div className = {style.header__menu__item}>Executed Membership Cancelattion</div>

</div>

</div>
        </>
    )
}