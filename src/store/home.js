import { reqgetCategoryList, reqgetBannerList, reqfloorList } from "@/api";

const state = {
    // 三级列表数据
    categoryList: [],
    // 轮播图数据
    bannerList: [],
    // floor数据
    floorList: []
};

const mutations = {
    // 添加三级列表数据
    REQGETCATEGORYLIST(state, value) {
        state.categoryList = value;
    },
    // 添加轮播图数据
    REQGETBANNERLIST(state, value) {
        state.bannerList = value;
    },
    // 添加floor数据
    REQFLOORLIST(state, value) {
        state.floorList = value;
    }
};

const actions = {
    // 请求三级列表数据
    async reqGetCategoryList({ commit }) {
        let ret = await reqgetCategoryList();
        if (ret.code == 200) commit('REQGETCATEGORYLIST', ret.data)
    },
    // 请求轮播图数据
    async reqGetBannerList({ commit }) {
        let ret = await reqgetBannerList();
        if (ret.code == 200) commit('REQGETBANNERLIST', ret.data)
    },
    // 请求floor数据
    async reqFloorList({ commit }) {
        let ret = await reqfloorList();
        if (ret.code == 200) commit('REQFLOORLIST', ret.data)
    }
};

//计算属性
const getters = {};

export default {
    state,
    mutations,
    actions,
    getters,
}