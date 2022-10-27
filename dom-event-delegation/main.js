var $mainTask = document.querySelector('.task-list');

$mainTask.addEventListener('click', handleClick);

function handleClick(event) {
  console.log('event.target:', event.target);
  console.log('event.target.tagName:', event.target.tagName);

  if (event.target.tagName === 'BUTTON') {
    var taskItem = event.target.closest('.task-list-item');
    console.log(taskItem);
    taskItem.remove();
  }
}
