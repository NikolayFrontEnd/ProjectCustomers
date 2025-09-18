import style from "./Header.module.css";
import HeaderIcon from "../Icons/HeaderIcon";
import { Tab } from "./HeaderTab";
type PageType = 0 | 1 | 2;
type HeaderProps = {
  page: PageType;
  onPageChange: (num: PageType) => void;
};

export const Header: React.FC<HeaderProps> = ({ page, onPageChange }) => {
  const tabs = [
    { id: 0, label: "Customers" },
    { id: 1, label: "Scheduled Membership Cancellation" },
    { id: 2, label: "Executed Membership Cancellation" },
  ]as const; 
  return (
    <div className={style.header}>
      <div className={style.header__logo}>
      <HeaderIcon/>
      </div>

      <div className={style.header__menu}>

{tabs.map((tab) => (
          <Tab
            key={tab.id}
            label={tab.label}
            isActive={page === tab.id}
            onClick={() => onPageChange(tab.id)}
          />
        ))}

      </div>
    </div>
  );
};
