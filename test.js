function removeNode(list, value) {
  var node = list,
    last;
  if (list.length === 0) {
    console.log("List is already empty");
    return;
  }
  // while (node) {
  //   if (node.value !== value) {
  //     node = node.next;
  //     last = node;
  //   } else {
  //     if (last) {
  //       last = node.next;
  //     }
  //   }
  // }
  return list;
}

var list = {
  value: 7,
  next: {
    value: 7,
    next: {
      value: 7,
      next: {
        value: 7,
        next: {
          value: 5,
          next: {
            value: 7,
            next: { value: 7, next: { value: 7, next: null } },
          },
        },
      },
    },
  },
};

list = removeNode(list, 7);
console.log(list);
