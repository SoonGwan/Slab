import axios from 'axios';
import { SERVER } from 'config/config.json';

class MajorTipRepository {
  Major = async () => {
    const { data } = await axios.get(`${SERVER}/major/getmajor`);

    return data;
  };

  makeMajorTip = async (request) => {
    const { data } = await axios.post(`${SERVER}/major/makeMajor`, request);

    return data;
  };
}

export default new MajorTipRepository();
