import StartStore from './Start/StartStore';
import MainStore from './Main/MainStore';
import ShowLabStatusStore from './ShowLabStatus/ShowLabStatusStore';
import MajorTipStore from './MajorTip/MajorTipStore';
import UserInfoStore from './UserInfo/UserInfoStore';

const stores = {
  StartStore: new StartStore(),
  MainStore: new MainStore(),
  ShowLabStatusStore: new ShowLabStatusStore(),
  MajorTipStore: new MajorTipStore(),
  UserInfoStore: new UserInfoStore(),
};

export default stores;
