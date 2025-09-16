import style from "./MainBlock.module.css";
import searchIcon from "../../assets/Search.png";

export const SearchBar = () => (
  <div className={style.toolbar__search}>
    <div className={style.toolbar__searchBlock}>
      <img
        className={style.toolbar__searchicon}
        src={searchIcon}
        alt="Search"
      />
      <input className={style.toolbar__searchinput} placeholder="Search" />
    </div>
    <button className={style.toolbar__searhcbutton}>Search</button>
  </div>
);
