class ListNode {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  constructor(head = null) {
    this.head = head;
  }
}

let node1 = new ListNode(1);
let node2 = new ListNode(2);
let node3 = new ListNode(6);
let node4 = new ListNode(3);
let node5 = new ListNode(4);
let node6 = new ListNode(5);
let node7 = new ListNode(6);
node1.next = node2;
node2.next = node3;
node3.next = node4;
node4.next = node5;
node5.next = node6;
node6.next = node7;

let list = new LinkedList(node1);

function removeNode(list, value) {
  var next = list.head,
    prev;

  if (next && next.data === value) {
    return next.next;
  }

  while (next && next.data !== value) {
    (prev = next), (next = next.next);
    console.log("p:", prev);
    console.log("p:", next);
  }

  if (prev && next.data === value) {
    prev.next = next.next;
  }
  return list;
}

list = removeNode(list, 6);
console.log(list);
