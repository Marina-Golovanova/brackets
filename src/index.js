module.exports = function check(str, bracketsConfig) {
  debugger;
  const stack = [];

  for (let i = 0; i < str.length; i++) {
    const added = bracketOpen(stack, bracketsConfig, str[i])

    if (!added) {
      if (stack[stack.length - 1]?.closing == str[i]) {
        stack.pop();
      } else {
        return false;
      }
    }
  }
  return stack.length == 0 ? true : false
}

function bracketOpen(stack, bracketsConfig, el) {
  for (let j = 0; j < bracketsConfig.length; j++) {
    if (el == bracketsConfig[j][0]) {
      if (bracketsConfig[j][1] == bracketsConfig[j][0]) {
        if (stack.length && stack[stack.length - 1].closing == el) {
          return false;
        }
      }
      stack.push({
        opening: el,
        closing: bracketsConfig[j][1]
      })
      return true;
    }
  }
  return false;
}

