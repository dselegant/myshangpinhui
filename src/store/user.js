import { reqUserRegister, reqGetCode, reqUserLogin, reqUserInfo, reqLogout } from '@/api'
const state = {
    code: "",
    token: localStorage.getItem('TOKEN'),
    userInfo: {}
};

const mutations = {
    // 存储验证码
    GETCODE(state, value) {
        state.code = value;
    },
    // 登录
    USERLOGIN(state, value) {
        state.token = value;

    },
    // 存储用户信息
    GETUSERINFO(state, value) {
        state.userInfo = value
    },
    // 清除用户信息
    CLEAR(state) {
        state.userInfo = {};
        localStorage.removeItem('TOKEN')
    }

};

const actions = {
    // 获取验证码
    async reqCode({ commit }, phone) {
        let ret = await reqGetCode(phone);
        if (ret.code == 200) {
            commit('GETCODE', ret.data)
            return 'ok'
        } else {
            return Promise.reject(new Error(ret.message))
        }
    },
    // 注册
    async reqRegister({ commit }, data) {
        let ret = await reqUserRegister(data);
        if (ret.code == 200) {
            return 'ok'
        } else {
            return Promise.reject(new Error(ret.message))
        }
    },
    // 登录
    async reqLogin({ commit }, data) {
        let ret = await reqUserLogin(data);
        if (ret.code == 200) {
            commit('USERLOGIN', ret.data.token);
            localStorage.setItem('TOKEN', ret.data.token);
            return 'ok'
        } else {
            return Promise.reject(new Error(ret.message))
        }
    },
    // 获取用户信息
    async reqUserInfomation({ commit }) {
        let ret = await reqUserInfo();
        if (ret.code == 200) {
            commit('GETUSERINFO', ret.data);
            return 'ok'
        } else {
            return Promise.reject(new Error(ret.message))
        }
    },
    // 退出登录
    async goLogout({ commit }) {
        let ret = await reqLogout();
        if (ret.code == 200) {
            commit('CLEAR');
            return 'ok'
        } else {
            return Promise.reject(new Error(ret.message))
        }
    }

};

//计算属性
const getters = {

};

export default {
    state,
    mutations,
    actions,
    getters,
}