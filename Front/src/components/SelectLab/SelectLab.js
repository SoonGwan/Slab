import React, { useState } from "react";
import "./SelectLab.scss";
import door from "assets/images/door.png";
import usable from "assets/images/usable.svg";
import unusable from "assets/images/unusable.svg";

import { Button, withStyles } from "@material-ui/core";

const ColorButton = withStyles((theme) => ({
  root: {
    boxShadow: "none",
    color: theme.palette.getContrastText("#0077FF"),
    fontWeight: 300,
    backgroundColor: "#0077FF",
    width: "12rem",
    height: "2.6rem",
    "&:hover": {
      boxShadow: "none",
      backgroundColor: "#0077FF",
    },
  },
}))(Button);

const SelectLab = ({ labList, requestHandleApplyLab }) => {
  const [idx, setIdx] = useState();
  const haveStyle = {
    backgroundColor: "#FF7777",
  };

  const selected = {
    backgroundColor: "#297AD5",
  };

  return (
    <div className="Lab">
      <div className="Lab-Title">
        <img src={door} alt={door} className="Lab-Icon" />
        <h1 className="Lab-Sentence">랩실 신청 현황</h1>
      </div>
      <h2 className="Lab-Subtitle">사용하실 랩실을 선택해주세요.</h2>
      <div className="Lab-Status">
        <img src={usable} alt={usable} />
        <h3>사용 가능 랩실</h3>
        <img src={unusable} alt={unusable} />
        <h3>사용중인 랩실</h3>
      </div>
      <div className="Lab-List">
        {labList.map((lab, index) => {
          return (
            <>
              <div>
                {lab.isHave === "0" ? (
                  <div
                    className="Lab-List-Item"
                    style={
                      lab.isHave === "1"
                        ? haveStyle
                        : null || idx === lab.idx
                        ? selected
                        : null
                    }
                    onClick={() => {
                      setIdx(lab.idx);
                    }}
                  >
                    <h3>{lab.idx}</h3>
                  </div>
                ) : (
                  <div
                    className="Lab-List-Item"
                    style={
                      lab.isHave === "1"
                        ? haveStyle
                        : null || idx === lab.idx
                        ? selected
                        : null
                    }
                  >
                    <h3>{lab.idx}</h3>
                  </div>
                )}
              </div>
            </>
          );
        })}
      </div>
      <div className="Lab-Button">
        <ColorButton
          variant="contained"
          onClick={() => requestHandleApplyLab(idx)}
        >
          신청하기
        </ColorButton>
      </div>
    </div>
  );
};

export default SelectLab;
