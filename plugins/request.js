import axios from 'axios'


export const request = axios.create({
  baseURL:'https://conduit.productionready.io'
})

// 通过插件机制获取到上下文对象
export default ({ store }) =>{
  // 请求拦截器
  request.interceptors.request.use(function(config){
    const {user} = store.state
    if(user && user.token){
      config.headers.Authorization = `Token ${user.token}`
    }
    return config
  }, function(error){
    // 如果请求失败（此时请求还没发出去）就会进入这里
    return Promise.reject(error)
  })
  // 响应拦截器
}
