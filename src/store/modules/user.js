import UserApi from '@/api/user'
import { setItem, getItem, removeItem } from '@/utils/storage'
export default {
  namespaced: true,
  state: {
    token: getItem('token') || '',
    userInfo: {}
  },
  mutations: {
    setToken(state, token) {
      state.token = token
      setItem('token', token)
    },
    setUserInfo(state, userInfo) {
      state.userInfo = userInfo
    }
  },
  actions: {
    async login({ commit }, payload) {
      const token = await UserApi.login(payload)
      console.log(token)
      commit('setToken', token.data.data)
      return token
    },
    async getUserInfo({ commit }) {
      const userInfo = await UserApi.getUserInfo()
      console.log(userInfo)
      commit('setUserInfo', userInfo.data.data)
      return userInfo.data.data
    },
    async logout({ commit }) {
      await UserApi.logout()
      commit('setToken', '')
      commit('setUserInfo', '')
      removeItem('token')
      removeItem('userInfo')
      return true
    }
  }
}
