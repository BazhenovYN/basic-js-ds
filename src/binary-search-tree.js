const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {
  constructor() {
    this.head = null;
  }

  root() {
    return this.head;
  }

  add(data) {
    this.head = addNewNode(this.head, data);

    function addNewNode(node, data) {
      if (!node) {
        return new Node(data);
      }

      if (node.data === data) {
        return node;
      }

      if (data < node.data) {
        node.left = addNewNode(node.left, data);
      } else {
        node.right = addNewNode(node.right, data);
      }

      return node;
    }
  }

  has(data) {
    return search(this.head, data);

    function search(node, data) {
      if (!node) {
        return false;
      }

      if (node.data === data) {
        return true;
      }

      return data < node.data ?
        search(node.left, data) :
        search(node.right, data);
    }
  }

  find(data) {
    return search(this.head, data);

    function search(node, data) {
      if (!node) {
        return null;
      }

      if (node.data === data) {
        return node;
      }

      return data < node.data ?
        search(node.left, data) :
        search(node.right, data);
    }
  }

  remove(data) {
    return this.head = removeNode(this.head, data);

    function removeNode(node, data) {
      if (!node) {
        return null;
      }

      if (data < node.data) {
        node.left = removeNode(node.left, data);
        return node;
      } else if (data > node.data) {
        node.right = removeNode(node.right, data);
        return node;
      } else {

        if (!node.left && !node.right) {
          return null;
        }

        if (!node.left) {
          return node.right;
        }

        if (!node.right) {
          return node.left;
        }

        let minFromRight = node.right;
        while (minFromRight.left) {
          minFromRight = minFromRight.left;
        }
        node.data = minFromRight.data;
        node.right = removeNode(node.right, node.data)

        return node;
      }
    }
  }

  min() {
    if (!this.head) {
      return null;
    }

    let node = this.head;
    while (node.left) {
      node = node.left;
    }
    return node.data;
  }

  max() {
    if (!this.head) {
      return null;
    }

    let node = this.head;
    while (node.right) {
      node = node.right;
    }
    return node.data;
  }
}

module.exports = {
  BinarySearchTree
};