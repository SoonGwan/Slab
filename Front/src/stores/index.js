import StartStore from "./Start/StartStore";
import MainStore from "./Main/MainStore";
import ShowLabStatusStore from "./ShowLabStatus/ShowLabStatusStore";
import MajorTipStore from "./MajorTip/MajorTipStore";
import UserInfoStore from "./UserInfo/UserInfoStore";
import SelectLabStore from "./SelectLab/SelectLabStore";

const stores = {
  StartStore: new StartStore(),
  MainStore: new MainStore(),
  ShowLabStatusStore: new ShowLabStatusStore(),
  SelectLabStore: new SelectLabStore(),
  MajorTipStore: new MajorTipStore(),
  UserInfoStore: new UserInfoStore(),
};

export default stores;
