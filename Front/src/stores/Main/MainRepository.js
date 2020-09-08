import axios from 'axios';
import { SERVER } from 'config/config.json';

class MainRepository {
  userInfo = async (id) => {
    const { data } = await axios.get(
      `${SERVER}/laboratory/myApplyLaboratory?id=${id}`
    );

    return data;
  };
}

export default new MainRepository();
