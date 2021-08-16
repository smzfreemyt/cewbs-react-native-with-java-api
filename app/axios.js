import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import {API_URL, STORAGE_NAME} from './config/AppConfig';

const authInfo = async () => {
  const token = await AsyncStorage.getItem(STORAGE_NAME);
  return token;
};

const instance = axios.create({
  baseURL: API_URL,
});

instance.interceptors.request.use(
  function (config) {
    const token = authInfo();
    return token.then(item => {
      config.headers.Authorization = `Bearer ${item}`;
      return config;
    });
  },
  function (error) {
    return Promise.reject(error);
  },
);

instance.defaults.headers.common['Access-Control-Allow-Origin'] = '*';
instance.defaults.headers.common['Access-Control-Allow-Methods'] =
  'GET,PUT,POST,DELETE,PATCH,OPTIONS';
instance.defaults.headers.get['Content-Type'] = 'application/json';

export default instance;
