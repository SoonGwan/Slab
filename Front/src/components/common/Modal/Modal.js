import React from "react";
import "./Modal.scss";
import { MdClear } from "react-icons/md";
const Modal = ({ handleClose, width, height, children, none }) => {
  return (
    <>
      <div className="Modal">
        <div className="Modal-PostBackGround" onClick={handleClose}></div>
        <div className="Modal-Wrap" style={{ width: width, height: height }}>
          <div className="Modal-Cancel">
            <MdClear
              onClick={() => handleClose()}
              style={{ cursor: "pointer", width: "20px", height: "20px" }}
            />
            <hr />
          </div>
          <div className="Modal-Item">{children}</div>
        </div>
      </div>
    </>
  );
};

export default Modal;
