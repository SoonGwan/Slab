import { action, observable } from 'mobx';
import { autobind } from 'core-decorators';
import UserInfoRepository from './UserInfoRepository';

@autobind
class UserInfoStore {
  @observable myApplyLabList = [];

  @action
  async handleUserInfo() {
    const response = await UserInfoRepository.userInfo();
    sessionStorage.setItem('name', response.data.list.name);
    sessionStorage.setItem('id', response.data.list.id);
    return response;
  }

  @action
  async handleUserApplyLab() {
    const response = await UserInfoRepository.userApplyLab();
    this.myApplyLabList = response.data.list;
    return response;
  }
}

export default UserInfoStore;
