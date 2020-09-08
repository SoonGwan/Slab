import React from 'react';
import './Main.scss';
import ShowLabStatus from 'components/ShowLabStatus';
// import Main from 'components/Main';
import UserInfo from 'components/UserInfo/UserInfo';
import MajorTip from 'components/MajorTip';
import ImageSlider from 'components/ImgaeSlider/ImageSlider';

const Main = () => {
  return (
    <div className="main_area">
      <ShowLabStatus />
      {/* <Main /> */}
      <UserInfo />
      <MajorTip />
      <ImageSlider />
    </div>
  );
};

export default Main;
