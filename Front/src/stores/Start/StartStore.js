import { action, observable } from 'mobx';
import { autobind } from 'core-decorators';
import StartRepository from './StartRepository';

@autobind
class StartStore {
  @action
  async handleLogin(request) {
    const response = await StartRepository.Login(request);

    return response;
  }

  @action
  async handleRegister(request) {
    console.log(request);
    const response = await StartRepository.Register(request);

    return response;
  }
}

export default StartStore;
