<template>
  <div class="home-container">
    <LeftMeun />
    <div :class="{ 'main-app': true, 'menu-unfold': $store.state.collapsed }">
      <SliderNav />
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import LeftMeun from './components/meun.vue';
import SliderNav from './components/sliderNav.vue';

export default {
  components: {
    LeftMeun,
    SliderNav,
  },
  data() {
    return {

    };
  },
  methods: {
  },
};
</script>

<style lang="less">
@import url("~@/assets/home.less");
</style>
