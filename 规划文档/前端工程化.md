# webpack

## 基础用法

开发环境安装，通过/node_modules/.bin/webpack比较的麻烦，通过package.json的scripts去指定一个命令进行调用
> webpack本身是只能处理js/json,对于css，图片资源这些都是通过指定loader插件区处理的，官方就维护了很多这方面的插件

  * 默认指定的是webpack.config.js
  * 配置文件
    - entry入口
    - output输入
    - mode 指定环境 process.env.NODE_ENV 和对应的一些默认插件
    - module.rules-->loader
    - loader
    - plugins 插件

## 