import style from "../MainComponent/MainBlock.module.css";
import GoUpIcon from "../Icons/GoUpIcon";

type ScrollToTopButtonProps = {
  visible: boolean;
  onClick: () => void;
};

export const ScrollToTopButton = ({
  visible,
  onClick,
}: ScrollToTopButtonProps) => {
  if (!visible) return null;

  return (
    <div onClick={onClick} className={style.MainBlockConteiner__circleArrow}>
   <GoUpIcon/>
    </div>
  );
};
