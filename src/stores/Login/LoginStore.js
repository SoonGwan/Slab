import { action, observable } from 'mobx';
import { autobind } from 'core-decorators';
import LoginRepository from './LoginRepository';

@autobind
class LoginStore {
  @action
  async handleLogin(request) {
    const response = await LoginRepository.Login(request);

    return response;
  }
}

export default LoginStore;
