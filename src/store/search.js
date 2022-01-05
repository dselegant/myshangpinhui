import { reqgetSearchInfo } from "@/api";

const state = {
    searchData: {}
};

const mutations = {
    // 添加floor数据
    REQGETSEARCHINFO(state, value) {
        state.searchData = value;
    }
};

const actions = {
    // 请求搜索数据
    async reqGetSearchInfo({ commit }, params = {}) {
        // console.log('params', params);
        let ret = await reqgetSearchInfo(params);
        if (ret.code == 200) commit('REQGETSEARCHINFO', ret.data)
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