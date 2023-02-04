import Cookies from 'js-cookie';

export function setCookie(user) {
  const userArr = Object.entries(user);

  for (let i = 0; i < userArr.length; i += 1) {
    Cookies.set(userArr[i][0], userArr[i][1]);
  }

  return true;
}

export function getCookie() {
  return {
    email: Cookies.get('email'),
    username: Cookies.get('username'),
    appkey: Cookies.get('appkey'),
    role: Cookies.get('role'),
  };
}

export function removeCookie() {
  Cookies.remove('email');
  Cookies.remove('username');
  Cookies.remove('appkey');
  Cookies.remove('role');
  return true;
}
