/**
 *
 *
 */

function linkedList() {
  this.length = 0;
  this.first = this.last = null;
}

function node(data) {
  this.data = data;
  this.prev = this.next = null;
}
