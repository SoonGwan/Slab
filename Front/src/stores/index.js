import StartStore from './Start/StartStore';
import MainStore from './Main/MainStore';

const stores = {
  StartStore: new StartStore(),
  MainStore: new MainStore(),
};

export default stores;
