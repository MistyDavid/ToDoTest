function addTask() {
    var taskInput = document.getElementById("taskInput");
    var taskList = document.getElementById("taskList");

    if (taskInput.value === "") {
        alert("Please enter a task!");
        return;
    }

    var li = document.createElement("li");
    li.textContent = taskInput.value;
    li.onclick = function() {
        this.classList.toggle("completed");
    };

    var deleteButton = document.createElement("button");
    deleteButton.textContent = "❌";
    deleteButton.onclick = function() {
        this.parentElement.remove();
    };

    li.appendChild(deleteButton);
    taskList.appendChild(li);
    taskInput.value = "";
}
