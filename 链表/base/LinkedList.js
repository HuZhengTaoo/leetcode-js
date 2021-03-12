function LinkedList() {
  let Node = function (element) {
    this.element = element;
    this.next = null;
  }
  let length = 0;
  let head = null;
  this.append = function (element) {
    let node = new Node(element), current
    if (head === null) {
      head = node;
    } else {
      current = head;
      while (current.next) {
       current = current.next
      }
      current.next = node
    }
    length++
  }
  this.insert = function (position, element) {
    if (position >= 0 && position <= length) {
      let node = new Node(element),
        current = head,
        previous,
        index = 0
      if (position === 0) {
        node.next = current
        head = node
      } else {
        while (index++ < position) {
          previous = current
          current = current.next
        }
        node.next = current
        previous.next = node
      }
      length++
      return true
    } else {
      return false
    }
  }
  this.removeAt = function (position) {
    if (position >= 0 || position < length) {
      let current = head,
        prev,
        index=0
      if (position === 0) {
        head = head.next
      }
      while (index++ < position) {
        prev = current
        current = current.next
      }
      prev.next = current.next
      length--
      return true
    } else {
      return false
    }
  }
  this.indexOf = function (element) {
    let current = head,
      index = -1,
      count = 0
    while (current) {
      if (current.element === element) {
        index = count
      } else {
        count++
      }
    }
    return index
  }
  this.isEmpty = function () {
    return length === 0
  }
  this.size = function () {
    return length
  }
  this.getHead = function () {
    return head
   }
  this.toString = function () {
    let string = '',
      current = head
    while (head) {
      string += `${head.element} ${head.next ? '\n' : ''}`
      current = current.next
    }
    return string
  }
 
}