
import style from "../MainBlock.module.css";
import { Toolbar } from "../../Toolbar/Toolbar";
import { UserTable } from "../../UserTable/UserTable";
import { ScrollToTopButton } from "../../ScrollToTopButton/ScrollToTopButton";
import type { User } from "../../../types/User";

type CustomersWidgetProps = {
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

export const CustomersWidget = ({
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
}:CustomersWidgetProps) => {
  const tableConfig = {
    columns: ["Name", "Phone", "Email", "Actions"],
    showSearch: true,
    renderActions: () => (
      <button className={style.usertable__button}>
        Cancel membership
      </button>
    ),
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
      />

      <ScrollToTopButton visible={showScrollButton} onClick={onScrollToTop} />
    </div>
  );
};