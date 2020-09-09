import React, { useRef, useEffect } from 'react';
import './UserInfo.scss';
import pencil from 'assets/images/pencil.svg';
import money from 'assets/images/money.svg';
import { DonutChart } from '@opd/g2plot-react';
import FadeIn from 'react-fade-in';
import moment from 'moment';

const data = [
  {
    type: '남은 예산',
    value: 100000,
  },
  {
    type: '사용한 예산',
    value: 200000,
  },
];

const config = {
  forceFit: true,
  radius: 0.8,
  padding: 'auto',
  angleField: 'value',
  statistic: {
    visible: true,
    content: {
      value: '300000',
      name: '총 합계',
    },
  },
  colorField: 'type',
  data,
};

const UserInfo = ({ name, myApplyLabList }) => {
  const ApplyListMap = myApplyLabList.map((data) => {
    const { date, labName, isHave } = data;
    return (
      <>
        <div className="UserInfo-Lab-TableList">
          <div className="UserInfo-Lab-TableList-Item">{date}</div>
          <div className="UserInfo-Lab-TableList-Item">{labName}</div>
          <div className="UserInfo-Lab-TableList-Item">
            {moment(date).format('YYYY-MM-DD')}
          </div>
          <div className="UserInfo-Lab-TableList-Item">
            {isHave === '1' ? (
              <span style={{ color: '#3694FF' }}>승인</span>
            ) : (
              <span style={{ color: '#FF7777' }}>대기중</span>
            )}
          </div>
        </div>
      </>
    );
  });
  console.log(name);
  const chartRef = useRef();

  return (
    <FadeIn delay={300}>
      <div className="UserInfo">
        <div className="UserInfo-Title">
          안녕하세요, <b>{name}</b> 님
        </div>
        <div className="UserInfo-LabTitle">
          <img className="UserInfo-LabTitle-Icon" src={pencil} alt="" />
          <div className="UserInfo-LabTitle-Title">랩실 신청 내역</div>
        </div>
        <div className="UserInfo-Lab">
          <div className="UserInfo-Lab-TableTop">
            <div className="UserInfo-Lab-TableTop-Item">신청 날짜</div>
            <div className="UserInfo-Lab-TableTop-Item">랩실 번호</div>
            <div className="UserInfo-Lab-TableTop-Item">사용 날짜</div>
            <div className="UserInfo-Lab-TableTop-Item">결과</div>
          </div>
          <hr />
          {ApplyListMap}
        </div>
        <div className="UserInfo-LabTitle">
          <img className="UserInfo-LabTitle-Icon" src={money} alt="" />
          <div className="UserInfo-LabTitle-Title">동아리 예산 관리</div>
        </div>
        <div className="Budget">
          <DonutChart {...config} chartRef={chartRef} />
        </div>
      </div>
    </FadeIn>
  );
};

export default UserInfo;
