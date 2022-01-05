<template>
  <div>
    <TypeNav></TypeNav>
    <ListContainer></ListContainer>
    <TodayRecommend></TodayRecommend>
    <Rank></Rank>
    <Like></Like>
    <Floor v-for="floor in floorList" :key="floor.id" :floor="floor"></Floor>
    <Brand></Brand>
  </div>
</template>

<script>
import ListContainer from '@/components/Home/ListContainer/ListContainer';
import TodayRecommend from '@/components/Home/TodayRecommend/TodayRecommend';
import Rank from '@/components/Home/Rank/Rank';
import Like from '@/components/Home/Like/Like';
import Floor from '@/components/Home/Floor/Floor';
import Brand from '@/components/Home/Brand/Brand';

import { mapState } from 'vuex';
export default {
  components: {
    ListContainer,
    TodayRecommend,
    Rank,
    Like,
    Floor,
    Brand
  },
  mounted() {
    this.$store.dispatch('reqFloorList');
    // 获取用户信息
    this.$store.dispatch('reqUserInfomation');
  },
  computed: {
    ...mapState({
      floorList: (state) => state.home.floorList
    })
  }
};
</script>

<style>
</style>