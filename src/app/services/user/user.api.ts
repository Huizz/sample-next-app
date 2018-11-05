import axios from 'axios';
// import * as dotenv from 'dotenv';

const login = async (username: string, password: string): Promise<any> => {
  // @TODO: remvoe testing value
  if (!username) {
    username = 'Banana';
  }
  const userResponse = await axios.get(`${process.env.REACT_APP_API_URL}/api/users/${username}`);
  const user = userResponse.data.body;

  return user;
};

const userAPI = {
  login
};

export default userAPI;
