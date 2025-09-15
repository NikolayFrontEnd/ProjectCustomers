import React, { useState, useEffect, useRef } from "react";
import style from "./MainBlock.module.css";
import usersData from "../assets/users.json";
import searchIcon from "../assets/Search.png";
import refreshIcon from "../assets/Refresh.png";
import firstIcon from "../assets/First.png";
import leftIcon from "../assets/Arrow_left.png";
import rightIcon from "../assets/Arrow_right.png";
import lastIcon from "../assets/Last.png";
import upIcon from "../assets/Up.png";
import Buttons from "../assets/Buttons.png";

// ----------------------- TYPES -----------------------
type User = {
  Name: string;
  Phone: string;
  Email: string;
  Scheduled: string;
  Status: string;
  Executed: string;
};

type PageType = 0 | 1 | 2;

// ----------------------- HOOKS -----------------------
const usePagination = (totalItems: number, initialPageSize = 10) => {
  const [currentPage, setCurrentPage] = useState(0);
  const [pageSize, setPageSize] = useState(initialPageSize);
  const totalPages = Math.ceil(totalItems / pageSize);

  const goFirst = () => setCurrentPage(0);
  const goLast = () => setCurrentPage(totalPages - 1);
  const goNext = () => setCurrentPage(prev => Math.min(prev + 1, totalPages - 1));
  const goPrev = () => setCurrentPage(prev => Math.max(prev - 1, 0));

  return { currentPage, pageSize, totalPages, setPageSize, goFirst, goLast, goNext, goPrev };
};

const useScrollToTop = (threshold = 300) => {
  const [showButton, setShowButton] = useState(false);
  useEffect(() => {
    const handleScroll = () => setShowButton(window.scrollY > threshold);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [threshold]);

  const scrollToTop = () => window.scrollTo({ top: 0, left: 0, behavior: "smooth" });

  return { showButton, scrollToTop };
};

// ----------------------- COMPONENTS -----------------------
const SearchBar: React.FC = () => (
  <div className={style.toolbar__search}>
    <div className={style.toolbar__searchBlock}>
      <img className={style.toolbar__searchicon} src={searchIcon} alt="Search" />
      <input className={style.toolbar__searchinput} placeholder="Search" />
    </div>
    <button className={style.toolbar__searhcbutton}>Search</button>
  </div>
);

const RefreshButton: React.FC = () => (
  <button className={style.toolbar__refreshbutton}>
    <img src={refreshIcon} alt="Refresh" />
    <div>Refresh</div>
  </button>
);

type PaginationControlsProps = {
  onFirst: () => void;
  onPrev: () => void;
  onNext: () => void;
  onLast: () => void;
};

const PaginationControls = ({ onFirst, onPrev, onNext, onLast }:PaginationControlsProps) => (
  <div className={style.toolbar__buutonsSwitch}>
    <button onClick={onFirst} className={style.toolbar__buttonChange}><img src={firstIcon} alt="First" /></button>
    <button onClick={onPrev} className={style.toolbar__buttonChange}><img src={leftIcon} alt="Previous" /></button>
    <button onClick={onNext} className={style.toolbar__buttonChange}><img src={rightIcon} alt="Next" /></button>
    <button onClick={onLast} className={style.toolbar__buttonChange}><img src={lastIcon} alt="Last" /></button>
  </div>
);

type PageSizeSelectorProps = { value: number; onChange: (value: number) => void; };
const PageSizeSelector = ({ value, onChange }:PageSizeSelectorProps) => (
  <div className={style.toolbar__selectWrapper}>
    <select className={style.toolbar__customselect} value={value} onChange={e => onChange(Number(e.target.value))}>
      {[10, 20, 30, 40, 50, 100].map(v => <option key={v} value={v}>{v}</option>)}
    </select>
  </div>
);

type PaginationInfoProps = { current: number; total: number; };
const PaginationInfo = ({ current, total }:PaginationInfoProps) => (
  <div className={style.toolbar__amount}>
    <div className={style.toolbar__blockWithNumber}>{current}</div>
    <div>of</div>
    <div>{total}</div>
  </div>
);

type ToolbarProps = {
  pageSize: number;
  totalUsers: number;
  onPageSizeChange: (value: number) => void;
  onFirst: () => void;
  onLast: () => void;
  onNext: () => void;
  onPrev: () => void;
  showSearch?: boolean;
};

const Toolbar = ({ pageSize, totalUsers, onPageSizeChange, onFirst, onLast, onNext, onPrev, showSearch = true }:ToolbarProps) => {
  const toolbarClass = showSearch ? style.toolbar : style.toolbarNumber;
  return (
    <div className={toolbarClass}>
      {showSearch && <SearchBar />}
      <div className={style.toolbar__controls}>
        <RefreshButton />
        <PaginationControls onFirst={onFirst} onPrev={onPrev} onNext={onNext} onLast={onLast} />
        <PageSizeSelector value={pageSize} onChange={onPageSizeChange} />
        <PaginationInfo current={pageSize} total={totalUsers} />
      </div>
    </div>
  );
};

type UserTableHeaderProps = { columns: string[]; };
const UserTableHeader = ({ columns }:UserTableHeaderProps) => (
  <div className={style.usertable__header}>
    {columns.map((col, i) => <div key={i} className={style.usertable__headercell}>{col}</div>)}
  </div>
);

type UserTableRowProps = {
  user: User;
  renderActions: (user: User) => React.ReactNode;
  showScheduled?: boolean;
  showExecuted?: boolean;
  showStatus?: boolean;
};

const UserTableRow: React.FC<UserTableRowProps> = ({ user, renderActions, showScheduled = false, showExecuted = false, showStatus = false }) => {
  const getStatusClass = (status: string) => {
    const base = style.usertable__cell__status__circle;
    const statusClass = status === "Success" ? style.usertable__cell__status__circle__success : style.usertable__cell__status__circle__failed;
    return `${base} ${statusClass}`;
  };
  return (
    <div className={style.usertable__userblock}>
      <div className={style.usertable__cell}>{user.Name}</div>
      <div className={style.usertable__cell}>{user.Phone}</div>
      <div className={style.usertable__cell}>{user.Email}</div>
      {showScheduled && <div className={style.usertable__cell}>{user.Scheduled}</div>}
      {showExecuted && <div className={style.usertable__cell}>{user.Executed}</div>}
      {showStatus ? <div className={style.usertable__cell__status}><div className={getStatusClass(user.Status)}>{user.Status}</div></div>
      : <div className={style.usertable__cell}>{renderActions(user)}</div>}
    </div>
  );
};

type UserTableProps = {
  users: User[];
  columns: string[];
  renderActions: (user: User) => React.ReactNode;
  showScheduled?: boolean;
  showExecuted?: boolean;
  showStatus?: boolean;
};

const UserTable: React.FC<UserTableProps> = ({ users, columns, renderActions, showScheduled = false, showExecuted = false, showStatus = false }) => (
  <div className={style.usertable}>
    <UserTableHeader columns={columns} />
    {users.map((user, i) => <UserTableRow key={i} user={user} renderActions={renderActions} showScheduled={showScheduled} showExecuted={showExecuted} showStatus={showStatus} />)}
  </div>
);

type ConfirmationModalProps = {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
  title: string;
  confirmText: string;
  cancelText: string;
};

const ConfirmationModal: React.FC<ConfirmationModalProps> = ({ isOpen, onClose, onConfirm, title, confirmText, cancelText }) => {
  const dialogRef = useRef<HTMLDialogElement>(null);
  useEffect(() => { if (isOpen) dialogRef.current?.showModal(); else dialogRef.current?.close(); }, [isOpen]);
  const handleClick = (e: React.MouseEvent<HTMLDialogElement>) => { if (e.target === e.currentTarget) onClose(); };
  return (
    <dialog ref={dialogRef} onClick={handleClick} className={style.MainBlockConteiner__modal}>
      <div className={style.MainBlockConteiner__modalBlock}>
        <img className={style.MainBlockConteiner__modalBlock__img} onClick={onClose} src={Buttons} alt="Close" />
        <div className={style.MainBlockConteiner__modalBlock__text}>{title}</div>
        <div className={style.MainBlockConteiner__buttonBlocks}>
          <button onClick={onClose} className={style.MainBlockConteiner__buttonCancel}>{cancelText}</button>
          <button onClick={onConfirm} className={style.MainBlockConteiner__buttonAbort}>{confirmText}</button>
        </div>
      </div>
    </dialog>
  );
};

type ScrollToTopButtonProps = { visible: boolean; onClick: () => void; };
const ScrollToTopButton: React.FC<ScrollToTopButtonProps> = ({ visible, onClick }) => {
  if (!visible) return null;
  return <div onClick={onClick} className={style.MainBlockConteiner__circleArrow}><img src={upIcon} alt="Scroll to top" /></div>;
};

// ----------------------- MAIN BLOCK -----------------------
type MainBlockProps = { page: PageType; };

export const MainBlock: React.FC<MainBlockProps> = ({ page }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const { showButton, scrollToTop } = useScrollToTop();
  const { currentPage, pageSize, setPageSize, goFirst, goLast, goNext, goPrev } = usePagination(usersData.users.length);

  const currentUsers = usersData.users.slice(currentPage * pageSize, currentPage * pageSize + pageSize);
  const showModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

  const getTableConfig = () => {
    switch (page) {
      case 0: return { columns: ["Name","Phone","Email","Actions"], showSearch: true, renderActions: () => <button className={style.usertable__button}>Cancel membership</button> };
      case 1: return { columns: ["Name","Phone","Email","Scheduled","Actions"], showSearch: false, showScheduled: true, renderActions: () => <button onClick={showModal} className={style.usertable__buttonAbort}>Abort</button> };
      case 2: return { columns: ["Name","Phone","Email","Executed","Status"], showSearch: false, showExecuted: true, showStatus: true, renderActions: () => null };
      default: return { columns: ["Name","Phone","Email","Actions"], showSearch: true, renderActions: () => null };
    }
  };

  const tableConfig = getTableConfig();

  return (
    <div className={style.MainBlockConteiner}>
      <ConfirmationModal isOpen={modalOpen} onClose={closeModal} onConfirm={closeModal} title="Are you sure you want to abort this Scheduled Membership Cancellation?" confirmText="Abort" cancelText="Cancel" />

      <Toolbar
        pageSize={pageSize}
        totalUsers={usersData.users.length}
        onPageSizeChange={setPageSize}
        onFirst={goFirst}
        onLast={goLast}
        onNext={goNext}
        onPrev={goPrev}
        showSearch={tableConfig.showSearch}
      />

      <UserTable
        users={currentUsers}
        columns={tableConfig.columns}
        renderActions={tableConfig.renderActions}
        showScheduled={tableConfig.showScheduled}
        showExecuted={tableConfig.showExecuted}
        showStatus={tableConfig.showStatus}
      />

      <ScrollToTopButton visible={showButton} onClick={scrollToTop} />
    </div>
  );
};

