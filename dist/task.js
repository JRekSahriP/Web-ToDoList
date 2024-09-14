export class task {
    constructor() {
        this.taskList = document.getElementById("TaskList");
        this.newTask = () => {
            let currentId = task.id;
            let distance = 20;
            let taskDiv = document.createElement("div");
            let inputText = this.createInputText();
            let deleteBtn = this.createDeleteButton(currentId);
            let checkBox = this.createCheckBox(currentId);
            let leftBtn = this.createMoveButton("left", currentId, -distance);
            let rightBtn = this.createMoveButton("right", currentId, distance);
            taskDiv.appendChild(leftBtn);
            taskDiv.appendChild(rightBtn);
            taskDiv.appendChild(checkBox);
            taskDiv.appendChild(inputText);
            taskDiv.appendChild(deleteBtn);
            taskDiv.className = "TaskItem";
            taskDiv.id = "task" + task.id;
            task.id++;
            this.taskList.appendChild(taskDiv);
        };
        this.deleteAllTasks = () => {
            this.taskList.innerHTML = "";
        };
        this.deleteTask = (taskId) => {
            let task = document.getElementById("task" + taskId);
            this.taskList.removeChild(task);
        };
        this.verifyCheckBox = (taskId) => {
            let checkBox = document.getElementById("check" + taskId);
            let taskText = document.getElementById("text" + taskId);
            taskText.style.textDecoration = (checkBox.checked) ? "line-through" : "none";
            taskText.readOnly = (checkBox.checked);
            taskText.style.cursor = (checkBox.checked) ? "default" : "text";
        };
        this.moveTask = (taskId, pixels) => {
            let task = document.getElementById("task" + taskId);
            let value = parseInt(task.style.marginLeft || "0", 10);
            value += (value + pixels >= 0 && value + pixels <= 40) ? pixels : 0;
            task.style.marginLeft = value + "px";
        };
        this.createInputText = () => {
            let element = document.createElement("input");
            element.type = "text";
            element.id = "text" + task.id;
            return element;
        };
        this.createDeleteButton = (id) => {
            let element = document.createElement("button");
            element.className = "fa-solid fa-xmark";
            element.addEventListener("click", () => this.deleteTask(id));
            return element;
        };
        this.createCheckBox = (id) => {
            let element = document.createElement("input");
            element.type = "checkbox";
            element.id = "check" + id;
            element.addEventListener("change", () => this.verifyCheckBox(id));
            return element;
        };
        this.createMoveButton = (direction, id, distance) => {
            let element = document.createElement("button");
            element.className = "fa-solid fa-caret-" + direction;
            element.addEventListener("click", () => this.moveTask(id, distance));
            return element;
        };
    }
}
task.id = 1;
//# sourceMappingURL=task.js.map