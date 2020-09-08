import React, { useState } from "react";
import Login from "components/Login";
import background from "assets/images/background.svg";
import "./Start.scss";

const Start = () => {
  const [buttonClick, setButtonClick] = useState(false);
  return (
    <div className="start_area">
      {buttonClick ? (
        <div>회원가입띠</div>
      ) : (
        <Login setButtonClick={setButtonClick} />
      )}
      <img src={background} alt={background} className="start_background" />
    </div>
  );
};

export default Start;
