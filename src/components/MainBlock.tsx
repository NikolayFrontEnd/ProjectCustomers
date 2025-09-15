import style from './MainBlock.module.css';
import search from '../assets/Search.png';
import refresh from '../assets/Refresh.png';
import first from '../assets/First.png';
import left from '../assets/Arrow_left.png';
import right from '../assets/Arrow_right.png';
import last from '../assets/Last.png';
import users from '../assets/users.json';
import Buttons from '../assets/Buttons.png';
import up from '../assets/Up.png';
import { useEffect, useRef, useState } from 'react';
type User = {
    Name: string;
    Phone: string;
  Email: string;
  Scheduled: string;
  Status: string;
  Executed: string;
}

type PageType = 0 | 1 | 2;

type MainBlockProps = {
  page: PageType;
};

//функция для прокрутки вверх: 
const scrollToTop = (): void => {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: 'smooth'
  });
};

type ToolbarProps = {
  page: number;
  people: number;
  totalUsers: number;
  setPeople: (value: number) => void;
  goFirst: () => void;
  goLast: () => void;
  goNext: () => void;
  goPrev: () => void;
};

const NumberSwitcher = ({
  people,
  setPeople,
  goFirst,
  goLast,
  goNext,
  goPrev,
}: ToolbarProps) =>{
  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setPeople(Number(e.target.value)); 
  };
    return(
        <>
        <div className = {style.toolbarNumber}>
        <div className = {style.toolbar__controls}>

            <button className = {style.toolbar__refreshbutton}>
                <img src = {refresh}/>
              <div> Refresh </div>  
                </button>


<div className = {style.toolbar__buutonsSwitch}>      
              <button onClick={goFirst} className = {style.toolbar__buttonChange}>
                <img src = {first}/>
              </button>

                <button onClick={goPrev} className = {style.toolbar__buttonChange}>
                <img src = {left}/>
                </button>


<div className={style.toolbar__selectWrapper}>
  <select
    className={style.toolbar__customselect}
    value={people}
    onChange={handleChange}
  >
    <option value="10">10</option>
    <option value="20">20</option>
    <option value="30">30</option>
    <option value="40">40</option>
    <option value="50">50</option>
    <option value="100">100</option>
  </select>
</div>

              <button onClick={goNext} className = {style.toolbar__buttonChange}>  <img src = {right}/> </button>
              <button  onClick={goLast} className = {style.toolbar__buttonChange}>  <img src = {last}/> </button>
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


const Toolbar = ({
  people,
  setPeople,
  goFirst,
  goLast,
  goNext,
  goPrev,
}: ToolbarProps) => {
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
              <button onClick={goFirst} className = {style.toolbar__buttonChange}>
                <img src = {first}/>
              </button>

                <button onClick={goPrev} className = {style.toolbar__buttonChange}>
                <img src = {left}/>
                </button>


<div className={style.toolbar__selectWrapper}>
  <select
    className={style.toolbar__customselect}
    value={people}
    onChange={handleChange}
  >
    <option value="10">10</option>
    <option value="20">20</option>
    <option value="30">30</option>
    <option value="40">40</option>
    <option value="50">50</option>
    <option value="100">100</option>
  </select>
</div>

              <button onClick={goNext} className = {style.toolbar__buttonChange}>  <img src = {right}/> </button>
              <button  onClick={goLast} className = {style.toolbar__buttonChange}>  <img src = {last}/> </button>
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

type UserBlockProps = {
  page: number;
  pageSize: number;
};

const UserBlock = ({ page, pageSize }: UserBlockProps) => {
  const currentUsers = users.users.slice(
    page * pageSize,
    page * pageSize + pageSize
  );

  return (
    <div className={style.usertable}>
      <div className={style.usertable__header}>
        <div className={style.usertable__headercell}>Name</div>
        <div className={style.usertable__headercell}>Phone</div>
        <div className={style.usertable__headercell}>Email</div>
        <div className={style.usertable__headercell}>Actions</div>
      </div>

      {currentUsers.map((user: User, i: number) => (
        <div key={i} className={style.usertable__userblock}>
          <div className={style.usertable__cell}>{user.Name}</div>
          <div className={style.usertable__cell}>{user.Phone}</div>
          <div className={style.usertable__cell}>{user.Email}</div>
          <div className={style.usertable__cell}>
            <button className={style.usertable__button}>Cancel membership</button>
          </div>
        </div>
      ))}
    </div>
  );
};

const UserBlockScheduled = ({ page, pageSize, showModal }: UserBlockProps & { showModal: () => void }) => {
  const currentUsers = users.users.slice(page * pageSize, page * pageSize + pageSize);

  return (
    <div className={style.usertable}>
      <div className={style.usertable__header}>
        <div className={style.usertable__headercell}>Name</div>
        <div className={style.usertable__headercell}>Phone</div>
        <div className={style.usertable__headercell}>Email</div>
        <div className={style.usertable__headercell}>Scheduled</div>
        <div className={style.usertable__headercell}>Actions</div>
      </div>

      {currentUsers.map((user: User, i: number) => (
        <div key={i} className={style.usertable__userblock}>
          <div className={style.usertable__cell}>{user.Name}</div>
          <div className={style.usertable__cell}>{user.Phone}</div>
          <div className={style.usertable__cell}>{user.Email}</div>
          <div className={style.usertable__cell}>{user.Scheduled}</div>
          <div className={style.usertable__cell}>
            <button onClick={showModal} className={style.usertable__buttonAbort}>
              Abort
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

const UserBlockExecuted = ({ page, pageSize }: UserBlockProps) => {
  const currentUsers = users.users.slice(page * pageSize, page * pageSize + pageSize);

  const getStatusClass = (status: string) => {
    const baseClass = style.usertable__cell__status__circle;
    const statusClass =
      status === "Success"
        ? style.usertable__cell__status__circle__success
        : style.usertable__cell__status__circle__failed;
    return `${baseClass} ${statusClass}`;
  };

  return (
    <div className={style.usertable}>
      <div className={style.usertable__header}>
        <div className={style.usertable__headercell}>Name</div>
        <div className={style.usertable__headercell}>Phone</div>
        <div className={style.usertable__headercell}>Email</div>
        <div className={style.usertable__headercell}>Executed</div>
        <div className={style.usertable__headercell}>Status</div>
      </div>

      {currentUsers.map((user: User, i: number) => (
        <div key={i} className={style.usertable__userblock}>
          <div className={style.usertable__cell}>{user.Name}</div>
          <div className={style.usertable__cell}>{user.Phone}</div>
          <div className={style.usertable__cell}>{user.Email}</div>
          <div className={style.usertable__cell}>{user.Executed}</div>
          <div className={style.usertable__cell__status}>
            <div className={getStatusClass(user.Status)}>{user.Status}</div>
          </div>
        </div>
      ))}
    </div>
  );
};


export const MainBlock: React.FC<MainBlockProps> = ({ page }) => {
  const [showButton, setShowButton] = useState<boolean>(false);

  // управляем пагинацией здесь
  const [currentPage, setCurrentPage] = useState(0);
  const [pageSize, setPageSize] = useState(10);

  const totalUsers = users.users.length;
  const totalPages = Math.ceil(totalUsers / pageSize);

  const goFirst = () => setCurrentPage(0);
  const goLast = () => setCurrentPage(totalPages - 1);
  const goNext = () => setCurrentPage((prev) => Math.min(prev + 1, totalPages - 1));
  const goPrev = () => setCurrentPage((prev) => Math.max(prev - 1, 0));

  // кнопка "вверх"
  useEffect(() => {
    const handleScroll = () => {
      setShowButton(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const dialog = useRef<HTMLDialogElement>(null);

  const showModal = () => {
    dialog.current?.showModal();
  };

  const closeModal = () => {
    dialog.current?.close();
  };

  const handleDialogClick = (e: React.MouseEvent<HTMLDialogElement>) => {
    if (e.target === e.currentTarget) {
      closeModal();
    }
  };

  return (
    <div className={style.MainBlockConteiner}>
      <dialog
        ref={dialog}
        onClick={handleDialogClick}
        className={style.MainBlockConteiner__modal}
      >
        <div className={style.MainBlockConteiner__modalBlock}>
          <img
            className={style.MainBlockConteiner__modalBlock__img}
            onClick={closeModal}
            src={Buttons}
          />
          <div className={style.MainBlockConteiner__modalBlock__text}>
            Are you sure you want to abort this Scheduled Membership Cancellation?
          </div>
          <div className={style.MainBlockConteiner__buttonBlocks}>
            <button
              onClick={closeModal}
              className={style.MainBlockConteiner__buttonCancel}
            >
              Cancel
            </button>
            <button className={style.MainBlockConteiner__buttonAbort}>Abort</button>
          </div>
        </div>
      </dialog>

      {page === 0 ? (
        <>
          <Toolbar
            page={currentPage}
            people={pageSize}
            totalUsers={totalUsers}
            setPeople={setPageSize}
            goFirst={goFirst}
            goLast={goLast}
            goNext={goNext}
            goPrev={goPrev}
          />
          <UserBlock page={currentPage} pageSize={pageSize} />
        </>
      ) : page === 1 ? (
        <>
          <NumberSwitcher 
           page={currentPage}
            people={pageSize}
            totalUsers={totalUsers}
            setPeople={setPageSize}
            goFirst={goFirst}
            goLast={goLast}
            goNext={goNext}
            goPrev={goPrev}
          />
      <UserBlockScheduled
      page={currentPage}
      pageSize={pageSize}
      showModal={showModal}
    />
        </>
      ) : (
        <>
          <NumberSwitcher 
           page={currentPage}
            people={pageSize}
            totalUsers={totalUsers}
            setPeople={setPageSize}
            goFirst={goFirst}
            goLast={goLast}
            goNext={goNext}
            goPrev={goPrev}
          />
    <UserBlockExecuted page={currentPage} pageSize={pageSize} />
        </>
      )}

      {showButton && (
        <div
          onClick={scrollToTop}
          className={style.MainBlockConteiner__circleArrow}
        >
          <img src={up} />
        </div>
      )}
    </div>
  );
};
