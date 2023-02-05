<template>
  <div class="menu-list">
    <a-menu
      :default-selected-keys="['1']"
      :default-open-keys="['sub1']"
      mode="inline"
      theme="dark"
      :inline-collapsed="$store.state.collapsed"
    >
      <a-sub-menu v-for="route in $store.state.menuRouter" :key="route.name">
        <span slot="title"><span>{{route.meta.title}}</span></span>
        <a-menu-item v-for="children in route.children" :key="children.name">
          <router-link :to="children.path">{{children.meta.title}}</router-link>
        </a-menu-item>
      </a-sub-menu>
    </a-menu>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
};
</script>
