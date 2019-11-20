# Object.defineProperty(obj, prop, descriptor)

> Object.defineProperty() 方法会直接在一个对象上定义一个新属性，或者修改一个对象的现有属性， 并返回这个对象。


## descriptor

|            | configurable | enumerable | value | writable | get | set |
| ---------- | ------------ | ---------- | ----- | -------- | --- | --- |
| 数据描述符 | ✅           | ✅         | ✅    | ✅       | ❌  | ❌  |
| 存取描述符 | ✅           | ✅         | ❌    | ❌       | ✅  | ✅  |

[mdn---Object.defineProperty](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty)