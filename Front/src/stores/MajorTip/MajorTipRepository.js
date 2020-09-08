import axios from "axios";
import { SERVER } from "config/config.json";

class MajorTipRepository {
  Major = async () => {
    const { data } = await axios.get(`${SERVER}/major/getmajor`);

    return data;
  };
}

export default new MajorTipRepository();
