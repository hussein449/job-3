
function addTask() {
    const taskInput = document.getElementById("task");
    const taskText = taskInput.value.trim();

    if (taskText !== "") {
        const taskList = document.getElementById("task-list");
        const listItem = document.createElement("li");
        listItem.innerHTML = `
            <span>${taskText}</span>
            <button onclick="removeTask(this)">Remove</button>
        `;
        taskList.appendChild(listItem);

        taskInput.value = "";
    }
}

function removeTask(button) {
    const taskList = document.getElementById("task-list");
    const listItem = button.parentElement;
    taskList.removeChild(listItem);
}
