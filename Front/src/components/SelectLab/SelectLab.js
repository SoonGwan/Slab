import React from "react";
import "./SelectLab.scss";
import door from "assets/images/door.png";
import back from "assets/images/back.svg";

const SelectLab = () => {
  return (
    <div className="Lab">
      <img src={back} alt={back} />
      <div className="Lab-Title">
        <img src={door} alt={door} className="Lab-Icon" />
        <h1 className="Lab-Sentence">랩실 신청 현황</h1>
      </div>
      <h2 className="Lab-Subtitle">사용하실 랩실을 선택해주세요.</h2>
      <div></div>
    </div>
  );
};

export default SelectLab;
