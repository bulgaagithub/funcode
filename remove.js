var removeElements = function (head, val) {
  let index = head.indexOf(val);
  while (index > -1) {
    head.splice(index, 1);
    index = head.indexOf(val);
  }
  return head;
};
