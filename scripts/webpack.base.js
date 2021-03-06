// webapck.base.js
const path = require('path')
const htmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin') //这个插件将 CSS 提取到单独的文件中。它为每个包含CSS 的 JS 文件创建一个 CSS 文件。它支持按需加载 CSS 和 SourceMaps。
const TerserPlugin = require('terser-webpack-plugin')
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin')
const values = require('postcss-modules-values')

module.exports = {
  mode: 'development',
  // 入口文件，这里之后会着重强调
  entry: {
    main: path.resolve(__dirname, '../src/packages/home/index.jsx'),
  },
  output: {
    // filename: 'bundle.js',
    // filename: '[name]-[contenthash:8].js',
    filename:
      process.env.NODE_ENV === 'production' ? '[name].[contenthash].bundle.js' : '[name].bundle.js',
    // filename: '[name].[contenthash:8].bundle.js',
    path: path.resolve(__dirname, '../dist'),
  },
  // cache: {
  //   type: 'filesystem', // 使用文件缓存
  // },
  resolve: {
    alias: {
      '@src': path.resolve(__dirname, '../src'),
      '@packages': path.resolve(__dirname, '../src/packages'),
      '@containers': path.resolve(__dirname, '../src/containers'),
    },
    mainFiles: ['index', 'main'],
    extensions: ['.ts', '.tsx', '.scss', 'json', '.js', '.jsx', '.css'],
  },
  module: {
    rules: [
      {
        test: /\.(t|j)sx?$/,
        use: 'babel-loader',
      },
      {
        test: /\.(sa|sc|le|c)ss$/,
        use: [
          {
            //生产环境使用style-loader
            loader:
              process.env.NODE_ENV === 'production' ? MiniCssExtractPlugin.loader : 'style-loader',
          },
          'css-loader',
          'postcss-loader',
          // 当解析antd.less，必须写成下面格式，否则会报Inline JavaScript is not enabled错误
          { loader: 'less-loader', options: { lessOptions: { javascriptEnabled: true } } },
          {
            loader: 'resolve-url-loader',
            options: {
              keepQuery: true,
            },
          },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: true,
            },
          },
        ],
      },
      {
        test: /\.(png|jpe?g|svg|gif)$/,
        type: 'asset/inline',
      },
      {
        test: /\.(eot|ttf|woff|woff2)$/,
        type: 'asset/resource',
        generator: {
          filename: 'fonts/[hash][ext][query]',
        },
      },
    ],
  },
  plugins: [
    new htmlWebpackPlugin({
      filename: 'index.html',
      template: path.resolve(__dirname, '../public/index.html'),
    }),
  ],
  optimization: {
    minimize: true, // 可省略，默认最优配置：生产环境，压缩 true。开发环境，不压缩 false
    minimizer: [
      new TerserPlugin({
        //js压缩
        parallel: true, // 可省略，默认开启并行
        terserOptions: {
          toplevel: true, // 最高级别，删除无用代码
          ie8: true,
          safari10: true,
        },
      }),
      new CssMinimizerPlugin({
        //css压缩
        parallel: 4,
      }),
    ],
  },
}
