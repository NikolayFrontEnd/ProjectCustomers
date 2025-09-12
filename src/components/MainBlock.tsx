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

              <button className = {style.toolbar__buttonChange}>
                <img src = {first}/>
              </button>

                <button className = {style.toolbar__buttonChange}>
                <img src = {left}/>
                </button>

            {/*   <input type="number"/> */}
            <select className={style.toolbar__customselect}>
    <option value="" disabled selected>100</option>
    <option value="1">1</option>
    <option value="20">20</option>
    <option value="30">30</option>
    <option value="40">40</option>
    <option value="50">50</option>
    <option value="100">100</option>
  </select>
              <button className = {style.toolbar__buttonChange}>  <img src = {right}/> </button>
              <button className = {style.toolbar__buttonChange}>  <img src = {last}/> </button>

              <div>
                <div>10</div>
                <div>of 100</div>
              </div>

        </div>
         </div>
        </>
    )
}


const LabelNames = () =>{
    return (
        <>
         <div className={style.tableheader}>
      <div className={style.tableheader__name}>Name</div>
      <div className={style.tableheader__phone}>Phone</div>
      <div className={style.tableheader__email}>Email</div>
      <div className={style.tableheader__actions}>Actions</div>
    </div>
        </>
    )
}
export const MainBlock = () => {
    
    return (
        <>
<Toolbar/>
<LabelNames/>


        <div className = {style.userBlock}>
        {users.users.map((user: User, i: number) => (
          <div key={i} className={style.userBlock__userItem}>
            <p className = {style.userBlock__item}>Name: {user.Name}</p>
            <p className = {style.userBlock__item}>Phone: {user.Phone}</p>
            <p className = {style.userBlock__item}>Email:{user.Email}</p>
        <button className = {style.userBlock__button}>Cancel membership</button>
        </div>
        ))}
        </div>
        </>
    )
}