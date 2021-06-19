let isBalancedParenthesis = (str) => {
  return !str.split("").reduce((uptoPrevChar, thisChar) => {
    if (thisChar === "(" || thisChar === "{" || thisChar === "[") {
      return ++uptoPrevChar;
    } else if (thisChar === ")" || thisChar === "}" || thisChar === "]") {
      return --uptoPrevChar;
    }

    return uptoPrevChar;
  }, 0);
};
console.log(isBalancedParenthesis("(((((((()"));

var isValid = function (s) {
  const stack = [];
  for (i = 0; i < s.length; i++) {
    let curChar = s[i];

    switch (curChar) {
      case "(":
        stack.push(")");
        break;
      case "[":
        stack.push("]");
        break;
      case "{":
        stack.push("}");
        break;
      default:
        topElement = stack.pop();
        if (curChar !== topElement) return false;
    }
  }
  return stack.length === 0 ? "yes" : "falsee";
};
console.log(isValid1s("([]{})"));
