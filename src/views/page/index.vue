<template>
  <div class="index-container">
    <Cart />
    <Charts />
  </div>
</template>

<script>
import Cart from '@/components/cart.vue';
import Charts from '@/components/charts.vue';

export default {
  components: {
    Charts,
    Cart,
  },
};
</script>

<style lang="less" scoped>
  .index-container{
    width: 100%;
    padding-right: 10px;
  }
</style>
