import { Person } from "./person.js";

export class Employee extends Person {
  #salary;
  #employeeId;
  constructor(firstName, lastName, employeeId) {
    super(firstName, lastName);
    this.#employeeId = String(employeeId);
    this.#salary = 50000;
  }
  get id() {
    return this.#employeeId;
  }
  set salary(newSalary) {
    if (newSalary < this.#salary) {
      console.error("Salary cannot be decreased");
    } else {
      this.#salary = newSalary;
    }
  }

  get annualPay() {
    return this.#salary;
  }
}
