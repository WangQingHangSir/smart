import UserApi from '@/api/user'
import { setItem, getItem, removeItem } from '@/utils/storage'
export default {
  namespaced: true,
  state: {
    menu: getItem('menu') || '',
    isCollapse: false
  },
  mutations: {
    handleGetnav(state, list) {
      state.menu = list
      setItem('menu', list)
    },
    setIsCollapse(state) {
      state.isCollapse = !state.isCollapse
    }
  },
  actions: {
    async menuList({ commit }) {
      const response = await UserApi.getNav()
      console.log(response)
      commit('handleGetnav', response.data.data.menus)
      return response.data.data
    },
    logout({ commit }) {
      commit('handleGetnav', '')
      removeItem('menu')
    },
    setIsCollapse({ commit }) {
      commit('setIsCollapse')
    }
  }
}
