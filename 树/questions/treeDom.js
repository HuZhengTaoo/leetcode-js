const treeData = [
  {
    title: 'Node1',
    value: '0-0',
    children: [
      {
        title: 'Child Node1',
        value: '0-0-1',
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
  let html = document.getElementById('node-tree')
  function dfs(data, dom) {
    html.appendChild(`<div title=${val.title}>${val.value}</div>`)
    if (!data.children) return
    let tempDom = ''
    data.children.forEach((val) => {
      tempDom+=`<div title=${val.title}>${val.value}</div>`
      dfs(val,dom)
    })
  }
  data.forEach((val,html) => {
    if (!val) { return }
    html.appendChild(`<div title=${val.title}>${val.value}</div>`)
    dfs(val,html)
  })
  
}
renderDomTree(treeData)