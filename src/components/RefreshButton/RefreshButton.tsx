import RefreshIcon from "../Icons/RefreshIcon";
import style from "../MainComponent/MainBlock.module.css";

export const RefreshButton = () => (
  <button className={style.toolbar__refreshbutton}>
    <RefreshIcon />
    <div className={style.toolbar__refreshText}>Refresh</div>
  </button>
);
