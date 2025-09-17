import style from "../MainComponent/MainBlock.module.css";

type UserTableHeaderProps = {
  columns: string[];
};

export const UserTableHeader = ({ columns }: UserTableHeaderProps) => (
  <div className={style.usertable__header}>
    {columns.map((col, i) => (
      <div key={i} className={style.usertable__headercell}>
        {col}
      </div>
    ))}
  </div>
);
