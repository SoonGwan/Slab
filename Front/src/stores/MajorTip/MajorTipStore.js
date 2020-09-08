import { action, observable } from "mobx";
import { autobind } from "core-decorators";
import MajorTipRepository from "./MajorTipRepository";

@autobind
class MajorTipStore {
  @action
  async handleMajorTip() {
    const response = await MajorTipRepository.Major();
    return response;
  }
}

export default MajorTipStore;
