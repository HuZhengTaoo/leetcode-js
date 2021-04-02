function BinarySearchTree() {
  var Node = function (val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }

  var root = null
  this.insert = function (key) {
    var newNode = new Node(key)
    if (root === null) {
      root = newNode;
    } else {
      insertNode(root,newNode);
    }
    function insertNode(node,newNode) {
      if (node.val > newNode.val) {
        if (node.left === null) {
          node.left = newNode
        } else {
          insertNode(node.left, newNode);
        }
      } else {
        if (node.right === null) {
          node.right = newNode
        } else {
          insertNode(node.right, newNode);
        }
      }
    }
  }
  this.search = function (key){}
  this.inOrderTraverse = function (callback) {
    inOrderTraverseNode(root, callback);
    inOrderTraverseNode = function (node, callback) {
      if (node !== null) {
        inOrderTraverseNode(node.left, callback);
        callback(node.val);
        inOrderTraverseNode(node.right, callback);
      }
      
    }
  }
  this.preOrderTraverse = function(){}
  this.postOrderTraverse = function(){}
  this.min = function(){}
  this.max = function(){}
  this.remove = function(key){}
}