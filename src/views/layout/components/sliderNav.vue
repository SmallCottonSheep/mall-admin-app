<template>
  <div class="sliderNav-container">
    <div class="tab-left">
      <a-button type="primary" class="tabBar" @click="toggleCollapsed">
        <a-icon :type="$store.state.collapsed ? 'menu-unfold' : 'menu-fold'" />
      </a-button>
      <div class="breadcrumb">
        <a-breadcrumb>
          <a-breadcrumb-item>商品</a-breadcrumb-item>
          <a-breadcrumb-item><a href="">商品列表</a></a-breadcrumb-item>
        </a-breadcrumb>
      </div>
    </div>
    <ul class="user-info">
      <li>
        欢迎Andy
        <a-icon type="down" />
      </li>
      <li><a href="#">退出登录</a></li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    toggleCollapsed() {
      this.$store.dispatch('changeCollapsed');
    },
  },
};
</script>

<style></style>
