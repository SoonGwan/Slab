import { action, observable } from "mobx";
import { autobind } from "core-decorators";
import ShowLabStatusRepository from "./ShowLabStatusRepository";

@autobind
class ShowLabStatusStore {
  @action
  async handleLabStatus() {
    const response = await ShowLabStatusRepository.labStatus();
    return response;
  }
}

export default ShowLabStatusStore;
