export class ProjectTask {
  #status;
  constructor(description, assignedTo) {
    if (!description) throw new Error("description required");
    if (!assignedTo) throw new Error("assignedTo (Employee) required");

    this.description = description;
    this.assignedTo = assignedTo;
    this.#status = "Pending";
  }

  get isDone() {
    return this.#status === "Completed";
  }

  markInProgress() {
    this.#status = "InProgress";
  }

  completeTask() {
    this.#status = "Completed";
  }
}
