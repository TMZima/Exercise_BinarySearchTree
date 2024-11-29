class Node {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

class BinarySearchTree {
  constructor(root = null) {
    this.root = root;
  }

  /** insert(val): insert a new node into the BST with value val.
   * Returns the tree. Uses iteration. */

  insert(val) {
    // create new node
    let newNode = new Node(val);
    // if no root, set new node as root
    if (this.root === null) {
      this.root = newNode;
      // return tree
      return this;
    }
    // If the root is not null, we will traverse the tree to find the correct position for the new node.
    let current = this.root;
    while (true) {
      if (val === current.val) return undefined;
      // if the value is less than the current node's value, go left, if there is no left, then insert the new node there. Otherwise, continue traversing the left subtree.
      if (val < current.val) {
        if (current.left === null) {
          current.left = newNode;
          return this;
        } else {
          current = current.left;
        }
      } else {
        // if the value is greater than the current node's value, go right, if there is no right, then insert the new node there. Otherwise, continue traversing the right subtree.
        if (current.right === null) {
          current.right = newNode;
          return this;
        } else {
          current = current.right;
        }
      }
    }
  }

  /** insertRecursively(val): insert a new node into the BST with value val.
   * Returns the tree. Uses recursion. */

  insertRecursively(val) {
    // create new node
    let newNode = new Node(val);
    // if no root, set new node as root
    if (this.root === null) {
      this.root = newNode;
      // return tree
      return this;
    }
    // helper function to traverse the tree recursively
    function insertNode(node) {
      // if the value is equal to the current node's value, return undefined because we don't want duplicates.
      if (val === node.val) return undefined;
      if (val < node.val) {
        // If the value is less than the current node's value, go left, if there is no left, then insert the new node there. Otherwise, recursively call the function on the left subtree.
        if (node.left === null) {
          node.left = newNode;
          return;
        } else {
          return insertNode(node.left);
        }
      } else {
        // If the value is greater than the current node's value, go right, if there is no right, then insert the new node there. Otherwise, recursively call the function on the right subtree.
        if (node.right === null) {
          node.right = newNode;
          return;
        } else {
          return insertNode(node.right);
        }
      }
    }
    // call the helper function on the root node
    insertNode(this.root);
    // return the tree
    return this;
  }

  /** find(val): search the tree for a node with value val.
   * return the node, if found; else undefined. Uses iteration. */

  find(val) {
    // if no root, return undefined
    if (this.root === null) return undefined;
    // set current node to root
    let current = this.root;
    // while there is a current node
    while (current) {
      // if the value is equal to the current node's value, return the current node
      if (val === current.val) return current;
      // if the value is less than the current node's value, go left, if there is no left, return undefined. Otherwise, continue traversing the left subtree.
      if (val < current.val) {
        if (current.left === null) return undefined;
        current = current.left;
      } else {
        // if the value is greater than the current node's value, go right, if there is no right, return undefined. Otherwise, continue traversing the right subtree.
        if (current.right === null) return undefined;
        current = current.right;
      }
    }
    // if the value is not found, return undefined
    return undefined;
  }

  /** findRecursively(val): search the tree for a node with value val.
   * return the node, if found; else undefined. Uses recursion. */

  findRecursively(val) {
    // if no root, return undefined
    if (this.root === null) return undefined;
    // helper function to traverse the tree recursively
    function findNode(node) {
      // if the value is equal to the current node's value, return the current node
      if (val === node.val) return node;
      // if the value is less than the current node's value, go left, if there is no left, return undefined. Otherwise, recursively call the function on the left subtree.
      if (val < node.val) {
        if (node.left === null) return undefined;
        return findNode(node.left);
      } else {
        // if the value is greater than the current node's value, go right, if there is no right, return undefined. Otherwise, recursively call the function on the right subtree.
        if (node.right === null) return undefined;
        return findNode(node.right);
      }
    }
    // call the helper function on the root node
    return findNode(this.root);
  }

  /** dfsPreOrder(): Traverse the array using pre-order DFS.
   * Return an array of visited nodes. */

  dfsPreOrder() {
    // create an array to store the visited nodes
    let visited = [];
    // helper function to traverse the tree recursively
    function traverse(node) {
      // if the current node is null, return
      if (node === null) return;
      // push the current node's value to the result array
      visited.push(node.val);
      // recursively call the function on the left subtree
      traverse(node.left);
      // recursively call the function on the right subtree
      traverse(node.right);
    }
    // call the helper function on the root node
    traverse(this.root);
    // return the result array
    return visited;
  }

  /** dfsInOrder(): Traverse the array using in-order DFS.
   * Return an array of visited nodes. */

  dfsInOrder() {}

  /** dfsPostOrder(): Traverse the array using post-order DFS.
   * Return an array of visited nodes. */

  dfsPostOrder() {}

  /** bfs(): Traverse the array using BFS.
   * Return an array of visited nodes. */

  bfs() {}

  /** Further Study!
   * remove(val): Removes a node in the BST with the value val.
   * Returns the removed node. */

  remove(val) {}

  /** Further Study!
   * isBalanced(): Returns true if the BST is balanced, false otherwise. */

  isBalanced() {}

  /** Further Study!
   * findSecondHighest(): Find the second highest value in the BST, if it exists.
   * Otherwise return undefined. */

  findSecondHighest() {}
}

module.exports = BinarySearchTree;
