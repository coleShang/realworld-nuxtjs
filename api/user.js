import { request } from '@/plugins/request'

//  login
export const login =  data => {
  return request({
    method: 'POST',
    url: '/api/users/login',
    data
  })
}


//  register
export const register =  data => {
  return request({
    method: 'POST',
    url: '/api/users',
    data
  })
}