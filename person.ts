export class Person {
  firstName: String;
  middleName: String;
  lastName: String;
  age: Number;

  constructor(message: String) {
    this.firstName = message;
    this.middleName = message;
    this.lastName = message;
  }
  getFullName() {
    return ' ' + this.firstName;
  }
  getBirthdayYear() {
    
  }
}
