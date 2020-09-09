import React from "react";
import "./Main.scss";
import UserInfo from "components/UserInfo/UserInfo";
import ImageSlider from "components/ImgaeSlider/ImageSlider";
import ShowLabStatusContainer from "container/ShowLabStatusContainer/ShowLabStatusContainer";
import MajorTipContainer from "container/MajorTipContainer/MajorTipContainer";
import UserInfoContainer from "container/UserInfoContainer/UserInfoContainer";
import MajorTipWriteContainer from "container/MajorTipContainer/MajorTipWriteContainer";
import SelectLabContainer from "container/ShowLabStatusContainer/SelectLabContainer";

const Main = () => {
  return (
    <div className="Main">
      <div className="Main-Content">
        <ShowLabStatusContainer />
        <MajorTipContainer />
        <ImageSlider />
      </div>
      <UserInfoContainer />
      <MajorTipWriteContainer />
      <SelectLabContainer />
    </div>
  );
};

export default Main;
