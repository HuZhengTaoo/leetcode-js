var json = {
  a: {
    b: { c: 1 }
  },
  d: [1, 2,
    {
    e:99
    }
  ]
}

var dfs = (json)=>{
  Object.keys(json).forEach((val) => {
    if (typeof json[val] === 'string'|| typeof json[val] === 'number') { return }
    console.log(json[val])
    dfs(json[val])
  })
}
dfs(json)