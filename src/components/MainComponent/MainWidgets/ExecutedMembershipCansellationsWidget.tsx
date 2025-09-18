import React from "react";

import style from "../MainBlock.module.css";
import type { User } from "../../../types/User";
import { Toolbar } from "../../Toolbar/Toolbar";
import { UserTable } from "../../UserTable/UserTable";
import { ScrollToTopButton } from "../../ScrollToTopButton/ScrollToTopButton";

type ExecutedMembershipCancellationsWidgetProps = {
  users: User[];
  totalUsers: number;
  showScrollButton: boolean;
  pageSize: number;
  onPageSizeChange: (size: number) => void;
  onFirst: () => void;
  onLast: () => void;
  onNext: () => void;
  onPrev: () => void;
  onScrollToTop: () => void;
};

export const ExecutedMembershipCancellationsWidget: React.FC<ExecutedMembershipCancellationsWidgetProps> = ({
  users,
  totalUsers,
  showScrollButton,
  pageSize,
  onPageSizeChange,
  onFirst,
  onLast,
  onNext,
  onPrev,
  onScrollToTop,
}) => {
  const tableConfig = {
    columns: ["Name", "Phone", "Email", "Executed", "Status"],
    showSearch: false,
    showExecuted: true,
    showStatus: true,
    renderActions: () => null,
  };

  return (
    <div className={style.MainBlockConteiner}>
      <Toolbar
        pageSize={pageSize}
        totalUsers={totalUsers}
        onPageSizeChange={onPageSizeChange}
        onFirst={onFirst}
        onLast={onLast}
        onNext={onNext}
        onPrev={onPrev}
        showSearch={tableConfig.showSearch}
      />

      <UserTable
        users={users}
        columns={tableConfig.columns}
        renderActions={tableConfig.renderActions}
        showExecuted={tableConfig.showExecuted}
        showStatus={tableConfig.showStatus}
      />

      <ScrollToTopButton visible={showScrollButton} onClick={onScrollToTop} />
    </div>
  );
};