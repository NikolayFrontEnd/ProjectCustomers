import style from "../../styles/MainBlock.module.css";

type PageSizeSelectorProps = { 
  value: number; 
  onChange: (value: number) => void; 
};

export const PageSizeSelector = ({ value, onChange }:PageSizeSelectorProps) => (
  <div className={style.toolbar__selectWrapper}>
    <select 
      className={style.toolbar__customselect} 
      value={value} 
      onChange={e => onChange(Number(e.target.value))}
    >
      {[10, 20, 30, 40, 50, 100].map(v => (
        <option key={v} value={v}>{v}</option>
      ))}
    </select>
  </div>
);