/**
 *
 *
 */

function linkedList(array) {

  this.length = 0;
  this.first = this.last = null;

  //TODO: loop input and insert
}

linkedList.prototype = {
  constructor: linkedList,
  /**
   * add new node to the list
   */
  push: function(node) {
  
  },
  /**
   * Insert node after existing end node
   */
  insert: function(node) {
    
  }
} 

function node(data) {
  this.data = data;
  this.prev = this.next = null;
}

node.prototype = {
  constructor: node
}
