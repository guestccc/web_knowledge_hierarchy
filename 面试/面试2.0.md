# 一、防抖

## 应用场景：

- 支付

> 连续点击，间歇时间小于 s，只触发一次

```js
function debounce(fn, s, immediate) {
  let timer = null
  let result
  return function(...val) {
    clearTimeout(timer)
    if (immediate) {
      if (!timer) {
        result = fn.apply(this, val)
      }
      timer = setTimeout(() => {
        timer = null
      }, s * 1000)
    } else {
      timer = setTimeout(() => {
        fn.apply(this, val)
      }, s * 1000)
    }
    return result
  }
}
```

# 二、节流

## 应用场景：

- 秒杀
- 攻击
- 无 cd 技能
- 收藏/取消收藏
- star/Unstar

> 连续点击可以出发多次

```js
function throttle(fn, s) {
  let now = 0
  let timer
  return function(...val) {
    if (timer) clearTimeout(timer)
    if (+new Date() - now > s * 1000) {
      fn.apply(this, val)
      now = +new Date()
    } else {
      timer = setTimeout(() => {
        timer = null
        fn.apply(this, val)
      }, s * 1000)
    }
  }
}
```

# 三、去重unqique

## 应用场景： 

- 本地历史记录

| 方法               | 结果                                                             | 说明                              |
| ------------------ | ---------------------------------------------------------------- | --------------------------------- |
| for 循环           | [1, "1", null, undefined, String, String, /a/, /a/, NaN, NaN]    |object,NaN 不去重                  |
| indexOf            | [1, "1", null, undefined, String, String, /a/, /a/, NaN, NaN]    |object,NaN 不去重                  |
| sort               | [/a/, /a/, "1", 1, String, 1, String, NaN, NaN, null, undefined] | object,NaN,number不去重 |
| filter + indexOf   | [1, "1", null, undefined, String, String, /a/, /a/]              | object,NaN 不去重         |
| filter + sort      | [/a/, /a/, "1", 1, String, 1, String, NaN, NaN, null, undefined] | object, NaN,number 不去重   |
| 优化后的键值对方法 | [1, "1", null, undefined, String, /a/, NaN]                      | 全部去重                          |
| Set                | [1, "1", null, undefined, String, String, /a/, /a/, NaN]         | object不去重              |

## 1. for循环

```js
var array = [1,'1',new String('1'),NaN,{a:1},{a:2},null,undefined,2,{a:1},undefined,new String('1'),NaN,,null,1,'1']

function unqique(arr){
  let arr1 = []
  for(let i = 0;i<arr.length;i++){
    for(var j = 0;j<arr1.length;j++){
      if(arr[i] === arr1[j]) {
        break;
      }
    }
    if(j === arr1.length) {
      arr1.push(arr[i])
    }
  }
  return arr1
}
```

## 2. indexOf

```js
var array = [1,'1',new String('1'),NaN,{a:1},{a:2},null,undefined,2,{a:1},undefined,new String('1'),NaN,,null,1,'1']

function unqique(arr){
  let arr1 = []
  for(let i = 0; i<arr.length; i++){
    if(arr1.indexOf(arr[i]) === -1) {
      arr1.push(arr[i])
    }
  }
  return arr1
}
```

## 3. sort

> sort不合适，有些类型在不同位置出现无法排序
```js
var array = [1,'1',new String('1'),NaN,{a:1},{a:2},null,undefined,2,{a:1},undefined,new String('1'),NaN,,null,1,'1']

function unqique(arr){
  let arr1 = []
  let arr2 = [...arr].sort()
  for(let i = 0;i<arr2.length;i++){
    if(!i || arr2[i] !== arr2[i-1]) {
      arr1.push(arr2[i])
    }
  }
  return arr1
}
```

## 4. filter + indexOf

```js

var array = [1,'1',new String('1'),NaN,{a:1},{a:2},null,undefined,2,{a:1},undefined,new String('1'),NaN,,null,1,'1']

function unqique(arr){
  let arr1 = []
  arr.filter((item,index) => {
    return arr1.indexOf(item) === -1&&arr1.push(item)
  })
  return arr1
}
```

## 5. filter + sort

## 6. object 键值对

```js
var array = [1,'1',new String('1'),NaN,{a:1},{a:2},null,undefined,2,{a:1},undefined,new String('1'),NaN,,null,1,'1']

function unqique(arr){
  let obj = {}
  return array.filter((item,index) => {
    return obj[typeof item + JSON.stringify(item)]?false:obj[typeof item + JSON.stringify(item)] = true
  })
}
```

## 7. set

```js
var array = [1,'1',new String('1'),NaN,{a:1},{a:2},null,undefined,2,{a:1},undefined,new String('1'),NaN,,null,1,'1']

function unqique(arr){
  return [...new Set(array)]
}
```

# 四、类型

## 应用场景： 

- 单选、多选 -- 判断传入数据的类型，Array多选，Object、Number、String。。。单选
- 函数接收参数需要检验数据类型

|原始类型|子类型|备注|
|---|---|--|
|undefined|||
|Null|||
|Number|||
||Infinity||
||NaN||
|String|||
|Boolean|||
|Symbol||es6|
|Object|Array||
||Date||
||Function||
||RegExp||
||Error||
||NaN||
||Math||
||JSON||
||...||

### 四种判断类型的方法:

1. typeof
2. constructor
3. instanceof
4. Object.prototype.toString

**typeof**

```js
function type(i) {
  if(i == null) {// ie6中，typeof null === 'object',toString = [object object]
    return i + ''
  }
  return typeof i !== 'object'?typeof i:Object.prototype.toString.call(i).toLowerCase().replace('[object ','').replace(']','')
}


Object.prototype.whatType = function (){
  if(this === null) return null + ''
  return typeof this !== 'object'?typeof this
}
```

**instanceof**

> `instanceof` 运算符用于检测构造函数的 `prototype` 属性是否出现在某个实例对象的原型链上。

```js
function Car(make, model, year) {
  this.make = make;
  this.model = model;
  this.year = year;
}
const auto = new Car('Honda', 'Accord', 1998);

console.log(auto instanceof Car);
// expected output: true

console.log(auto instanceof Object);
// expected output: true
```

**Object.prototype.toString**

```js
Object.prototype.toString.call()
```

# 五、 深拷贝--shallowCopy、deepCopy

> 注： symbol类型的key就无法拷贝

## 应用场景： 

- 很多实际场景，避免原始数据受到更改

```js
function shallowCopy(obj){
  if(typeof obj !== 'object') return
  let newObj = obj instanceof Array?[]:{}
  for(var key in obj) {
    if(obj.hasOwnProperty(key)) {
      if(typeof obj[key] === 'object' && obj[key] !== null) {
        newObj[key] = arguments.callee(obj[key])
      } else {
        newObj[key] = obj[key]
      }
    }
  }
  return newObj
}
```

# 六、 数组扁平--flatten

## 应用场景： 

-  需要把多重数组摊平在进行处理

- 单选、多选组件-->接收的参数可能是数组，也可能是对象，统一处理成数组对象`[{name:'单选'}]`,

```js
var array = [1,2,3,[21,22,23,[31,32,33,[41,42,43]]]]

// reduce
function flatten(arr){
  return arr.reduce((total,next) => {
    return [].concat(total,Array.isArray(next)?flatten(next):next) 
  },[])
}

// while
function flatten(arr){
  while(arr.some((item) => Array.isArray(item))){
    arr = [].concat(...arr)
  }
  return arr
}

// 浅扁平化
var flatten =  Function.apply.bind([].concat, [])
```


# 七、 插入sortedIndex

```js
var array = [
  {
    name:'ccc1',
    id:1,
  },
  {
    name:'ccc2',
    id:2,
  },
  {
    name:'ccc3',
    id:3
  },
  {
    name:'ccc5',
    id:5
  },
  {
    name:'ccc6',
    id:6
  },
]

function sortedIndex(arr,obj,iteratee,context){
  let start = 0
  let end = arr.length
  while(start<end){
    let mid = Math.floor((end + start)/2)
    console.log(mid)
    if(iteratee(obj) < iteratee(arr[mid])){
      end = mid +1
    } else {
      start = mid
    }
  }
  return start
}

sortedIndex(array,{name:'ccc4',id:4},(item)=>{
  return item.name
})
```

# 八、indexOf lastIndexOf fromIndex


```js
var array = [1,3,4,2,3,13,12343,212,35]

function initIndexOf(dir){
  return function (arr,item,start) {
    for(
      let i = (dir<0?arr.length -1:0);
      0<=i && i<=arr.length - 1;
      i+=dir
    ){
      if(arr[i] === item) {
        return i
      }
    }
    return -1
  }
}

var indexOf = initIndexOf(1)
var lastIndexOf = initIndexOf(-1)

indexOf(array,3)
lastIndexOf(array,3)

function initIndexOf(dir){
  var a = 0
  return function (arr,item,start) {
    let i = dir<0?arr.length -1:0
    if(typeof start === 'number') { // NaN不需要处理,NaN的比较结果都是false，会直接跳出循环，返回-1
      i = start<0 ? arr.length + start : start
    }
    for(
      ;
      0<=i && i<=arr.length - 1;
      i+=dir
    ){
      a+=1
      if(arr[i] === item) {
        a = 0
        return i
      }
    }
    return -1
  }
}
var indexOf = initIndexOf(1)
var lastIndexOf = initIndexOf(-1)

fromIndex(array,3)
```

# 九、相等 ===

## 1. -0 与 +0

目标： `-0 === +0`

实际： `-0 !== +0`


```js
// 表现1
console.log(+0 === -0); // true

// 表现2
(-0).toString() // '0'
(+0).toString() // '0'

// 表现3
-0 < +0 // false
+0 < -0 // false

// 即便如此，两者依然是不同的：

1 / +0 // Infinity
1 / -0 // -Infinity

1 / +0 === 1 / -0 // false
```

**解释：**

这是因为 JavaScript 采用了IEEE_754 浮点数表示法(几乎所有现代编程语言所采用)，这是一种二进制表示法，按照这个标准，最高位是符号位(0 代表正，1 代表负)，剩下的用于表示大小。而对于零这个边界值 ，1000(-0) 和 0000(0)都是表示 0 ，这才有了正负零的区别。

**怎么得到-0**

```js
Math.round(-0.1) // -0
```

**eq**

```js
function eq(a, b){
    if (a === b) return a !== 0 || 1 / a === 1 / b;
    return false;
}

console.log(eq(0, 0)) // true
console.log(eq(0, -0)) // false
```

## 2. NaN

目标： `NaN === NaN`

实际： `NaN !== NaN`



# 十、柯里化

哇，这个就老有意思了喂

## 1.举个例子：

```js
function add(a, b) {
    return a + b;
}

// 执行 add 函数，一次传入两个参数即可
add(1, 2) // 3

// 假设有一个 curry 函数可以做到柯里化
var addCurry = curry(add);
addCurry(1)(2) // 3
```

## 2. 用途

参数复用。本质上是降低通用性，提高适用性。

**来两版**

> `[function_a].length === function_a_arguments.length`函数`a`的长度，等于函数`a`形式参数的长度，并不一定是函数`a`内部`arguments.length `

### 第一版

```js
function sub_curry (fn) {
  // 拿到参数
  let args = [].slice.call(arguments,1)
  return function () {
    return fn.apply(this,[].concat(args,...arguments)) // 传入多层参数
  }
}

function curry(fn,length){
  length = length || fn.length
  let _curry = arguments.callee
  return function (){
    if(arguments.length<length) {
      return _curry(sub_curry(fn,...arguments),length-arguments.length)
    } else {
      return fn.apply(this,[...arguments])
    }
  }
}
```

# 十一、惰性函数



## 应用场景： 

- 我们现在需要写一个 foo 函数，这个函数返回首次调用时的 Date 对象，注意是首次。

## 1. 一般处理

```js
var t
function foo(){
  if(!t) {
    t = new Date()
  }
  return t
}
```

## 2. 闭包

```js
var foo = (function(){
  var t  = new Date()
  return function (){
    return t
  }
})()
```

## 3. 函数对象

```js
function foo(){
  if(!foo.t) {
    foo.t = new Date()
  }
  return foo.t
}
```

## 4. 惰性函数
```js
function foo(){
  var t = new Date()
  foo = function (){
    return t
  }
  return foo()
}
```

# 十二、函数组合


## 应用场景： 

- 很常用，真的，实际开发，多个函数，处理上一个函数的执行结果

```js
function a (x) {
  return x + ' yes'
}
function b (x) {
  return 'hello ' + x
}
function c (x) {
  return x.toUpperCase()
}
var result = c(a(b('ccc'))) // 'HELLO CCC YES'
```
目标

```js
var foo = compose(c,a,b)
foo('ccc')// 'HELLO CCC YES'
```

```js
function compose (){
  let args = arguments
  let length = arguments.length
  return function (){
    let index = length
    var last
    while(index--){
      last =  args[index].apply(this,last?[last]:arguments)
    }
    return last
  }
}
```

## es6

```js
const compose = (...fns) =>  
  (arg) =>  
    fns.reduce(  
      (composed, f) => f(compose),  
      arg  
    )  
```


# 特别补充

## 1. void 0

由于js中， `undefined` ，并不是保留字段，所以一般情况下，判断是否是 `undefined` 使用 `void 0`
```js
void 0 === undefined
```

**总结**

1. 通过采用void 0取undefined比采用字面上的undefined更靠谱更安全，应该优先采用void 0这种方式。
2. 填充<a>的href确保点击时不会产生页面跳转; 填充<image>的src，确保不会向服务器发出垃圾请求。