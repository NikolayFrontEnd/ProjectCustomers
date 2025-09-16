import style from "./MainBlock.module.css";
import lastIcon from "../../assets/Last.png";
import FirstIcon from "../Icons/FirstIcon";
import ArrowLeftIcon from "../Icons/ArrowLeftIcon";
import ArrowRightIcon from "../Icons/ArrowRightIcon";
import LastIcon from "../Icons/LastIcon";

type PaginationControlsProps = {
  onFirst: () => void;
  onPrev: () => void;
  onNext: () => void;
  onLast: () => void;
};

export const PaginationControls = ({
  onFirst,
  onPrev,
  onNext,
  onLast,
}: PaginationControlsProps) => (
  <div className={style.toolbar__buutonsSwitch}>
    <button onClick={onFirst} className={style.toolbar__buttonChange}>
<FirstIcon/>
    </button>
    <button onClick={onPrev} className={style.toolbar__buttonChange}>
<ArrowLeftIcon/>
    </button>
    <button onClick={onNext} className={style.toolbar__buttonChange}>
<ArrowRightIcon/>
    </button>
    <button onClick={onLast} className={style.toolbar__buttonChange}>
  <LastIcon/>
    </button>
  </div>
);
