
import style from "../MainBlock.module.css";
import { Toolbar } from "../../Toolbar/Toolbar";
import { UserTable } from "../../UserTable/UserTable";
import { ScrollToTopButton } from "../../ScrollToTopButton/ScrollToTopButton";
import { useScrollToTop } from "../../../hooks/useScrollToTop";
import { usePagination } from "../../../hooks/usePagination";
import users from '../../../assets/users.json'


export const CustomersWidget = () => {
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
      />

      <ScrollToTopButton visible={showButton} onClick={scrollToTop} />
    </div>
  );
};