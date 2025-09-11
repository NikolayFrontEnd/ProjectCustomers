import style from './Header.module.css';
import logo from '../assets/LogoGreen.png';
import { useState } from 'react';
export const Header = () => {

    type PageType = 0 | 1 | 2;
    const [page, setpage] = useState<PageType>(0);
    const PageChange = (num:PageType) =>{
    setpage(num);
}

    return (
        <>
        <div className={style.header}>

        <div className = {style.header__logo}>
             <img  src = {logo}/> 
        </div>

<div className = {style.header__menu}>

    <div onClick = {()=>PageChange(0)} className = { page === 0 ? style.header__menu__item__active : style.header__menu__item }>Customers</div>
    <div onClick = {()=>PageChange(1)} className = { page === 1 ? style.header__menu__item__active :  style.header__menu__item}>Scheduled Membership Cancellation</div>
    <div onClick = {()=>PageChange(2)} className = { page === 2 ? style.header__menu__item__active : style.header__menu__item}>Executed Membership Cancelattion</div>

</div>

</div>
        </>
    )
}