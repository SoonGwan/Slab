import React from "react";
import "./ShowLabStatus.scss";
import door from "assets/images/door.png";
import arrow from "assets/images/arrow.svg";

import { Button, withStyles } from "@material-ui/core";
import FadeIn from "react-fade-in";

const ColorButton = withStyles((theme) => ({
  root: {
    boxShadow: "none",
    color: theme.palette.getContrastText("#0077FF"),
    fontWeight: 300,
    backgroundColor: "#0077FF",
    width: "12rem",
    marginBottom: "1rem",
    "&:hover": {
      boxShadow: "none",
      backgroundColor: "#0077FF",
    },
  },
}))(Button);

const ShowLabStatus = ({ usableLab, selectLabModal }) => {
  const status = {
    width: `${usableLab * 7.1}%`,
  };
  return (
    <FadeIn delay={200}>
      <div className="labstatus_area">
        <div className="labstatus_title">
          <img src={door} alt={door} />
          <h1>랩실 신청 현황</h1>
        </div>
        <div className="labstatus_center">
          <div className="labstatus_line"></div>
          <div className="useable_area">
            <div className="useable_lab">
              <p className="useable_status">사용 가능 랩실</p>
              <p className="useable_count">{usableLab}/14</p>
            </div>
            <div className="useable_lab">
              <p className="useable_status">사용중인 랩실</p>
              <p className="useable_count">{14 - usableLab}/14</p>
            </div>
          </div>
          <div className="unusable_chart">
            <div className="useable_chart" style={status}></div>
          </div>
        </div>
        <div className="lab_button_area">
          <ColorButton variant="contained" onClick={() => selectLabModal()}>
            랩실 신청하기
            <img src={arrow} alt={arrow} />
          </ColorButton>
        </div>
      </div>
    </FadeIn>
  );
};

export default ShowLabStatus;
