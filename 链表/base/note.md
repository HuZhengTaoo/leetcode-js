- 链表数据结构
- 向链表添加元素
- 从链表移除元素
- 使用LinkedList类
- 双向链表
- 循环链表
- 排序链表
- 通过链表实现栈

### 单向链表

```js
function LinkedList() {
  let Node = function (element) {
    this.element = element;
    this.next = null;
  }
  let length = 0;
  let head = null;
  this.append = function (element) { }
  this.insert = function (position, element) { }
  this.removeAt = function (position) { }
  this.indexOf = function (element) { }
  this.isEmpty = function () { }
  this.size = function () { }
  this.getHead = function () { }
  this.toString = function () { }
  this.print = function () { }
}
```

### 双向链表

```js
function DoublyLinkedList(){
  let Node = function(element){
    this.element = element;
    this.next = null;
    this.prev = null
  }
  let length = 0
  let head = null
  let tail = null
  this.insertAt = function(element,position){

  }
  this.removeAt = function(elementposition){

  }
}

```