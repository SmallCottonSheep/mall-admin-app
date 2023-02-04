import Vue from 'vue';
import Vuex from 'vuex';
import { setCookie, getCookie, removeCookie } from '../utils/cookie';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    collapsed: false,
    user: getCookie(),
  },
  mutations: {
    changeCollapsed(state) {
      state.collapsed = !state.collapsed;
    },
    setUserInfo(state, userInfo) {
      state.user = userInfo;
    },
    removeUserInfo(state) {
      state.user = {
        username: '',
        appkey: '',
        role: '',
        email: '',
      };
    },
  },
  actions: {
    changeCollapsed(context) {
      context.commit('changeCollapsed');
    },
    setUserInfo(context, userInfo) {
      setCookie(userInfo);
      context.commit('setUserInfo', userInfo);
    },
    removeUserInfo(context) {
      removeCookie();
      context.commit('removeUserInfo');
    },
  },
  modules: {
  },
});
