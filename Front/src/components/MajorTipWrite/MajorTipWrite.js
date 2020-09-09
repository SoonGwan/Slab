import React from 'react';
import './MajorTipWrite.scss';
import { Button, TextField, withStyles } from '@material-ui/core';

const ColorButton = withStyles((theme) => ({
  root: {
    boxShadow: 'none',
    color: theme.palette.getContrastText('#0077FF'),
    fontWeight: 300,
    backgroundColor: '#0077FF',
    width: '120px',
    marginBottom: '1rem',
    '&:hover': {
      boxShadow: 'none',
      backgroundColor: '#0077FF',
    },
  },
}))(Button);
const MajorTipWrite = ({
  writer,
  requestHandleMakeMajorTip,
  title,
  setTitle,
}) => {
  let name = sessionStorage.getItem('name');
  return (
    <>
      <div className="MajorTipWrite">
        <div className="MajorTipWrite-WriterWrap">
          <div className="MajorTipWrite-WriterWrap-Writer">작성자</div>
          <div>
            <input type="text" value={name} readOnly />
          </div>
        </div>
        <div className="MajorTipWrite-TipWrap">
          <div className="MajorTipWrite-TipWrap-TipTitle">한줄 Tip</div>
          <div>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
        </div>
        <div className="MajorTipWrite-TipButton">
          <ColorButton
            variant="contained"
            onClick={() => requestHandleMakeMajorTip()}
          >
            올리기
          </ColorButton>
        </div>
      </div>
    </>
  );
};

export default MajorTipWrite;
