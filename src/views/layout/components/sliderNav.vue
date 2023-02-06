<template>
  <div class="sliderNav-container">
    <div class="tab-left">
      <a-button type="primary" class="tabBar" @click="toggleCollapsed">
        <a-icon :type="$store.state.collapsed ? 'menu-unfold' : 'menu-fold'" />
      </a-button>
      <div class="breadcrumb">
        <a-breadcrumb v-if="currentRoute.length > 1">
          <a-breadcrumb-item>
            {{currentRoute[0] ? currentRoute[0].meta.title : ''}}
          </a-breadcrumb-item>
          <a-breadcrumb-item>
            <router-link :to="{name: currentRoute[1].name}">
              {{currentRoute[1] ? currentRoute[1].meta.title : ''}}
            </router-link>
          </a-breadcrumb-item>
        </a-breadcrumb>
      </div>
    </div>
    <ul class="user-info">
      <li>
        {{$store.state.user.username}}
        <a-icon type="down" />
      </li>
      <li @click="logOut">退出登录</li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      currentRoute: this.$router.currentRoute.matched,
    };
  },
  watch: {
    $route: 'initMeun',
  },
  methods: {
    initMeun() {
      this.currentRoute = this.$router.currentRoute.matched;
    },
    toggleCollapsed() {
      this.$store.dispatch('changeCollapsed');
    },
    logOut() {
      this.$store.dispatch('removeUserInfo');
      this.$router.push({
        name: 'Login',
      });
    },
  },
};
</script>

<style></style>
