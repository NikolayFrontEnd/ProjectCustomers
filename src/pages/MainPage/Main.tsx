import { useState } from "react";
import users from "../../assets/users.json";
import style from "./Main.module.css";
import styles from "../../components/MainComponent/MainBlock.module.css";
import { Header } from "../../components/Header/Header";
import { MainBlock } from "../../components/MainComponent/MainBlock";
import type { PageType } from "../../types/User";
import { usePagination } from "../../hooks/usePagination";
import { useScrollToTop } from "../../hooks/useScrollToTop";

const Main = () => {
  const [page, setPage] = useState<PageType>(0);
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

  const handleShowModal = () => setModalOpen(true);
  const handleCloseModal = () => setModalOpen(false);
  const handleConfirmModal = () => {
    setModalOpen(false);
  };

  const getTableConfig = () => {
    switch (page) {
      case 0:
        return {
          columns: ["Name", "Phone", "Email", "Actions"],
          showSearch: true,
          renderActions: () => (
            <button className={styles.usertable__button}>
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
              onClick={handleShowModal}
              className={styles.usertable__buttonAbort}
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
    <div className={style.container}>
      <Header page={page} onPageChange={setPage} />
      <MainBlock
        users={currentUsers}
        totalUsers={users.users.length}
        page={page}
        modalOpen={modalOpen}
        showScrollButton={showButton}
        tableConfig={tableConfig}
        pageSize={pageSize}
        onPageSizeChange={setPageSize}
        onFirst={goFirst}
        onLast={goLast}
        onNext={goNext}
        onPrev={goPrev}
        onShowModal={handleShowModal}
        onCloseModal={handleCloseModal}
        onConfirmModal={handleConfirmModal}
        onScrollToTop={scrollToTop}
      />
    </div>
  );
};

export default Main;
