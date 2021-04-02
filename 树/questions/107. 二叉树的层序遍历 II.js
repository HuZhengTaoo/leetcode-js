var levelOrderBottom = function(root) {
    if(!root){return []}
    let res = []
    let queue = [root]
    while(queue.length){
        let loft =[]
        let len = queue.length
        for(var i=0;i<len;i++){
            let node = queue.shift()
            if(node.left){
                queue.push(node.left)
            }
            if(node.right){
                queue.push(node.right)
            }
            if(node.val !== undefined){
                loft.push(node.val)
            }
        }
        res.unshift(loft)
    }
    return res
};