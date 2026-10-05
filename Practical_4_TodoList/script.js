document.getElementById('addTaskBtn').addEventListener('click', function() {
    let taskInput = document.getElementById('taskInput');
    let taskText = taskInput.value.trim();
    if (taskText !== '') {
        addTask(taskText);
        taskInput.value = '';
    }
});

function addTask(taskText) {
    let taskList = document.getElementById('taskList');
    
    let li = document.createElement('li');
    
    let span = document.createElement('span');
    span.textContent = taskText;
    span.style.cursor = 'pointer';
    span.addEventListener('click', function() {
        li.classList.toggle('completed');
    });
    
    let deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';
    deleteBtn.className = 'delete-btn';
    deleteBtn.addEventListener('click', function() {
        taskList.removeChild(li);
    });
    
    li.appendChild(span);
    li.appendChild(deleteBtn);
    taskList.appendChild(li);
}
