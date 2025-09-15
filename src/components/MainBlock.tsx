import style from './MainBlock.module.css';
import search from '../assets/Search.png';
import refresh from '../assets/Refresh.png';
import first from '../assets/First.png';
import left from '../assets/Arrow_left.png';
import right from '../assets/Arrow_right.png';
import last from '../assets/Last.png';
import users from '../assets/users.json';
import Buttons from '../assets/Buttons.png';
import { useRef, useState } from 'react';
type User = {
    Name: string;
    Phone: string;
  Email: string;
  Scheduled: string;
  Status: string;
  Executed: string;
}
const Toolbar = () =>{
    const [people,setPeople] = useState<number>(100);
  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setPeople(Number(e.target.value)); 
  };
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


<div className={style.toolbar__selectWrapper}>
  <select
    className={style.toolbar__customselect}
    value={people}
    onChange={handleChange}
  >
    <option value="1">1</option>
    <option value="20">20</option>
    <option value="30">30</option>
    <option value="40">40</option>
    <option value="50">50</option>
    <option value="100">100</option>
  </select>
</div>

              <button className = {style.toolbar__buttonChange}>  <img src = {right}/> </button>
              <button className = {style.toolbar__buttonChange}>  <img src = {last}/> </button>
 </div>

                  <div className = {style.toolbar__amount}>
                <div className = {style.toolbar__blockWithNumber}>{people}</div>
                <div> of </div>
                <div> 100 </div>
              </div>

        </div>

         </div>
        </>
    )
}
const NumberSwitcher = () =>{
    const [people,setPeople] = useState<number>(100);
  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setPeople(Number(e.target.value)); 
  };
    return(
        <>
        <div className = {style.toolbarNumber}>
        <div className = {style.toolbar__controls}>
        <div className = {style.toolbar__buutonsSwitch}>      
              <button className = {style.toolbar__buttonChange}>
                <img src = {first}/>
              </button>

                <button className = {style.toolbar__buttonChange}>
                <img src = {left}/>
                </button>


<div className={style.toolbar__selectWrapper}>
  <select
    className={style.toolbar__customselect}
    value={people}
    onChange={handleChange}
  >
    <option value="1">1</option>
    <option value="20">20</option>
    <option value="30">30</option>
    <option value="40">40</option>
    <option value="50">50</option>
    <option value="100">100</option>
  </select>
</div>

              <button className = {style.toolbar__buttonChange}>  <img src = {right}/> </button>
              <button className = {style.toolbar__buttonChange}>  <img src = {last}/> </button>
 </div>

                  <div className = {style.toolbar__amount}>
                <div className = {style.toolbar__blockWithNumber}>{people}</div>
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

const UserBlockScheduled = ({ showModal }: { showModal: () => void }) =>{
    return (
        <>
<div className={style['usertable']}>
      <div className={style['usertable__header']}>
        <div className={style['usertable__header-cell']}>Name</div>
        <div className={style['usertable__header-cell']}>Phone</div>
        <div className={style['usertable__header-cell']}>Email</div>
        <div className={style['usertable__header-cell']}>Scheduled</div>
        <div className={style['usertable__header-cell']}>Scheduled</div>

      </div>
      {users.users.map((user:User, i:number) => (
        <div key={i} className={style['usertable__user-block']}>
          <div className={style['usertable__cell']}>{user.Name}</div>
          <div className={style['usertable__cell']}>{user.Phone}</div>
          <div className={style['usertable__cell']}>{user.Email}</div>
         <div className={style['usertable__cell']}>{user.Scheduled}</div>
         <div className={style['usertable__cell']}>
            <button onClick={showModal}  className={style['usertable__buttonAbort']}>Abort</button>
          </div>
        </div>
      ))}
    </div>
        </>
    )
}

const UserBlockExecuted = () =>{
  // в этой функции проверяю, какой status 
 const getStatusClass = (status: string) => {
    const baseClass = style.usertable__cell__status__circle;
    const statusClass = status === "Success" 
      ? style.usertable__cell__status__circle__success 
      : style.usertable__cell__status__circle__failed;
    return `${baseClass} ${statusClass}`;
  };

    return (
        <>
<div className={style['usertable']}>
      <div className={style['usertable__header']}>
        <div className={style['usertable__header-cell']}>Name</div>
        <div className={style['usertable__header-cell']}>Phone</div>
        <div className={style['usertable__header-cell']}>Email</div>
        <div className={style['usertable__header-cell']}>Exicuted</div>
        <div className={style['usertable__header-cell']}>Status</div>
      </div>
      {users.users.map((user:User, i:number) => (
        <div key={i} className={style['usertable__user-block']}>
          <div className={style['usertable__cell']}>{user.Name}</div>
          <div className={style['usertable__cell']}>{user.Phone}</div>
          <div className={style['usertable__cell']}>{user.Email}</div>
          <div className={style['usertable__cell']}>{user.Executed}</div>

          <div className={style['usertable__cell__status']}>
              <div className={getStatusClass(user.Status)}>
                {user.Status}
              </div>            </div>

        </div>
      ))}
    </div>
        </>
    )
}
type PageType = 0 | 1 | 2;

type MainBlockProps = {
  page: PageType;
};

export const MainBlock: React.FC<MainBlockProps> = ({ page }) => {
  const dialog = useRef<HTMLDialogElement>(null);
console.log(dialog.current);
  const showModal = () => {
    if (dialog.current) {
      dialog.current.showModal();
    }
  };

  const closeModal = () => {
    if (dialog.current) {
      dialog.current.close();
    }
  };

    const handleDialogClick = (e: React.MouseEvent<HTMLDialogElement>) => {
    if (e.target === e.currentTarget) {
      closeModal();
    }
  };
  return (
    <div className={style.MainBlockConteiner}>
<dialog ref = {dialog}
onClick={handleDialogClick}
className={style.MainBlockConteiner__modal}
>
  <div className = {style.MainBlockConteiner__modalBlock}> 
    <img className = {style.MainBlockConteiner__modalBlock__img} onClick = {closeModal} src = {Buttons}/>
    <div className = {style.MainBlockConteiner__modalBlock__text}>Are you sure you want to abort this Scheduled Membership Cancellation?</div>
    <div className={style.MainBlockConteiner__buttonBlocks}>
     <button onClick = {closeModal} className = {style.MainBlockConteiner__buttonCancel}>Cancel</button>
     <button className = {style.MainBlockConteiner__buttonAbort}>Abort</button>
    </div>
  </div>

</dialog>
      {page === 0 ? (
        <>   
       <Toolbar />
        <UserBlock />
         </>
      ) : page === 1 ? (
        <>  
    <NumberSwitcher />
        <UserBlockScheduled showModal={showModal}/>
        </>
      ) : (
        <>  
    <NumberSwitcher />
        <UserBlockExecuted />
        </>
      )}
    </div>
  );
};