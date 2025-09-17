import React, { useRef, useEffect } from "react";
import style from "../MainComponent/MainBlock.module.css";
import Buttons from "../../assets/Buttons.png";

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
  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    if (isOpen) dialogRef.current?.showModal();
    else dialogRef.current?.close();
  }, [isOpen]);

  const handleClick = (e: React.MouseEvent<HTMLDialogElement>) => {
    if (e.target === e.currentTarget) onClose();
  };

  return (
    <dialog
      ref={dialogRef}
      onClick={handleClick}
      className={style.MainBlockConteiner__modal}
    >
      <div className={style.MainBlockConteiner__modalBlock}>
        <img
          className={style.MainBlockConteiner__modalBlock__img}
          onClick={onClose}
          src={Buttons}
        />
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
    </dialog>
  );
};
