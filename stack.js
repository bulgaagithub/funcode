// Stack
/**
 * Stack is a data structure
 * LIFO = Last In, First Out
 * pop, push
 */

function Stack() {
    this.stack = [];
}

Stack.prototype.push = function(element) {
    this.stack.push(element);
}

Stack.prototype.pop = function() {
    if (!this.stack.length) throw new Exception('Array is empty');
    return this.stack.pop();
}

Stack.prototype.getAll = function() {
    return this.stack;
}

const stack = new Stack();

stack.push('Bold');
stack.push('Tulgaa');

console.log(stack.getAll());

stack.pop();
console.log(stack.getAll());

stack.push('Gerel');
stack.push('Tulgaa');
console.log(stack.getAll());
