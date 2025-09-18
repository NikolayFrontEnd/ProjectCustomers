import type { PageType, User } from "../../types/User";
import style from "./MainBlock.module.css";

import { ConfirmationModal } from "../ConfirmationModal/ConfirmationModal";
import { UserTable } from "../UserTable/UserTable";
import { ScrollToTopButton } from "../ScrollToTopButton/ScrollToTopButton";
import { Toolbar } from "../Toolbar/Toolbar";

type TableConfig = {
  columns: string[];
  showSearch: boolean;
  showScheduled?: boolean;
  showExecuted?: boolean;
  showStatus?: boolean;
  renderActions: () => React.ReactNode;
};

type MainBlockProps = {
  users: User[];
  totalUsers: number;

  page: PageType;
  modalOpen: boolean;
  showScrollButton: boolean;

  tableConfig: TableConfig;

  pageSize: number;
  onPageSizeChange: (size: number) => void;
  onFirst: () => void;
  onLast: () => void;
  onNext: () => void;
  onPrev: () => void;

  onShowModal: () => void;
  onCloseModal: () => void;
  onConfirmModal: () => void;

  onScrollToTop: () => void;
};
export const MainBlock: React.FC<MainBlockProps> = ({
  users,
  totalUsers,

  modalOpen,
  showScrollButton,
  tableConfig,
  pageSize,
  onPageSizeChange,
  onFirst,
  onLast,
  onNext,
  onPrev,

  onCloseModal,
  onConfirmModal,
  onScrollToTop,
}) => {
  return (
    <div className={style.MainBlockConteiner}>
      <ConfirmationModal
        isOpen={modalOpen}
        onClose={onCloseModal}
        onConfirm={onConfirmModal}
        title="Are you sure you want to abort this Scheduled Membership Cancellation?"
        confirmText="Abort"
        cancelText="Cancel"
      />

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
        showScheduled={tableConfig.showScheduled}
        showExecuted={tableConfig.showExecuted}
        showStatus={tableConfig.showStatus}
      />

      <ScrollToTopButton visible={showScrollButton} onClick={onScrollToTop} />
    </div>
  );
};
