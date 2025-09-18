import { useState } from "react";
import users from "../../assets/users.json";
import style from "./Main.module.css";
import { Header } from "../../components/Header/Header";
import type { PageType } from "../../types/User";
import { usePagination } from "../../hooks/usePagination";
import { useScrollToTop } from "../../hooks/useScrollToTop";
import { CustomersWidget } from "../../components/MainComponent/MainWidgets/CustomersWidget";
import { ScheduledMembershipCancellationsWidget } from "../../components/MainComponent/MainWidgets/ScheduleMembershipCancellationWidget";
import { ExecutedMembershipCancellationsWidget } from "../../components/MainComponent/MainWidgets/ExecutedMembershipCansellationsWidget";

const Main = () => {
  const [page, setPage] = useState<PageType>(0);
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

  const renderWidget = () => {
    const widgetProps = {
      users: currentUsers,
      totalUsers: users.users.length,
      showScrollButton: showButton,
      pageSize,
      onPageSizeChange: setPageSize,
      onFirst: goFirst,
      onLast: goLast,
      onNext: goNext,
      onPrev: goPrev,
      onScrollToTop: scrollToTop,
    };

    switch (page) {
      case 0:
        return <CustomersWidget {...widgetProps} />;
      case 1:
        return <ScheduledMembershipCancellationsWidget {...widgetProps} />;
      case 2:
        return <ExecutedMembershipCancellationsWidget {...widgetProps} />;
      default:
        return <CustomersWidget {...widgetProps} />;
    }
  };

  return (
    <div className={style.container}>
      <Header page={page} onPageChange={setPage} />
      {renderWidget()}
    </div>
  );
};

export default Main;
