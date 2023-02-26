import { Task } from './data';

export class View {

  constructor(message: string) {
    console.log(message);
  }

  displayText(element: string) {
    console.log(element);
  }

  closeElement(element: string) {
    let tempelement = document.getElementById(element);
    tempelement.classList.add('invisible');
  }

  openElement(element: string) {
    let tempelement = document.getElementById(element);
    tempelement.classList.remove('invisible');
  }

  public displayLog(log: string) {
    console.log(log);
  }

  public displayLocalStorage() {
    console.log(localStorage);
  }

  public displayTasks(project: string) {
    this.clearTaskLists();
    for (const [key, value] of Object.entries(localStorage)) {
      //console.log(key, value);
      var jsonString = localStorage.getItem(key);
      var obj = JSON.parse(jsonString);
      console.log("obj: " + obj);
      if(obj && obj.project == "General") {
        let task = new Task(obj.name, obj.project, obj.desc, obj.date, obj.priority, obj.complete);
        task.display();
        this.createTaskDiv(task);
      }
   }
  }

  public clearTaskLists() {
    //localStorage.clear();
    let taskslist = document.getElementById("tasks-lists");
    taskslist.textContent = '';
  }

  public createTaskDiv(task: Task) {
    let taskslist = document.getElementById("tasks-lists");
    //taskslist.textContent = '';

    var div = document.createElement('div');
    var paddingdiv = document.createElement('div');
    //paddingdiv.className = "py-2";
    div.appendChild(paddingdiv);
    
    var taskdiv = document.createElement('div');
    taskdiv.className = "w-full flex flex-row justify-around items-center rounded-md py-6 px-6 text-center gap-4";

    if(task.complete == true) {
      taskdiv.classList.add("bg-green-900");
    }
    if(task.priority == "Low") {
      taskdiv.classList.add("bg-green-400");
    }
    else if(task.priority == "Medium") {
      taskdiv.classList.add("bg-yellow-400");
    } else {
      taskdiv.classList.add("bg-red-400");
    }

    var h2div = document.createElement('h2');
    h2div.className = "basis-1/6";
    h2div.innerHTML = task.getName();

    var span = document.createElement('span');
    span.className = "basis-3/6";
    span.innerHTML = task.getDesc();

    var date = document.createElement('span');
    date.innerHTML = task.getDate();

    var complete = document.createElement('div');

    var completelabel = document.createElement('span');
    completelabel.innerHTML = "Complete";

    var completeinput = document.createElement('input');
    completeinput.className = "task-complete";
    completeinput.type = "checkbox";

    complete.appendChild(completelabel);
    complete.appendChild(completeinput);

    var del = document.createElement('div');

    var dellabel = document.createElement('span');
    dellabel.className = "shrink cursor-pointer task-delete";
    dellabel.innerHTML = "Delete";

    var delinput = document.createElement('i');
    delinput.className = "task-delete bi bi-trash px-4 cursor-pointer";

    del.appendChild(dellabel);
    del.appendChild(delinput);

    taskdiv.appendChild(h2div);
    taskdiv.appendChild(span);
    taskdiv.appendChild(date);
    taskdiv.appendChild(complete);
    taskdiv.appendChild(del);

    div.appendChild(taskdiv);

    taskslist.appendChild(div);


  }

  static test() {
    console.log("View");
  }

}