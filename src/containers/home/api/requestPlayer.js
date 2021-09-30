import axios from 'axios'

let baseUrl = 'https://api.github.com/users/'

//请求玩家数据接口
export default function (params) {
  // 首先判断是get请求还是post请求
  return axios
    .get(baseUrl + params)
    .then(res => {
      return Promise.resolve(res.data)
    })
    .catch(err => {
      return Promise.reject(err)
    })
}
