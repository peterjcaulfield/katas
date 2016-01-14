/**
 *
 *
 */

function linkedList(array) {

  this.length = 0;
  this.first = this.last = null;

  array.each(function(value) {

    this.push(new node(value)); 

  }.bind(this));

}

linkedList.prototype = {
  constructor: linkedList,
  /**
   * add new node to the list
   */
  push: function(node) {

    if (this.length) {
      this.insert(node);
    }  

    this.first = this.last = node;

    this.length = 1;
  },
  /**
   * Insert node after existing end node
   */
  insert: function(node) {

    node.prev = this.last;
    this.last.next = node;
    this.last = node;
    this.length++;

  }
} 

function node(data) {

  this.data = data;
  this.prev = this.next = null;

}

node.prototype = {
  constructor: node
}
