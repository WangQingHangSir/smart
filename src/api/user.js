import request from '@/utils/request'

// 登录接口
const login = (data) => {
  return request({
    url: `/login?username=${data.username}&password=${data.password}&code=${data.code}&token=${data.code}`,
    method: 'POST'
  })
}
// 获取验证码接口
const getCaptcha = () => {
  return request({ url: '/captcha', method: 'GET' })
}
// 获取菜单权限接口
const getNav = () => {
  return request({ url: '/menu/nav', method: 'GET' })
}
// 获取用户信息接口
const getUserInfo = () => {
  return request({ url: '/user/info', method: 'GET' })
}
// 获取用户数据接口
const getUserList = (data) => {
  return request({
    url: `/user/list?current=${data.current}&size=${data.size}&username=${data.username}`,
    method: 'GET'
  })
}
// 退出登录
const logout = () => {
  return request({
    url: '/logout',
    method: 'POST'
  })
}

export default {
  login,
  getCaptcha,
  getNav,
  getUserInfo,
  getUserList,
  logout
}
