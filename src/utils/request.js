import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://mallapi.duyiedu.com/',
  timeout: 1000,
});

// 请求拦截
instance.interceptors.request.use(
  (config) => config,

  (error) => Promise.reject(error),
);

// 响应拦截
instance.interceptors.response.use(
  (resp) => {
    if (resp.data.status === 'fail') {
      return Promise.reject(resp.data.msg);
    }
    return resp.data.data;
  },

  (error) => Promise.reject(error),
);

export default instance;
