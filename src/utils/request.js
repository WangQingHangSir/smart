import axios from 'axios'
// 添加请求拦截器
import { Message } from 'element-ui'
import router from '../router'
import store from '@/store'
const service = axios.create({
  baseURL: process.env.VUE_APP_BASE_API,
  timeout: 5000
})

service.interceptors.request.use(
  function (config) {
    const token = store.getters.token
    if (token) config.headers.token = token
    return config
  },
  function (error) {
    // 做一些请求错误的事情
    return Promise.reject(error)
  }
)

// 添加响应拦截器
service.interceptors.response.use(
  function (response) {
    console.log(response)
    if (response.data.code === 400) {
      Message.error(response.data.msg)
    }

    return response
  },
  function (error) {
    // token过期
    if (
      error.response &&
      error.response.data &&
      error.response.data.code === 401
    ) {
      store.dispatch('user/logout')
      router.push('/login')
    }
    return Promise.reject(error)
  }
)
// 统一了传参处理
const request = (options) => {
  if (options.method.toLowerCase() === 'get') {
    options.params = options.data || {}
  }
  return service(options)
}

export default request
