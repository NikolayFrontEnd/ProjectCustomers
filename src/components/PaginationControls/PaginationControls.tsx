import style from "../MainComponent/MainBlock.module.css";
import FirstIcon from "../Icons/FirstIcon";
import ArrowLeftIcon from "../Icons/ArrowLeftIcon";
import ArrowRightIcon from "../Icons/ArrowRightIcon";
import LastIcon from "../Icons/LastIcon";

type PaginationControlsProps = {
  onFirst: () => void;
  onPrev: () => void;
  onNext: () => void;
  onLast: () => void;
  isFirstPage:boolean;
  isLastPage:boolean;
};

export const PaginationControls = ({
  onFirst,
  onPrev,
  onNext,
  onLast,
   isFirstPage,
  isLastPage
}: PaginationControlsProps) => (
  <div className={style.toolbar__buutonsSwitch}>
    <button onClick={onFirst} className={style.toolbar__buttonChange} disabled={isFirstPage}>
      <FirstIcon />
    </button>
    <button onClick={onPrev} className={style.toolbar__buttonChange} disabled={isFirstPage}>
      <ArrowLeftIcon />
    </button>
    <button onClick={onNext} className={style.toolbar__buttonChange} disabled={isLastPage}>
      <ArrowRightIcon />
    </button>
    <button onClick={onLast} className={style.toolbar__buttonChange} disabled={isLastPage}>
      <LastIcon />
    </button>
  </div>
);
