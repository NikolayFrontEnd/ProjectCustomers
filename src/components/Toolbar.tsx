import style from "../styles/MainBlock.module.css";
import { SearchBar } from "./SearchBar";
import { RefreshButton } from "./RefreshButton";
import { PaginationControls } from "./PaginationControls";
import { PageSizeSelector } from "./PageSizeSelector";
import { PaginationInfo } from "./PaginationInfo";

type ToolbarProps = {
  pageSize: number;
  totalUsers: number;
  onPageSizeChange: (value: number) => void;
  onFirst: () => void;
  onLast: () => void;
  onNext: () => void;
  onPrev: () => void;
  showSearch?: boolean;
};

export const Toolbar = ({ 
  pageSize, 
  totalUsers, 
  onPageSizeChange, 
  onFirst, 
  onLast, 
  onNext, 
  onPrev, 
  showSearch = true 
}:ToolbarProps) => {
  const toolbarClass = showSearch ? style.toolbar : style.toolbarNumber;
  
  return (
    <div className={toolbarClass}>
      {showSearch && <SearchBar />}
      <div className={style.toolbar__controls}>
        <RefreshButton />
        <PaginationControls 
          onFirst={onFirst} 
          onPrev={onPrev} 
          onNext={onNext} 
          onLast={onLast} 
        />
        <PageSizeSelector value={pageSize} onChange={onPageSizeChange} />
        <PaginationInfo current={pageSize} total={totalUsers} />
      </div>
    </div>
  );
};