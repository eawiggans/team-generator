const inquirer = require("inquirer");

class Employee {
    // Save a reference for `this` in `this` as `this` will change inside of inquirer
    constructor() {
      this.name = "";
      this.id = "";
      this.email = "";
    }

    getName() {
        return this.name;
    }

    getId() {
        return this.id;
    }

    getEmail() {
        return this.email;
    }

    getRole() {
        return "Employee";
    }
  }

  module.export = Employee;