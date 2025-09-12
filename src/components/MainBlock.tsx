import style from './MainBlock.module.css';
import search from '../assets/Search.png';
import refresh from '../assets/Refresh.png';
import first from '../assets/First.png';
import left from '../assets/Arrow_left.png';
import right from '../assets/Arrow_right.png';
import last from '../assets/Last.png';
import users from '../assets/users.json';

type User = {
    Name: string;
    Phone: string;
  Email: string;
  Scheduled: string;
  Status: string;
  Executed: string;
}

const Toolbar = () =>{
    return(
        <>
                <div className = {style.toolbar}>

            <div className = {style.toolbar__search}>     
            <div className = {style.toolbar__searchBlock}>
                <img className = {style.toolbar__searchicon} src = {search}/>
                <input className = {style.toolbar__searchinput} placeholder="Search"/>
            </div>
            <button className = {style.toolbar__searhcbutton}>Search</button>
        </div>


        <div className = {style.toolbar__controls}>

            <button className = {style.toolbar__refreshbutton}>
                <img src = {refresh}/>
              <div> Refresh </div>  
                </button>

                
<div className = {style.toolbar__buutonsSwitch}>      
              <button className = {style.toolbar__buttonChange}>
                <img src = {first}/>
              </button>

                <button className = {style.toolbar__buttonChange}>
                <img src = {left}/>
                </button>


<select className={style.toolbar__customselect}>
        <option value="100">100</option>
    <option value="1">1</option>
    <option value="20">20</option>
    <option value="30">30</option>
    <option value="40">40</option>
    <option value="50">50</option>
</select>

              <button className = {style.toolbar__buttonChange}>  <img src = {right}/> </button>
              <button className = {style.toolbar__buttonChange}>  <img src = {last}/> </button>
 </div>

              <div className = {style.toolbar__amount}>
                <div className = {style.toolbar__blockWithNumber}>10</div>
                <div> of </div>
                <div> 100 </div>
              </div>

        </div>

         </div>
        </>
    )
}


const UserBlock = () =>{
    return (
        <>
<div className={style['usertable']}>
      <div className={style['usertable__header']}>
        <div className={style['usertable__header-cell']}>Name</div>
        <div className={style['usertable__header-cell']}>Phone</div>
        <div className={style['usertable__header-cell']}>Email</div>
        <div className={style['usertable__header-cell']}>Actions</div>
      </div>
      {users.users.map((user:User, i:number) => (
        <div key={i} className={style['usertable__user-block']}>
          <div className={style['usertable__cell']}>{user.Name}</div>
          <div className={style['usertable__cell']}>{user.Phone}</div>
          <div className={style['usertable__cell']}>{user.Email}</div>
          <div className={style['usertable__cell']}>
            <button className={style['usertable__button']}>Cancel membership</button>
          </div>
        </div>
      ))}
    </div>
        </>
    )
}
export const MainBlock = () => {
    
    return (
        <>
        <div className = {style.MainBlockConteiner}>     
<Toolbar/>
<UserBlock/>
 </div>
        </>
    )
}