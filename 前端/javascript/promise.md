单线程

异步

回调地狱

promise(async/awiat)--保持代码整洁

async/awiat generator的语法糖，对generator的改进，其实就是内置了执行器（xx.next()）

```js
function a (back,name){
  back(`${name}：你好！`)
}

a(
  (data)=>{
    console.log(`完成后执行，结果为---${data}`)
  },
  'ccc'
)
```

```js
function a(name){
  return new Promise((res,rej)=>{
    res(`${name}：你好！`)
  })
}

a('ccc')
  .then((data)=>{
    console.log(`完成后执行，结果为---${data}`)
  })
```

是一种异步编程的解决方案

传统的异步编程，大量的回调函数层层嵌套（回调地狱），严重的影响了代码的可阅读性

promis对象，把异步操作通过同步操作表达出来，使控制异步操作更容易