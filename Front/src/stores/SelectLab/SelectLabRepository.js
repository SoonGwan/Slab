import axios from "axios";
import { SERVER } from "config/config.json";

class SelectLabRepository {
  allLab = async () => {
    const { data } = await axios.get(`${SERVER}/laboratory/allLaboratory`);

    return data;
  };

  selectLab = async (request, idx) => {
    const { data } = await axios.put(
      `${SERVER}/laboratory/modifyLaboratory?idx=${idx}`,
      request
    );

    return data;
  };
}

export default new SelectLabRepository();
