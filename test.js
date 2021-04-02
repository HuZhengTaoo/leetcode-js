const treeData = [
  {
    title: 'Node1',
    value: '0-0',
    children: [
      {
        title: 'Child Node1',
        value: '0-0-1',
        children: [
          {
            title: 'Child Child Node1',
            value: '0-0-0-1',
          }
        ]
      },
      {
        title: 'Child Node2',
        value: '0-0-2',
      },
    ],
  },
  {
    title: 'Node2',
    value: '0-1',
  },
];

var renderDomTree = (data) => {
  let html = ''
  function dfs(data, dom) {
    if (!data.children) {
      return
    }
    data.children.forEach((val) => {
      dfs(val,dom)
    })
  }
  data.forEach((val) => {
    if (!val) { return }
    html += `<div id=${val.title}></div>`
    dfs(val,html)
  })
  
}

renderDomTree(treeData)