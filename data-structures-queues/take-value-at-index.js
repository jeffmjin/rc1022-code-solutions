/* exported takeValueAtIndex */

function takeValueAtIndex(queue, index) {
  if (queue.peek() === undefined) return;

  let count = 0;
  while (count < index) {
    const front = queue.dequeue();
    queue.enqueue(front);
    count++;
  }
  return queue.dequeue();
}
