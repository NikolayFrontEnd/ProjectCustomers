import style from "./MainBlock.module.css";
import refreshIcon from "../assets/Refresh.png";

export const RefreshButton = () => (
  <button className={style.toolbar__refreshbutton}>
    <img src={refreshIcon} alt="Refresh" />
    <div>Refresh</div>
  </button>
);
