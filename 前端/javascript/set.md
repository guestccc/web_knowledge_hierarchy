```js
var set = new Set([1,2,2,3])
//[1,2,3]
set.size
// 3
set.add(5)
// [1,2,3,5]
set.has(1)
// true
set.has(4)
// false
set.delete(1)
// [2,3,5]
set.clear()
// []
```

`new Set()`接受的是一个具有`iterable`接口的数据结构,例如：

```js
'xxx'//字符串

[]//数组

(function *fn(){
  yield 1;
  yield 2;
  yield 3;
})()//状态机

dom//类数组
...
```

## 并、交、差集

```js
let a = new Set([1, 2, 3]);
let b = new Set([4, 3, 2]);

// 并集
let union = new Set([...a, ...b]);
// Set {1, 2, 3, 4}

// 交集
let intersect = new Set([...a].filter(x => b.has(x)));
// set {2, 3}

// 差集
let difference = new Set([...a].filter(x => !b.has(x)));
// Set {1}
```

并集两种方案
## 处理数组
```js
var a = [1, 2, 3, 5]
var b = [2, 4, 5, 1]
var c = [1, 3, 5]
var intersect
function fn(...arg){
  intersect =  arg.reduce((total,next)=>{return total.filter(item=>next.includes(item))})
}
fn(a,b,c)
console.log(intersect)
// [1,5]
```
## 处理数组和类数组（有iterable接口的数据结构）
```js
var intersect
function fn2 (...arg){
    intersect = arg.reduce((total,next)=>{return [...total].filter(item=>new Set(next).has(item))})
}
var a = [1, 2, 3, 5]
var b = [2, 4, 5, 1]
var c = [1, 3, 5]
fn2(a,b,c)
console.log(intersect)
// [1,5]

a = new Set([1, 2, 3, 5])
b = new Set([2, 4, 5, 1])
c = new Set([1, 3, 5])
fn2(a,b,c)
console.log(intersect)
//[1,5]
```