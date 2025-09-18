import style from "./Header.module.css";
import HeaderIcon from "../Icons/HeaderIcon";
type PageType = 0 | 1 | 2;
type HeaderProps = {
  page: PageType;
  onPageChange: (num: PageType) => void;
};

export const Header: React.FC<HeaderProps> = ({ page, onPageChange }) => {
  return (
    <div className={style.header}>
      <div className={style.header__logo}>
      <HeaderIcon/>
      </div>

      <div className={style.header__menu}>
        <div
          onClick={() => onPageChange(0)}
          className={
            page === 0
              ? style.header__menu__item__active
              : style.header__menu__item
          }
        >
          Customers
        </div>
        <div
          onClick={() => onPageChange(1)}
          className={
            page === 1
              ? style.header__menu__item__active
              : style.header__menu__item
          }
        >
          Scheduled Membership Cancellation
        </div>
        <div
          onClick={() => onPageChange(2)}
          className={
            page === 2
              ? style.header__menu__item__active
              : style.header__menu__item
          }
        >
          Executed Membership Cancellation
        </div>
      </div>
    </div>
  );
};
