import React from "react";
import style from "../MainComponent/MainBlock.module.css";
import type { User } from "../../types/User";
import { UserTableHeader } from "../UserTableHeader/UserTableHeader";
import { UserTableRow } from "../UserTableRow/UserTableRow";

type UserTableProps = {
  users: User[];
  columns: string[];
  renderActions: (user: User) => React.ReactNode;
  showScheduled?: boolean;
  showExecuted?: boolean;
  showStatus?: boolean;
};

export const UserTable = ({
  users,
  columns,
  renderActions,
  showScheduled = false,
  showExecuted = false,
  showStatus = false,
}: UserTableProps) => (
  <div className={style.usertable}>
    <UserTableHeader columns={columns} />
    {users.map((user, i) => (
      <UserTableRow
        key={i}
        user={user}
        renderActions={renderActions}
        showScheduled={showScheduled}
        showExecuted={showExecuted}
        showStatus={showStatus}
      />
    ))}
  </div>
);
