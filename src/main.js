import { Employee } from "./employee.js";
import { Manager } from "./manager.js";
import { ProjectTask } from "./projectTask.js";

// 1. Instantiate Manager and Employee
const projectManager = new Manager("Lena", "Smith", "M901");
const developer = new Employee("Ben", "Carter", "E550");

// 2. Test Salary Setter (Validation)
projectManager.salary = 75000; // ✅ Valid (Current: 50000 -> New: 75000)
projectManager.salary = 70000; // ❌ Logs error, salary remains 75000.

// 3. Test Task Creation (Utility Class)
const task1 = new ProjectTask("Implement login feature", developer);
task1.markInProgress();

// 4. Test Getters/Inheritance
console.log(`Manager Initials: ${projectManager.initials}`); // L.S.
console.log(`Task Status: ${task1.isDone}`); // false
console.log(`Annual Pay: ${projectManager.annualPay}`); // 75000
