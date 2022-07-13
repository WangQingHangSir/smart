const getters = {
  token: (state) => state.user.token,
  menu: (state) => state.menu.menu,
  userInfo: (state) => state.user.userInfo,
  hasUserInfo: (state) => {
    return JSON.stringify(state.user.userInfo) !== '{}'
  },
  tagsview: (state) => state.tagsview.tagsView,
  isCollapse: (state) => state.menu.isCollapse
}
export default getters
