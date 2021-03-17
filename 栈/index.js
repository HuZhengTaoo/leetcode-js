function Stack(){
  let item =[]
  this.push = function (element) {
    item.push(element)
  }
  this.pop = function () {
    item.pop(element)
  }
  this.peek = function () {
    return item[item.lenght -1]
  }
  this.isEmpty = function () {
    return item.length === 0
  }
  this.clear = function () {
    item = []
  }
  this.size = function () {
    return item.length
  }
}

function flatten(nestedList) {
  let single = []
 
  function fn(arr) {
    for (var i = 0; i < arr.length; i++) {
      if (arr[i] instanceof Array ) {
        single.push(arr[i])
      } else {
        fn(arr[i])
      }
    }
  }
  fn(nestedList)
  console.log(single)
  return single
}