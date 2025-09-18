import React, { useState } from "react";
import style from "../MainBlock.module.css";
import type { User } from "../../../types/User";
import { ConfirmationModal } from "../../ConfirmationModal/ConfirmationModal";
import { Toolbar } from "../../Toolbar/Toolbar";
import { UserTable } from "../../UserTable/UserTable";
import { ScrollToTopButton } from "../../ScrollToTopButton/ScrollToTopButton";

type ScheduledMembershipCancellationsWidgetProps = {
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

export const ScheduledMembershipCancellationsWidget: React.FC<ScheduledMembershipCancellationsWidgetProps> = ({
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
  const [modalOpen, setModalOpen] = useState(false);

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
      />

      <ScrollToTopButton visible={showScrollButton} onClick={onScrollToTop} />
    </div>
  );
};