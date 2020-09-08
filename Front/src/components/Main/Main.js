import React from "react";
import "./Main.scss";
import ShowLabStatus from "components/ShowLabStatus";
import UserInfo from "components/UserInfo/UserInfo";
import MajorTip from "components/MajorTip";
import ImageSlider from "components/ImgaeSlider/ImageSlider";

const Main = () => {
  return (
    <div className="Main">
      <div className="Main-Content">
        <ShowLabStatus />
        <MajorTip />
        <ImageSlider />
      </div>
      <UserInfo />
    </div>
  );
};

export default Main;
