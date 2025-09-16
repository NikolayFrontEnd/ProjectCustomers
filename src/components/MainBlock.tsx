import users from "../assets/users.json";
import { useState } from "react";
import type { PageType } from "../types/User";
import style from "./MainBlock.module.css";
import { useScrollToTop } from "../hooks/useScrollToTop";
import { usePagination } from "../hooks/usePagination";
import { ConfirmationModal } from "./ConfirmationModal";
import { Toolbar } from "./Toolbar";
import { UserTable } from "./UserTable";
import { ScrollToTopButton } from "./ScrollToTopButton";
type MainBlockProps = {
  page: PageType;
};

export const MainBlock: React.FC<MainBlockProps> = ({ page }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const { showButton, scrollToTop } = useScrollToTop();

  const {
    currentPage,
    pageSize,
    setPageSize,
    goFirst,
    goLast,
    goNext,
    goPrev,
  } = usePagination(users.users.length);

  const currentUsers = users.users.slice(
    currentPage * pageSize,
    currentPage * pageSize + pageSize,
  );

  const showModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

  const getTableConfig = () => {
    switch (page) {
      case 0:
        return {
          columns: ["Name", "Phone", "Email", "Actions"],
          showSearch: true,
          renderActions: () => (
            <button className={style.usertable__button}>
              Cancel membership
            </button>
          ),
        };
      case 1:
        return {
          columns: ["Name", "Phone", "Email", "Scheduled", "Actions"],
          showSearch: false,
          showScheduled: true,
          renderActions: () => (
            <button
              onClick={showModal}
              className={style.usertable__buttonAbort}
            >
              Abort
            </button>
          ),
        };
      case 2:
        return {
          columns: ["Name", "Phone", "Email", "Executed", "Status"],
          showSearch: false,
          showExecuted: true,
          showStatus: true,
          renderActions: () => null,
        };
      default:
        return {
          columns: ["Name", "Phone", "Email", "Actions"],
          showSearch: true,
          renderActions: () => null,
        };
    }
  };

  const tableConfig = getTableConfig();

  return (
    <div className={style.MainBlockConteiner}>
      <ConfirmationModal
        isOpen={modalOpen}
        onClose={closeModal}
        onConfirm={closeModal}
        title="Are you sure you want to abort this Scheduled Membership Cancellation?"
        confirmText="Abort"
        cancelText="Cancel"
      />

      <Toolbar
        pageSize={pageSize}
        totalUsers={users.users.length}
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
