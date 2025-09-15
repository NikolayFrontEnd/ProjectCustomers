import style from "../../styles/MainBlock.module.css";
import upIcon from "../../assets/Up.png";

type ScrollToTopButtonProps = { 
  visible: boolean; 
  onClick: () => void; 
};

export const ScrollToTopButton = ({ visible, onClick }:ScrollToTopButtonProps) => {
  if (!visible) return null;
  
  return (
    <div onClick={onClick} className={style.MainBlockConteiner__circleArrow}>
      <img src={upIcon} />
    </div>
  );
};