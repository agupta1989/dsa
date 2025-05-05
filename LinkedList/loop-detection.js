/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

function ListNode(val) {
  this.val = val;
  this.next = null;
}

var hasCycle = function(head) {
  const map = {}

  while (head.next !== null) {
    if (map[head.val]) {
      return true;
    } else {
      map[head.val] = head;
    }
    head = head.next;
  }


};
