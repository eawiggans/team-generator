const Employee = require("../lib/Employee");

describe("Employee", () => {
    describe("Initialization", () => {
        it("should return an object containing 'name', 'id', and 'email' properties when called with the 'new' keyword", () => {
            const obj = new Employee();

            expect("name" in obj).toEqual(true);
            expect("id" in obj).toEqual(true);
            expect("email" in obj).toEqual(true);
        });

        it("should set 'name', 'id', and 'email' when created", () => {
            const name = 'Sally';
            const id = 4;
            const email = "sally@mail.com";

            const obj = new Employee(name, id, email);

            expect(obj.name).toEqual(name);
            expect(obj.id).toEqual(id);
            expect(obj.email).toEqual(email);
        });
    });

    describe("getName", () => {
        it("should return this.name", () => {
            const name = 'Sally';
            const id = 4;
            const email = "sally@mail.com";
            const obj = new Employee(name, id, email)
            const herName = obj.getName()

            expect(herName).toEqual('Sally');
        });
    });
    describe("getId", () => {
        it("should return this.id", () => {
            const name = 'Sally';
            const id = 4;
            const email = "sally@mail.com";
            const obj = new Employee(name, id, email)
            const herId = obj.getId()

            expect(herId).toEqual(4);
        });
    });

    describe("getEmail", () => {
        it("should return this.email", () => {
            const name = 'Sally';
            const id = 4;
            const email = "sally@mail.com";
            const obj = new Employee(name, id, email)
            const herEmail = obj.getEmail()

            expect(herEmail).toEqual('sally@mail.com');
        });
    });

    describe("getRole", () => {
        it("should return 'Employee'", () => {
            const name = 'Sally';
            const id = 4;
            const email = "sally@mail.com";
            const obj = new Employee(name, id, email)
            const herRole = obj.getRole()

            expect(herRole).toEqual('Employee');
        });

    });
});