/* exported removeTail */

function removeTail(list) {
  if (!list.next) return;

  let nextList = list.next;

  while (nextList) {
    if (nextList.next.next === null) {
      nextList.next = null;
    }
    nextList = nextList.next;
  }
}
