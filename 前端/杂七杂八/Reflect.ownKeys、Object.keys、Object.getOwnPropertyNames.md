```js
var obj = {a:1,b:2,c:3,[Symbol.for("ccc")]:4}
var arr = [1,2,3,4]
Object.keys(obj)  // 可枚举
// (3) ["a", "b", "c"]
Object.getOwnPropertyNames(obj) // 可枚举+不可枚举
// (3) ["a", "b", "c"]
Reflect.ownKeys(obj)  // 可枚举+不可枚举+symbol
// (4) ["a", "b", "c", Symbol(ccc)]
Object.getOwnPropertySymbols(obj) // symbol
// [Symbol(ccc)]


Object.keys(arr)  // 可枚举
// (4) ["0", "1", "2", "3"]
Object.getOwnPropertyNames(arr) // 可枚举+不可枚举
// (5) ["0", "1", "2", "3", "length"]
Reflect.ownKeys(arr)  // 可枚举+不可枚举+symbol
// (5) ["0", "1", "2", "3", "length"]
arrect.getOwnPropertySymbols(obj) // symbol
// []
```