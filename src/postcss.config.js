/* eslint-disable no-undef */
module.exports = {
  plugins: [
    //为我们的css内容添加浏览器厂商前缀兼容
    require('autoprefixer'),
    //作用是尽可能小的压缩我们的css代码。
    // eslint-disable-next-line no-undef
    require('cssnano')({
      preset: 'default',
    }),
  ],
}
