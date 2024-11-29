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
      // push the current node's value to the visited array
      visited.push(node.val);
      // recursively call the function on the left subtree
      traverse(node.left);
      // recursively call the function on the right subtree
      traverse(node.right);
    }
    // call the helper function on the root node
    traverse(this.root);
    // return the visited array
    return visited;
  }

  /** dfsInOrder(): Traverse the array using in-order DFS.
   * Return an array of visited nodes. */

  dfsInOrder() {
    // create an array to store the visited nodes
    let visited = [];
    // helper function to traverse the tree recursively
    function traverse(node) {
      // if the current node is null, return
      if (node === null) return;
      // recursively call the function on the left subtree
      traverse(node.left);
      // push the current node's value to the visited array
      visited.push(node.val);
      // recursively call the function on the right subtree
      traverse(node.right);
    }
    // call the helper function on the root node
    traverse(this.root);
    // return the visited array
    return visited;
  }

  /** dfsPostOrder(): Traverse the array using post-order DFS.
   * Return an array of visited nodes. */

  dfsPostOrder() {
    // create an array to store the visited nodes
    let visited = [];
    // helper function to traverse the tree recursively
    function traverse(node) {
      // if the current node is null, return
      if (node === null) return;
      // recursively call the function on the left subtree
      traverse(node.left);
      // recursively call the function on the right subtree
      traverse(node.right);
      // push the current node's value to the visited array
      visited.push(node.val);
    }
    // call the helper function on the root node
    traverse(this.root);
    // return the visited array
    return visited;
  }

  /** bfs(): Traverse the array using BFS.
   * Return an array of visited nodes. */

  bfs() {
    // create an array to store the visited nodes and a queue to keep track of the nodes to visit
    let visited = [];
    let queue = [];

    // if the root is not null, add the root to the queue
    if (this.root !== null) queue.push(this.root);
    // while there are nodes in the queue, traverse the tree
    while (queue.length) {
      // remove the first node from the queue and add it to the visited array
      let current = queue.shift();
      visited.push(current.val);
      // if there is a left child, add it to the queue
      if (current.left !== null) queue.push(current.left);
      // if there is a right child, add it to the queue
      if (current.right !== null) queue.push(current.right);
    }
    // return the visited array
    return visited;
  }

  /** Further Study!
   * remove(val): Removes a node in the BST with the value val.
   * Returns the removed node. */

  remove(val) {
    // if tree is empty, return undefined
    if (this.root === null) return undefined;

    // helper function to remove the node
    function removeNode(node, val) {
      // if the current node is null, return null
      if (node === null) return null;
      // if the value is less than the current node's value, recursively call the function on the left subtree.
      if (val < node.val) {
        // set the left child to the result of the recursive call
        node.left = removeNode(node.left, val);
        return node;
      } else if (val > node.val) {
        node.right = removeNode(node.right, val);
        return node;
      } else {
        // node with no children
        if (node.left === null && node.right === null) {
          return null;
        }
        // node with only one child
        if (node.left === null) {
          return node.right;
        }
        if (node.right === null) {
          return node.left;
        }
        // node with two children
        // find the minimum value in the right subtree
        // set the current node's value to the minimum value
        // recursively call the function on the right subtree to remove the duplicate node
        let tempNode = findMin(node.right);
        node.val = tempNode.val;
        node.right = removeNode(node.right, tempNode.val);
        return node;
      }
    }
    // helper function to find the min value in the right subtree
    function findMin(node) {
      while (node.left !== null) {
        node = node.left;
      }
      return node;
    }
    // call the helper function on the root node
    this.root = removeNode(this.root, val);
    // return the tree
    return this;
  }

  /** Further Study!
   * isBalanced(): Returns true if the BST is balanced, false otherwise. */

  isBalanced() {}

  /** Further Study!
   * findSecondHighest(): Find the second highest value in the BST, if it exists.
   * Otherwise return undefined. */

  findSecondHighest() {}

  /** Further Study!
   * dfsInOrderIteratively(); Write another version of the dfsInOrder function but do not use recursion.
   * This can be challenging.
   * Think about what the computer is doing for you when you make a recursive call.
   */

  dfsInOrderIteratively() {}
}

module.exports = BinarySearchTree;
