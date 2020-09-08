import axios from "axios";
import { SERVER } from "config/config.json";

class ShowLabStatusRepository {
  labStatus = async () => {
    const { data } = await axios.get(
      `${SERVER}/laboratory/getLaboratory?idx=0`
    );

    return data;
  };
}

export default new ShowLabStatusRepository();
