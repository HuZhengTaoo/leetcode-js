// 案例1：斐波那契数列
//斐波那契数列的是这样一个数列：1、1、2、3、5、8、13、21、34....，
//即第一项 f(1) = 1,
//第二项 f(2) = 1....., 第 n 项目为 f(n) = f(n - 1) + f(n - 2) 。
//求第 n 项的值是多少。

function sum(n) {
  var total = 1
  var _sum = function (n) {
    if (n > 1) {
      total = total*n
      _sum(n-1)
    } else {
      return total
    }
    
  }
  _sum(n)
  return total

}

if (n < 1) { return }
n * (n - 1) * (n - 2)