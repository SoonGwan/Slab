import { action, observable } from 'mobx';
import { autobind } from 'core-decorators';
import MainRepository from './MainRepository';

@autobind
class MainStore {
  @action
  async handleUserInfo(id) {
    const response = await MainRepository.userInfo(id);

    return response;
  }
}

export default MainStore;
