import { action, observable } from "mobx";
import { autobind } from "core-decorators";
import SelectLabRepository from "./SelectLabRepository";

@autobind
class SelectLabStore {
  @observable labList = [];

  @action
  async handleSelectLab() {
    const response = await SelectLabRepository.allLab();
    this.labList = response.data.list;
    return response;
  }

  async handleApplyLab(request, idx) {
    const response = await SelectLabRepository.selectLab(request, idx);
    return response;
  }
}

export default SelectLabStore;
