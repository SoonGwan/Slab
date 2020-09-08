import React from 'react';
import './Register.scss';

import { Button, TextField, withStyles } from '@material-ui/core';
import FadeIn from 'react-fade-in';

const ColorButton = withStyles((theme) => ({
  root: {
    boxShadow: 'none',
    color: theme.palette.getContrastText('#0077FF'),
    fontWeight: 300,
    backgroundColor: '#0077FF',
    width: '26rem',
    marginTop: '2rem',
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
    marginBottom: '1.6rem',
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

const Register = ({
  setButtonClick,
  id,
  setId,
  pw,
  setPw,
  email,
  setEmail,
  requestHandleRegister,
  name,
  setName,
  rePw,
  setRePw,
}) => {
  return (
    <div className="register_main">
      <div className="register_information">
        <div className="register_area">
          <FadeIn>
            <h1 className="register_title">Slab, 우리들만의 공간.</h1>
            <h3 className="register_subtitle">
              회원가입 후 서비스를 이용하실 수 있습니다.
            </h3>
            <CssTextField
              label="아이디"
              variant="outlined"
              size="small"
              value={id}
              onChange={(e) => setId(e.target.value)}
            />
            <CssTextField
              label="이메일"
              variant="outlined"
              size="small"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <CssTextField
              label="이름"
              variant="outlined"
              size="small"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <CssTextField
              label="비밀번호"
              variant="outlined"
              type="password"
              size="small"
              value={pw}
              onChange={(e) => setPw(e.target.value)}
            />
            <CssTextField
              label="비밀번호 확인"
              variant="outlined"
              type="password"
              size="small"
              value={rePw}
              onChange={(e) => setRePw(e.target.value)}
            />
            <ColorButton
              variant="contained"
              onClick={() => requestHandleRegister()}
            >
              완료
            </ColorButton>
            <div className="detach_line"></div>
            <div className="register_register">
              <h4 className="register_account">이미 계정이 있으신가요?</h4>
              <h4
                className="register_make_account"
                onClick={() => {
                  setButtonClick(false);
                }}
              >
                로그인
              </h4>
            </div>
          </FadeIn>
        </div>
      </div>
    </div>
  );
};

export default Register;
