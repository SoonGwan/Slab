import React, { useState } from "react";
import Login from "components/Login";
import background from "assets/images/background.svg";
import "./Start.scss";
import Register from "components/Register";

const Start = () => {
  const [buttonClick, setButtonClick] = useState(false);
  return (
    <div className="start_area">
      {buttonClick ? (
        <Register setButtonClick={setButtonClick} />
      ) : (
        <Login setButtonClick={setButtonClick} />
      )}
      <img src={background} alt={background} className="start_background" />
    </div>
  );
};

export default Start;
