import { Employee } from "./employee.js";

export class Manager extends Employee {
  #projectsManaged = [""];
  constructor(firstName, lastName) {
    super(firstName, lastName);
  }
  assignProject(projectname) {
    this.#projectsManaged.push(projectname);
  }
  get projectCount() {
    return this.#projectsManaged.length;
  }
}
