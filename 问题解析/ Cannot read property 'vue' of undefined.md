#  Cannot read property 'vue' of undefined

```vb
ERROR  Failed to compile with 1 errors

Module build failed (from ./node_modules/vue-loader/index.js):
TypeError: Cannot read property 'vue' of undefined
    at Object.module.exports (/Users/ccc/Desktop/dankal_project/web-mobile-boilerplate/node_modules/vue-loader/lib/loader.js:61:18)
```


对于webcpack ^ 4.x

npm安装vue-loader@14.2.2

[vue-loader/issues/1177](https://github.com/vuejs/vue-loader/issues/1177)