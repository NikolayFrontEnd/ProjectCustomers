import style from'./Header.module.css';
type TabProps = {
  label: string;
  isActive: boolean;
  onClick: () => void;
};

export const Tab = ({ label, isActive, onClick }:TabProps) => {
  return (
    <div
      onClick={onClick}
      className={isActive ? style.header__menu__item__active : style.header__menu__item}
    >
      {label}
    </div>
  );
};