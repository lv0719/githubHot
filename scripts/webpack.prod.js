// 这里我使用了默认的`webpack`production下的配置
// 如果你需要额外的配置，可以额外添加配置。
// 这里提供动态多页应用的流程 具体压缩/优化插件和配置 各位小哥可以去官网查看配置～
// 之后我也会在文章开头的github仓库中提供不同branch去实践最佳js代码压缩优化
const path = require('path')
// const paths = require('paths')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin')
const TerserPlugin = require('terser-webpack-plugin')
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const glob = require('glob')
const PurgeCSSPlugin = require('purgecss-webpack-plugin')
const { merge } = require('webpack-merge')
const baseConfig = require('./webpack.base')

const prodConfig = {
  mode: 'production',
  output: {
    filename: '[name]-[contenthash:8].js',
    path: path.resolve(__dirname, '../dist'),
  },
  plugins: [
    new CleanWebpackPlugin(),
    new FriendlyErrorsWebpackPlugin(),
    // 提取 CSS 到单独的文件中
    new MiniCssExtractPlugin({
      filename: 'assets/[hash].[name].css',
    }),
    // // CSS Tree Shaking,无用的css将不打包
    // new PurgeCSSPlugin({
    //   paths: glob.sync(`${paths.appSrc}/**/*`, { nodir: true }),
    // }),
  ],

  optimization: {
    minimize: true,
    //让公共包 splitChunks 的 hash 不因为新的依赖而改变，减少非必要的 hash 变动
    moduleIds: 'deterministic',
    minimizer: [
      //js压缩
      new TerserPlugin({
        parallel: 4,
        terserOptions: {
          parse: {
            ecma: 8,
          },
          compress: {
            ecma: 5,
            warnings: false,
            comparisons: false,
            inline: 2,
          },
          mangle: {
            safari10: true,
          },
          output: {
            ecma: 5,
            comments: false,
            ascii_only: true,
          },
        },
      }),
      new CssMinimizerPlugin({
        //css压缩
        parallel: 4,
      }),
    ],
    splitChunks: {
      // 抽离重复代码
      chunks: 'all',
      // 重复打包问题
      cacheGroups: {
        vendors: {
          // node_modules里的代码
          test: /[\\/]node_modules[\\/]/,
          chunks: 'all',
          // name: 'vendors', 一定不要定义固定的name
          priority: 10, // 优先级
          enforce: true,
        },
      },
    },
  },
}

module.exports = merge(prodConfig, baseConfig)
