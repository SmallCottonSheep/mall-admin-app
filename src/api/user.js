import request from '@/utils/request';

function login(params) {
  return request.post('/passport/login', params);
}

export default {
  login,
};
