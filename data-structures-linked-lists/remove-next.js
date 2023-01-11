/* exported removeNext */

function removeNext(list) {
  if (list.next) {
    const nextList = list.next.next;
    list.next = nextList;
  }
}
