# Project Management System

An object-oriented project management system in JavaScript that manages employees, managers, and tasks.

## 📋 Project Structure

```
project-management-system/
├── package.json
├── README.md
└── src/
    ├── person.js         # Base class for persons
    ├── employee.js       # Employee class
    ├── manager.js        # Manager class
    ├── projectTask.js    # Task class
    └── main.js          # Main program with examples
```

## 🚀 Installation & Setup

```bash
# Clone the repository
git clone <repository-url>

# Navigate to project directory
cd project-management-system

# Install dependencies
npm install

# Start the project
npm start
```

## Class Structure

### Person

Base class for all persons in the system.

**Properties:**

- `firstName` - First name
- `lastName` - Last name

**Methods:**

- `getFullName()` - Returns full name
- `initials` (Getter) - Returns initials (e.g., "J.D.")

### Employee

Extends `Person` and represents an employee.

**Properties:**

- `id` (Getter) - Unique employee ID
- `salary` (Setter) - Salary (only increases allowed)
- `annualPay` (Getter) - Annual salary (default: 50,000)

**Constructor:**

```javascript
new Employee(firstName, lastName, employeeId);
```

### Manager

Extends `Employee` and adds project management functionality.

**Properties:**

- `projectCount` (Getter) - Number of managed projects

**Methods:**

- `assignProject(projectname)` - Assigns a new project

**Constructor:**

```javascript
new Manager(firstName, lastName, employeeId);
```

### ProjectTask

Manages project tasks with status tracking.

**Properties:**

- `description` - Task description
- `assignedTo` - Assigned employee
- `isDone` (Getter) - Returns `true` when task is completed

**Methods:**

- `markInProgress()` - Marks task as "In Progress"
- `completeTask()` - Marks task as "Completed"

**Status Cycle:**

- `Pending` → `InProgress` → `Completed`

### Usage Examples

```
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

```

## Security Features

- **Private Fields**: Salary, employee ID, and project list are protected with `#`
- **Validation**: Salary cannot be decreased
- **Required Fields**: Task description and assignment are mandatory

## Technologies

- JavaScript (ES6+)
- Node.js
- ES Modules

**Note**: This is a learning project for understanding Object orientied programming.
