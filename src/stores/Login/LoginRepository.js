import axios from 'axios';
import { SERVER } from 'config/config.json';

class LoginRepository {
  Login = async (request) => {
    const { data } = await axios.post(`${SERVER}/auth/login`, request);

    return data;
  };
}

export default new LoginRepository();
