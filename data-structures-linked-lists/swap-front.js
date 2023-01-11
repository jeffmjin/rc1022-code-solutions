/* exported swapFront */

function swapFront(list) {
  if (list.next) {
    const data = list.data;
    const nextData = list.next.data;
    list.data = nextData;
    list.next.data = data;
    return list;
  }

  if (!list.next) {
    return list;
  }
}
