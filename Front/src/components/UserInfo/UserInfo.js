import React from "react";
import "./UserInfo.scss";
import pencil from "assets/images/pencil.svg";
const UserInfo = () => {
  return (
    <>
      <div className="UserInfo">
        <div className="UserInfo-Title">
          안녕하세요, <b>곽준환</b> 님
        </div>
        <div className="UserInfo-LabTitle">
          <img className="UserInfo-LabTitle-Icon" src={pencil} alt="" />
          <div className="UserInfo-LabTitle-Title">랩실 신청 내역</div>
        </div>
        <div className="UserInfo-Lab">
          <div className="UserInfo-Lab-TableTop">
            <div className="UserInfo-Lab-TableTop-Item">신청 날짜</div>
            <div className="UserInfo-Lab-TableTop-Item">랩실 번호</div>
            <div className="UserInfo-Lab-TableTop-Item">사용 날짜</div>
            <div className="UserInfo-Lab-TableTop-Item">결과</div>
          </div>
          <hr />
          <div className="UserInfo-Lab-TableList">
            <div className="UserInfo-Lab-TableList-Item">2020. 09. 07</div>
            <div className="UserInfo-Lab-TableList-Item">7실</div>
            <div className="UserInfo-Lab-TableList-Item">2020. 09. 08</div>
            <div className="UserInfo-Lab-TableList-Item">승인</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserInfo;
