# 有趣的 JavaScript 之作用域与闭包

## 1.为什么有趣

因为它简单又复杂，JavaScript 是一门可以先用后学的语言，用起来简单，但是学精很难，如果只是浅尝辄止，就会对比如`false == []`结果为`true`这种结果感到困惑

## 2.理解作用域

作用域好比围住变量的一个框框，它限制了变量的作用范围

### 2.1 静态作用域（词法作用域）和动态作用域

```javascript
var value = 1;

function foo() {
  console.log(value);
}

function bar() {
  var value = 2;
  foo();
}

bar();
```

```bash
value=1
function foo () {
  echo $value;
}
function bar () {
  local value=2;
  foo;
}
bar
```

总结：在词法作用域里面，函数的作用域再函数定义的时候确定

两个有趣的例子

```javascript
var scope = "global scope";
function checkscope() {
  var scope = "local scope";
  function f() {
    return scope;
  }
  return f();
}
checkscope();
```

```javascript
var scope = "global scope";
function checkscope() {
  var scope = "local scope";
  function f() {
    return scope;
  }
  return f;
}
checkscope()();
```

### 2.2 作用域嵌套

全局作用域

## 3.函数作用域和块作用域

### 3.1 立即执行表达式

### 3.2 为什么会有块作用域，怎么形成？

ES3：try...catch

ES6+：let/const

## 4.闭包

### 4.1 闭包无处不在

作用域嵌套的产物，当前作用域会保持对父作用域的引用

### 4.2 模块化手段

## 5.神奇的 this

### 5.1 绑定规则

看四段代码

```javascript
function foo() {
  console.log(this.a);
}
var a = 2;
foo();
```

```javascript
function foo() {
  console.log(this.a);
}
var obj = {
  a: 3,
  foo,
};
var a = 2;
obj.foo();
```

```javascript
function foo() {
  console.log(this.a);
}
var obj = {
  a: 3,
  foo,
};
var a = 2;
foo.call(obj);
```

```javascript
function foo(a) {
  this.a = a;
}
var bar = new foo();
bar.a;
```

优先级呢？

### 5.2 例外的箭头函数

箭头函数的 this 指向定义所在的词法作用域，不会被修改