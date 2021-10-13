import axios from 'axios'
// eslint-disable-next-line no-undef
const qs = require('qs')
const requestPopular = {
  get(url, data) {
    return new Promise((resolve, reject) => {
      axios
        .get(url, { params: { ...data } })
        .then(res => {
          resolve(res)
        })
        .catch(err => {
          reject(err)
        })
    })
  },
  async post(url, data) {
    try {
      let res = await axios.post(url, qs.stringify(data))
      res = res.data
      return new Promise((resolve, reject) => {
        if (res.status === 200 || res.status === 'success') {
          resolve(res)
        } else {
          reject(res)
        }
      })
    } catch (err) {
      console.log(err)
    }
  },
}
export { requestPopular }

// // 获取商品列表数据
// const getProductData = async obj => {
//   try {
//     const {
//       data: { data },
//     } = await axios.get(api?.shoppingcarList, { params: obj })
//     return data
//   } catch (error) {
//     const msg = error?.response?.data?.message ?? '接口错误'
//     message.error(msg)
//   }
// }
// export { getProductData }
