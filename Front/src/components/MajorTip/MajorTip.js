import React from 'react';
import './MajorTip.scss';
import message from 'assets/images/message.png';
import arrow from 'assets/images/arrow.svg';

import { Button, withStyles } from '@material-ui/core';
import FadeIn from 'react-fade-in';

const ColorButton = withStyles((theme) => ({
  root: {
    boxShadow: 'none',
    color: theme.palette.getContrastText('#0077FF'),
    fontWeight: 300,
    backgroundColor: '#0077FF',
    width: '10rem',
    '&:hover': {
      boxShadow: 'none',
      backgroundColor: '#0077FF',
    },
  },
}))(Button);

const MajorTip = ({ tipList, writeTipModal }) => {
  return (
    <FadeIn delay={300}>
      <div className="MajorTip">
        <div className="MajorTip-LabTitle">
          <div className="MajorTip-LabTitle-Area">
            <img className="MajorTip-LabTitle-Icon" src={message} alt="" />
            <div className="MajorTip-LabTitle-Title">전공 한줄 TIP</div>
          </div>
          <ColorButton
            variant="contained"
            onClick={() => {
              writeTipModal();
            }}
          >
            TIP 작성하기
            <img src={arrow} alt={arrow} />
          </ColorButton>
        </div>
        <div className="MajorTip-Lab">
          {tipList.map((tip, index) => {
            return (
              <>
                <div className="MajorTip-Lab-TableList">
                  <div className="MajorTip-Lab-TableList-Item">{tip.title}</div>
                  <div className="MajorTip-Lab-TableList-Name">
                    {tip.writer}
                  </div>
                </div>
                <hr />
              </>
            );
          })}
        </div>
      </div>
    </FadeIn>
  );
};

export default MajorTip;
