import style from "./MainBlock.module.css";
import type { User } from "../types/User";

type UserTableRowProps = {
  user: User;
  renderActions: (user: User) => React.ReactNode;
  showScheduled?: boolean;
  showExecuted?: boolean;
  showStatus?: boolean;
};

export const UserTableRow = ({
  user,
  renderActions,
  showScheduled = false,
  showExecuted = false,
  showStatus = false,
}: UserTableRowProps) => {
  const getStatusClass = (status: string) => {
    const base = style.usertable__cell__status__circle;
    const statusClass =
      status === "Success"
        ? style.usertable__cell__status__circle__success
        : style.usertable__cell__status__circle__failed;
    return `${base} ${statusClass}`;
  };

  return (
    <div className={style.usertable__userblock}>
      <div className={style.usertable__cell}>{user.Name}</div>
      <div className={style.usertable__cell}>{user.Phone}</div>
      <div className={style.usertable__cell}>{user.Email}</div>
      {showScheduled && (
        <div className={style.usertable__cell}>{user.Scheduled}</div>
      )}
      {showExecuted && (
        <div className={style.usertable__cell}>{user.Executed}</div>
      )}
      {showStatus ? (
        <div className={style.usertable__cell__status}>
          <div className={getStatusClass(user.Status)}>{user.Status}</div>
        </div>
      ) : (
        <div className={style.usertable__cell}>{renderActions(user)}</div>
      )}
    </div>
  );
};
