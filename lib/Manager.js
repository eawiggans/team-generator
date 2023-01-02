const Employee = require("./Employee");

class Manager extends Employee {
    constructor(id, officeNumber) {
      super(id, "manager", "manager@email.com");
      this.officeNumber = officeNumber;
    }
  
    getOfficeNumber() {
        return this.officeNumber;
    };

    getRole() {
        return "Manager"
    };
  }