/* exported maxValue */

function maxValue(stack) {
  if (stack.peek() === undefined) {
    return -Infinity;
  }
  let max = stack.peek();
  while (stack.peek() !== undefined) {
    if (stack.peek() <= max) {
      stack.pop();
    } else {
      max = stack.pop();
    }
  }
  return max;
}
