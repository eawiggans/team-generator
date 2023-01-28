const Manager = require("../lib/Manager");

describe("Manager", () => {
    describe("Initialization", () => {
        it("should return an object containing 'name', 'id', 'email', and 'officNumber' properties when called with the 'new' keyword", () => {
            const obj = new Manager();

            expect("name" in obj).toEqual(true);
            expect("id" in obj).toEqual(true);
            expect("email" in obj).toEqual(true);
            expect("officeNumber" in obj).toEqual(true);
        });

        it("should set 'name', 'id', 'email', and 'officeNumber' when created", () => {
            const name = 'Sally';
            const id = 4;
            const email = "sally@mail.com";
            const officeNumber = 2;

            const obj = new Manager(name, id, email, officeNumber);

            expect(obj.name).toEqual(name);
            expect(obj.id).toEqual(id);
            expect(obj.email).toEqual(email);
            expect(obj.officeNumber).toEqual(officeNumber);
        });
    });

    describe("getOfficeNumber", () => {
        it("should return this.officeNumber", () => {
            const name = 'Sally';
            const id = 4;
            const email = "sally@mail.com";
            const officeNumber = 2;

            const obj = new Manager(name, id, email, officeNumber)
            const herOffice = obj.getOfficeNumber()

            expect(herOffice).toEqual(2);
        });
    });
    describe("getRole", () => {
        it("should return 'Manager'", () => {
            const name = 'Sally';
            const id = 4;
            const email = "sally@mail.com";
            const officeNumber = 2;

            const obj = new Manager(name, id, email, officeNumber)
            const herRole = obj.getRole()

            expect(herRole).toEqual('Manager');
        });

    });
});