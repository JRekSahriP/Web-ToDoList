import {task} from './task.js';

const Task = new task();
document.getElementById("NewTaskBtn")!.addEventListener("click", Task.newTask);
document.getElementById("DeleteAllBtn")!.addEventListener("click", Task.deleteAllTasks);