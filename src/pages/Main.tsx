import { useState } from 'react';
import { Header } from '../components/Header';
import { MainBlock } from '../components/MainBlock';
import style from './Main.module.css'

type PageType = 0 | 1 | 2;

const Main = () => {
  const [page, setPage] = useState<PageType>(0);

  return (
    <div className={style.container}>
      <Header page={page} onPageChange={setPage} />
      <MainBlock page={page} />
    </div>
  );
};

export default Main;