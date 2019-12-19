function a (){
  var a1 = 1
  function b(){
    var b1 = 2
    console.log(a1)
  }
  return b()
}

a()

// 作用域链
a [[scope]] [aContext.AO,globalContext.VO]
b [[scope]] [bContext.AO,aContext.AO,globalContext.VO]

// 执行栈

ecStock.push(globalContext)
ecStock.push(aContext)
ecStock.push(bContext)
ecStock.pop()
ecStock.pop()
ecStock.pop()





function a (){
  var a1 = 1
  function b(){
    var b1 = 2
    console.log(a1)
  }
  return b
}

a()()

// 作用域链
a [[scope]] [aContext.AO,globalContext.VO]
b [[scope]] [bContext.AO,aContext.AO,globalContext.VO]


// 执行栈

ecStock.push(globalContext)
ecStock.push(aContext)
ecStock.pop()
ecStock.push(bContext)
ecStock.pop()
ecStock.pop()




1. 

a.[[scope]] = [globalContext.VO]

2.

ecStock.push(aContext)

ecStock:[
  globalContext,
  aContext:{

  }
]
3.
ecStock:[
  globalContext,
  aContext:{
    scope:[globalContext.VO]
  }
]

4. 
ecStock:[
  globalContext,
  aContext:{
    AO:{
      agruments:{
        length:0
      },
      a1:undefined,
    }
    scope:[globalContext.VO]
  }
]
5.
ecStock:[
  globalContext,
  aContext:{
    AO:{
      agruments:{
        length:0
      },
      a1:undefined,
    }
    scope:[aContext.AO,globalContext.VO]
  }
]
6.
ecStock:[
  globalContext,
  aContext:{
    AO:{
      agruments:{
        length:0
      },
      a1:1,
    }
    scope:[aContext.AO,globalContext.VO]
  }
]
7.
b.[[scope]] = [aContext.AO,globalContext.VO]

8.

ecStock.push(bContext)


ecStock:[
  globalContext,
  aContext:{
    AO:{
      agruments:{
        length:0
      },
      a1:1,
    }
    scope:[aContext.AO,globalContext.VO]
  },
  bContext:{

  }
]

9.

ecStock:[
  globalContext,
  aContext:{
    AO:{
      agruments:{
        length:0
      },
      a1:1,
    }
    scope:[aContext.AO,globalContext.VO]
  },
  bContext:{
    scope:[aContext.AO,globalContext.VO]
  }
]

10.

ecStock:[
  globalContext,
  aContext:{
    AO:{
      agruments:{
        length:0
      },
      a1:1,
    }
    scope:[aContext.AO,globalContext.VO]
  },
  bContext:{
    AO:{
      agruments:{
        length:0
      },
      b1:undefined,
    }
    scope:[aContext.AO,globalContext.VO]
  }
]

11.

ecStock:[
  globalContext,
  aContext:{
    AO:{
      agruments:{
        length:0
      },
      a1:1,
    }
    scope:[aContext.AO,globalContext.VO]
  },
  bContext:{
    AO:{
      agruments:{
        length:0
      },
      b1:undefined,
    }
    scope:[bContext.AO,aContext.AO,globalContext.VO]
  }
]

12.

ecStock:[
  globalContext,
  aContext:{
    AO:{
      agruments:{
        length:0
      },
      a1:1,
    }
    scope:[aContext.AO,globalContext.VO]
  },
  bContext:{
    AO:{
      agruments:{
        length:0
      },
      b1:2,
    }
    scope:[bContext.AO,aContext.AO,globalContext.VO]
  }
]

13
ecStock.pop()
14
ecStock.pop()