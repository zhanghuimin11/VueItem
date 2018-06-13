###webpack###
- 首先确保文件目录下有package.json文件，没有的话通过npm init创建
- 可以指定webpack版本@2.9.0例如：react-router已经更新到4.x版本，想要下载2.x版本，可以通过下面命令
npm install --save-dev react-router@2.8.1
- 下载完成之后可以在package.json看到依赖的包
- 建立一个webpage.config.js里面配置打包文件
- 在package.json里面添加 "build": "webpack --config webpack.config/webpack.config.js"
- 然后运行 npm run bulid;打包生成dist/bundle.js文件
- [详细webpack文档](https://webpack.js.org/guides/getting-started/#creating-a-bundle)
***
###加载CSS###

- 为了从 JavaScript 模块中 import 一个 CSS 文件，你需要在 module 配置中 安装并添加 style-loader 和 css-loader：
 npm install --save-dev style-loader css-loader

***
###加载图片###
假想，现在我们正在下载 CSS，但是我们的背景和图标这些图片，要如何处理呢？使用 file-loader，我们可以轻松地将这些内容混合到 CSS 中：

- npm install --save-dev file-loader