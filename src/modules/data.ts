import { View } from "./view";

export class Task {
  name: string;
  project: string;
  desc: string;
  date: string;
  priority: string;
  complete: boolean;
  constructor(name: string, project: string, desc: string, date: string, priority: string, complete: boolean) {
    this.name = name;
    this.project = project;
    this.desc = desc;
    this.date = date;
    this.priority = priority;
    this.complete = complete;
  }

  public setName(name: string) {
    this.name = name;
  }

  public setProject(project: string) {
    this.project = project;
  }

  public setDesc(desc: string) {
    this.desc = desc;
  }

  public setDate(date: string) {
    this.date = date;
  }

  public setPrio(priority: string) {
    this.priority = priority;
  }
  public getName() {
    return this.name;
  }
  
  public getProject() {
    return this.project;
  }
  public getDesc() {
    return this.desc;
  }
  public getDate() {
    return this.date;
  }
  public getPrio() {
    return this.priority;
  }

  public display() {
    console.log(this.name + " | " + this.project  + " | " + this.desc  + " | " + this.date  + " | " + this.priority + " Complete: " + this.complete);
  }
}

class Project {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  public setName(name: string) {
    this.name = name;
  }

  public getName() {
    return this.name;
  }
}


export class Data {


  constructor(message: string) {
    console.log(message);
  }

  displayText(message: string) {
    console.log(message);
  }
  
  handleTaskData(formData: FormData) {
    let name = formData.get('tname') + "";
    let project = formData.get('projects') + "";
    let desc = formData.get('tdesc') + "";
    let date = formData.get('tdate') + "";
    let prio = formData.get('tprio') + "";

    let newTask = new Task(name, project, desc, date, prio, false);
    localStorage.setItem(newTask.getName(), JSON.stringify(newTask));
    
  }

  completeTask(taskName: string) {
    //localStorage.
    let obj = localStorage.getItem(taskName);
    let jsonString = JSON.parse(obj);
    jsonString.complete = false;
    localStorage.removeItem(taskName);
    localStorage.setItem(taskName, JSON.stringify(jsonString));
  }

  deleteTask(taskName: string) {
    localStorage.removeItem(taskName);
  }

  displayTaskForm(formData: FormData) {
    for(const pair of formData.entries()){
      console.log(pair);
    }
  }


  public getProjects() {
    return 0;
  }

  static test() {
    console.log("Data");
  }
}