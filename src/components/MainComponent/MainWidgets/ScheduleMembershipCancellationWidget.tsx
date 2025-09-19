import  { useState } from "react";
import style from "../MainBlock.module.css";
import { ConfirmationModal } from "../../ConfirmationModal/ConfirmationModal";
import { Toolbar } from "../../Toolbar/Toolbar";
import { UserTable } from "../../UserTable/UserTable";
import { ScrollToTopButton } from "../../ScrollToTopButton/ScrollToTopButton";
import { useScrollToTop } from "../../../hooks/useScrollToTop";
import { usePagination } from "../../../hooks/usePagination";
import users from '../../../assets/users.json'



export const ScheduledMembershipCancellationsWidget  = () => {
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
        isFirstPage, 
    isLastPage
  } = usePagination(users.users.length);

  const currentUsers = users.users.slice(
    currentPage * pageSize,
    currentPage * pageSize + pageSize,
  );

  const handleShowModal = () => setModalOpen(true);
  const handleCloseModal = () => setModalOpen(false);
  const handleConfirmModal = () => {
    setModalOpen(false);
  };

  const tableConfig = {
    columns: ["Name", "Phone", "Email", "Scheduled", "Actions"],
    showSearch: false,
    showScheduled: true,
    renderActions: () => (
      <button
        onClick={handleShowModal}
        className={style.usertable__buttonAbort}
      >
        Abort
      </button>
    ),
  };

  return (
    <div className={style.MainBlockConteiner}>
      <ConfirmationModal
        isOpen={modalOpen}
        onClose={handleCloseModal}
        onConfirm={handleConfirmModal}
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
             isFirstPage={isFirstPage} 
        isLastPage={isLastPage}
      />

      <UserTable
        users={currentUsers}
        columns={tableConfig.columns}
        renderActions={tableConfig.renderActions}
        showScheduled={tableConfig.showScheduled}
      />

      <ScrollToTopButton visible={showButton} onClick={scrollToTop} />
    </div>
  );
};