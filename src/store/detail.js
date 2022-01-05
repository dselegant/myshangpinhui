import { reqgoodsInfo } from '@/api'
import { getNanoId } from '@/util/nanoid_token'
const state = {
    detailInfos: {},
    uuid_token: getNanoId()
};

const mutations = {
    // 添加详情页信息
    REQGOODSINFO(state, value) {
        state.detailInfos = value;
    }
};

const actions = {
    // 请求详情页
    async reqGoodsInfo({ commit }, skuId) {
        let ret = await reqgoodsInfo(skuId);
        if (ret.code == 200) commit('REQGOODSINFO', ret.data);
    }
};

//计算属性
const getters = {
    // 分类
    categoryView(state) {
        return state.detailInfos.categoryView || {}
    },
    //商品信息
    skuInfo(state) {
        return state.detailInfos.skuInfo || {}
    },
    // 参数信息
    spuSaleAttrList(state) {
        return state.detailInfos.spuSaleAttrList || {}
    }
};

export default {
    state,
    mutations,
    actions,
    getters,
}