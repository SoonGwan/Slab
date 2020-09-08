import axios from 'axios';
import { SERVER } from 'config/config.json';
import Token from 'lib/Token';

class UserInfoRepository {
  userInfo = async () => {
    const token =
      Token() === 'session' ? sessionStorage.getItem('token') : null;

    const { data } = await axios.get(`${SERVER}/user/myInfo`, {
      headers: {
        'x-access-token': token,
      },
    });
    return data;
  };

  userApplyLab = async () => {
    const token =
      Token() === 'session' ? sessionStorage.getItem('token') : null;
    const { data } = await axios.get(`${SERVER}/laboratory/myApplyLaboratory`, {
      headers: {
        'x-access-token': token,
      },
    });

    return data;
  };
}

export default new UserInfoRepository();
