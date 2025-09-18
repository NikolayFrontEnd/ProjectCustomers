import React from "react";
import style from "../MainComponent/MainBlock.module.css";
import ButtonExit from "../Icons/ButtonExit";

type ConfirmationModalProps = {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
  title: string;
  confirmText: string;
  cancelText: string;
};

export const ConfirmationModal = ({
  isOpen,
  onClose,
  onConfirm,
  title,
  confirmText,
  cancelText,
}: ConfirmationModalProps) => {
  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) onClose();
  };

  if (!isOpen) return null;

  return (
    <div 
      className={style.MainBlockConteiner__modal}
      onClick={handleBackdropClick}
    >
      <div className={style.MainBlockConteiner__modalBlock}>
        <div className={style.MainBlockConteiner__modalBlock__img}
          onClick={onClose}>
<ButtonExit/>
        </div>

        <div className={style.MainBlockConteiner__modalBlock__text}>
          {title}
        </div>
        <div className={style.MainBlockConteiner__buttonBlocks}>
          <button
            onClick={onClose}
            className={style.MainBlockConteiner__buttonCancel}
          >
            {cancelText}
          </button>
          <button
            onClick={onConfirm}
            className={style.MainBlockConteiner__buttonAbort}
          >
            {confirmText}
          </button>
        </div>
      </div>
    </div>
  );
};
