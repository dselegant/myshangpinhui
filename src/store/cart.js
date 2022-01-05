import { reqAddToCart, reqCartList, reqDeleteCart, reqUpdateCheckedByid } from '@/api'


const state = {
    cartList: []
};

const mutations = {
    // 添加购物车数据
    ADDCARTLIST(state, value) {
        state.cartList = value;
    }
};

const actions = {
    // 添加购物车
    async getAddToCart({ commit }, { skuId, skuNum }) {
        let ret = await reqAddToCart(skuId, skuNum);
        if (ret.code == 200) {
            return 'ok'
        } else {
            return Promise.reject(new Error('服务器请求错误!'))
        }
    },
    // 获取购物车数据
    async getCartList({ commit }) {
        let ret = await reqCartList()
        if (ret.code == 200) commit('ADDCARTLIST', ret.data)
    },
    // 删除购物车商品
    async deleteCartBySkuId({ commit }, skuId) {
        let ret = await reqDeleteCart(skuId);
        if (ret.code == 200) {
            return 'ok'
        } else {
            return Promise.reject(new Error('服务器请求错误!'))
        }
    },
    //修改购物车某一个产品的选中状态
    async updateCheckedById({ commit }, { skuId, isChecked }) {
        let ret = await reqUpdateCheckedByid(skuId, isChecked);
        if (ret.code == 200) {
            return "ok";
        } else {
            return Promise.reject(new Error(ret.message));
        }
    },
    // 删除选中商品
    async getDelAllShopCart({ dispatch }, cartList) {
        let promiseList = []

        cartList.forEach(item => {
            if (item.isChecked == 1) {
                let promise = dispatch('deleteCartBySkuId', item.skuId)
                promiseList.push(promise)
            }
        });
        return Promise.all(promiseList)
    },
    // 全选中
    async getAllIsChecked({ dispatch, getters }, isChecked) {
        let promiseList = []
        getters.cartList.cartInfoList.forEach(item => {
            if (item.isChecked != isChecked) {
                let promise = dispatch('updateCheckedById', {
                    skuId: item.skuId,
                    isChecked
                })
                promiseList.push(promise)
            }
        });
        return Promise.all(promiseList)
    }
}

//计算属性
const getters = {
    // 购物车列表
    cartList(state) {
        return state.cartList[0] || {}
    }
};

export default {
    state,
    mutations,
    actions,
    getters,
}