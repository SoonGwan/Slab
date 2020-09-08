import React, { useState } from 'react';
import Login from 'components/Login';
import background from 'assets/images/background.svg';
import './Start.scss';
import Register from 'components/Register';

const Start = ({
  id,
  setId,
  pw,
  setPw,
  name,
  setName,
  email,
  setEmail,
  rePw,
  setRePw,
  requestHandleLogin,
  requestHandleRegister,
  buttonClick,
  setButtonClick,
}) => {
  return (
    <div className="start_area">
      {buttonClick ? (
        <Register
          setButtonClick={setButtonClick}
          id={id}
          pw={pw}
          setId={setId}
          setPw={setPw}
          name={name}
          setName={setName}
          email={email}
          setEmail={setEmail}
          rePw={rePw}
          setRePw={setRePw}
          requestHandleRegister={requestHandleRegister}
        />
      ) : (
        <Login
          setButtonClick={setButtonClick}
          id={id}
          pw={pw}
          setId={setId}
          setPw={setPw}
          requestHandleLogin={requestHandleLogin}
        />
      )}
      <div className="start_area_img">
        <img src={background} alt={background} className="start_background" />
      </div>
    </div>
  );
};

export default Start;
