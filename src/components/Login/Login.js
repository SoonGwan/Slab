import React from 'react';
import './Login.scss';

import { Button, TextField, withStyles } from '@material-ui/core';
import FadeIn from 'react-fade-in';

const ColorButton = withStyles((theme) => ({
  root: {
    boxShadow: 'none',
    color: theme.palette.getContrastText('#0077FF'),
    fontWeight: 300,
    backgroundColor: '#0077FF',
    width: '26rem',
    marginBottom: '1rem',
    '&:hover': {
      boxShadow: 'none',
      backgroundColor: '#0077FF',
    },
  },
}))(Button);

const CssTextField = withStyles({
  root: {
    width: '26rem',
    marginTop: '1.6rem',
    '& label.Mui-focused': {
      color: '#0077FF',
    },
    '& .MuiInput-underline:after': {
      borderBottomColor: '#0077FF',
    },
    '& .MuiOutlinedInput-root': {
      '&.Mui-focused fieldset': {
        borderColor: '#0077FF',
      },
    },
  },
})(TextField);

const Login = ({
  setButtonClick,
  id,
  setId,
  pw,
  setPw,
  requestHandleLogin,
}) => {
  return (
    <div className="auth_main">
      <div className="auth_information">
        <div className="auth_area">
          <FadeIn>
            <h1 className="auth_title">환영합니다</h1>
            <h3 className="auth_subtitle">사용 시 로그인을 진행해 주세요.</h3>
            <CssTextField
              label="아이디"
              variant="outlined"
              size="small"
              value={id}
              onChange={(e) => setId(e.target.value)}
            />
            <CssTextField
              label="비밀번호"
              variant="outlined"
              type="password"
              size="small"
              value={pw}
              onChange={(e) => setPw(e.target.value)}
            />
            <h4 className="auth_findPwd">비밀번호를 잊으셨나요?</h4>
            <ColorButton
              variant="contained"
              onClick={() => requestHandleLogin()}
            >
              로그인
            </ColorButton>
            <div className="detach_line"></div>
            <div className="auth_register">
              <h4 className="auth_account">계정이 없으신가요?</h4>
              <h4
                className="auth_make_account"
                onClick={() => {
                  setButtonClick(true);
                }}
              >
                가입하기
              </h4>
            </div>
          </FadeIn>
        </div>
      </div>
    </div>
  );
};

export default Login;
