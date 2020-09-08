import React from "react";
import "./MajorTip.scss";
import message from "assets/images/message.png";
import arrow from "assets/images/arrow.svg";

import { Button, withStyles } from "@material-ui/core";

const ColorButton = withStyles((theme) => ({
  root: {
    boxShadow: "none",
    color: theme.palette.getContrastText("#0077FF"),
    fontWeight: 300,
    backgroundColor: "#0077FF",
    width: "10rem",
    "&:hover": {
      boxShadow: "none",
      backgroundColor: "#0077FF",
    },
  },
}))(Button);

const MajorTip = () => {
  return (
    <>
      <div className="MajorTip">
        <div className="MajorTip-LabTitle">
          <div className="MajorTip-LabTitle-Area">
            <img className="MajorTip-LabTitle-Icon" src={message} alt="" />
            <div className="MajorTip-LabTitle-Title">전공 한줄 TIP</div>
          </div>
          <ColorButton variant="contained" onClick={() => {}}>
            TIP 작성하기
            <img src={arrow} alt={arrow} />
          </ColorButton>
        </div>
        <div className="MajorTip-Lab">
          <div className="MajorTip-Lab-TableList">
            <div className="MajorTip-Lab-TableList-Item">
              임베에 떨어질 시 대처 요령
            </div>
            <div className="MajorTip-Lab-TableList-Name">곽준환</div>
          </div>
          <hr />
          <div className="MajorTip-Lab-TableList">
            <div className="MajorTip-Lab-TableList-Item">
              임베에 떨어질 시 대처 요령
            </div>
            <div className="MajorTip-Lab-TableList-Name">곽준환</div>
          </div>
          <hr />
          <div className="MajorTip-Lab-TableList">
            <div className="MajorTip-Lab-TableList-Item">
              임베에 떨어질 시 대처 요령
            </div>
            <div className="MajorTip-Lab-TableList-Name">곽준환</div>
          </div>
          <hr />
          <div className="MajorTip-Lab-TableList">
            <div className="MajorTip-Lab-TableList-Item">
              임베에 떨어질 시 대처 요령
            </div>
            <div className="MajorTip-Lab-TableList-Name">곽준환</div>
          </div>
          <hr />
          <div className="MajorTip-Lab-TableList">
            <div className="MajorTip-Lab-TableList-Item">
              임베에 떨어질 시 대처 요령
            </div>
            <div className="MajorTip-Lab-TableList-Name">곽준환</div>
          </div>
          <hr />
          <div className="MajorTip-Lab-TableList">
            <div className="MajorTip-Lab-TableList-Item">
              임베에 떨어질 시 대처 요령
            </div>
            <div className="MajorTip-Lab-TableList-Name">곽준환</div>
          </div>
          <hr />
          <div className="MajorTip-Lab-TableList">
            <div className="MajorTip-Lab-TableList-Item">
              임베에 떨어질 시 대처 요령
            </div>
            <div className="MajorTip-Lab-TableList-Name">곽준환</div>
          </div>
          <hr />
          <div className="MajorTip-Lab-TableList">
            <div className="MajorTip-Lab-TableList-Item">
              임베에 떨어질 시 대처 요령
            </div>
            <div className="MajorTip-Lab-TableList-Name">곽준환</div>
          </div>
          <hr />
          <div className="MajorTip-Lab-TableList">
            <div className="MajorTip-Lab-TableList-Item">
              임베에 떨어질 시 대처 요령
            </div>
            <div className="MajorTip-Lab-TableList-Name">곽준환</div>
          </div>
          <hr />
          <div className="MajorTip-Lab-TableList">
            <div className="MajorTip-Lab-TableList-Item">
              임베에 떨어질 시 대처 요령
            </div>
            <div className="MajorTip-Lab-TableList-Name">곽준환</div>
          </div>
          <hr />
          <div className="MajorTip-Lab-TableList">
            <div className="MajorTip-Lab-TableList-Item">
              임베에 떨어질 시 대처 요령
            </div>
            <div className="MajorTip-Lab-TableList-Name">곽준환</div>
          </div>
          <hr />
          <div className="MajorTip-Lab-TableList">
            <div className="MajorTip-Lab-TableList-Item">
              임베에 떨어질 시 대처 요령
            </div>
            <div className="MajorTip-Lab-TableList-Name">곽준환</div>
          </div>
          <hr />
        </div>
      </div>
    </>
  );
};

export default MajorTip;
