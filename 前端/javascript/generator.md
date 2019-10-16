```js
var a = (function* (){
	yield* '123456qwe'
})()
```

yield* 调用的数据结构的Iterator接口，实际上，任何数据结构只要有 Iterator 接口，就可以被yield*遍历。

就像是...拓展运算符，也是调用了Iterator接口

```js
var arr = [1,2,3,4]
var b = [...arr]
```