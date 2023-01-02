const Employee = require("./Employee");

class Engineer extends Employee {
    constructor(id, github) {
      super(id, name, email);
      this.github = github;
    }
  
    getGitHub() {
        return this.github;
    }

    getRole() {
        return "Engineer";
    }
  };

  module.exports = Engineer;