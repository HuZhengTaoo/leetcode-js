const tree = {
  val: 'a',
  children: [
    {
      val: 'b',
      children: [
        {
          val: 'd',
          children: []
        },
        {
          val: 'e',
          children: []
        }
      ]
    },
    {
      val: 'c',
      children: [
        {
          val: 'f',
          children: []
        }
      ]
    },
  ]
}

const bfs = (root) => {
  let queue = [root]
  if (root === null) {
    return  
  }
  while (queue.length>0) {
    const n = queue.shift()
    console.log(n.val)
    n.children.forEach(child => {
      queue.push(child)
    })

  }
}

bfs(tree)