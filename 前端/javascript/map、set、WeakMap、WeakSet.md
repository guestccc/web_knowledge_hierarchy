# set

```js
var s = new Set([2,3])
s.add(1)
s.has(1)
// true

[...s]
// [1,2,3]

s.entries()
// [[Entries]]
// 0: {1 => 1}
// 1: {2 => 2}
// 2: {3 => 3}

Object.fromEntries(s.entries())
// {1:1,2:2,3:3}

s.entries()
```

## 并集，交集，差集

```js
var a = [1,2,3]
var b = [4,2,1]

console.log([...new Set(a,b)]) // 并集
console.log(b.filter(item => new Set(a).has(item))) // 交集
console.log(new Set([].concat(a,b)).filter(item => !new Set(b.filter(item => new Set(a).has(item))).has(item))) // 差集
```

# WeakSet
# map
# WeakMap