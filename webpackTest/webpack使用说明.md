###webpack###
- 首先确保文件目录下有package.json文件，没有的话通过npm init创建
- 可以指定webpack版本@2.9.0例如：react-router已经更新到4.x版本，想要下载2.x版本，可以通过下面命令
npm install --save-dev react-router@2.8.1
- 下载完成之后可以在package.json看到依赖的包
- 建立一个webpage.config.js里面配置打包文件
- 在package.json里面添加 "build": "webpack --config webpack.config/webpack.config.js"
- 然后运行 npm run bulid;打包生成dist/bundle.js文件
- [详细webpack文档](https://webpack.js.org/guides/getting-started/#creating-a-bundle)