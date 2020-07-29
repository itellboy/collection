# 二叉树遍历

## 前序遍历

```javascript
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var preorderTraversal = function(root) {
  let res = []
  dfs(root, res)
  return res
};


function dfs(root, res){
  if(!root) {
    return
  }
  res.push(root.val)

  if(root.left){
    dfs(root.left, res)
  }
  if(root.right){
    dfs(root.right,res)
  }
}
```

## 中序遍历

```javascript
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var inorderTraversal = function(root) {
  let res = []
  dfs(root, res)
  return res
};

function dfs(root, res){
  if(!root) {
    return
  }

  if(root.left){
    dfs(root.left, res)
  }
  res.push(root.val)
  if(root.right){
    dfs(root.right,res)
  }
}
```

## 后序遍历

```javascript
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var postorderTraversal = function(root) {
  let res = []
  dfs(root, res)
  return res
};

function dfs(root, res){
  if(!root) {
    return
  }
  if(root.left){
    dfs(root.left, res)
  }
  if(root.right){
    dfs(root.right,res)
  }
  res.push(root.val)

}
```

## 判断平衡二叉树

```javascript
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isBalanced = function(root){
  let flag = true
  dfs(root)

  function dfs(root) {
    if(!root){
      return 0
    }

    const left = 1 + dfs(root.left)
    const right = 1 + dfs(root.right)

    if(Math.abs(left - right) > 1) {
      flag = false
    }

    return Math.max(left, right)

  }

  return flag
}
```

## 二叉树右视图

```javascript
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var rightSideView = function(root) {
  if(!root){
    return []
  }
  var arr = []
  dfs(arr, root, 0)

  return arr.map(item => item[item.length - 1])

};

function dfs(arr, node, n){
  arr[n] = arr[n] ? arr[n] : []
  arr[n].push(node.val)

  if(node.left){
    dfs(arr, node.left, n + 1)
  }
  if(node.right){
    dfs(arr, node.right, n + 1)
  }
}
```