import React from "react";
import style from "../styles/modal.module.css"; 

const Modal = ({ isVisible, onClose, children }) => {
  if (!isVisible) return null;

  return (
    <div className={style.modaloverlay} onClick={onClose}>
      <div className={style.modalbox} onClick={(e) => e.stopPropagation()}>
        <p>ABCDSEF</p>
      </div>
    </div>
  );
};

export default Modal;
