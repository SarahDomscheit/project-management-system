export class Person {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  getFullName() {
    return `${this.firstName}  ${this.lastName}`;
  }

  get initials() {
    const first = this.firstName.charAt(0);
    const last = this.lastName.charAt(0);
    return `${first}.${last}`;
  }
}
