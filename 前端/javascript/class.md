
# 继承extends 重写super

## super

* 作为函数使用，`super()`
  - `super`为`parent.constructor`
  - 只能在子类构造函数中使用，其他地方，js引擎会报错
* 作为对象，`super`
  - 子类普通方法中，`super`指向父类原型，`parent.prototype`
  - 子类普通方法中,通过`super`调用父类的方法时，方法内部的this指向当前的子类实例。
    1. 读--`parent.prototype`
    2. 写--`this`(指向子类)
  - 静态方法中，`super`指向父类,`super`调用的父类函数的`this`,指向子类，而不是子类的实例

> 注意：类中用`static`(静态) 修饰的属性，是挂载到类上，而不是类的原型对象`class.prototype`上

## prototype原型对象、__proto__原型