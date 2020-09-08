import axios from 'axios';
import { SERVER } from 'config/config.json';

class StartRepository {
  Login = async (request) => {
    const { data } = await axios.post(`${SERVER}/auth/login`, request);

    return data;
  };

  Register = async (request) => {
    const { data } = await axios.post(`${SERVER}/auth/register`, request);

    return data;
  };
}

export default new StartRepository();
