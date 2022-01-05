<template>
  <div id="app">
    <Header></Header>
    <router-view></router-view>
    <Footer v-if="$route.meta.isShowFooter"></Footer>
  </div>
</template>

<script>
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default {
  mounted() {
    this.$store.dispatch('reqGetCategoryList');
  },
  components: {
    Header,
    Footer
  }
};
</script>

<style lang="less">
</style>
