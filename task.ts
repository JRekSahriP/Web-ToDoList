export class task {

    private taskList = document.getElementById("TaskList")!;
    private static id:number = 1;

    public newTask = ():void => {
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
        taskDiv.id="task"+task.id;
        task.id++;

        this.taskList.appendChild(taskDiv);
    }

    public deleteAllTasks = ():void => {
        this.taskList.innerHTML="";
    }

    private deleteTask = (taskId:number):void => {
        let task = document.getElementById("task"+taskId)!;
        this.taskList.removeChild(task);
    }

    private verifyCheckBox = (taskId:number):void => {
        let checkBox = <HTMLInputElement>document.getElementById("check"+taskId)!;
        let taskText = <HTMLInputElement>document.getElementById("text"+taskId)!;

        taskText.style.textDecoration = (checkBox.checked) ? "line-through" : "none";
        taskText.readOnly = (checkBox.checked);
        taskText.style.cursor = (checkBox.checked) ? "default" : "text"
    }

    private moveTask = (taskId:number, pixels:number):void => {
        let task = document.getElementById("task"+taskId)!;
        let value = parseInt(task.style.marginLeft || "0", 10);
        value += (value+pixels >= 0 && value+pixels <= 40) ? pixels : 0;
        task.style.marginLeft = value + "px";
    }


    private createInputText = ():HTMLInputElement => {
        let element = document.createElement("input")!;
        element.type = "text";
        element.id = "text"+task.id;
        return element;
    }

    private createDeleteButton = (id:number):HTMLButtonElement =>{
        let element = document.createElement("button")!;
        element.className = "fa-solid fa-xmark";
        element.addEventListener("click", ()=>this.deleteTask(id));
        return element;
    }

    private createCheckBox = (id:number):HTMLInputElement => {
        let element = document.createElement("input")!;
        element.type = "checkbox";
        element.id = "check"+id;
        element.addEventListener("change", ()=>this.verifyCheckBox(id));
        return element;
    }

    private createMoveButton = (direction:string, id:number, distance:number):HTMLButtonElement => {
        let element = document.createElement("button")!;
        element.className = "fa-solid fa-caret-"+direction;
        element.addEventListener("click", ()=>this.moveTask(id,distance));
        return element;
    }

}