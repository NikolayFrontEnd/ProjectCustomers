import style from "./MainBlock.module.css";
import firstIcon from "../../assets//First.png";
import leftIcon from "../../assets/Arrow_left.png";
import rightIcon from "../../assets/Arrow_right.png";
import lastIcon from "../../assets/Last.png";

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
      <img src={firstIcon} />
    </button>
    <button onClick={onPrev} className={style.toolbar__buttonChange}>
      <img src={leftIcon} />
    </button>
    <button onClick={onNext} className={style.toolbar__buttonChange}>
      <img src={rightIcon} />
    </button>
    <button onClick={onLast} className={style.toolbar__buttonChange}>
      <img src={lastIcon} />
    </button>
  </div>
);
