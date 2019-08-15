### 由于js没有相应的分装类来处理浮点数运算，像加减乘除（四则运算）这种直接计算会导致运算精度丢失
  
**例如：**

```js
0.3 + 0.6
//0.8999999999999999
0.3 - 0.2
//0.09999999999999998
0.3 * 1.5
//0.44999999999999996
0.3 / 0.1
//2.9999999999999996
```

这种情况，无疑，直接四舍五入是可以解决展示问题的

但是原生toFixed有bug，处理某些小数会出现计算错误，

**例如:**
```js
1.335.toFixed(2)
//"1.33"
```

### 解决思路、

  手写四舍五入过滤器，处理精度丢失的数值

  升幂-->加0.5-->向下取整-->降幂

> 下面是一个全局过滤器——vue

```js
<span>{{1.335 | toFixed(2)}}</span>

/**
 * @param {value} 需要处理的数字
 * @param {accuracy} 精度
 */
Vue.filter('toFixed', (value, accuracy = 2) => Math.floor(value * (10 ** accuracy) + 0.5) / (10 ** accuracy))
```

> 下面是一个普通函数

```js
function toFixed(value,accuracy = 2){
  return Math.floor(value * (10 ** accuracy) + 0.5) / (10 ** accuracy)
}

toFixed(1.335,2)
```
