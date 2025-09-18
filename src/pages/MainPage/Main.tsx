import { useState } from "react";
import style from "./Main.module.css";
import { Header } from "../../components/Header/Header";
import type { PageType } from "../../types/User";
import { CustomersWidget } from "../../components/MainComponent/MainWidgets/CustomersWidget";
import { ScheduledMembershipCancellationsWidget } from "../../components/MainComponent/MainWidgets/ScheduleMembershipCancellationWidget";
import { ExecutedMembershipCancellationsWidget } from "../../components/MainComponent/MainWidgets/ExecutedMembershipCansellationsWidget";

const Main = () => {
  const [page, setPage] = useState<PageType>(0);

  const renderWidget = () => {
    switch (page) {
      case 0:
        return <CustomersWidget />;
      case 1:
        return <ScheduledMembershipCancellationsWidget />;
      case 2:
        return <ExecutedMembershipCancellationsWidget />;
      default:
        return <CustomersWidget />;
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
