import { differenceInCalendarWeeksWithOptions } from "date-fns/fp";
import { Data } from "./data";
import { View } from "./view";

export class DOMcontroller {

  data: Data;
  view: View;
  currentProject: string;
  constructor() { 
    console.log('construct');
    this.data = new Data('test');
    this.view = new View('test');
    this.currentProject = "general";
  }

  setupEventListeners() {
    console.log("setup create buttons");
    let taskbutton = document.getElementById('create-task');
    let taskexit = document.getElementById('task-form-exit');
    let tasksubmit = document.getElementById('task-submit');
    let taskform = document.getElementById('task-form');
    let taskcomplete = document.querySelectorAll(".task-complete");
    let taskdelete = document.querySelectorAll(".task-delete");

    console.log(taskcomplete);
    console.log(taskdelete);

    taskbutton.addEventListener('click', (e: Event) => this.openTaskForm());

    taskexit.addEventListener('click', (e: Event) => this.closeTaskForm());

    //tasksubmit.addEventListener('click', (e: Event) => this.submitTaskForm());

    taskform.addEventListener('submit', (e: Event) => this.submitTaskForm(e));

    taskcomplete.forEach((item) => {
      item.addEventListener('click', (e: Event) => this.completeTask(item));
    });

    taskdelete.forEach((item) => {
      item.addEventListener('click', (e: Event) => this.deleteTask(item));
    });
  }

  setupProjectTasks() {
    this.view.displayTasks("general");
    this.view.displayLocalStorage();
  }

  public completeTask(task: Element) {
    console.log("Completed task!");
    var x = task.parentElement.parentElement;
    var name = x.querySelector('h2').innerHTML;
    //console.log("name: " + name)
    this.data.completeTask(name);
    this.view.displayTasks(this.currentProject);
  }

  public deleteTask(task: Element) {
    console.log("checking");
    
    var x = task.parentElement.parentElement;
    var name = x.querySelector('h2').innerHTML;
    x.remove();
    //console.log("name: " + name)
    this.data.deleteTask(name);
    //this.view.displayTasks(this.currentProject);
  }
  
  public openTaskForm() {
    if(this.view)
      this.view.openElement('new-task-form');
  }

  public closeTaskForm() {
    if(this.view)
      this.view.closeElement('new-task-form');
  }

  public submitTaskForm(e: Event) {
    e.preventDefault();
    const form = document.forms[0];
    let formData = new FormData(form);
    this.data.handleTaskData(formData);
    this.closeTaskForm();
    form.reset();


    location.reload();
    //this.view.displayTasks(this.currentProject);
    //this.view.displayLocalStorage();
  }

  static test() {
    console.log("Controller");
  }
}
  
